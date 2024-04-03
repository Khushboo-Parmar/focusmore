
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
import CustomDropdown from './CustumDropdown';




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
        <View style={{position:'relative',right:210 ,top:10, zIndex:9999}}>
          <TouchableOpacity>
            <Image source={require('../images/radius.jpg')} />
          </TouchableOpacity>
        </View>

        <View style={styles.selectlistContainer}>
          <SelectList
            setSelected={(val) => setSelected(val)}
            data={datadropdown}
            save="value"
            // style={styles.selectlist}
            // textStyle={{ color: 'red' }}
            style={{ color: 'red' }}
          />
     

        </View>
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
                  <Text style={{color:'black', fontSize: 15, textAlign: 'center', width: 80, }}>{i.name} </Text>
                  <Text style={{ fontSize: 15,color:'black' }}> 0.5 Kms</Text>
                </View>


                <TouchableOpacity onPress={() =>
                  navigation.navigate('BottomNavPage', {
                    screen: 'StackAndBottom',
                    params: {
                      screen: 'DetailPage',
                      params: { data: [{ id: i.id, name: i.name, address: i.address, phone: i.phone }] }
                    }
                  })}>

                  <View style={{ backgroundColor: 'white', padding: 5 }}>
                    <View style={{ display: "flex", justifyContent: 'space-between', flexDirection: 'row' }} >
                      <View>
                        <Text style={{ fontSize: 14 ,color:'black'}}>ELECTRONICS & Home Appliance</Text>
                        <Text style={{ fontSize: 18, color:'black'}}>{i.name}</Text>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                          <Image source={star} style={{ width: 15, height: 15 }} />
                          <Image source={star} style={{ width: 15, height: 15 }} />
                          <Image source={star} style={{ width: 15, height: 15 }} />
                          <Image source={star} style={{ width: 15, height: 15 }} />
                          <Image source={star} style={{ width: 15, height: 15 }} />
                          <Image source={star} style={{ width: 15, height: 15 }} />
                        </View>
                        <Text style={{ fontSize: 16,color:'black' }}>{i.address}</Text>

                      </View>
                      <View style={{ alignSelf: 'center' }}>
                        <Image source={require('../images/shops.png')} style={{ width: 40, height: 40 }}></Image>
                      </View>
                    </View>


                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>

                      <View style={{ display: "flex", alignItems: "center" }}>
                        <Image source={productIcon} style={{ width: 25, height: 20 }} />
                        <Text style={{ fontSize: 10,color:'black' }}>Products</Text>
                      </View>


                      <View style={{ display: "flex", alignItems: "center" }} >
                        <Image source={callIcon} style={{ width: 20, height: 20 }} />
                        <Text style={{ fontSize: 10,color:'black' }}>Call</Text>
                      </View>

                      <View style={{ display: "flex", alignItems: "center" }}>
                        <Image source={chatIcon} style={{ width: 20, height: 20 }} />
                        <Text style={{ fontSize: 10 ,color:'black'}}>Chat</Text>
                      </View>

                      <View style={{ display: "flex", alignItems: "center" }}>
                        <Image source={mailIcon} style={{ width: 20, height: 20 }} />
                        <Text style={{ fontSize: 10 }}>Mail</Text>
                      </View>

                      <View style={{ display: "flex", alignItems: "center" }}>
                        <Image source={websiteIcon} style={{ width: 20, height: 20 }} />
                        <Text style={{ fontSize: 10,color:'black'}}>Website</Text>
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
    width: '50%',
    zIndex: 999,
    position:'absolute',
    right:0,
    backgroundColor:'white',
    color:'black'
  },



   

    

  
});