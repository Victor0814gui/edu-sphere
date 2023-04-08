import {
  useState,
  useContext,
  createContext,
  ReactNode,
  useEffect,
} from "react";

import { NativeModules, TurboModuleRegistry } from "react-native";


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
  //     text: "Notificações windows  asd fkajsdfjka sdfa sdf a sdf a sdf as df asd f as df asd f asdf as df asd f asdf as df asd fa sdf asd fa sdf a sdf" ,

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