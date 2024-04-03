import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const NearByShop = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        if (token) {
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
          const response = await axios.post('https://focusmore.codelive.info/api/shop/list');
          setData(response.data.data);
          console.warn(response);
        }
      } catch (error) {
        console.error('Error fetching nearby shops:', error);
      }
    };

    fetchData();
  }, []);

  const navigation = useNavigation();

  const handleExplore = () => {
    navigation.navigate('ExploreNearShop');
  };
  return (
    <View style={styles.componentr2}>
      <Text style={styles.nearbyboxr}>Nearby Shop</Text>
      <View style={styles.flexboxr}>
        {data ? (
          <>
            {data.slice(0, 3).map((shop) => (
              <View style={styles.imagesbox} key={shop.id}>

                <TouchableOpacity onPress={() =>
                  navigation.navigate('BottomNavPage', {
                    screen: 'StackAndBottom',
                    params: {
                      screen: 'DetailPage',
                      params: { data: [{ id: shop.id, name: shop.name, address: shop.address, phone: shop.phone,description:shop.description }] }
                    }
                  })}>
         
                  <Image
                    source={{ uri: shop.image }}
                    style={styles.nearbyimg}
                  />
                </TouchableOpacity>

                <View>
                  <Text style={styles.textCenter}>{shop.name}</Text>
                  <Text style={styles.textCenter}>0.5 kms</Text>
                </View>
              </View>
            ))}
          </>
        ) : (
          <Text>Loading...</Text>
        )}
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
    width: 125,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 7,
    paddingBottom: 7,
    textAlign: 'center',
    marginLeft: 20,
  },
  flexboxr: {
    backgroundColor: '#edeaea',
    width: 390,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 25,
    paddingBottom: 25,
    paddingLeft: 30,
    paddingRight: 30,
    gap: 40,
  },
  nearbyimg: {
    marginBottom: 10,
    width:80,
    height:80,

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

export default NearByShop;
