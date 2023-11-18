import { Dashboard } from "@/src/modules/customer/screens/dashboard";
import { Lessons } from "@/src/modules/lessons/screens/lessons";
import { CreateRoomScreen } from "@/src/modules/rooms/screens/create-room";

import { HouseSimple, Airplay, AddressBook } from "phosphor-react-native";


export interface IRoutes {
  key: string;
  component: React.ElementType;
  icon: React.ElementType;
  name: string;
}

export const UserRoutes: Array<IRoutes> = [
  {
    name: "Dashboard",
    component: Dashboard,
    icon: HouseSimple,
    key: "dashboard"
  },
  {
    name: "Lessons",
    component: Lessons,
    icon: Airplay,
    key: "lessons"
  },
]