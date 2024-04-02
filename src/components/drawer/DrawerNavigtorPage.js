
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AppNavigator from '../../AppNavigator';
import { NavigationContainer, DrawerActions, } from '@react-navigation/native';
import DrawerContent from './DrawerContent'

const Drawer = createDrawerNavigator();

const DrawerNavigatorPage = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={props => <DrawerContent {...props} />}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Drawer.Screen name="Appnavigator" component={AppNavigator} />
      </Drawer.Navigator>
  </NavigationContainer>
  );
}
export default DrawerNavigatorPage;