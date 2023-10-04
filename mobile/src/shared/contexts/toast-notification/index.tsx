import { useState, useCallback, ReactNode, createContext, useContext } from "react";
import { ToastComponent } from "../../components/toast-component";
import { ToastContentType, ToastNotificationContextType } from "../../../shared/types";
import { generateId } from "../../services/generateId";


const ToastNotificationContext = createContext<ToastNotificationContextType>(
  {} as ToastNotificationContextType
);

const ToastNotificationProvider = ({ children }: { children: ReactNode }) => {
  const [toastNotifications, setToastNotifications] = useState<ToastContentType[]>([])

  const addToastNotifications = useCallback((props: ToastContentType) => {
    props.id = generateId();
    setToastNotifications([...toastNotifications, props]);
  }, [])

  const removeToastNotification = useCallback(async (id: string) => {
    try {
      setToastNotifications(await toastNotifications.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err)
    }
  }, [])

  return (
    <ToastNotificationContext.Provider value={{
      toastNotifications,
      addToastNotifications,
      removeToastNotification,
    }}>
      {children}
      <ToastComponent />
    </ToastNotificationContext.Provider>
  )
}

function useToastNotificationProvider() {
  const toastContextExists = useContext(ToastNotificationContext);
  if (!toastContextExists) {
    throw new Error('o [ToastNotificationContext] context não foi instanciado no escopo')
  }
  return toastContextExists;
}

export type {
  ToastContentType,
}

export {
  ToastNotificationProvider,
  useToastNotificationProvider,
}
