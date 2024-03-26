import React from 'react';
import {Text, View,} from 'react-native';
import BottomNavPage from '../tab/BottomNavPage'



const DrawerScreenFirst=()=>{

  return(
    
       <View style={{flex:1}}>
      <Text>First drawer == bottom navigator </Text>

      <BottomNavPage />
      </View>
   
  )
}
export default DrawerScreenFirst;
