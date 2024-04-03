import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNavigatorPage from './src/components/drawer/DrawerNavigtorPage'
import AppNavigator from './src/AppNavigator';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <DrawerNavigatorPage />
      <Toast position='top' />

      {/* <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
      <Testing />
      </NavigationContainer>
      </GestureHandlerRootView> */}
    </>
  )
}
export default App;

