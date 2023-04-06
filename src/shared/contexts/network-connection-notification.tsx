import { 
  useState,
  useEffect,
  useContext,
  createContext,
  ReactNode,
} from "react";
import NetInfo from "@react-native-community/netinfo";

type NetworkConnectionNotificationContextType = {
  details: any;
  ipAddress: string;
  isConnected: boolean;
  isInternetReachable: boolean;
  type: string;
}

const NetworkConnectionNotificationContext = createContext(
  {} as NetworkConnectionNotificationContextType
);


const NetworkConnectionNotificationContextProvider = ({
  children,
}:{children: ReactNode}) => {
  const [ networkInfo,setNetworkInfo ] = useState(
    {} as NetworkConnectionNotificationContextType
  );

  const unsubscribe = NetInfo.addEventListener(state => {
    // console.log(state.details)

    if(state.isConnected !== networkInfo.isConnected){
      setNetworkInfo({
        details: networkInfo.details,
        ipAddress: networkInfo.ipAddress,
        isConnected: networkInfo.isConnected,
        isInternetReachable: networkInfo.isInternetReachable,
        type: networkInfo.type,
      })
    }
  });



  useEffect(() => {
    // Unsubscribe
    unsubscribe()
  },[])
  

  return (
    <NetworkConnectionNotificationContext.Provider value={{
      details: networkInfo.details,
      ipAddress: networkInfo.ipAddress,
      isConnected: networkInfo.isConnected,
      isInternetReachable: networkInfo.isInternetReachable,
      type: networkInfo.type,
    }}>
      {children}
    </NetworkConnectionNotificationContext.Provider>
  )
}

const useNetworkConnectionNotificationContextProvider = () => {
  const networkConnectionNotificationContextProviderExists = 
    useContext(NetworkConnectionNotificationContext);

  if(!networkConnectionNotificationContextProviderExists){
    throw new Error('[useNetworkConnectionNotificationContextProvider] not defined')
  }
  return networkConnectionNotificationContextProviderExists
}

export {
  useNetworkConnectionNotificationContextProvider,
  NetworkConnectionNotificationContextProvider,
}