import { ViewPropTypes } from "react-native-windows";


export declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList{
      dashboard: undefined;
      profile: undefined;
      room: {
        roomId: string;
      }
      signin: undefined;
      signupstepone: undefined;
      signupsteptwo: undefined;
      signinstepthree: undefined;
    }
  }
}