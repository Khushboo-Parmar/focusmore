import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Image, Button, TouchableOpacity, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const Offer = (props) => {
  const [data, setData] = React.useState(null);
  // console.warn(props.route.params); // Check if id is accessible here

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        if (token) {

          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
          const response = await fetch('https://focusmore.codelive.info/api/get-shop-offer', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
              shop_id: props.route.params?.shopid,
              product_id: props.route.params?.id
            }),
          });

          const responseData = await response.json();
          console.warn(responseData)
          setData(responseData.data);
        }
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, [props.route.params?.id]);
  return (
    <>
      {data?.length >= 1 ? (
        <>
          <View>

            <View style={{ position: 'relative', width: '100%', height: 200 }}>
              <Image
                source={{ uri: 'https://cdn0.desidime.com/attachments/photos/899348/medium/2.png?1688303047' }}
                style={{ width: '100%', height: '100%' }}
              />
              <View style={{ position: 'absolute', bottom: 0, right: 0, padding: 10, borderCurve: 20 }}>
                <TouchableOpacity style={{ backgroundColor: 'black', width: 125, alignItems: 'center', paddingVertical: 7, borderRadius: 13 }}>
                  <Text style={{ color: 'white', fontWeight: '500' }}>Open</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ position: 'relative', width: '100%', height: 200 }}>
              <Image
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn0JH573UMu4NueBFAcAk9H-sD0PEq6GvgpA&s' }}
                style={{ width: '100%', height: '100%' }}
              />
              <View style={{ position: 'absolute', bottom: 0, right: 0, padding: 10, borderCurve: 20 }}>
                <TouchableOpacity style={{ backgroundColor: 'black', width: 125, alignItems: 'center', paddingVertical: 7, borderRadius: 13 }}>
                  <Text style={{ color: 'white', fontWeight: '500' }}>Open</Text>
                </TouchableOpacity>
              </View>
            </View>


            <View style={{ borderWidth: 2, borderColor: '#ababab', paddingVertical: 10, marginTop: 1 }}>

              <View style={{ alignItems: 'center' }}>
                <Text style={{ color: '#0176ba', fontSize: 24, fontWeight: '900' }}>
                  SAMSUNG PRO SERIES LED TV's
                </Text>
                <Text style={{ color: '#ee220c', fontSize: 24, fontWeight: '900' }}>
                  5% Discount on MRP
                </Text>
                <Text style={{ color: '#ff9300', fontSize: 24, fontWeight: '900' }}>
                  Sale starts 10th Oct, 11 AM
                </Text>

              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 10, marginRight: 10 }}>
                <TouchableOpacity style={{ backgroundColor: '#00a2ff', width: 125, alignItems: 'center', paddingVertical: 7, borderRadius: 13 }}>
                  <Text style={{ alignItems: 'flex-end', color: 'white', fontWeight: '500' }}>Notify</Text>
                </TouchableOpacity>
              </View>
            </View>


          </View>
        </>
      ) : <Text style={{ alignSelf: 'center', marginTop: 200, color: 'black' }}>No Offers  Found</Text>}


    </>)
}
export default Offer;