// import React from 'react';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import  DrawerScreenSec from '../drawer/DrawerScreenSec'
// import  DrawerScreenFirst from '../drawer/DrawerScreenFirst'
// import {Text, View } from 'react-native';
// import Login from '../Login';
// import AppNavigator from '../../AppNavigator';
// import { NavigationContainer } from '@react-navigation/native';
// const Drawer = createDrawerNavigator();

// const DrawerNavigatorPage=()=> {
//   return (
//     <NavigationContainer>
//     <Drawer.Navigator screenOptions={{headerShown:false}}>
//       <Drawer.Screen name="Appnavigatr" component={AppNavigator} />
//     </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }
// export default DrawerNavigatorPage;


import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AppNavigator from '../../AppNavigator';
import { NavigationContainer,DrawerActions, } from '@react-navigation/native';
import DrawerContent from './DrawerContent'


const Drawer = createDrawerNavigator();

const DrawerNavigatorPage=()=> {
  return (
    <NavigationContainer>
    <Drawer.Navigator 
     drawerContent={props => <DrawerContent {...props} />}
     screenOptions={{
       headerShown: false,
     }}
    >
      <Drawer.Screen name="Appnavigatr" component={AppNavigator} />
    </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default DrawerNavigatorPage;