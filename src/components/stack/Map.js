import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';

const Map = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
        
          latitude: 22.9676518483461,
          longitude: 76.05331113644581,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onRegionChange={x=>{
          console.log('map onRegionChange =', x)
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  map: {
   width:'100%',
   height:'100%'

  },
});

export default Map;
