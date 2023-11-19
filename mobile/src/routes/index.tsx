import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SettingsScreen } from '../screens/settings-screen';
import { HomeScreen } from '../screens/home-screen';
import Ionicons from '@expo/vector-icons/Ionicons';
import { COLORS } from '../theme';
import { CONFIG } from '../theme/fonts';
import { useFonts } from "expo-font";
import { theme } from '../configs/theme';

import Lottie from "lottie-react-native";
import { RoomsScreen } from '../screens/room-screen';

const Tab = createBottomTabNavigator();

export function Routes() {
  const [fontsLoaded] = useFonts(CONFIG);

  if (!fontsLoaded) {
    return <Lottie source={require("../assets/animations/Message.json")} style={{ width: 120, height: 120 }} />;
  }
  return (
    <NavigationContainer
      theme={theme}
    >
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: COLORS.green_500,
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            borderColor: COLORS.grey_180,
            backgroundColor: COLORS.grey_180,
          }
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Rooms" component={RoomsScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}