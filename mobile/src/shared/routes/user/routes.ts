import { Dashboard } from "../../../modules/demonstrations/screens/dashboard";
import { Lessons } from "../../../modules/lessons/screens/lessons";
import { CreateRoomScreen } from "../../../modules/rooms/screens/create-room";

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