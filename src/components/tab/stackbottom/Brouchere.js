import React, { useEffect, useState } from "react";
import { Text, View, Image } from "react-native";
import AwesomeIcon from "react-native-vector-icons/FontAwesome5";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from "react-redux";


const Broucher = (props) => {
    const [broucherImage, setBroucherImage] = useState(null);
    const userId = useSelector((state) => state.uId)
    console.log('u id=', userId[0])
    console.warn('s id=', props.route.params.id)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = await AsyncStorage.getItem('token');
                if (token) {
                    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                    const response = await axios.post('https://focusmore.codelive.info/api/get-shop-brochure', {
                        shop_id: props.route.params?.id,
                        user_id: userId[0]
                    });
                    console.warn('data=', response.data.data)
                    if (response.data.status === 200 && response.data.data.length > 0) {
                        setBroucherImage(response.data.data[0].shop_gallery);
                    } else {
                        console.warn('No Brouchers found');
                    }
                }
            } catch (error) {
                console.error('Error fetching Brouchers:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <View>
            <View>
                <View style={{
                    backgroundColor: "#73fdea", height: 43, display: "flex",
                    alignItems: "center", justifyContent: "space-between", flexDirection: "row"
                }}>
                    <View style={{ display: "flex", alignItems: "center", flexDirection: "row" }}>
                        <AwesomeIcon name="clipboard" color="#929292" size={28} marginLeft={5} />
                        <Text style={{ color: "black", marginRight: 28, fontSize: 18, marginLeft: 5 }}>Brochure</Text>
                    </View>
                    <AwesomeIcon name="searchengin" color="white" size={28} marginRight={5} />
                </View>

                <View style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: 12 }} >
                    <Image source={{ uri: 'https://cdn4.iconfinder.com/data/icons/file-extensions-1/64/pdfs-512.png' }} style={{ width: 50, height: 50, marginLeft: 10, margin: 10 }} />
                    <Text style={{ fontSize: 13, fontWeight: '700', fontStyle: 'italic', textDecorationLine: "underline", color: "#00a2ff", textDecorationColor: "#00a2ff" }}>
                        IndiaTime Magazine(Hyderabad) about Bajaj Electronics
                    </Text>
                    {broucherImage ? (
                        <Image source={{ uri: broucherImage }} style={{ width: "80%", height: "70%", marginLeft: 10, marginRight: 5 }} />
                    ) : (
                        <Text>No broucherImage found</Text>
                    )}
                </View>
            </View>
        </View>
    )
}

export default Broucher;
