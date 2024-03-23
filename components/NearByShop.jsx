import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image } from 'react-native';

const NearByShop = () => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');

  return (
    <View style={styles.componentr2}>

      <Text style={styles.nearbyboxr}>Near by Shop</Text>
      <View style={styles.flexboxr}>
        <View style={styles.imagesbox}>
          <Image source={require('../images/bajaj.png')} style={styles.nearbyimg} />
          <Text style={styles.textCenter}>Bajaj
            Electronics
            0.5 kms</Text>
        </View>

        <View style={styles.imagesbox}>
          <Image source={require('../images/bajaj.png')} style={styles.nearbyimg} />
          <Text style={styles.textCenter}>Havells
            0.6 kms</Text>
        </View>

        <View>
          <Image source={require('../images/bajaj.png')} style={styles.nearbyimg} />
          <Text style={styles.textCenter}>Universal Book Store
            0.8 kms</Text>
        </View>

        <View style={styles.explore}>
          <Text>Explore more</Text>
        </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  componentr2: {
    marginTop: 30,
  },
  nearbyboxr: {
    backgroundColor: '#61d836',
    fontSize: 18,
    color: '#fff',
    width: 125,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 7,
    paddingBottom: 7,
    textAlign: 'center',
    marginLeft: 20,
  },
  flexboxr: {
    backgroundColor: '#f1f1f1',
    // height: 'windowHeight',
    width: 390,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    // alignItems: 'center',
    paddingTop: 25,
    paddingBottom: 25,
    paddingLeft: 30,
    paddingRight: 30,
    gap: 20,
  },
  nearbyimg: {
    marginBottom: 10,
  },
  textCenter: {
    textAlign: 'center',
    width: 95,
  },
  explore: {
    marginTop: 30
  }
});

export default NearByShop;
