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
  const [ clientNetworkConnected,setClientNetworkConnected ] = useState(false);
  const [ networkInfo,setNetworkInfo ] = useState(
    {} as NetworkConnectionNotificationContextType
  );
  
  useEffect(() => {
    // Subscribe
    const unsubscribe = NetInfo.addEventListener(state => {
      console.log(state.details)
      setNetworkInfo({
        details: networkInfo.details,
        ipAddress: networkInfo.ipAddress,
        isConnected: networkInfo.isConnected,
        isInternetReachable: networkInfo.isInternetReachable,
        type: networkInfo.type,
      })
      setClientNetworkConnected(state.isConnected!)
    });

    // Unsubscribe
    return () => unsubscribe();
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