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
  signInNotificationContentTypeUserNotExists,
} from "./constants";

const ContextAuthContext = createContext<ContextAuthContextType>(
  {} as ContextAuthContextType
);

function ContextAuthContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserType | null>(null);
  const [sendResponseToServer, setSendResponseToServer] = useState(false);
  const { addToastNotifications } = useToastNotificaitonProvider();
  const { navigate } = useNavigation();


  const setItem = async (data: string) => {
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

      setUser(signInDataResponse.data);
      if (!!signInDataResponse.data) {
        const signInDataResponseSerializationData = JSON.stringify(signInDataResponse.data);
        await setItem(signInDataResponseSerializationData)
      }

    } catch (err) {
      const error = err as unknown as { code: string }

      console.log(err)
      if (err instanceof AxiosError) {
        console.log(err)
        if (err.code === "ERR_NETWORK") {
          addToastNotifications(signInNotificationContentTypeNetworkError);
        }

        if (err.response.data.message.code === 422) {
          addToastNotifications(signInNotificationContentTypeUserNotExistsOrIncorrectData);
        }

        if (err.response.data.message.code === 404) {
          addToastNotifications(signInNotificationContentTypeUserNotExists);
        }
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
    try {
      const userDataStorageResponse = await getItem();
      const userDataStorageResponseParseData = JSON.parse(userDataStorageResponse) as UserType;

      setUser(userDataStorageResponseParseData);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getUserDataStorage();
    console.log("jasljkdhflkajshdf")
  }, [])

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