import React from 'react';
import {Text, View,} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Product from './Product';
import Call from './Call';
import Chat from './Chat';
import Mail from './Mail';
import Website from './Website';



const BottomNavPage=()=>{
    const Tab = createBottomTabNavigator();

  return(
        <Tab.Navigator  screenOptions={{
            headerShown: false,
            // tabBarActiveTintColor: 'blue', 
            // tabBarInactiveTintColor: 'black',
            // tabBarStyle: {
        
            // },
          }}>
          <Tab.Screen name="Product" component={Product} />
          <Tab.Screen name="Call" component={Call} />
          <Tab.Screen name="Chat" component={Chat} />
          <Tab.Screen name="Mail" component={Mail} />
          <Tab.Screen name="Website" component={Website} />
        </Tab.Navigator>
  )
}
export default BottomNavPage;
