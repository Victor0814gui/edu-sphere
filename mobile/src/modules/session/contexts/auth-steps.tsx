import { useState,ReactNode } from "react";
import { createContext,useContext } from "react";


type AuthStepsContextType = {
  step: number;
  setStep:(state: number) => void;
}

const AuthStepsContext = createContext<AuthStepsContextType>({} as AuthStepsContextType);

const AuthStepsContextProvider = ({children}:{children: ReactNode}) => {

  const [ step,setStep ] = useState<number>(1);

  return(
    <AuthStepsContext.Provider value={{
      step,
      setStep,
    }}>
      {children}
    </AuthStepsContext.Provider>
  )
}

const useAuthStepsContextProvider = (): AuthStepsContextType => {
  const contextExists = useContext(AuthStepsContext);
  if(!contextExists){
    throw new Error('o context não está definido no escopo')
  }
  return contextExists;
}

export { AuthStepsContextProvider, useAuthStepsContextProvider};