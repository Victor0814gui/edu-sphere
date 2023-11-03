import { ReactNode, useEffect } from "react";
import { NotificationContextProvider } from "./notification-system";
import { OpenAndCloseNavbarOnKeyPressContextProvider } from "./open-and-close-navbar-on-key-press";
import { ContextAuthContextProvider } from "./auth";
// import { ToastNotificationProvider, useToastNotificationProvider } from './toast-notification';
// import NetInfo from "@react-native-community/netinfo";


export function AppProvider({
  children
}: { children: ReactNode }) {
  // const { addToastNotifications } = useToastNotificationProvider()

  // useEffect(() => {
  //   const unsubscribe = NetInfo.addEventListener(state => {
  //     if (!state.isConnected) {
  //       addToastNotifications({
  //         mode: "permanent",
  //         title: "Você está off-line",
  //         type: "warning",
  //       })
  //     } else {
  //       addToastNotifications({
  //         mode: "temporary",
  //         title: "Você está on-line",
  //         type: "success",
  //       })
  //     }
  //   });

  //   return () => unsubscribe();
  // }, [])
  return (
    <NotificationContextProvider>
      <ContextAuthContextProvider>
        {children}
      </ContextAuthContextProvider>
    </NotificationContextProvider>
  )
}