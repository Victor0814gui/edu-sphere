import { useState,createContext,useContext } from "react";



const ModalContext = createContext({});


export const ModalContextProvider = () => {
  const [ modalIsOpen,setModalIsOpen ] = useState(false);
  return(
    <ModalContext.Provider value={{

    }}>
    </ModalContext.Provider>
  )
}