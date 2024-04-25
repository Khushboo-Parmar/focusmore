import React, {useEffect, useState} from "react";
import { Text, View, Image } from "react-native";
import LogoImg from "../images/blog.png";
import AwesomeIcon from "react-native-vector-icons/FontAwesome5";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useRoute } from '@react-navigation/native';

const ClassifiedDetails = (props) => {
    const navigation = useNavigation();
    const [classifiedData, setClassifiedData] = useState(null);
    const route = useRoute();
    const { id } = route.params;
    useEffect(() => {
        // Fetch the data here
        fetch(`https://focusmore.codelive.info/api/classifield/detail/${id}`)
            .then(response => response.json())
            .then(data => {
                if (data.status === 200) {
                    setClassifiedData(data.data);
                }
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);

    const handlePress = () => {
        navigation.navigate('RealState');
    }

    return (
        <View style={{ backgroundColor: "#f2f2f2", width: 400, height: 800 }}>
            <View style={{ backgroundColor: "white", display: "flex", alignItems: "flex-end", marginRight: 20 }}>
                <Icon name="search1" size={24} color="blue" />
            </View>

            {classifiedData && (
            <>
            <View style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row" }}>

                <View >
                    <View style={{ backgroundColor: "#61d836", height: 30, width: 160, display: "flex", alignItems: "center" }}>
                        <Text style={{ color: "white", fontSize: 14, padding: 3, paddingLeft: 20 , width:160 }}>Near by Classified</Text>
                    </View>
                </View>

                <View style={{ borderColor: '#a5a5a5', backgroundColor: "white", borderTopWidth: 1, height: 28, width: 50, paddingHorizontal: 10 }}>
                    <TouchableOpacity>
                        <Image source={require('../images/radius.jpg')} />
                    </TouchableOpacity>
                </View>

                <View>
                    <View style={{ borderColor: '#a5a5a5', backgroundColor: "white", borderTopWidth: 1, height: 29, width: 200, borderWidth: 1, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row" }}>
                        <Text style={{ fontSize: 15, color: '#a5a5a5', fontWeight: '400', marginRight: 20 , color:'black'}}>Select Category</Text>
                        <Icon name="caretdown" size={15} color="#a5a5a5" />

                    </View>
                </View>
            </View>

            <View style={{ backgroundColor: " #e0e0d1", padding: 3 }}>
                <Image source={{ uri: classifiedData.image_path }} style={{ borderWidth: 1, borderColor: "#d6d5d5", width: 388, height: 200 }} />
            </View>

            <View style={{ borderBottomWidth: 1, borderTopWidth: 1, borderTopColor: "#d6d5d5", borderBottomColor: "#d6d5d5", width: 400, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row" }}>
                <View style={{ display: "flex", alignItems: "center", flexDirection: "row", width: 200 }}>
                    <TouchableOpacity onPress={handlePress}>
                        <Text style={{ fontSize: 13, color: "black", paddingLeft: 25, letterSpacing: 0.5 }}>Real Estate</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ marginRight: 30, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row", width: 80 }}>
                    <Text style={{ fontSize: 12, color: "black" }}>12</Text>
                    <Icon name="right" size={10} color="#000" />
                </View>
            </View>

            <View style={{ borderBottomWidth: 1, borderBottomColor: "#d6d5d5", width: 400, height: 28, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row" }}>
                <View style={{ display: "flex", alignItems: "center", flexDirection: "row", width: 200 }}>
                    <Text style={{ fontSize: 13, color: "black", paddingLeft: 25, letterSpacing: 0.5 }}>Job openings</Text>
                </View>

                <View style={{ marginRight: 30, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row", width: 80 }}>
                    <Text style={{ fontSize: 12, color: "black" }}>15 </Text>
                    <Icon name="right" size={10} color="#000" />
                </View>
            </View>

            <View style={{ borderBottomWidth: 1, borderBottomColor: "#d6d5d5", width: 400, height: 28, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row" }}>
                <View style={{ display: "flex", alignItems: "center", flexDirection: "row", width: 200 }}>
                    <Text style={{ fontSize: 13, color: "black", paddingLeft: 25, letterSpacing: 0.5 }}>Business offers</Text>
                </View>

                <View style={{ marginRight: 30, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row", width: 80 }}>
                    <Text style={{ fontSize: 12, color: "black" }}>02</Text>
                    <Icon name="right" size={10} color="#000" />
                </View>
            </View>
            </>
            )}
        </View>
    );
};
export default ClassifiedDetails;
