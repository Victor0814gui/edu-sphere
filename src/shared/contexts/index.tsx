import { ReactNode } from "react";
import { ToastNotificaitonProvider } from './toast-notification';
import { NotificationContextProvider } from "./notification-system";
import { OpenAndCloseNavbarOnKeyPressContextProvider } from "./open-and-close-navbar-on-key-press";
import { ContextAuthContextProvider } from "./auth";


export function AppProvider({children}:{children:ReactNode}){
  return(
    <NotificationContextProvider>
      <OpenAndCloseNavbarOnKeyPressContextProvider>
        <ToastNotificaitonProvider>
          <ContextAuthContextProvider>
            {children}
          </ContextAuthContextProvider>
        </ToastNotificaitonProvider>
      </OpenAndCloseNavbarOnKeyPressContextProvider>
    </NotificationContextProvider>
  )
}