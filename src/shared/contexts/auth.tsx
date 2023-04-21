import { useContext,createContext, ReactNode, useState, useCallback } from "react";
import { api } from "../services/api";
import { ContextAuthContextType, SignInMethodProps, UserType,ToastContentType, SignUpProps } from "../../shared/types";
import { useToastNotificaitonProvider } from "../contexts/toast-notification";
import { useNotificationContextProvider } from "./notification-system";
import { v4 as uuidV4 } from "uuid";
import { useNavigation } from "@react-navigation/native";

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

const signInNotificationContentTypeUserDataUndefined: ToastContentType = {
  title:"error interno no servidor",
  description:"parece que tivemos um erro interno no servidor, estamos resolvendo o mais rapido possivel",
  position: "center",
  type:"error"
}

const signInNotificationContentTypeUserNotExistsOrIncorrectData: ToastContentType= {
  title:"email ou senha incorretos",
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


const signUpNotificationContentTypeCreateUserSucess: ToastContentType = {
  title:" perfil criado",
  description:"bem vindo a nossa plataforma",
  position: "center",
  type:"error"
}

const signUpNotificationContentTypeUsersDoesNotExists: ToastContentType = {
  title:"o usuario não existe",
  description:"parece que o usuario que você está tentando logar não existe",
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
  const { navigate }  = useNavigation();

  const signIn = useCallback(async ({email,password}:SignInMethodProps) => {
    setSendResponseToServer(true);
    try{
      const signInDataResponse = await api.post("/session/signin",{email,password})
      console.log({signInDataResponse});

      if(!signInDataResponse.data){
        throw new Error("data is undefined")
      }

      if(signInDataResponse.status === 422){
        addToastNotifications(signInNotificationContentTypeUserNotExistsOrIncorrectData);
      }

      
      if(signInDataResponse.status === 404){
        addToastNotifications(signInNotificationContentTypeUserDataUndefined);
      }

      if(signInDataResponse.statusText === "Network Error"){
        addToastNotifications(signInNotificationContentTypeServerError);
      }
  
      setUser(signInDataResponse.data);

    }catch(err){
      const error = err as unknown as { code: string }

      addToastNotifications(signInNotificationContentTypeNetworkError);
      if(error.code === "ERR_BAD_REQUEST"){
        addToastNotifications({
          title:"error",
          description: "usuario não encontrado, verifique seus dados e tente novamente",
          type: "error",
        }); 
      }
    }finally{
      setSendResponseToServer(false);
    }
  },[user,setUser,api])

  const signUp = useCallback(async (props: SignUpProps) => {
    setSendResponseToServer(true)
    try{
      const signInDataResponse = await api.post("/session/signup",{...props})
      if(signInDataResponse.statusText === "Network Error"){
        addToastNotifications(signUpNotificationContentTypeServerError); 
      }

      if(signInDataResponse.status === 201){
        navigate("signin")
        addToastNotifications(signUpNotificationContentTypeCreateUserSucess); 
      }
    }catch(err){
      console.log("auth-network-error")
      addToastNotifications(signUpNotificationContentTypeNetworkError); 
    }finally{
      setSendResponseToServer(false)
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