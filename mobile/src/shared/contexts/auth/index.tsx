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
} from "../../utils/toasts-content";
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


  const signIn = useCallback(async ({ email, password }: SignInMethodProps) => {
    try {
      setSendResponseToServer(true);
      const signInDataResponse = await api.post("/customer/signin", { email, password })

      console.log(signInDataResponse.data)
      if (!!signInDataResponse.data) {
        setUser(signInDataResponse.data);
        const signInDataResponseSerializationData = JSON.stringify(signInDataResponse.data);
        await RNSInfo.setItem(
          AppAuthenticatoinKeyValue,
          signInDataResponseSerializationData,
          sharedStorageFreferencies
        )
      }

      // addToastNotifications(signInNotificationContentTypeNetworkError);
      addToastNotifications(signInNotificationContentTypeUserNotExists);

    } catch (err) {
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
      console.log(err);
    }
  }, []);

  const getUserDataStorage = useCallback(async () => {
    try {
      setLoadingLocalData(true);

      const userDataStorageResponse = await RNSInfo.getItem(
        AppAuthenticatoinKeyValue,
        sharedStorageFreferencies
      );

      const userDataStorageResponseParseData = JSON.parse(userDataStorageResponse) as UserType;
      setUser(userDataStorageResponseParseData);
    } catch (err) {
      console.log(err);
      // addToastNotifications(signUpNotificationContentTypeNetworkError);
    } finally {
      setLoadingLocalData(false);
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