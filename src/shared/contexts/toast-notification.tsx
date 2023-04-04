import { useState, useCallback, ReactNode, createContext,useContext } from "react";
import { ToastComponent } from "../components/toast-component";
import { v4 as uuidV4 } from "uuid";
import { ToastContentType, ToastNotificaitonContextType } from "../../shared/types";


const ToastNotificaitonContext = createContext<ToastNotificaitonContextType>(
  {} as ToastNotificaitonContextType
);

const ToastNotificaitonProvider = ({children}:{children: ReactNode}) => {
  const [ toastNotifications,setToastNotifications ] = useState<ToastContentType[]>([])

  const addToastNotifications = useCallback((props:ToastContentType) => {
    props.id = uuidV4();
    setToastNotifications([...toastNotifications,props]);
  },[])

  const removeToastNotication = useCallback((id: string) => {
    setToastNotifications(state => state.filter((item) => item.id !== id ));
  },[])

  return(
    <ToastNotificaitonContext.Provider value={{
      toastNotifications,
      addToastNotifications,
      removeToastNotication,
    }}> 
      {children}
      <ToastComponent/>
    </ToastNotificaitonContext.Provider>
  )
}

function useToastNotificaitonProvider(){
  const toastContextExists = useContext(ToastNotificaitonContext);
  if(!toastContextExists){
    throw new Error('o [ToastNotificaitonContext] context não foi instanciado no escopo')
  }
  return toastContextExists;
}

export type {
  ToastContentType,
}

export {
  ToastNotificaitonProvider,
  useToastNotificaitonProvider,
}
