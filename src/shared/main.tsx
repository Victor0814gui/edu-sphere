import { Router } from "./routes";

import { NavigationContainer,DefaultTheme, Theme } from '@react-navigation/native';
import { COLORS } from "./theme";
import { ContextAuthContextProvider } from "./contexts/auth";
import { ToastNotificaitonProvider } from "./contexts/toast-notification";
import { Modal } from "./components/modal-component.windows";

const MyTheme: Theme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    background: COLORS.grey_180,
  },
};



export const Main = () => (
  <NavigationContainer theme={MyTheme}>
    <ContextAuthContextProvider>
      <ToastNotificaitonProvider>
        <Router/>
      </ToastNotificaitonProvider>
    </ContextAuthContextProvider>
  </NavigationContainer>
)