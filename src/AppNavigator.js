


import React from 'react';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/Login';
import Welcome from './components/stack/Welcome';
import StartSearch from './components/stack/StartSearch';
import BottomNavPage from './components/tab/BottomNavPage';
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Entypo';
import { Text } from 'react-native';
import ExploreNearShop from './components/stack/ExploreNearShop';
import ExploreNearServices from './components/stack/ExploreNearServices';
import ExploreClassified from './components/stack/ExploreClassified';


const AppNavigator = () => {

  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          statusBarColor: '#0163d2',
          headerStyle: {
            backgroundColor: '#0163d2',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',

          headerLeft: () => {
            return (
              <Icon
                name="menu"
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                size={30}
                color="#fff"
              />
            );
          },
        }}


      >
        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen
          name="StartSearch"
          component={StartSearch}
          options={{
            headerRight: () => (
              <>
                <Text style={{ color: '#fff', marginRight: 5 }}>Koti, Hyderabad</Text>
                <Icon name="location-pin" size={20} color="#fff" />
              </>
            ),
          }}
        />
        <Stack.Screen name="BottomNavPage" component={BottomNavPage} />
        <Stack.Screen name="ExploreNearShop" component={ExploreNearShop} />
        <Stack.Screen name="ExploreNearServices" component={ExploreNearServices} />
        <Stack.Screen name="ExploreClassified" component={ExploreClassified} />
      </Stack.Navigator>
    </>
  )
}
export default AppNavigator;




