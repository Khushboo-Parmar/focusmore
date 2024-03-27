
import React, { useEffect } from 'react';

import { Text, View, Image, TouchableOpacity } from "react-native";
import LogoImg from "../images/blog.png"
import Icon from 'react-native-vector-icons/AntDesign';

const ExploreNearServices = () => {
    const [data, setData] = React.useState(null);

    useEffect(() => {
        const fecthdata = async () => {
            try {
                const result = await fetch('http://focusmore.codelive.info/api/service/list', {
                    method: 'GET',
                    headers: {
                        'Authorization': 'Bearer 13|PmgqcSMWjH1KmGs9yTdSLX6Nr3xIoocPOEzZgxkJc655b6bb'
                    }
                });

                const response = await result.json();
                setData(response.data)
            } catch (e) {
                console.log(JSON.stringify(e),);
            }
        }
        fecthdata()
    }, [])
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
                    ) : <Text>Loading</Text>}

                </View>

            </View>
        </View>


    )
}
export default ExploreNearServices;