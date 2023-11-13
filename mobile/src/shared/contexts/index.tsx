import { ReactNode, useEffect } from "react";
import { NotificationContextProvider } from "./notification-system";
import { OpenAndCloseNavbarOnKeyPressContextProvider } from "./open-and-close-navbar-on-key-press";
import { ContextAuthContextProvider } from "./auth";
import { ToastNotificationProvider } from "./toast-notification";
// import { ToastNotificationProvider, useToastNotificationProvider } from './toast-notification';
// import NetInfo from "@react-native-community/netinfo";


export function AppProvider({
  children
}: { children: ReactNode }) {
  return (
    <ToastNotificationProvider>
      <ContextAuthContextProvider>
        {children}
      </ContextAuthContextProvider>
    </ToastNotificationProvider>
  )
}