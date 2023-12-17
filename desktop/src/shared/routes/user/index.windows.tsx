import { createStackNavigator } from '@react-navigation/stack';
import { CustomNavbar } from '../../components/navbar';
import { Player } from '@modules/screens/player';
import { Lessons } from '@modules/screens/lessons';
import { enableScreens, enableFreeze } from "react-native-screens"
import { PlaylistLessons } from '@modules/screens/playlist-lessons';
import { CreateRoomScreen } from '@modules/screens/create-room';
import { ModalQueueContextProvider } from '../../contexts/modal-queue';
import { drawerNavigationOptions } from '../../configs/drawer-options';
import { Dashboard } from '@/src/modules/screens/dashboard';
import { Room } from '@/src/modules/screens/room';
import { Profile } from '@/src/modules/screens/profile';
import { useAuthContextProvider } from '../../contexts/auth';
import { screenOptions } from '../configs/screen-options';

type UserDrawerType = {
  dashboard: undefined;
  profile: undefined;
  room: undefined;
  lessons: undefined;
  player: undefined;
  playlistlessons: undefined;
  createRoomScreen: undefined;
}



const UserDrawer = createStackNavigator<UserDrawerType>();
enableScreens(true);
enableFreeze(false);

export function UserDrawerRoutes() {
  return (
    <ModalQueueContextProvider>
      <UserDrawer.Navigator
        screenOptions={screenOptions}
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