import { useContext, createContext, ReactNode, useState, useCallback, useEffect } from "react";
import { ContextAuthContextType, SignInMethodProps, UserType, SignUpProps } from "../../types";
import { useToastNotificaitonProvider } from "../toast-notification";
import { useNavigation } from "@react-navigation/native";
import { api } from "../../services/api";
import { AxiosError } from "axios";
import RNSInfo from 'react-native-sensitive-info';
import {
  signInNotificationContentTypeServerError,
  signInNotificationContentTypeNetworkError,
  signInNotificationContentTypeUserDataUndefined,
  signInNotificationContentTypeUserNotExistsOrIncorrectData,
  signUpNotificationContentTypeServerError,
  signUpNotificationContentTypeCreateUserSucess,
  signUpNotificationContentTypeNetworkError,
  AppAuthenticatoinKeyValue,
  sharedStorageFreferencies,
} from "./constants";

const ContextAuthContext = createContext<ContextAuthContextType>(
  {} as ContextAuthContextType
);

function ContextAuthContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserType | null>(null);
  const [sendResponseToServer, setSendResponseToServer] = useState(false);
  const { addToastNotifications } = useToastNotificaitonProvider();
  const { navigate } = useNavigation();


  const setItem = async (data:string) => {
    return RNSInfo.setItem(
      AppAuthenticatoinKeyValue,
      data,
      sharedStorageFreferencies
    )
  }

  const getItem = async () => {
    return await RNSInfo.getItem(
      AppAuthenticatoinKeyValue, 
      sharedStorageFreferencies
    );
  }

  const signIn = useCallback(async ({ email, password }: SignInMethodProps) => {
    setSendResponseToServer(true);
    try {
      const signInDataResponse = await api.post("/session/signin", { email, password })
      console.log({ signInDataResponse });

      if (!signInDataResponse.data) {
        throw new Error("data is undefined")
      }

      if (signInDataResponse.status === 422) {
        addToastNotifications(signInNotificationContentTypeUserNotExistsOrIncorrectData);
      }

      if (signInDataResponse.status === 404) {
        addToastNotifications(signInNotificationContentTypeUserDataUndefined);
      }

      if (signInDataResponse.statusText === "Network Error") {
        addToastNotifications(signInNotificationContentTypeServerError);
      }

      setUser(signInDataResponse.data);
      if (!!signInDataResponse.data) {
        const signInDataResponseSerializationData = JSON.stringify(signInDataResponse.data);
        await setItem(signInDataResponseSerializationData)
      }

    } catch (err) {
      const error = err as unknown as { code: string }

      if (error.code === "ERR_BAD_REQUEST") {
        addToastNotifications({
          title: "error",
          description: "usuario não encontrado, verifique seus dados e tente novamente",
          type: "error",
        });
      }

      if (error instanceof AxiosError) {
      } 

      addToastNotifications(signInNotificationContentTypeNetworkError);
    } finally {
      setSendResponseToServer(false);
    }
  }, [user, setUser, api])

  const signUp = useCallback(async (props: SignUpProps) => {
    setSendResponseToServer(true)
    try {
      const signInDataResponse = await api.post("/session/signup", { ...props })
      if (signInDataResponse.statusText === "Network Error") {
        addToastNotifications(signUpNotificationContentTypeServerError);
      }

      if (signInDataResponse.status === 201) {
        navigate("signin")
        addToastNotifications(signUpNotificationContentTypeCreateUserSucess);
      }
    } catch (err) {
      console.log("auth-network-error")
      addToastNotifications(signUpNotificationContentTypeNetworkError);
    } finally {
      setSendResponseToServer(false)
    }
  }, [])

  const signOut = useCallback(async () => {
    setUser(null)
    await RNSInfo.deleteItem(
      AppAuthenticatoinKeyValue, 
      sharedStorageFreferencies
    );
  }, [])

  const getUserDataStorage = async () => {
    try{
      const userDataStorageResponse = await getItem();
      const userDataStorageResponseParseData = JSON.parse(userDataStorageResponse) as UserType;

      setUser(userDataStorageResponseParseData);
    }catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    getUserDataStorage();
    console.log("jasljkdhflkajshdf")
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
  if (!authContextExists) {
    throw new Error('o [ContextAuthContext] context não foi instanciado no escopo')
  }
  return authContextExists;
}

export {
  ContextAuthContextProvider,
  useAuthContextProvider,
};