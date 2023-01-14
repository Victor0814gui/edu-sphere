import {
  createContext,
  useContext,
  useState
} from "react";

import { NativeModules } from "react-native";


type ContextNotificationProviderType = {
  notificationText: string;
  setNotificationText: (state: string) => void;
}

const ContextNotificationProvider = createContext<ContextNotificationProviderType>(
  {} as ContextNotificationProviderType
);

function NotificationProvider(){
  const [ notificationText,setNotificationText ] = useState('');

  NativeModules.Notifications.raise({
    template: 0,
    text: "Notificações windows",
    image: {
      src: "https://microsoft.github.io/react-native-windows/img/header_logo.svg",
      alt: "React logo",
    },
  });

  return(
    <ContextNotificationProvider.Provider value={{
      notificationText,
      setNotificationText,
    }}>

    </ContextNotificationProvider.Provider>
  )
}

function useNotificationContext(){
  const contextAlreadyExiste = useContext(ContextNotificationProvider);

  if(!contextAlreadyExiste){
    throw new Error('o [contextAlreadyExiste] context não foi instanciado no escopo')

  }
  return contextAlreadyExiste;
}

export { NotificationProvider }