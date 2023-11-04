import { DrawerNavigationOptions, createDrawerNavigator } from '@react-navigation/drawer';
import { CustomNavbar } from '../../components/navbar';
import { COLORS } from '../../theme';
import { Player } from '../../../modules/lessons/screens/player';
import { Lessons } from '../../../modules/lessons/screens/lessons';
import { enableScreens, enableFreeze } from "react-native-screens"
import { PlaylistLessons } from '../../../modules/lessons/screens/playlist-lessons';
import { CreateRoomScreen } from '../../../modules/rooms/screens/create-room';
import { ModalQueueContextProvider } from '../../contexts/modal-queue';
import { CustomerRoutes } from '@/src/modules/customer/routes';
import { Customer } from '@/src/modules/customer/configs/paths';
import { drawerNavigationOptions } from '../../configs/drawer-options';

type UserDrawerType = {
  dashboard: undefined;
  profile: undefined;
  room: undefined;
  player: undefined;
  lessons: undefined;
  playlistlessons: undefined;
  CreateRoomScreen: undefined;
}



const UserDrawer = createDrawerNavigator<UserDrawerType>();
enableScreens(true);
enableFreeze(false);

export function UserDrawerRoutes() {
  return (
    <ModalQueueContextProvider>
      <UserDrawer.Navigator
        screenOptions={drawerNavigationOptions}
        drawerContent={CustomNavbar}
        initialRouteName={Customer.Index}
        key={"route-user-screens"}
        defaultStatus='open'
        useLegacyImplementation
      >
        <UserDrawer.Screen name={Customer.Index} component={CustomerRoutes} />
        <UserDrawer.Screen name="lessons" component={Lessons} />
        <UserDrawer.Screen name="player" options={{ drawerType: "slide" }} component={Player} />
        <UserDrawer.Screen name="playlistlessons" component={PlaylistLessons} />
        <UserDrawer.Screen options={{ drawerType: "slide" }} name="CreateRoomScreen" component={CreateRoomScreen} />
      </UserDrawer.Navigator>
    </ModalQueueContextProvider>
  );
}