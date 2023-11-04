import { DrawerNavigationOptions } from "@react-navigation/drawer";
import { COLORS } from "../theme";



export const drawerNavigationOptions: DrawerNavigationOptions = {
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