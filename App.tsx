import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/Login';
import Welcome from './components/Welcome';
import StartSearch from './components/StartSearch';

const App=()=>{

  const Stack = createNativeStackNavigator();
  return(

    <>
      <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="StarSearch" component={StartSearch} />
        
      </Stack.Navigator>
    </NavigationContainer>

    </>
  )

}
export default App;
