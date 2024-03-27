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
import DetailPage from './components/stack/DetailPage';
import Location from './components/stack/Location';
import MobileRegistration from './components/stack/MobileRegistration';
import OtpRegistration from './components/stack/OtpRegistration';
import Details from './components/stack/DetailPage';
import Product from './components/tab/Product';
import Service  from './components/stack/Services';
import SocialMedia from './components/stack/SocilaMedia'
import Broucher from './components/stack/Brouchere';
import ServiceTiming from './components/stack/Timing';
import Reviews from './components/stack/Reviews';
import Experience from './components/stack/Experience';
import Services from './components/stack/DriverService';
import Gallery from './components/stack/Gallery';
import Certificates from './components/stack/Certificates';
import SetReviews from './components/stack/SetReview';
import BusinessAdd from './components/stack/BusinessAdd';

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
            headerTitle:'',
            headerRight: () => (
              <>
                <Text style={{ color: '#fff', marginRight: 5 }}>Koti, Hyderabad</Text>
                <Icon name="location-pin" size={20} color="#fff" />
              </>
            ),
          }}
        />
        <Stack.Screen name="BottomNavPage" component={BottomNavPage} />
        <Stack.Screen name="ExploreNearShop" component={ExploreNearShop} options={{
            headerRight: () => (
              <>
                <Text style={{ color: '#fff', marginRight: 5 }}>Koti, Hyderabad</Text>
                <Icon name="location-pin" size={20} color="#fff" />
              </>
            ),
          }}/>
        <Stack.Screen name="ExploreNearServices" component={ExploreNearServices} options={{
            headerRight: () => (
              <>
                <Text style={{ color: '#fff', marginRight: 5 }}>Koti, Hyderabad</Text>
                <Icon name="location-pin" size={20} color="#fff" />
              </>
            ),
          }}/>
        <Stack.Screen name="ExploreClassified" component={ExploreClassified} />
        {/* <Stack.Screen name="DetailPage" component={DetailPage} /> */}
        {/* <Stack.Screen name="DetailPage" component={BottomNavPage} /> */}
        <Stack.Screen name="Location" component={Location} />
        <Stack.Screen name="MobileRegistration" component={MobileRegistration} />
        <Stack.Screen name="OtpRegistration" component={OtpRegistration} />

        <Stack.Screen name="Detail" component={Details} />
        <Stack.Screen name="ShopProducts" component={Product} />
        <Stack.Screen name="Services" component={Service} />
        <Stack.Screen name="SocialMedia" component={SocialMedia} />
        <Stack.Screen name="Broucher" component={Broucher} />
        <Stack.Screen name="ServiceTiming" component={ServiceTiming} />
        <Stack.Screen name="Reviews" component={Reviews} />
        <Stack.Screen name="Experience" component={Experience} />
        <Stack.Screen name="Gallery" component={Gallery} />
        <Stack.Screen name="Certificates" component={Certificates} />
        <Stack.Screen name="SetReviews" component={SetReviews} />
        <Stack.Screen name="BusinessAdd" component={BusinessAdd} />
      </Stack.Navigator>
    </>
  )
}
export default AppNavigator;




