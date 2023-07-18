import { useNavigation } from "@react-navigation/native";
import { createContext, useContext,ReactNode,useRef, useState } from "react";
import { View } from "react-native";
import { IKeyboardEvent } from "react-native-windows/types";
import { useToastNotificaitonProvider } from "./toast-notification";

type OpenAndCloseNavbarOnKeyPressContextType = {
  navbarIsOpen: boolean;
  onFocus: () => void;
}

const OpenAndCloseNavbarOnKeyPressContext = 
  createContext<OpenAndCloseNavbarOnKeyPressContextType>(
    {} as OpenAndCloseNavbarOnKeyPressContextType
  );

const OpenAndCloseNavbarOnKeyPressContextProvider = (props:{
  children: ReactNode
}) => {
  const viewRef = useRef<View>(null);
  const [navbarIsOpen ,setNavbarIsOpen] = useState(false);

  const { goBack } = useNavigation();

  const _onKeyDown = ({nativeEvent}: IKeyboardEvent) => {

    if(nativeEvent.ctrlKey && nativeEvent.key === "B"){
      setNavbarIsOpen(!navbarIsOpen);
    }

    if(nativeEvent.shiftKey && nativeEvent.key === "Escape"){
      goBack();
    }

  };

  const onFocus = () => {
    viewRef?.current?.focus?.()
  }


  return(
    <OpenAndCloseNavbarOnKeyPressContext.Provider value={{
      navbarIsOpen,
      onFocus,
    }}>
      <View 
        style={{ flex: 1, }}
        ref={viewRef}
        onMagicTap={() => viewRef?.current?.focus?.()}
        focusable={true}
        //@ts-ignore
        enableFocusRing={true}
        onTouchEndCapture={(e) => viewRef?.current?.focus?.()}
        validKeysDown={['Enter', 'Esc', 'rightArrow']}
        onKeyDown={_onKeyDown}
        onTouchStart={() => viewRef?.current?.focus?.()}
        //@ts-ignore
      >
        {props.children}
      </View>
    </OpenAndCloseNavbarOnKeyPressContext.Provider>
  )
}

const useOpenAndCloseNavbarOnKeyPressContextProvider = () => {
  const contextAlreadyExists = useContext(OpenAndCloseNavbarOnKeyPressContext);
  if(!contextAlreadyExists){
    throw new Error("OpenAndCloseNavbarOnKeyPressContext context is not defined in scope")
  }
  return contextAlreadyExists;
}

export {
  useOpenAndCloseNavbarOnKeyPressContextProvider,
  OpenAndCloseNavbarOnKeyPressContextProvider
}