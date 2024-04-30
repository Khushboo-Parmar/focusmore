import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Product from './Product';
import Call from './Call';
import Chat from './Chat';
import Mail from './Mail';
import Website from './Website';
import { Image } from 'react-native';
import productIcon from '../images/cart.jpg';
import homeIcon from '../images/home.png';
import callIcon from '../images/call.png'
import chatIcon from '../images/chat.png';
import mailIcon from '../images/mail.png';
import websiteIcon from '../images/web.png';
import StackAndBottom from './stackbottom/StackAndBottom';
const BottomNavPage = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconSource;

          switch (route.name) {
            case 'StackAndBottom':
              iconSource = focused ? homeIcon : homeIcon;
              break;
            case 'StackAndBottom':
              iconSource = focused ? productIcon : productIcon;
              break;
            case 'Call':
              iconSource = focused ? callIcon : callIcon;
              break;
            case 'Chat':
              iconSource = focused ? chatIcon : chatIcon;
              break;
            case 'Mail':
              iconSource = focused ? mailIcon : mailIcon;
              break;
            case 'Website':
              iconSource = focused ? websiteIcon : websiteIcon;
              break;
            default:
              iconSource = productIcon;
          }
          const iconSize = focused ? size + 5 : size;
          return <Image source={iconSource} style={{ width: iconSize, height: iconSize }} />;
        },
      })}
    >
      <Tab.Screen
            options={{
              tabBarLabel: 'Home',
            
            }} name="StackAndBottom" component={StackAndBottom}
     />

      <Tab.Screen name="Product" component={Product}
      />
      <Tab.Screen name="Call" component={Call} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Mail" component={Mail} />
      <Tab.Screen name="Website" component={Website} />
    </Tab.Navigator>
  )
}
export default BottomNavPage;
