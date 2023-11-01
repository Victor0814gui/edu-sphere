import { NativeRouter, Routes, Route } from "react-router-native";

import { createDrawerNavigator } from '@react-navigation/drawer';
import { UserDrawerType } from '../../types';
import { enableScreens, enableFreeze } from "react-native-screens"
import { AuthenticateUserAccount } from "../../../modules/session/screens/authenticate-user-account";
import { CreateCustomerScreen } from "../../../modules/session/screens/create-customer-screen";




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
