import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const NearByServices = () => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');

  const navigation=useNavigation();

  const handleExplore=()=>{
    navigation.navigate('ExploreNearShop');

  }

  return (
    <View style={styles.componentr2}>

      <Text style={styles.nearbyboxr}>Near by Services</Text>
      <View style={styles.flexboxr}>
        <View style={styles.imagesbox}>
          <Image source={require('../images/bajaj.png')} style={styles.nearbyimg} />
          <View>
            <Text style={styles.textCenter}>Bajaj Electronics</Text>
            <Text style={styles.textCenter}>0.5 kms</Text>

          </View>
        </View>

        <View style={styles.imagesbox}>
          <Image source={require('../images/bajaj.png')} style={styles.nearbyimg} />
          <View>
            <Text style={styles.textCenter}>Havells</Text>

            <Text style={styles.textCenter}>0.6 kms</Text>

          </View>




        </View>

        <View>
          <Image source={require('../images/bajaj.png')} style={styles.nearbyimg} />
            <View>
            <Text style={styles.textCenter}>Universal Book Store</Text>
            <Text style={styles.textCenter}>0.8 kms</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity onPress={handleExplore}>
          <Text style={styles.exploretext}>Explore More</Text>
          </TouchableOpacity>
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
    width: '38%',
    paddingLeft: 2,
    paddingRight: 2,
    paddingTop: 7,
    paddingBottom: 7,
    textAlign: 'center',
    marginLeft: 20,
  },
  flexboxr: {
    backgroundColor: '#edeaea',
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
    gap: 40,
  },
  nearbyimg: {
    marginBottom: 10,
  },
  textCenter: {
    textAlign: 'center',
    width: 75,
    color: 'black',
    fontSize: 11,
  },
  exploretext: {
    marginTop: 30,
    width: 50,
    textAlign: 'center',
    color: '#6ec8f8',
    fontFamily: 'math',
  },
});

export default NearByServices;
