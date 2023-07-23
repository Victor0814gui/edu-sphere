import { Dashboard } from "../../../modules/demonstrations/screens/dashboard";
import { Profile } from "@modules/demonstrations/screens/profile";
import { Room } from "@modules/demonstrations/screens/room";
import { Lessons } from "@modules/lessons/screens/lessons";
import { Player } from "@modules/lessons/screens/player";
import { CreateRoomScreen } from "@modules/rooms/screens/create-room";

import { HouseSimple, Airplay } from "phosphor-react-native";


export interface IRoutes {
  key: string;
  component: React.ElementType;
  icon: React.ElementType;
  name: string;
}

export const UserRoutes: Array<IRoutes> = [
  {
    name: "dashboard",
    component: Dashboard,
    icon: HouseSimple,
    key: "dashboard"
  },
  {
    name: "lessons",
    component: Lessons,
    icon: Airplay,
    key: "lessons"
  },
  {
    name: "criar sala",
    component: CreateRoomScreen,
    icon: Airplay,
    key: "CreateRoomScreen"
  },
]