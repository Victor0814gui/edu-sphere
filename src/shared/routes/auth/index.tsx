import { SignUpStepThree } from '@modules/session/screens/sign-up-step-three';
import { SignUpStepTwo } from "@modules/session/screens/sign-up-step-two";
import { SignUpStepOne } from '@modules/session/screens/sign-up-step-one';
import { AuthenticateUserAccount } from '@modules/session/screens/authenticate-user-account';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { UserDrawerType } from '../../types';
import { enableScreens, enableFreeze } from "react-native-screens"
import { AuthStepsContextProvider } from '@modules/session/contexts/auth-steps';
import { CreateUserStepsContextProvider } from '../../contexts/create-user-steps';




const AuthDrawer = createDrawerNavigator<UserDrawerType>();

enableScreens(true)
enableFreeze(false);
export function AuthRoutes() {
  return (
    <AuthStepsContextProvider>
      <CreateUserStepsContextProvider>
        <AuthDrawer.Navigator
          useLegacyImplementation={true}
          initialRouteName="signin"
          screenOptions={{
            headerShown: false,
            drawerType: 'slide',
          }}
        >
          <AuthDrawer.Screen name="signin" component={AuthenticateUserAccount} />
          <AuthDrawer.Screen name="signupstepone" component={SignUpStepOne} />
          <AuthDrawer.Screen name="signupsteptwo" component={SignUpStepTwo} />
          <AuthDrawer.Screen name="signinstepthree" component={SignUpStepThree} />
        </AuthDrawer.Navigator>
      </CreateUserStepsContextProvider>
    </AuthStepsContextProvider>

  );
}
