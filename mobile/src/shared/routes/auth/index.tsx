import { NativeRouter, Routes, Route } from "react-router-native";

import { SignUpStepThree } from '@modules/session/screens/sign-up-step-three';
import { SignUpStepTwo } from "@modules/session/screens/sign-up-step-two";
import { SignUpStepOne } from '@modules/session/screens/sign-up-step-one';
import { AuthenticateUserAccount } from '@modules/session/screens/authenticate-user-account';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { UserDrawerType } from '../../types';
// import { enableScreens, enableFreeze } from "react-native-screens"
import { AuthStepsContextProvider } from '@modules/session/contexts/auth-steps';
import { CreateUserStepsContextProvider } from '../../contexts/create-user-steps';
import { View } from "react-native";
import { COLORS } from "@shared/theme";




// const AuthDrawer = createDrawerNavigator<UserDrawerType>();

// enableScreens(true)
// enableFreeze(false);
export function AuthRoutes() {
  return (
    <AuthStepsContextProvider>
      <CreateUserStepsContextProvider>
        <View style={{ flex: 1, backgroundColor: COLORS.grey_180 }}>
          <NativeRouter initialIndex={0} basename="/">
            <Routes>
              <Route path="/" element={<AuthenticateUserAccount />} />
              <Route path="/signupstepone" element={<SignUpStepOne />} />
              <Route path="/signupsteptwo" element={<SignUpStepTwo />} />
              <Route path="/signinstepthree" element={<SignUpStepThree />} />
            </Routes>
          </NativeRouter>
        </View>
      </CreateUserStepsContextProvider>
    </AuthStepsContextProvider>
  );
}
