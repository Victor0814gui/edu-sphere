import { SignUpStepThree } from '../../modules/session/sign-up-step-three';
import { SignUpStepTwo } from '../../modules/session/sign-up-step-two';
import { SignUpStepOne } from '../../modules/session/sign-up-step-one';
import { SignIn } from '../../modules/session/sign-in';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { UserDrawerType } from '../../shared/types';
import { AppProvider } from '../contexts';




const AuthDrawer = createDrawerNavigator<UserDrawerType>();

export function AuthRoutes() {
  
  return (
    <AppProvider>
      <AuthDrawer.Navigator 
        useLegacyImplementation
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
    </AppProvider>

  );
}
