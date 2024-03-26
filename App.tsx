import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNavigatorPage from './src/components/drawer/DrawerNavigtorPage'

const App = () => {
  const Stack = createNativeStackNavigator();

  // const Drawer = createDrawerNavigator();
  return (
    <>
      {/* <AppNavigator /> */}
      <DrawerNavigatorPage />
    </>
  )
}
export default App;

