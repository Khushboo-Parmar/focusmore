import React, { useEffect } from 'react';
import { Text, View, Image, TouchableOpacity } from "react-native";
// import LogoImg from "../images/blog.png"
import Icon from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { ActivityIndicator } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

const ExploreClassifiedList = () => {
    const [data, setData] = React.useState(null);
    const navigation = useNavigation();


    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = await AsyncStorage.getItem('token');
                if (token) {
                    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                    const response = await axios.post('https://focusmore.codelive.info/api/classifield/list');
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

        <View style={{ backgroundColor: "#f2f2f2", flex: 1 }}>

            <View>

                <View style={{ backgroundColor: "white", display: "flex", alignItems: "flex-end", marginRight: 20 }}>
                    <Icon name="search1" size={24} color="blue" />
                </View>

                <View style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row" }}>
                    <View >
                        <View style={{ backgroundColor: "#61d836", height: 30, width: 130, display: "flex", alignItems: "center" }}>
                            <Text style={{ color: "white", fontSize: 14, padding: 3, paddingLeft: 20 }}>Near by Classified</Text>
                        </View>
                    </View>

                    <View style={{ borderColor: '#a5a5a5', backgroundColor: "white", borderTopWidth: 1, height: 28, width: 50, paddingHorizontal: 10 }}>
                        <TouchableOpacity>
                            <Image source={require('../images/radius.jpg')} />
                        </TouchableOpacity>
                    </View>

                    <View>
                        <View style={{ borderColor: '#a5a5a5', backgroundColor: "white", borderTopWidth: 1, height: 29, width: 250, borderWidth: 1, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row" }}>
                            <Text style={{ fontSize: 15, color: '#a5a5a5', fontWeight: '400', marginRight: 20 }}>Select Category</Text>
                            <Icon name="caretdown" size={15} color="#a5a5a5" />

                        </View>
                    </View>
                </View>

                <ScrollView>
                    <View style={{ display: "flex", alignItems: "center", flexDirection: "row", flexWrap: "wrap" }}>

                        {data ? (
                            <>
                                {data.map((i) => (

                                    <ScrollView>
                                    <TouchableOpacity onPress={() => navigation.navigate('ClassifiedDetails',  { id: i.id })}>
                                        <View style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
                                            <Image source={{ uri: i.image_path }} style={{ width: 90, height: 90, margin: 10 }} />
                                            <Text style={{ fontSize: 10, color: "black", fontWeight: '500' }}>
                                                {i.title}
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                    </ScrollView>

                                ))}
                            </>
                        ) : <ActivityIndicator size="large" color="black" style={{ marginLeft: 160, marginTop: 200 }} />}

                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default ExploreClassifiedList;