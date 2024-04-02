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
import Location from './components/stack/Location';
import MobileRegistration from './components/stack/MobileRegistration';
import OtpRegistration from './components/stack/OtpRegistration';
import SocialMedia from './components/tab/stackbottom/SocilaMedia'
import Broucher from './components/tab/stackbottom/Brouchere';
import ServiceTiming from './components/tab/stackbottom/Timing';

import BusinessAdd from './components/stack/BusinessAdd';

// import Product from './components/stack/Product';

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
            headerTitle: '',
            headerRight: () => (
              <>
                <Text style={{ color: '#fff', marginRight: 5, fontSize: 16 }}>Koti, Hyderabad</Text>
                <Icon name="location-pin" size={20} color="#fff" />
              </>
            ),
          }}
        />

        <Stack.Screen name="ExploreNearShop" component={ExploreNearShop} options={{
          headerTitle: '',
          headerRight: () => (
            <>
              <Text style={{ color: '#fff', marginRight: 5 }}>Koti, Hyderabad</Text>
              <Icon name="location-pin" size={20} color="#fff" />
            </>
          ),
        }} />
        <Stack.Screen name="ExploreNearServices" component={ExploreNearServices} options={{
          headerTitle: '',
          headerRight: () => (
            <>
              <Text style={{ color: '#fff', marginRight: 5 }}>Koti, Hyderabad</Text>
              <Icon name="location-pin" size={20} color="#fff" />
            </>
          ),
        }} />
        <Stack.Screen name="ExploreClassified" component={ExploreClassified}
          options={{
            headerTitle: '',
            headerRight: () => (
              <>
                <Text style={{ color: '#fff', marginRight: 5, fontSize: 16 }}>Koti, Hyderabad</Text>
                <Icon name="location-pin" size={20} color="#fff" />
              </>
            ),
          }} />

        <Stack.Screen name="Location" component={Location}
          options={{
            headerTitle: '',
            headerRight: () => (
              <>
                <Text style={{ color: '#fff', marginRight: 5, fontSize: 16 }}>Koti, Hyderabad</Text>
                <Icon name="location-pin" size={20} color="#fff" />
              </>
            ),
          }} />
        <Stack.Screen name="MobileRegistration" component={MobileRegistration}
          options={{
            headerTitle: '',
            headerRight: () => (
              <>
                <Text style={{ color: '#fff', marginRight: 5, fontSize: 16 }}>Koti, Hyderabad</Text>
                <Icon name="location-pin" size={20} color="#fff" />
              </>
            ),
          }} />
        <Stack.Screen name="OtpRegistration" component={OtpRegistration}
          options={{
            headerTitle: '',
            headerRight: () => (
              <>
                <Text style={{ color: '#fff', marginRight: 5, fontSize: 16 }}>Koti, Hyderabad</Text>
                <Icon name="location-pin" size={20} color="#fff" />
              </>
            ),
          }}
        />

        <Stack.Screen name="BusinessAdd" component={BusinessAdd}
          options={{
            headerTitle: '',
            headerRight: () => (
              <>
                <Text style={{ color: '#fff', marginRight: 5, fontSize: 16 }}>Koti, Hyderabad</Text>
                <Icon name="location-pin" size={20} color="#fff" />
              </>
            ),
          }} />

        <Stack.Screen name="BottomNavPage" component={BottomNavPage} options={{
          headerTitle: '',
          headerRight: () => (
            <>
              <Text style={{ color: '#fff', marginRight: 5, fontSize: 16 }}>Koti, Hyderabad</Text>
              <Icon name="location-pin" size={20} color="#fff" />
            </>
          ),
        }} />
      </Stack.Navigator>
    </>
  )
}
export default AppNavigator;




