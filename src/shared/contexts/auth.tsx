import { useContext,createContext, ReactNode, useState, useCallback } from "react";
import { api } from "../services/api";
import { ContextAuthContextType, SignInMethodProps, UserType,ToastContentType } from "../../shared/types";
import { useToastNotificaitonProvider } from "../contexts/toast-notification";
import { useNotificationContextProvider } from "../contexts/notification";
import { v4 as uuidV4 } from "uuid";

const signInNotificationContentTypeServerError: ToastContentType = {
  title:"error ao conectar com o servidor",
  description:"asdfasdf",
  position: "center",
  type:"error"
}
const signInNotificationContentTypeNetworkError: ToastContentType = {
  title:"error ao conectar com o servidor",
  description:"asdfasdf",
  position: "center",
  type:"error"
}

const signUpNotificationContentTypeServerError: ToastContentType = {
  title:"error ao conectar com o servidor",
  description:"asdfasdf",
  position: "center",
  type:"error"
}
const signUpNotificationContentTypeNetworkError: ToastContentType = {
  title:"error ao conectar com o servidor",
  description:"asdfasdf",
  position: "center",
  type:"error"
}

const ContextAuthContext = createContext<ContextAuthContextType>(
  {} as ContextAuthContextType
);

function ContextAuthContextProvider({children}:{children: ReactNode}){
  const [ user,setUser  ] = useState<UserType | null>(null);
  const [ sendResponseToServer,setSendResponseToServer  ] = useState(false);
  const { addToastNotifications } = useToastNotificaitonProvider();
  const { setNotificationText } = useNotificationContextProvider()

  const signIn = useCallback(async ({email,password}:SignInMethodProps) => {
    setSendResponseToServer(true);
    try{
      const signInDataResponse = await api.post("/session/signin",{email,password})
      if(signInDataResponse.statusText === "Network Error"){
        addToastNotifications(signInNotificationContentTypeServerError);
      }
      setUser(signInDataResponse.data);
    }catch(err){
      console.log("auth-network-error")
      // setNotificationText(uuidV4())
      addToastNotifications(signInNotificationContentTypeNetworkError); 
    }finally{
      setSendResponseToServer(false);
    }
  },[])

  const signUp = useCallback(async (props: UserType) => {
    try{
      const signInDataResponse = await api.post("/session/signup",{props})
      if(signInDataResponse.statusText === "Network Error"){
        addToastNotifications(signUpNotificationContentTypeServerError); 
      }
    }catch(err){
      console.log("auth-network-error")
      addToastNotifications(signUpNotificationContentTypeNetworkError); 
    }
  },[])

  const signOut = useCallback(() => {
    setUser(null)
  },[])

  return (
    <ContextAuthContext.Provider value={{
      user,
      signIn,
      signUp,
      signOut,
      sendResponseToServer,
    }}>
      {children}
    </ContextAuthContext.Provider>
  )
}

const useAuthContextProvider = (): ContextAuthContextType => {
  const authContextExists = useContext(ContextAuthContext);

  if(!authContextExists){
    throw new Error('o [ContextAuthContext] context não foi instanciado no escopo')

  }
  return authContextExists;
}

export {
  ContextAuthContextProvider,
  useAuthContextProvider,
};