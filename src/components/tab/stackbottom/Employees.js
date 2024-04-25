
import React, { useEffect } from 'react';
import { Text, View, Image, TouchableOpacity,ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { ActivityIndicator } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


const Employees = (props) => {
    const [data, setData] = React.useState(null);
    const navigation = useNavigation();


    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = await AsyncStorage.getItem('token');
                if (token) {
                    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                    const response = await axios.post('https://focusmore.codelive.info/api/get-employee-list',{
                        shop_id: 1,
                    });
                    setData(response.data.data);
                    console.warn('employee list= ', response);
                }
            } catch (error) {
                console.error('Error fetching employee list:', error);
            }
        };
        fetchData();
    }, []);
    return (

        <View style={{ backgroundColor: "#f2f2f2" , flex:1}}>

        <ScrollView>
            
        <View style={{ display: "flex", alignItems: "center",flexDirection: "row", flexWrap: "wrap" ,padding:10 , gap:10}}>

{data ? (
    <>
        {data.map((item) => (


            <View style={{ display: "flex", alignItems: "center",justifyContent:'center' }}>
                
                <Image source={{ uri: item.image_path }} style={{ width: 90, height: 90, margin: 10 }} />
                <Text style={{ fontSize: 10, color: "black", fontWeight: '500' }}>
                    {item.service_name}
                </Text>
                <Text style={{ fontSize: 10, color: "black", fontWeight: '500' }}>
                Ename :{item.employee_name} {item.employee_id}
                </Text>
            </View>

        ))}
    </>
) : <ActivityIndicator size="large" color="black" style={{ marginLeft: 160, marginTop: 200 }} />}

</View>
        </ScrollView>
        </View>

    )
}

export default Employees;