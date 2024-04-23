import React from 'react';
import { Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Entypo';

import Services from './Services';
import SocialMedia from './SocilaMedia'
import Broucher from './Brouchere';
import ServiceTiming from './Timing';
import Reviews from './Reviews';
import Experience from './Experience';
import DriverService from './DriverService';

import Certificates from './Certificates';
import Offer from './Offer';
import DetailPage from './DetailPage';
import ShopGallery from './ShopGallery';
import AddProduct from './AddProduct';
import DriverDetailPage from './DriverDetailPage';
import EmployeeServices from './EmployeeServices';
const StackAndBottom = () => {

  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  return (
    <>
      <Stack.Navigator 
      screenOptions={{headerShown:false}}
      >
        <Stack.Screen name="DetailPage" component={DetailPage}/>
        <Stack.Screen name="DriverDetailPage" component={DriverDetailPage}/>
        <Stack.Screen name="Services" component={Services}/>
        <Stack.Screen name="EmployeeServices" component={EmployeeServices}/>

        <Stack.Screen name="DriverService" component={DriverService} />
        <Stack.Screen name="ShopGallery" component={ShopGallery}/>
        <Stack.Screen name="Offer" component={Offer}/>
        <Stack.Screen name="SocialMedia" component={SocialMedia}/>
        <Stack.Screen name="Broucher" component={Broucher}/>
        <Stack.Screen name="ServiceTiming" component={ServiceTiming}/>
        <Stack.Screen name="Reviews" component={Reviews}/>
        <Stack.Screen name="Experience" component={Experience}/>
        <Stack.Screen name="Certificates" component={Certificates}/>
        <Stack.Screen name="AddProduct" component={AddProduct}/>


      </Stack.Navigator>
    </>
  )
}
export default StackAndBottom;




