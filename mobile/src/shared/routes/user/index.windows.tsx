import { DrawerNavigationOptions, createDrawerNavigator } from '@react-navigation/drawer';
import { CustomNavbar } from '../../components/navbar';
import { Profile } from '../../../modules/demonstrations/screens/profile';
import { COLORS } from '../../theme';
import { Room } from '../../../modules/demonstrations/screens/room';
import { Dashboard } from '../../../modules/demonstrations/screens/dashboard';
import { Player } from '../../../modules/lessons/screens/player';
import { Lessons } from '../../../modules/lessons/screens/lessons';
import { enableScreens, enableFreeze } from "react-native-screens"
import { PlaylistLessons } from '../../../modules/lessons/screens/playlist-lessons';
import { CreateRoomScreen } from '../../../modules/rooms/screens/create-room';
import { ModalQueueContextProvider } from '../../contexts/modal-queue';

type UserDrawerType = {
  dashboard: undefined;
  profile: undefined;
  room: undefined;
  player: undefined;
  lessons: undefined;
  playlistlessons: undefined;
  CreateRoomScreen: undefined;
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


const UserDrawer = createDrawerNavigator<UserDrawerType>();
enableScreens(true);
enableFreeze(false);

export function UserDrawerRoutes() {
  return (
    <ModalQueueContextProvider>
      <UserDrawer.Navigator
        screenOptions={drawerNavigationOptions}
        drawerContent={props => <CustomNavbar {...props} />}
        initialRouteName="dashboard"
        key={"route-user-screens"}
        screenListeners={{
          beforeRemove: (beforeRemoveEvent) => {
            console.log(beforeRemoveEvent)
          }
        }}
        defaultStatus='open'
        useLegacyImplementation
      >
        <UserDrawer.Screen name="dashboard" component={Dashboard} />
        <UserDrawer.Screen name="lessons" component={Lessons} />
        <UserDrawer.Screen name="profile" component={Profile} />
        <UserDrawer.Screen name="room" component={Room} />
        <UserDrawer.Screen name="player" options={{ drawerType: "slide" }} component={Player} />
        <UserDrawer.Screen name="playlistlessons" component={PlaylistLessons} />
        <UserDrawer.Screen options={{ drawerType: "slide" }} name="CreateRoomScreen" component={CreateRoomScreen} />
      </UserDrawer.Navigator>
    </ModalQueueContextProvider>
  );
}