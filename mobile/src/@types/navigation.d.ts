import { ViewPropTypes } from "react-native-windows";


export declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList{
      //auth
      signin: undefined;
      signupstepone: undefined;
      signupsteptwo: undefined;
      signinstepthree: undefined;
      //user
      dashboard: undefined;
      profile: undefined;
      player: {
        url: string,
      };
      room: {
        roomId: string;
      }
      lessons: undefined;
      playlistlessons: undefined;
    }
  }
}