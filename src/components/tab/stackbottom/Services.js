

import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Image, Button, TouchableOpacity, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { ScrollView } from "react-native-gesture-handler";


const Services = (props) => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {

        const token = await AsyncStorage.getItem('token');
        if (token) {

          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
          const response = await fetch('https://focusmore.codelive.info/api/shop/services', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
              shop_id: props.route.params?.id
            }),
          });

          const responseData = await response.json();
          setData(responseData.data);
          console.warn(responseData)
        }
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, [props.route.params?.id]);


  const handleServiceWishlist = async (serviceId) => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        const response = await axios.post('https://focusmore.codelive.info/api/add-service-wishlist', {
          service_id: serviceId,
          action: 1
        });

        if (response.data.status === 200) {
          console.warn('Service added to wishlist successfully');

        } else {
          console.warn('Failed to add service to wishlist:', response.data.message);
        }
      }
    } catch (error) {
      console.log('Error adding service to wishlist:', error);
    }
  }



  const handleRequestService = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        const response = await axios.post('https://focusmore.codelive.info/api/add-services-request', {
          shop_id:1,
          employee_id:37,
          service_id:6,
          action:1
        });

        if (response.data.status === 200) {
          console.warn(' Reguest Service added successfully');

        } else {
          console.warn('Failed to add Request service', response.data.message);
        }
      }
    } catch (error) {
      console.log('Error adding service to wishlist:', error);
    }

  }
  return (
    <>
      <View style={styles.container}>

        <View style={styles.header}>
          <Text>Services</Text>
        </View>

        <View>
          <Text>
            Search
          </Text>
        </View>

      </View>
      <ScrollView>

        {data?.length ? (
          <>
            {data.map((i) => (
              <View style={{ padding: 10, borderBottomWidth: 2, borderBottomColor: '#ababab' }}>
                <Text style={{ color: 'red', fontWeight: '900', marginLeft: 30, fontSize: 15, marginBottom: 15 }}>{i.name}</Text>

                <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 5 }}>
                  <Text style={{ color: '#34a3ff', fontWeight: '900', fontSize: 11 }}>Description:</Text>
                  <Text style={{ fontWeight: '900', fontSize: 11, color: 'black' }}>
                    {/* Samsung TV's, Washing machines, Micro Ovens, Refrigerators can
                  be repaired by our authorized Samsung Company Engineer. This
                  is a home Service you can send your request for further details/services. */}
                    {i.description}
                  </Text>
                </View>

                <View style={[styles.products, { marginTop: 5, marginBottom: 5, justifyContent: 'flex-end', marginTop: 30 }]}>
                  <TouchableOpacity onPress={() => handleServiceWishlist(i.id)}>
                    <Text style={{ color: '#0076ba', fontWeight: '900', fontSize: 11 }}>Add to Wishlist</Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => handleRequestService(i.id)}>
                    <Text style={{ color: 'red', fontWeight: '900', marginLeft: 20, fontSize: 11 }}>Request Service</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </>
        ) : <Text style={{ alignSelf: 'center', marginTop: 200, color: 'black' }}>No Data Found</Text>
        }
      </ScrollView>
    </>)
}
export default Services;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#73fdea',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 10
  },
  products: {
    flexDirection: 'row',
  }
});