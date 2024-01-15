import { UserDrawerType } from '@shared/types';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { enableScreens, enableFreeze } from "react-native-screens"
import { AuthenticateAccountScreen, ROUTE_NAME } from "@modules/screens/authenticate-account-screen";
import { CreateCustomerScreen } from "@modules/screens/create-customer-screen";
import { AuthorizationAccountScreen } from "@modules/screens/authorization-account-screen";




const AuthDrawer = createDrawerNavigator<UserDrawerType>();

enableScreens(true)
enableFreeze(false);
export function AuthRoutes() {
  return (
    <AuthDrawer.Navigator
      useLegacyImplementation
      initialRouteName='signin'
      screenOptions={{
        drawerType: "slide",
        headerShown: false,
      }}
    >
      <AuthDrawer.Screen name="signin" component={AuthenticateAccountScreen} />
      <AuthDrawer.Screen name="authorization" component={AuthorizationAccountScreen} />
      <AuthDrawer.Screen name="signup" component={CreateCustomerScreen} />
    </AuthDrawer.Navigator>
  );
}