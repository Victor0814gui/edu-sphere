import React from 'react';
import { View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Dashboard } from '../screens/dashboard';
import { Profile } from '../screens/profile';
import { Room } from '../screens/room';
import { Customer } from '../configs/paths';

const Drawer = createDrawerNavigator();



export function CustomerRoutes() {
  return (
    <Drawer.Navigator
      initialRouteName='Dashboard'
    >
      <Drawer.Screen name={Customer.Dashboard} component={Dashboard} />
      <Drawer.Screen name={Customer.Profile} component={Profile} />
      <Drawer.Screen name={Customer.Room} component={Room} />
    </Drawer.Navigator>
  );
}