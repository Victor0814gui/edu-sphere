import { DrawerNavigationOptions, createDrawerNavigator } from '@react-navigation/drawer';
import { Dashboard } from '../../modules/demonstrations/dashboard';
import { CustomNavbar } from './navbar';
import { Profile } from '../../modules/demonstrations/profile';
import { useWindowDimensions,Platform } from "react-native";
import { COLORS } from '../theme';
import { Room } from '../../modules/demonstrations/room';



type UserDrawerType = {
  dashboard: undefined;
  profile: undefined;
  room: undefined
}


const UserDrawer = createDrawerNavigator<UserDrawerType>();

export function UserDrawerRoutes() {
  console.log("UserDrawerRoutes");
  
  return (
    <UserDrawer.Navigator 
      useLegacyImplementation={Platform.OS ==='windows' ? true : false}
      screenOptions={NavbarDevices()}
      drawerContent={({navigation,state}) => <CustomNavbar navigation={navigation} state={state}/>}
      initialRouteName="dashboard"
    >
      <UserDrawer.Screen name="dashboard" component={Dashboard} />
      <UserDrawer.Screen name="profile" component={Profile} />
      <UserDrawer.Screen name="room" component={Room} />
    </UserDrawer.Navigator>
  );
}

function NavbarDevices():DrawerNavigationOptions {
  const { width } = useWindowDimensions();
  const smallDevice = width < 900;
  console.log("NavbarDevices");

  const drawerNavigationOptions: DrawerNavigationOptions = {
    drawerType: !smallDevice ? 'permanent' : 'back',
    headerShown: false,
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