import { ViewPropTypes } from "react-native-windows";
import { RootDrawerNavigationProp, DrawerNavigationProp, } from '@react-navigation/drawer';


interface RootParamList {
  //auth
  Signin: undefined;
  Authorization: undefined;
  Signup: undefined;
  //user
  Dashboard: undefined;
  Profile: undefined;
  Player: {
    url: string;
    duration: number;
  };
  Room: {
    roomId: string;
  }
  Lessons: undefined;
  Playlistlessons: undefined;
}

export type RootDrawerNavigationProp<
  T extends keyof RootParamList
> = DrawerNavigationProp<RootParamList, T>;