import { Router } from "./routes";

import { NavigationContainer,DefaultTheme, Theme } from '@react-navigation/native';
import { COLORS } from "./theme";
import { ContextAuthContextProvider } from "./contexts/auth";
import { ToastNotificaitonProvider } from "./contexts/toast-notification";
import { NotificationContextProvider } from "./contexts/notification";

const MyTheme: Theme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    background: COLORS.grey_180,
  },
};



export const Main = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <NotificationContextProvider>
        <ToastNotificaitonProvider>
          <ContextAuthContextProvider>
            <Router/>
          </ContextAuthContextProvider>
        </ToastNotificaitonProvider>
      </NotificationContextProvider>
    </NavigationContainer>
  )
}