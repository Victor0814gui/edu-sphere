import { DrawerNavigationOptions, createDrawerNavigator } from '@react-navigation/drawer';
import { CustomNavbar } from '../../components/navbar';
import { Profile } from '@/src/modules/customer/screens/profile';
import { COLORS } from '../../theme';
import { Room } from '@/src/modules/customer/screens/room';
import { Dashboard } from '@/src/modules/customer/screens/dashboard';
import { Player } from '@/src/modules/lessons/screens/player';
import { Lessons } from '@/src/modules/lessons/screens/lessons';
import { enableScreens, enableFreeze } from "react-native-screens"
import { PlaylistLessons } from '@/src/modules/lessons/screens/playlist-lessons';
import { createStackNavigator } from '@react-navigation/stack';
import { ModalQueueContextProvider } from '../../contexts/modal-queue';
import { CreateRoomScreen } from '@/src/modules/rooms/screens/create-room';
type UserDrawerType = {
  dashboard: undefined;
  profile: undefined;
  room: undefined;
  player: undefined;
  lessons: undefined;
  playlistlessons: undefined;
  createRoomScreen: undefined;
}

const drawerNavigationOptions: DrawerNavigationOptions = {
  headerShown: false,
  drawerType: "permanent",
  drawerStyle: {
    backgroundColor: COLORS.grey_200,
    width: 250,
    borderRadius: 0,
    borderWidth: 0,
    borderColor: COLORS.grey_200,
  },
  drawerContentContainerStyle: {
    backgroundColor: '#333',
  }
}


const UserDrawer = createStackNavigator<UserDrawerType>();
enableScreens(true);
enableFreeze(false);

export function UserDrawerRoutes() {
  return (
    <ModalQueueContextProvider>
      <UserDrawer.Navigator
        // screenOptions={drawerNavigationOptions}
        initialRouteName="dashboard"
      >
        <UserDrawer.Screen name="dashboard" component={Dashboard} />
        <UserDrawer.Screen name="lessons" component={Lessons} />
        <UserDrawer.Screen name="profile" component={Profile} />
        <UserDrawer.Screen name="room" component={Room} />
        <UserDrawer.Screen name="player" component={Player} />
        <UserDrawer.Screen name="playlistlessons" component={PlaylistLessons} />
        <UserDrawer.Screen name="createRoomScreen" component={CreateRoomScreen} />
      </UserDrawer.Navigator>
    </ModalQueueContextProvider>
  );
}