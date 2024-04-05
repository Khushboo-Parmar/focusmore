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
import { UseSelector, useSelector } from 'react-redux';
import BusinessAdd from './components/stack/BusinessAdd';
import { SignUp } from './components/stack/SingUpSingIn';
import RealState from './components/stack/RealState';
import Map from './components/stack/Map';
import Rent from './components/stack/Rent';

// import Product from './components/stack/Product';

const AppNavigator = () => {
  const item = useSelector((state)=> state.token)
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  console.log(item)
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
        {!item?.length  ? (
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        ):(
          <>
                  
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

<Stack.Screen name="Map" component={Map}
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

<Stack.Screen name="resgistration" component={SignUp}
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

<Stack.Screen name="RealState" component={RealState}
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
        <Stack.Screen name="Rent" component={Rent}
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

        <Stack.Screen name="BottomNavPage" component={BottomNavPage} options={{
          headerTitle: '',
          headerRight: () => (
            <>
              <Text style={{ color: '#fff', marginRight: 5, fontSize: 16 }}>Koti, Hyderabad</Text>
              <Icon name="location-pin" size={20} color="#fff" />
            </>
          ),
        }} />
          </>
        )}
      </Stack.Navigator>
    </>
  )
}
export default AppNavigator;




