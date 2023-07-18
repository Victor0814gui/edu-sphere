import { useEffect, useState } from "react";
import { Router } from "./routes";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer, DefaultTheme, Theme } from '@react-navigation/native';
import { COLORS } from "./theme";
import { AppProvider } from "./contexts";
import { ToastNotificaitonProvider } from "./contexts/toast-notification";

import LottieView from "lottie-react-native";
import { View } from "react-native";
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
  const [ isRendering,setIsRendering ] = useState(true);

  const onAnimationFinish = () => setIsRendering(false);

  if(isRendering){

    return (
      <View style={{flex: 1, alignItems: "center",justifyContent: "center", backgroundColor: COLORS.grey_180}}>
        <LottieView 
        resizeMode="contain"
        loop={false}
          autoPlay={true}
          style={{height: 220,width: 220}}
          source={"Message"}
          onAnimationFinish={onAnimationFinish}
        />
      </View>
    )
  }
  

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