import { useEffect, useState } from "react";
import { Router } from "./routes";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer, DefaultTheme, Theme } from '@react-navigation/native';
import { COLORS } from "./theme";
import { AppProvider } from "./contexts";
import { ToastNotificationProvider } from "./contexts/toast-notification";
import { titleBar, window } from "react-native-custom-window";

import LottieView from "lottie-react-native";
import { View } from "react-native";
import { Modal } from "./components/modal";
import { Animations } from "./utils/contants";
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
  const [isRendering, setIsRendering] = useState(true);
  const onAnimationFinish = () => setIsRendering(false);

  useEffect(() => {
    const handlerChangeTitleBar = async () => {
      await titleBar.enableExtend();
      await window.setSize(1300, 720)
      await titleBar.TitlebarColor({
        //@ts-ignore
        BackgroundColor: COLORS.grey_180,
        ButtonBackgroundColor: "transparent",
        ButtonForegroundColor: COLORS.white,
        buttonHoverBackgroundColor: COLORS.grey_400,
        ButtonHoverForegroundColor: COLORS.grey_480,
      });
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
      <NavigationContainer linking={linking} theme={MyTheme}>
        <ToastNotificationProvider>
          <AppProvider>
            <Router />
          </AppProvider>
        </ToastNotificationProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}