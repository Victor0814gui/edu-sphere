import { Dashboard } from "../../../modules/demonstrations/screens/dashboard";
import { Profile } from "../../../modules/demonstrations/screens/profile";
import { Room } from "../../../modules/demonstrations/screens/room";
import { Lessons } from "../../../modules/lessons/screens/lessons";
import { Player } from "../../../modules/lessons/screens/player";




export interface IRoutes  {
  key: string;
  component: React.ElementType;
  icon: string;
  name: string;
}

export const UserRoutes: Array<IRoutes> = [
  {
    name: "dashboard",
    component: Dashboard,
    icon: "home",
    key: "dashboard"
  },
  {
    name: "lessons",
    component: Lessons,
    icon: "play",
    key: "lessons"
  },
]