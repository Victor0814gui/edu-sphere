import { Router } from "./routes";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer, DefaultTheme, Theme } from '@react-navigation/native';
import { COLORS } from "./theme";
import { AppProvider } from "./contexts";

const MyTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.grey_180,
  },
};

export const Main = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer theme={MyTheme}>
        <AppProvider>
          <Router />
        </AppProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}