import { useContext,createContext, ReactNode, useState, useCallback } from "react";
import { api } from "../services/api";
import { ContextAuthContextType, SignInMethodProps, UserType } from "../../shared/types";
import { useToastNotificaitonProvider } from "../contexts/toast-notification";



const ContextAuthContext = createContext<ContextAuthContextType>(
  {} as ContextAuthContextType
);

function ContextAuthContextProvider({children}:{children: ReactNode}){
  const [ user,setUser  ] = useState<UserType | null>(null);
  const [ sendResponseToServer,setSendResponseToServer  ] = useState(false);
  const { addToastNotifications } = useToastNotificaitonProvider();


  const signIn = useCallback(async ({email,password}:SignInMethodProps) => {
    setSendResponseToServer(true);
    try{
      const signInResponse = await api.post("/session/signin",{email,password})
      setUser(signInResponse.data);
    }catch(err){
      addToastNotifications({
        title:"error"
      });
    }finally{
      setSendResponseToServer(false);
    }
  },[])

  const signUp = useCallback(async (props: UserType) => {
    await api.post("/session/signup",{props})
  },[])

  return (
    <ContextAuthContext.Provider value={{
      user,
      signIn,
      signUp,
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