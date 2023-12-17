import { Dashboard } from "@modules/screens/dashboard";
import { Lessons } from "@modules/screens/lessons";
import { HouseSimple, Airplay } from "phosphor-react-native";


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