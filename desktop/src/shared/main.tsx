import { useCallback, useEffect, useState } from "react";
import { Router } from "./routes";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer, DefaultTheme, Theme } from '@react-navigation/native';
import { COLORS } from "./theme";
import { AppProvider } from "./contexts";
import { ToastNotificationProvider } from "./contexts/toast-notification";
import { titleBar } from "react-native-custom-window";

import LottieView from "lottie-react-native";
import { View } from "react-native";
import { Animations } from "./utils/contants";
import { linking } from "./configs/deeplink";
import { theme } from "./configs/theme";
import { titlebarConfigs } from "./configs/titlebar";







export const Main = () => {
  const [isRendering, setIsRendering] = useState(true);
  const onAnimationFinish = () => setIsRendering(false);


  useEffect(() => {
    const handlerChangeTitleBar = async () => {
      await titleBar.enableExtend();
      // await window.setSize(1300, 720)
      await titleBar.TitlebarColor(titlebarConfigs);
    }
    handlerChangeTitleBar();
  }, [])

  if (isRendering) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: COLORS.grey_180 }}>
        <LottieView
          resizeMode="contain"
          loop={false}
          autoPlay={true}
          style={{ height: 220, width: 220 }}
          source={Animations.Message.getSource()}
          onAnimationFinish={onAnimationFinish}
        />
      </View>
    )
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer linking={linking} theme={theme}>
        <AppProvider>
          <Router />
        </AppProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}