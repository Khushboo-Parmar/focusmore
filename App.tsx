import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNavigatorPage from './src/components/drawer/DrawerNavigtorPage'
import AppNavigator from './src/AppNavigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import { Provider } from 'react-redux';
import Store from './src/store/Store';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <>
    <Provider store={Store}>
    <DrawerNavigatorPage />
      <Toast position='top' />
    </Provider>
    </>
  )
}
export default App;

