
import { ToastContentType } from "../../types";


const errorConnectingToServerDataToast: ToastContentType = {
  title: "error ao conectar com o servidor",
  description: "parece que estamos tendo um problema em carregar os dados",
  position: "center",
  type: "error"
}

const errorRestoringCustomerData: ToastContentType = {
  title: "error ao recuperar seus dados",
  description: "alguma erro interno nós fez termos um erro ao restaurar os daddos",
  position: "center",
  type: "error"
}

export {
  errorConnectingToServerDataToast,
  errorRestoringCustomerData
}