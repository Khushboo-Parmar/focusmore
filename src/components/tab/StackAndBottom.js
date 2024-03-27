import React from 'react';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Entypo';
import DetailPage1 from './DetailPage1';



const StackAndBottom = () => {

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
       
        <Stack.Screen name="DetailPage" component={DetailPage1} />
   
      </Stack.Navigator>
    </>
  )
}
export default StackAndBottom;




