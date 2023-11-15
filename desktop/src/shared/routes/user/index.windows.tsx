import { createDrawerNavigator } from '@react-navigation/drawer';
import { CustomNavbar } from '../../components/navbar';
import { Player } from '../../../modules/lessons/screens/player';
import { Lessons } from '../../../modules/lessons/screens/lessons';
import { enableScreens, enableFreeze } from "react-native-screens"
import { PlaylistLessons } from '../../../modules/lessons/screens/playlist-lessons';
import { CreateRoomScreen } from '../../../modules/rooms/screens/create-room';
import { ModalQueueContextProvider } from '../../contexts/modal-queue';
import { Customer } from '@/src/modules/customer/configs/paths';
import { drawerNavigationOptions } from '../../configs/drawer-options';
import { Dashboard } from '@/src/modules/customer/screens/dashboard';
import { Room } from '@/src/modules/customer/screens/room';
import { Profile } from '@/src/modules/customer/screens/profile';
import { useAuthContextProvider } from '../../contexts/auth';

type UserDrawerType = {
  dashboard: undefined;
  profile: undefined;
  room: undefined;
  lessons: undefined;
  player: undefined;
  playlistlessons: undefined;
  createRoomScreen: undefined;
}



const UserDrawer = createDrawerNavigator<UserDrawerType>();
enableScreens(true);
enableFreeze(false);

export function UserDrawerRoutes() {
  const { user } = useAuthContextProvider()
  return (
    <ModalQueueContextProvider>
      <UserDrawer.Navigator
        screenOptions={drawerNavigationOptions}
        drawerContent={(props) => <CustomNavbar {...props} user={user} />}
        key={"route-user-screens"}
        defaultStatus='open'
        useLegacyImplementation
      >
        <UserDrawer.Screen name="dashboard" component={Dashboard} />
        <UserDrawer.Screen name="profile" component={Profile} />
        <UserDrawer.Screen name="room" component={Room} />
        <UserDrawer.Screen name="lessons" component={Lessons} />
        <UserDrawer.Screen name="player" component={Player} />
        <UserDrawer.Screen name="playlistlessons" component={PlaylistLessons} />
        <UserDrawer.Screen name="createRoomScreen" component={CreateRoomScreen} />
      </UserDrawer.Navigator>
    </ModalQueueContextProvider>
  );
}