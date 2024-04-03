
import React, { useEffect } from 'react';

import { Text, View, Image, TouchableOpacity } from "react-native";
import LogoImg from "../images/blog.png"
import Icon from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { ActivityIndicator } from 'react-native-paper';

const ExploreNearServices = () => {
    const [data, setData] = React.useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        if (token) {
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
          const response = await axios.post('https://focusmore.codelive.info/api/service/list');
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

        <View style={{ backgroundColor: "#f2f2f2", width: 400, height: 800 }}>

            <View>

                <View style={{ backgroundColor: "white", display: "flex", alignItems: "flex-end", marginRight:10 }}>
                <Icon name="search1" size={24} color="blue" />
                </View>

                <View style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row" }}>



                    <View >
                        <View style={{ backgroundColor: "#61d836", height: 30, width: 130, display: "flex", alignItems: "center" }}>
                            <Text style={{ color: "white", fontSize: 14, padding: 3, paddingLeft: 20 }}>Near by Services</Text>
                        </View>
                    </View>


                    <View style={{ backgroundColor: "white", borderTopWidth: 1, height: 28, width: 100, display: "flex", alignItems: "center" }}>
                        <TouchableOpacity>
                            <Image source={require('../images/radius.jpg')} />
                        </TouchableOpacity>
                    </View>




                    <View>
                        <View style={{ backgroundColor: "white", borderTopWidth: 1, height: 28, width: 200, borderWidth: 1, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row" }}>
                            <Text style={{ fontSize: 15 }}>Select Category</Text>
                            <Image source={LogoImg} style={{ width: 20, height: 20, marginLeft: 10 }} />

                        </View>
                    </View>
                </View>
                <View style={{ display: "flex", alignItems: "center", justifyContent: "start", flexDirection: "row", flexWrap: "wrap" }}>

                    {data ? (
                        <>
                            {data.map((i) => (
                                <View style={{ display: "flex", alignItems: "center", justifyContent: "center", }}>
                                    <Image source={LogoImg} style={{ width: 80, height: 80, margin: 10 }} />
                                    <Text style={{ fontSize: 15, color: "black" }}>
                                        {i.name}
                                    </Text>
                                </View>
                            ))}
                        </>
                    ) : <ActivityIndicator size="large" color="black" style={{marginLeft: 160, marginTop: 200}}  />}

                </View>

            </View>
        </View>


    )
}
export default ExploreNearServices;