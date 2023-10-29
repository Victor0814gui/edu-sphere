

import { RNSensitiveInfoOptions } from "react-native-sensitive-info";
import { ToastContentType } from "../../types";


const signInNotificationContentTypeServerError: ToastContentType = {
  title: "Error ao conectar com o servidor",
  description: "asdfasdf",
  position: "center",
  type: "error"
}
const signInNotificationContentTypeNetworkError: ToastContentType = {
  title: "Erro ao conectar com servidor",
  description: "parece que nossos servidores estão off-line",
  position: "center",
  type: "error"
}

const signInNotificationContentTypeUserDataUndefined: ToastContentType = {
  title: "Error interno no servidor",
  description: "parece que tivemos um erro interno no servidor, estamos resolvendo o mais rapido possivel",
  position: "center",
  type: "error"
}


const signInNotificationContentTypeUserNotExists: ToastContentType = {
  title: "A sua conta não existe",
  description: "asdfasdf",
  position: "center",
  type: "error",
  mode: "temporary"
}

const signInNotificationContentTypeUserNotExistsOrIncorrectData: ToastContentType = {
  title: "Email ou senha incorretos",
  description: "asdfasdf",
  position: "center",
  type: "error"
}

const signUpNotificationContentTypeServerError: ToastContentType = {
  title: "Error ao conectar com o servidor",
  description: "asdfasdf",
  position: "center",
  type: "error"
}


const signUpNotificationContentTypeCreateUserSucess: ToastContentType = {
  title: " perfil criado",
  description: "bem vindo a nossa plataforma",
  position: "center",
  type: "error"
}

const signUpNotificationContentTypeUsersDoesNotExists: ToastContentType = {
  title: "o usuario não existe",
  description: "parece que o usuario que você está tentando logar não existe",
  position: "center",
  type: "error"
}
const signUpNotificationContentTypeNetworkError: ToastContentType = {
  title: "error ao conectar com o servidor",
  description: "asdfasdf",
  position: "center",
  type: "error"
}

const AppAuthenticatoinKeyValue = "kjkljçlkjçlkjçkljçlkjçlkj";


const sharedStorageFreferencies: RNSensitiveInfoOptions = {
  sharedPreferencesName: 'mySharedPrefs',
  keychainService: 'myKeychain',
}


export {
  signInNotificationContentTypeServerError,
  signInNotificationContentTypeNetworkError,
  signInNotificationContentTypeUserDataUndefined,
  signInNotificationContentTypeUserNotExistsOrIncorrectData,
  signInNotificationContentTypeUserNotExists,
  signUpNotificationContentTypeServerError,
  signUpNotificationContentTypeCreateUserSucess,
  signUpNotificationContentTypeUsersDoesNotExists,
  signUpNotificationContentTypeNetworkError,
  AppAuthenticatoinKeyValue,
  sharedStorageFreferencies,
}