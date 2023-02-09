import { ReactNode } from "react";
import { AuthStepsContextProvider } from '../../modules/session/contexts/auth-steps';
import { ToastNotificaitonProvider } from './toast-notification';


export function AppProvider({children}:{children:ReactNode}){
  return(
    <ToastNotificaitonProvider>
      <AuthStepsContextProvider>
        {children}
      </AuthStepsContextProvider>
    </ToastNotificaitonProvider>
  )
}