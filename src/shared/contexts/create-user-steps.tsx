import { useState,createContext,useContext,ReactNode } from "react";

type UsersType = {
  name: string | null;
  birthday: string | null;
  email?: string | null;
  password?: string;
  avatarUrl: string;
}

type CreateUserStepsContextType = {
  userData: UsersType;
  setUserData: (state: UsersType) => void;
}

const CreateUserStepsContext = createContext<CreateUserStepsContextType>({} as CreateUserStepsContextType);

const CreateUserStepsContextProvider = (props: {children: ReactNode}) => {
  const [ userData,setUserData ] = useState({} as UsersType);

  return(
    <CreateUserStepsContext.Provider
      value={{
        userData,
        setUserData,
      }}
    >
      {props.children}
    </CreateUserStepsContext.Provider>
  )
}

const useCreateUserStepsContextProvider = () => {
  const contextAlreadyExists = useContext(CreateUserStepsContext);
  if(!contextAlreadyExists){
    throw new Error("[CreateUserStepsContext]")
  }
  return contextAlreadyExists;
}

export {
  CreateUserStepsContextProvider,
  useCreateUserStepsContextProvider,
}