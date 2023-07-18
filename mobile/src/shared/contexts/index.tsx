import { ReactNode, useEffect } from "react";
import { ToastNotificaitonProvider, useToastNotificaitonProvider } from './toast-notification';
import { NotificationContextProvider } from "./notification-system";
import { OpenAndCloseNavbarOnKeyPressContextProvider } from "./open-and-close-navbar-on-key-press";
import { ContextAuthContextProvider } from "./auth";
import NetInfo from "@react-native-community/netinfo";


export function AppProvider({
  children
}: { children: ReactNode }) {
  const { addToastNotifications } = useToastNotificaitonProvider()

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      if (!state.isConnected) {
        addToastNotifications({
          mode: "permanent",
          title: "Você está off-line",
          type: "warning",
        })
      } else {
        addToastNotifications({
          mode: "temporary",
          title: "Você está on-line",
          type: "sucess",
        })
      }
    });

    return () => unsubscribe();
  }, [])
  return (
    <NotificationContextProvider>
      <OpenAndCloseNavbarOnKeyPressContextProvider>
        <ContextAuthContextProvider>
          {children}
        </ContextAuthContextProvider>
      </OpenAndCloseNavbarOnKeyPressContextProvider>
    </NotificationContextProvider>
  )
}