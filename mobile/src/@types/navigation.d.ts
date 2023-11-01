import { ViewPropTypes } from "react-native-windows";
import { RootDrawerNavigationProp, DrawerNavigationProp, } from '@react-navigation/drawer';


interface RootParamList {
  //auth
  signin: undefined;
  authorization: undefined;
  signup: undefined;
  //user
  dashboard: undefined;
  profile: undefined;
  player: {
    url: string;
    duration: number;
  };
  room: {
    roomId: string;
  }
  lessons: undefined;
  playlistlessons: undefined;
}

export type RootDrawerNavigationProp<
  T extends keyof RootParamList
> = DrawerNavigationProp<RootParamList, T>;