import { DrawerNavigationOptions, createDrawerNavigator } from '@react-navigation/drawer';
import { Dashboard } from '../../modules/demonstrations/dashboard';
import { CustomNavbar } from './navbar';
import { Profile } from '../../modules/demonstrations/profile';
import { useWindowDimensions,Platform } from "react-native";
import { COLORS } from '../theme';
import { Room } from '../../modules/demonstrations/room';
import { Player } from '../../modules/lessons/player';
import { Lessons } from '../../modules/lessons/lessons';
import { DrawerNavigationConfig } from '@react-navigation/drawer/lib/typescript/src/types';
import { enableScreens,enableFreeze  } from "react-native-screens"


type UserDrawerType = {
  dashboard: undefined;
  profile: undefined;
  room: undefined;
  player: undefined;
  lessons: undefined;
}


const UserDrawer = createDrawerNavigator<UserDrawerType>();

export function UserDrawerRoutes() {
  console.log("UserDrawerRoutes");
  enableScreens(false);
  enableFreeze(true);
  return (
    <UserDrawer.Navigator 
      screenOptions={NavbarDevices()}
      drawerContent={({navigation,state}) => <CustomNavbar navigation={navigation} state={state}/>}
      initialRouteName="lessons"
      key={"route-user-screens"}
      useLegacyImplementation
    >
      <UserDrawer.Screen name="dashboard" component={Dashboard} />
      <UserDrawer.Screen name="profile" component={Profile} />
      <UserDrawer.Screen name="room" component={Room} />
      <UserDrawer.Screen name="player" options={{drawerType:"slide"}} component={Player} />
      <UserDrawer.Screen name="lessons" options={{drawerType:"slide"}} component={Lessons} />
    </UserDrawer.Navigator>
  );
}

function NavbarDevices():DrawerNavigationOptions  {
  const { width } = useWindowDimensions();
  const smallDevice = width < 900;
  console.log("NavbarDevices");

  const drawerNavigationOptions: DrawerNavigationOptions  = {
    headerShown: false,
    drawerType: !smallDevice ? 'permanent' : 'back',
    drawerStyle:{
      backgroundColor: COLORS.grey_200,
      width: 250,
      borderRadius:0,
      borderWidth: 0,
      borderColor: COLORS.grey_200,
    },
    drawerContentContainerStyle:{
      backgroundColor: '#333',
    }
  }

  return drawerNavigationOptions;
}