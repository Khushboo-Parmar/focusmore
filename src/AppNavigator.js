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
import ExploreClassified from './components/stack/ClassifiedDetails';
import Location from './components/stack/Location';
import MobileRegistration from './components/stack/MobileRegistration';
import OtpRegistration from './components/stack/OtpRegistration';
import { UseSelector, useSelector } from 'react-redux';
import BusinessAdd from './components/stack/BusinessAdd';
import { SignUp } from './components/stack/SingUpSingIn';
import RealState from './components/stack/RealState';
import Map from './components/stack/Map';
import Rent from './components/stack/Rent';
import AddBusiness from './components/stack/AddBusiness';
import Search from './components/stack/Search';
import AddClasified from './components/stack/Vendore/AddClassified';
import AddServices from './components/stack/Vendore/AddServcices';
import AddShopOffer from './components/stack/Vendore/AddShopOffer';
import AddShopGallery from './components/stack/Vendore/AddShopGallery';
import AddBrouche from './components/stack/Vendore/AddShopBrouchre';
import AddEmployee from './components/stack/AddEmployee';
import ClassifiedDetails from './components/stack/ClassifiedDetails';
import ExploreClassifiedList from './components/stack/ExploreClassifiedList';
import AddCategory from './components/stack/Vendore/AddCategory';
import AddLanguage from './components/stack/Vendore/Addlanguage';
// import AddCategory from './components/tab/stackbottom/AddCategory';
import Dashboard from './components/stack/Vendore/DashBoard';
import AddEmployeServices from './components/stack/Vendore/AddEmployeServices';
import AddEmployeExpirence from './components/stack/Vendore/AddEmployeExpirence';
import AddVendoreOffer from './components/stack/Vendore/AddVenoreOffer';
import AddCertiffect from './components/stack/Vendore/AddCertiffect';
import AddHomeBanner from './components/stack/Vendore/AddHomeBanner';
import Profile from './components/stack/Vendore/Profile';
import ProductDetail from './components/stack/Productdetailpage';
const AppNavigator = () => {
  const item = useSelector((state)=> state.token)
  const location = useSelector((state)=> state.location)
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  console.log(item)
  console.warn(location)
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

        {!item?.length  ? (
          <><Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
           <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} /></>
         
        ):(
          <>
                  {/* <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} /> */}
                  <Stack.Screen
          name="StartSearch"
          component={StartSearch}
          options={{
            headerTitle: '',
            headerRight: () => (
              <>
                <Text style={{ color: '#fff', marginRight: 5, fontSize: 16 }}>{location ? (location[1]):('')}</Text>
                <Icon name="location-pin" size={20} color="#fff" />
              </>
            ),
          }}
        />

        <Stack.Screen name="ExploreNearShop" component={ExploreNearShop} options={{
          headerTitle: '',
          headerRight: () => (
            <>
              <Text style={{ color: '#fff', marginRight: 5 }}>{location ? (location[1]):('')}</Text>
              <Icon name="location-pin" size={20} color="#fff" />
            </>
          ),
        }} />
        <Stack.Screen name="ExploreNearServices" component={ExploreNearServices} options={{
          headerTitle: '',
          headerRight: () => (
            <>
              <Text style={{ color: '#fff', marginRight: 5 }}>{location ? (location[1]):('')}</Text>
              <Icon name="location-pin" size={20} color="#fff" />
            </>
          ),
        }} />
 
        <Stack.Screen name="ExploreClassifiedList" component={ExploreClassifiedList}
          options={{
            headerTitle: '',
            headerRight: () => (
              <>
                <Text style={{ color: '#fff', marginRight: 5, fontSize: 16 }}>{location ? (location[1]):('')}</Text>
                <Icon name="location-pin" size={20} color="#fff" />
              </>
            ),
          }} />
        <Stack.Screen name="ClassifiedDetails" component={ClassifiedDetails}
          options={{
            headerTitle: '',
            headerRight: () => (
              <>
                <Text style={{ color: '#fff', marginRight: 5, fontSize: 16 }}>{location ? (location[1]):('')}</Text>
                <Icon name="location-pin" size={20} color="#fff" />
              </>
            ),
          }} />

        <Stack.Screen name="Location" component={Location}
     options={{ headerShown: false }}
           />

<Stack.Screen name="Map" component={Map}
         options={{ headerShown: false }} />
        <Stack.Screen name="MobileRegistration" component={MobileRegistration}
          options={{
            headerTitle: '',
            headerRight: () => (
              <>
                <Text style={{ color: '#fff', marginRight: 5, fontSize: 16 }}>{location ? (location[1]):('')}</Text>
                <Icon name="location-pin" size={20} color="#fff" />
              </>
            ),
          }} />
        <Stack.Screen name="OtpRegistration" component={OtpRegistration}
          options={{
            headerTitle: '',
            headerRight: () => (
              <>
                <Text style={{ color: '#fff', marginRight: 5, fontSize: 16 }}>{location ? (location[1]):('')}</Text>
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
                <Text style={{ color: '#fff', marginRight: 5, fontSize: 16 }}>{location ? (location[1]):('')}</Text>
                <Icon name="location-pin" size={20} color="#fff" />
              </>
            ),
          }} />

          
        <Stack.Screen name="AddBusiness" component={AddBusiness}
          options={{
            headerTitle: '',
            headerRight: () => (
              <>
                <Text style={{ color: '#fff', marginRight: 5, fontSize: 16 }}>{location ? (location[1]):('')}</Text>
                <Icon name="location-pin" size={20} color="#fff" />
              </>
            ),
          }} />
          
     

<Stack.Screen name="resgistration" component={SignUp}
          options={{
            headerTitle: '',
            headerRight: () => (
              <>
                <Text style={{ color: '#fff', marginRight: 5, fontSize: 16 }}>{location ? (location[1]):('')}</Text>
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
                <Text style={{ color: '#fff', marginRight: 5, fontSize: 16 }}>{location ? (location[1]):('')}</Text>
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
                <Text style={{ color: '#fff', marginRight: 5, fontSize: 16 }}>{location ? (location[1]):('')}</Text>
                <Icon name="location-pin" size={20} color="#fff" />
              </>
            ),
          }}
        />
   <Stack.Screen name="Search" component={Search}
          options={{
            headerTitle: '',
            headerRight: () => (
              <>
                <Text style={{ color: '#fff', marginRight: 5, fontSize: 16 }}>{location ? (location[1]):('')}</Text>
                <Icon name="location-pin" size={20} color="#fff" />
              </>
            ),
          }}
        />
        <Stack.Screen name="BottomNavPage" component={BottomNavPage} options={{
          headerTitle: '',
          headerRight: () => (
            <>
              <Text style={{ color: '#fff', marginRight: 5, fontSize: 16 }}>{location ? (location[1]):('')}</Text>
              <Icon name="location-pin" size={20} color="#fff" />
            </>
          ),
        }} />
        <Stack.Screen name="AddClassifieds" component={AddClasified} options={{
          headerTitle: '',
          headerRight: () => (
            <>
              <Text style={{ color: '#fff', marginRight: 5, fontSize: 16 }}>{location ? (location[1]):('')}</Text>
              <Icon name="location-pin" size={20} color="#fff" />
            </>
          ),
        }} />

<Stack.Screen name="AddServices" component={AddServices} options={{
          headerTitle: '',
          headerRight: () => (
            <>
              <Text style={{ color: '#fff', marginRight: 5, fontSize: 16 }}>{location ? (location[1]):('')}</Text>
              <Icon name="location-pin" size={20} color="#fff" />
            </>
          ),
        }} />

<Stack.Screen name="AddShopOffer" component={AddShopOffer} options={{
          headerTitle: '',
          headerRight: () => (
            <>
              <Text style={{ color: '#fff', marginRight: 5, fontSize: 16 }}>{location ? (location[1]):('')}</Text>
              <Icon name="location-pin" size={20} color="#fff" />
            </>
          ),
        }} />

<Stack.Screen name="AddShopGallery" component={AddShopGallery} options={{
          headerTitle: '',
          headerRight: () => (
            <>
              <Text style={{ color: '#fff', marginRight: 5, fontSize: 16 }}>{location ? (location[1]):('')}</Text>
              <Icon name="location-pin" size={20} color="#fff" />
            </>
          ),
        }} />

<Stack.Screen name="AddBrouche" component={AddBrouche} options={{
          headerTitle: '',
          headerRight: () => (
            <>
              <Text style={{ color: '#fff', marginRight: 5, fontSize: 16 }}>{location ? (location[1]):('')}</Text>
              <Icon name="location-pin" size={20} color="#fff" />
            </>
          ),
        }} />

       
<Stack.Screen name="AddEmployee" component={AddEmployee}
          options={{
            headerTitle: '',
            headerRight: () => (
              <>
                <Text style={{ color: '#fff', marginRight: 5, fontSize: 16 }}>{location ? (location[1]):('')}</Text>
                <Icon name="location-pin" size={20} color="#fff" />
              </>
            ),
          }} />
<Stack.Screen name="AddCategory" component={AddCategory}
          options={{
            headerTitle: '',
            headerRight: () => (
              <>
                <Text style={{ color: '#fff', marginRight: 5, fontSize: 16 }}>{location ? (location[1]):('')}</Text>
                <Icon name="location-pin" size={20} color="#fff" />
              </>
            ),
          }} />





<Stack.Screen name="AddLanguage" component={AddLanguage} options={{
          headerTitle: '',
          headerRight: () => (
            <>
              <Text style={{ color: '#fff', marginRight: 5, fontSize: 16 }}>{location ? (location[1]):('')}</Text>
              <Icon name="location-pin" size={20} color="#fff" />
            </>
          ),
        }} />


<Stack.Screen name="Dashboard" component={Dashboard} options={{
          headerTitle: '',
          headerRight: () => (
            <>
              <Text style={{ color: '#fff', marginRight: 5, fontSize: 16 }}>{location ? (location[1]):('')}</Text>
              <Icon name="location-pin" size={20} color="#fff" />
            </>
          ),
        }} />

<Stack.Screen name="AddEmployeServices" component={AddEmployeServices} options={{
          headerTitle: '',
          headerRight: () => (
            <>
              <Text style={{ color: '#fff', marginRight: 5, fontSize: 16 }}>{location ? (location[1]):('')}</Text>
              <Icon name="location-pin" size={20} color="#fff" />
            </>
          ),
        }} />

<Stack.Screen name="AddEmployeExpirence" component={AddEmployeExpirence} options={{
          headerTitle: '',
          headerRight: () => (
            <>
              <Text style={{ color: '#fff', marginRight: 5, fontSize: 16 }}>{location ? (location[1]):('')}</Text>
              <Icon name="location-pin" size={20} color="#fff" />
            </>
          ),
        }} />

<Stack.Screen name="AddVendoreOffer" component={AddVendoreOffer} options={{
          headerTitle: '',
          headerRight: () => (
            <>
              <Text style={{ color: '#fff', marginRight: 5, fontSize: 16 }}>{location ? (location[1]):('')}</Text>
              <Icon name="location-pin" size={20} color="#fff" />
            </>
          ),
        }} />

<Stack.Screen name="AddCertiffect" component={AddCertiffect} options={{
          headerTitle: '',
          headerRight: () => (
            <>
              <Text style={{ color: '#fff', marginRight: 5, fontSize: 16 }}>{location ? (location[1]):('')}</Text>
              <Icon name="location-pin" size={20} color="#fff" />
            </>
          ),
        }} />
        
        <Stack.Screen name="AddHomeBanner" component={AddHomeBanner} options={{
          headerTitle: '',
          headerRight: () => (
            <>
              <Text style={{ color: '#fff', marginRight: 5, fontSize: 16 }}>{location ? (location[1]):('')}</Text>
              <Icon name="location-pin" size={20} color="#fff" />
            </>
          ),
        }} />
                <Stack.Screen name="Profile" component={Profile} options={{
          headerTitle: '',
          headerRight: () => (
            <>
              <Text style={{ color: '#fff', marginRight: 5, fontSize: 16 }}>Koti, Hyderabad</Text>
              <Icon name="location-pin" size={20} color="#fff" />
            </>
          ),
        }} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} options={{
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




