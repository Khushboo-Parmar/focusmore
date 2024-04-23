import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Image, Button, TouchableOpacity, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { ScrollView } from "react-native-gesture-handler";


const EmployeeServices = (props) => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {

        const token = await AsyncStorage.getItem('token');
        if (token) {

          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
          const response = await fetch('https://focusmore.codelive.info/api/get-employees-services', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
              employee_id:21
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
  }, []);


  // const handleServiceWishlist = async (serviceId) => {
  //   try {
  //     const token = await AsyncStorage.getItem('token');
  //     if (token) {
  //       axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  //       const response = await axios.post('https://focusmore.codelive.info/api/add-service-wishlist', {
  //         service_id: serviceId,
  //         action: 1
  //       });

  //       if (response.data.status === 200) {
  //         console.warn('Service added to wishlist successfully');

  //       } else {
  //         console.warn('Failed to add service to wishlist:', response.data.message);
  //       }
  //     }
  //   } catch (error) {
  //     console.log('Error adding service to wishlist:', error);
  //   }
  // }



  // const handleRequestService = async () => {
  //   try {
  //     const token = await AsyncStorage.getItem('token');
  //     if (token) {
  //       axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  //       const response = await axios.post('https://focusmore.codelive.info/api/add-services-request', {
  //         shop_id:1,
  //         employee_id:37,
  //         service_id:6,
  //         action:1
  //       });

  //       if (response.data.status === 200) {
  //         console.warn(' Reguest Service added successfully');

  //       } else {
  //         console.warn('Failed to add Request service', response.data.message);
  //       }
  //     }
  //   } catch (error) {
  //     console.log('Error adding service to wishlist:', error);
  //   }

  // }
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
               
                <View style={{ flexDirection: 'row', gap: 5,alignItems:'center' }}>
                <Text style={{ color: 'black', fontSize: 12, marginBottom: 15, letterSpacing:0.5}}>Service name: </Text>
                <Text style={{ color: 'red', fontWeight: '900', fontSize: 15, marginBottom: 15 }}>{i.service_name}</Text>
                </View>
                

                <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 5 ,marginTop:5}}>
                  <Text style={{ color: '#34a3ff', fontWeight: '500', fontSize: 12,letterSpacing:0.5 }}>Service Description:</Text>
                  <Text style={{ fontWeight: '900', fontSize: 12, color: 'black' }}>
                    {i.service_description}
                  </Text>
                </View>

                <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 5 ,marginTop:5}}>
                  <Text style={{ color: '#34a3ff', fontWeight: '500', fontSize: 12,letterSpacing:0.5 }}>Service Experience:</Text>
                  <Text style={{ fontWeight: '900', fontSize: 12, color: 'black' }}>
                    {i.service_experience}
                  </Text>
                </View>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 5 ,marginTop:5 }}>
                  <Text style={{ color: '#34a3ff', fontWeight: '500', fontSize: 12,letterSpacing:0.5 }}>Service area:</Text>
                  <Text style={{ fontWeight: '900', fontSize: 12, color: 'black' }}>
                    {i.service_areas}
                  </Text>
                </View>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 5 ,marginTop:5 }}>
                  <Text style={{ color: '#34a3ff', fontWeight: '500', fontSize: 12,letterSpacing:0.5 }}>Visiting charge:</Text>
                  <Text style={{ fontWeight: '900', fontSize: 12, color: 'black' }}>
                    {i.visiting_charge}
                  </Text>
                </View>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 5 ,marginTop:5 }}>
                  <Text style={{ color: '#34a3ff', fontWeight: '500', fontSize: 12,letterSpacing:0.5 }}>Service charge:</Text>
                  <Text style={{ fontWeight: '900', fontSize: 12, color: 'black' }}>
                    {i.service_charge}
                  </Text>
                </View>

                <View style={[styles.products, { marginTop: 5, marginBottom: 5, justifyContent: 'flex-end', marginTop: 30 }]}>
                  <TouchableOpacity 
                  // onPress={() => handleServiceWishlist(i.id)}
                  >
                    <Text style={{ color: '#0076ba', fontWeight: '900', fontSize: 11 }}>Add to Wishlist</Text>
                  </TouchableOpacity>

                  <TouchableOpacity 
                  // onPress={() => handleRequestService(i.id)}
                  >
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
export default EmployeeServices;

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