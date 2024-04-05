
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import productIcon from '../images/cart.jpg';
import callIcon from '../images/call.png'
import chatIcon from '../images/chat.png';
import mailIcon from '../images/mail.png';
import websiteIcon from '../images/web.png';
import star from '../images/star.png';
import Icon from 'react-native-vector-icons/AntDesign';
import { SelectList } from 'react-native-dropdown-select-list'
import { ScrollView } from 'react-native-gesture-handler';
import { ActivityIndicator } from 'react-native-paper';
// import CustomDropdown from './CustumDropdown';
import Dropdown from './Dropdown';

const ExploreNearShop = () => {
  const [data, setData] = React.useState(null);
  const navigation = useNavigation();
  const [selected, setSelected] = React.useState("");

  const datadropdown = [
    { key: '1', value: 'Product' },
    { key: '2', value: 'Classified' },
    { key: '3', value: 'Driver' },
    { key: '4', value: 'test' },
    { key: '5', value: 'Test' },
    { key: '6', value: 'Test' },
  ]

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        if (token) {
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
          const response = await axios.post('https://focusmore.codelive.info/api/shop/list');
          setData(response.data.data);
          console.warn('explore shop= ', response);
        }
      } catch (error) {
        console.error('Error fetching nearby shops:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <View style={{ flex: 1 }}>

      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%', height: 30, backgroundColor: 'white', justifyContent: 'space-between' }}>

        <TextInput>

        </TextInput>
        <TouchableOpacity>
          <Icon name="search1" size={24} color="blue" />
        </TouchableOpacity>

      </View>


      <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', }}>
        <View style={{ backgroundColor: "#61d836", margin: 0, height: 40 }}>
          <Text style={{ color: 'white', fontSize: 20, padding: 8 }}>Near by Shops</Text>
        </View>
        <View style={{ position: 'relative', right: 210, top: 10, zIndex: 9999 }}>
          <TouchableOpacity>
            <Image source={require('../images/radius.jpg')} />
          </TouchableOpacity>
        </View>

        <View style={styles.selectlistContainer}>
          <SelectList
            setSelected={(val) => setSelected(val)}
            data={datadropdown}
            save="value"
            style={{ color: 'red' }}
          />


        </View>

        {/* <View style={styles.selectlistContainer}>
        <Dropdown />
        </View> */}
      </View>


      <ScrollView>
        {data ? (
          <>
            {data.map((i) => (

              <View style={{ display: 'flex', flexDirection: 'row', padding: 10, justifyContent: 'space-between' }}>

                <View style={{ alignItems: 'center' }}>
                  <TouchableOpacity>
                    <Image
                      source={{ uri: i.image }}
                      style={{ width: 100, height: 80 }}
                    />
                  </TouchableOpacity>
                  <Text style={{ fontSize: 10, textAlign: 'center', width: 80, fontWeight: '600', color: 'black' }}>{i.name} </Text>
                  <Text style={{ fontSize: 10, fontWeight: '600', color: 'black' }}> 0.5 Kms</Text>
                </View>

                <TouchableOpacity onPress={() =>
                  navigation.navigate('BottomNavPage', {
                    screen: 'StackAndBottom',
                    params: {
                      screen: 'DetailPage',
                      params: { data: [{ id: i.id, name: i.name, address: i.address, phone: i.phone, description: i.description }] }
                    }
                  })}>

                  <View style={{ backgroundColor: 'white', padding: 5, width: 260 }}>
                    <View style={{ display: "flex", justifyContent: 'space-between', flexDirection: 'row' }} >
                      <View>
                        <Text style={{ fontSize: 7, fontWeight: '500', color: 'black' }}>ELECTRONICS & Home Appliance</Text>
                        <Text style={{ fontSize: 15, fontWeight: '500', color: 'black' }}>{i.name}</Text>
                        <View style={{ display: 'flex', flexDirection: 'row', marginVertical: 6 }}>
                          <Image source={star} style={{ width: 11, height: 11 }} />
                          <Image source={star} style={{ width: 11, height: 11, marginHorizontal: 5 }} />
                          <Image source={star} style={{ width: 11, height: 11 }} />
                          <Image source={star} style={{ width: 11, height: 11, marginHorizontal: 5 }} />
                          <Image source={star} style={{ width: 11, height: 11 }} />
                          <Image source={star} style={{ width: 11, height: 11, marginHorizontal: 5 }} />
                        </View>
                        <Text style={{ fontSize: 12,color: 'black' }}>{i.address}</Text>

                      </View>
                      <View style={{ alignSelf: 'center' }}>
                        <Image source={require('../images/shops.png')} style={{ width: 40, height: 40 }}></Image>
                      </View>
                    </View>


                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>

                      <View style={{ display: "flex", alignItems: "center" }}>
                        <Image source={productIcon} style={{ width: 25, height: 20 }} />
                        <Text style={{ fontSize: 10, color: 'black' }}>Products</Text>
                      </View>


                      <View style={{ display: "flex", alignItems: "center" }} >
                        <Image source={callIcon} style={{ width: 20, height: 20 }} />
                        <Text style={{ fontSize: 10, color: 'black' }}>Call</Text>
                      </View>

                      <View style={{ display: "flex", alignItems: "center" }}>
                        <Image source={chatIcon} style={{ width: 20, height: 20 }} />
                        <Text style={{ fontSize: 10, color: 'black' }}>Chat</Text>
                      </View>

                      <View style={{ display: "flex", alignItems: "center" }}>
                        <Image source={mailIcon} style={{ width: 20, height: 20 }} />
                        <Text style={{ fontSize: 10, color: 'black' }}>Mail</Text>
                      </View>

                      <View style={{ display: "flex", alignItems: "center" }}>
                        <Image source={websiteIcon} style={{ width: 20, height: 20 }} />
                        <Text style={{ fontSize: 10, color: 'black' }}>Website</Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            ))}
          </>
        ) : <ActivityIndicator size="large" color="black" style={{ marginTop: 200 }} />}
      </ScrollView>

    </View>
  );
}

export default ExploreNearShop;



const styles = StyleSheet.create({
  selectlistContainer: {
    width: 180,
    zIndex: 999,
    position: 'absolute',
    right: 0,
    backgroundColor: 'white',
    color: 'black'
  },








});