import { ReactNode } from "react";
import { AuthStepsContextProvider } from '../../modules/session/contexts/auth-steps';
import { ToastNotificaitonProvider } from './toast-notification';
import { NotificationContextProvider } from "./notification";
import { OpenAndCloseNavbarOnKeyPressContextProvider } from "./open-and-close-navbar-on-key-press";
import { ContextAuthContextProvider } from "./auth";


export function AppProvider({children}:{children:ReactNode}){
  return(
    <NotificationContextProvider>
      <OpenAndCloseNavbarOnKeyPressContextProvider>
        <ContextAuthContextProvider>
          <ToastNotificaitonProvider>
            {children}
          </ToastNotificaitonProvider>
        </ContextAuthContextProvider>
      </OpenAndCloseNavbarOnKeyPressContextProvider>
    </NotificationContextProvider>
  )
}