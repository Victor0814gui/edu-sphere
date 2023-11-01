import { useContext, createContext, ReactNode, useState, useCallback, useEffect } from "react";
import { ContextAuthContextType, SignInMethodProps, UserType, SignUpProps } from "../../types";
import { useToastNotificationProvider } from "../toast-notification";
import { useNavigation } from "@react-navigation/native";
import { api } from "../../services/api";
import { AxiosError } from "axios";
import RNSInfo from 'react-native-sensitive-info';
import { ICreateCustomerAccountContract } from "../../../../../contracts/customer/create-customer-account-contract";

import {
  signInNotificationContentTypeServerError,
  signInNotificationContentTypeNetworkError,
  signInNotificationContentTypeUserDataUndefined,
  signInNotificationContentTypeUserNotExistsOrIncorrectData,
  signUpNotificationContentTypeServerError,
  signUpNotificationContentTypeCreateUserSuccess,
  signUpNotificationContentTypeNetworkError,
  AppAuthenticatoinKeyValue,
  sharedStorageFreferencies,
  signInNotificationContentTypeUserNotExists,
  authorizationAccountNotification,
} from "./constants";
import { titleBar } from "react-native-custom-window";

type ErrorMessageType = {
  data: {
    message: {
      code: number
    }
  }
}

const ContextAuthContext = createContext<ContextAuthContextType>(
  {} as ContextAuthContextType
);

function ContextAuthContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserType | null>(null);
  const [sendResponseToServer, setSendResponseToServer] = useState(false);
  const [loadingLocalData, setLoadingLocalData] = useState(false);
  const { addToastNotifications } = useToastNotificationProvider();
  const { navigate } = useNavigation();


  const setItem = useCallback(async (data: string) => {
    try {
      return RNSInfo.setItem(
        AppAuthenticatoinKeyValue,
        data,
        sharedStorageFreferencies
      )
    } catch (err) {
      console.log();
    }
  }, [])

  const getItem = useCallback(async () => {
    try {
      return await RNSInfo.getItem(
        AppAuthenticatoinKeyValue,
        sharedStorageFreferencies
      );
    } catch (err) {
      console.log();
    }
  }, [])

  const signIn = useCallback(async ({ email, password }: SignInMethodProps) => {
    setSendResponseToServer(true);
    try {
      const signInDataResponse = await api.post("/customer/signin", { email, password })

      console.log(signInDataResponse.data)
      if (!!signInDataResponse.data) {
        setUser(signInDataResponse.data);
        const signInDataResponseSerializationData = JSON.stringify(signInDataResponse.data);
        await setItem(signInDataResponseSerializationData)
      }

      // addToastNotifications(signInNotificationContentTypeNetworkError);
      addToastNotifications(signInNotificationContentTypeUserNotExists);

    } catch (err) {
      console.log(err)
      if (err instanceof AxiosError) {
        err.response as ErrorMessageType;

        if (err.code === "ERR_BAD_REQUEST") {
          addToastNotifications(signInNotificationContentTypeUserNotExists);
        }

        if (err.code === "ERR_NETWORK") {
          addToastNotifications(signInNotificationContentTypeNetworkError);
        }

        if (err.response!.data.message.code === 422) {
          addToastNotifications(signInNotificationContentTypeUserNotExistsOrIncorrectData);
        }

        if (err.code === "ERR_BAD_RESPONSE") {
          addToastNotifications(signInNotificationContentTypeUserNotExistsOrIncorrectData);
        }

      }

      addToastNotifications(signInNotificationContentTypeNetworkError);
    } finally {
      setSendResponseToServer(false);
    }
  }, [user?.id])

  const signUp = useCallback(async (props: ICreateCustomerAccountContract) => {
    try {
      setSendResponseToServer(true)
      const signInDataResponse = await api.post("/customer/signup", props)
      if (signInDataResponse.statusText === "Network Error") {
        addToastNotifications(signUpNotificationContentTypeServerError);
      }
      console.log(signInDataResponse)

      if (signInDataResponse.status === 201) {
        navigate("authorization")
        addToastNotifications(signUpNotificationContentTypeCreateUserSuccess);
      }
    } catch (err) {
      console.log("auth-network-error")
      addToastNotifications(signUpNotificationContentTypeNetworkError);
    } finally {
      setSendResponseToServer(false)
    }
  }, []);


  const authorization = useCallback(async (props: any) => {
    try {
      setSendResponseToServer(true);
      const signInDataResponse = await api.post("/customer/authorization", props)
      if (signInDataResponse.status === 200) {
        addToastNotifications(authorizationAccountNotification);
        navigate("signin")
      }
    } catch (err) {
      addToastNotifications(signUpNotificationContentTypeServerError);
    } finally {
      setSendResponseToServer(false);
    }
  }, [])

  const signOut = useCallback(async () => {
    setUser(null)
    try {
      await RNSInfo.deleteItem(
        AppAuthenticatoinKeyValue,
        sharedStorageFreferencies
      );
    } catch (err) {

    }
  }, []);

  const getUserDataStorage = useCallback(async () => {
    try {
      const userDataStorageResponse = await getItem();
      if (!!userDataStorageResponse) {
        const userDataStorageResponseParseData = JSON.parse(userDataStorageResponse!) as UserType;
        setUser(userDataStorageResponseParseData);
      } else {
        throw new Error("Data is not exists");
      }
    } catch (err) {
      console.log(err);
      // addToastNotifications(signUpNotificationContentTypeNetworkError);
    }
  }, [])

  useEffect(() => {
    getUserDataStorage();
  }, [])

  return (
    <ContextAuthContext.Provider value={{
      user,
      signIn,
      signUp,
      authorization,
      signOut,
      sendResponseToServer,
      loadingLocalData,
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