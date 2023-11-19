import { useState, useId, createContext, useContext, ReactNode } from "react";
import { Modal } from "../../components/modal";



type ModalType = {
  title: string;
  description: string;
  actions?: any[];
  type?: "warning" | "error" | "success" | "default";
}

type AddModalParams = {
  title: string;
  description: string;
}

type ModalQueueContextType = {
  addModal: (params: AddModalParams) => void;
  removeModal: () => void;
}


const ModalQueueContext = createContext({} as ModalQueueContextType);


const ModalQueueContextProvider = (props: { children: ReactNode }) => {
  const [modal, setModal] = useState<ModalType>()

  const addModal = ({ title, description, actions, type = "default" }: ModalType) => {
    setModal({
      description,
      title,
      actions,
    });
  }


  const removeModal = () => {
    setModal({} as ModalType);
  }

  return (
    <ModalQueueContext.Provider value={{
      addModal,
      removeModal,
    }}>
      {props.children}
      {modal?.title && (
        <Modal
          title={modal?.title!}
          description={modal?.description!}
        />
      )}
    </ModalQueueContext.Provider>
  )
}


const useModalQueueContextProvider = (): ModalQueueContextType => {
  const verifyContextAlreadyExists = useContext(ModalQueueContext);

  if (!verifyContextAlreadyExists) {
    throw new Error("[ModalQueueContextProvider] context does not exists")
  }

  return verifyContextAlreadyExists;
}

export {
  ModalQueueContextProvider,
  useModalQueueContextProvider
}