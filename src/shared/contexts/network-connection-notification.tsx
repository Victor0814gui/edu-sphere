import {
  useState,
  useEffect,
  useContext,
  createContext,
  ReactNode,
} from "react";
import NetInfo from "@react-native-community/netinfo";

type NetworkConnectionNotificationContextType = {}

const NetworkConnectionNotificationContext = createContext(
  {} as NetworkConnectionNotificationContextType
);


const NetworkConnectionNotificationContextProvider = ({
  children,
}: { children: ReactNode }) => {
  const [networkInfo, setNetworkInfo] = useState(
    {} as NetworkConnectionNotificationContextType
  );

  const unsubscribe = NetInfo.addEventListener(state => {
    // console.log(state.details)

    state


  });



  useEffect(() => {
    // Unsubscribe
    unsubscribe()
  }, [])


  return (
    <NetworkConnectionNotificationContext.Provider value={{}}>
      {children}
    </NetworkConnectionNotificationContext.Provider>
  )
}

const useNetworkConnectionNotificationContextProvider = () => {
  const networkConnectionNotificationContextProviderExists =
    useContext(NetworkConnectionNotificationContext);

  if (!networkConnectionNotificationContextProviderExists) {
    throw new Error('[useNetworkConnectionNotificationContextProvider] not defined')
  }
  return networkConnectionNotificationContextProviderExists
}

export {
  useNetworkConnectionNotificationContextProvider,
  NetworkConnectionNotificationContextProvider,
}