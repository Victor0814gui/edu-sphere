import {
  useState,
  useContext,
  createContext,
  ReactNode,
  useEffect,
} from "react";

import { NativeModules } from "react-native";


type ContextNotificationProviderType = {
  // notificationText: string;
  setNotificationText: (state: string) => void;
}



const NotificationContext = createContext<ContextNotificationProviderType>(
  {} as ContextNotificationProviderType
);

const NotificationContextProvider = ({children}:{children: ReactNode}) => {
  const [ notificationText,setNotificationText ] = useState('');



  // useEffect(() => {
  //   NativeModules.Notifications.raise({
  //     template: 0,
  //     text: "Notificações windows",
  //     image: {
  //       src: "http://localhost:4000/Multiavatar-Aphex-Maiden.png",
  //       alt: "React logo",
  //     },
  //   });
  // },[notificationText])

  return(
    <NotificationContext.Provider value={{
      // notificationText,
      setNotificationText,
    }}>
      {children}
    </NotificationContext.Provider>
  )
}

function useNotificationContextProvider(){
  const contextAlreadyExiste = useContext(NotificationContext);

  if(!contextAlreadyExiste){
    throw new Error('o [contextAlreadyExiste] context não foi instanciado no escopo')

  }
  return contextAlreadyExiste;
}

export { 
  NotificationContextProvider,
  useNotificationContextProvider
}