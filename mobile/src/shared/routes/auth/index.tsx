import { NativeRouter, Routes, Route } from "react-router-native";

import { CreateCustomerScreen } from '@modules/session/screens/create-customer-screen';
import { AuthenticateUserAccount } from '@modules/session/screens/authenticate-user-account';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { UserDrawerType } from '../../types';
import { enableScreens, enableFreeze } from "react-native-screens"
import { AuthStepsContextProvider } from '@modules/session/contexts/auth-steps';
import { CreateUserStepsContextProvider } from '../../contexts/create-user-steps';
import { View } from "react-native";
import { COLORS } from "@shared/theme";




const AuthDrawer = createDrawerNavigator<UserDrawerType>();

enableScreens(true)
enableFreeze(false);
export function AuthRoutes() {
  return (
      <AuthDrawer.Navigator
        useLegacyImplementation
        screenOptions={{
          drawerType: "slide",
          headerShown: false,
        }}
      >
          <AuthDrawer.Screen name="signin" component={AuthenticateUserAccount} />
          <AuthDrawer.Screen name="createCustomer" component={CreateCustomerScreen} />
      </AuthDrawer.Navigator>
  );
}
