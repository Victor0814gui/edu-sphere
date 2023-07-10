import { Router } from "./routes";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer, DefaultTheme, Theme } from '@react-navigation/native';
import { COLORS } from "./theme";
import { AppProvider } from "./contexts";
import { ToastNotificaitonProvider } from "./contexts/toast-notification";

const MyTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.grey_180,
  },
};


const config = {
  screens: {
    room: {
      path: 'room/:id',
      exact: true,
      parse: {
        id: (id: string) => `user-${id}`,
      },
      stringify: {
        id: (id: string) => id.replace(/^user-/, ''),
      },
    },
  },
};

const linking = {
  prefixes: ['reactativeustomallery://'],
  config,
};


export const Main = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer linking={linking} theme={MyTheme}>
        <ToastNotificaitonProvider>
          <AppProvider>
            <Router />
          </AppProvider>
        </ToastNotificaitonProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}