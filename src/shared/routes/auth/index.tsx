import { SignUpStepThree } from '../../../modules/session/screens/sign-up-step-three';
import { SignUpStepTwo } from "../../../modules/session/screens/sign-up-step-two";
import { SignUpStepOne } from '../../../modules/session/screens/sign-up-step-one';
import { SignIn } from '../../../modules/session/screens/sign-in';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { UserDrawerType } from '../../types';
import { enableScreens,enableFreeze  } from "react-native-screens"
import { AuthStepsContextProvider } from '../../../modules/session/contexts/auth-steps';
import { CreateUserStepsContextProvider } from '../../contexts/create-user-steps';




const AuthDrawer = createDrawerNavigator<UserDrawerType>();

export function AuthRoutes() {
  enableScreens(false)
  enableFreeze(false);
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
          <AuthDrawer.Screen name="signin" component={SignIn} />
          <AuthDrawer.Screen name="signupstepone" component={SignUpStepOne} />
          <AuthDrawer.Screen name="signupsteptwo" component={SignUpStepTwo} />
          <AuthDrawer.Screen name="signinstepthree" component={SignUpStepThree} />
        </AuthDrawer.Navigator>
      </CreateUserStepsContextProvider>
    </AuthStepsContextProvider>

  );
}
