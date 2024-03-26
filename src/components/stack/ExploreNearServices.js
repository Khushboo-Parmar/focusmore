import React from "react";
import { Text, View, Image } from "react-native";
import LogoImg from "../images/blog.png"

const ExploreNearServices = () => {
    return (

        <View style={{ backgroundColor: "#f2f2f2", width: 400, height: 800 }}>

            <View>
                <View style={{
                    backgroundColor: "#45bfc8", height: 43, display: "flex",
                    alignItems: "center", justifyContent: "space-between", flexDirection: "row"
                }}>

                    <Image source={LogoImg} style={{ width: 40, height: 30, marginLeft: 10, marginRight: 5 }} />
                    <View style={{ display: "flex", alignItems: "center", flexDirection: "row" }}>
                        <Text style={{ color: "black", marginRight: 3, fontSize: 18, marginLeft: 2 }}>Koti, Hyderabad</Text>
                        <Image source={LogoImg} style={{ width: 30, height: 30, marginRight: 10 }} />
                    </View>


                </View>
                <View style={{ backgroundColor: "white", height: 25, display: "flex", alignItems: "flex-end" }}>
                    <Image source={LogoImg} style={{ width: 30, height: 30, marginRight: 10 }} />
                </View>
                <View style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row" }}>



                    <View >
                        <View style={{ backgroundColor: "#61d836", height: 30, width: 130, display: "flex", alignItems: "center" }}>
                            <Text style={{ color: "white", fontSize: 14, padding: 3, paddingLeft: 20 }}>Near by Services</Text>
                        </View>
                    </View>

                    <View>
                        <View style={{ backgroundColor: "white", borderTopWidth: 1, height: 28, width: 100, display: "flex", alignItems: "center" }}>
                            <Image source={LogoImg} style={{ width: 30, height: 28, marginRight: 35 }} />
                        </View>
                    </View>

                    <View>
                        <View style={{ backgroundColor: "white", borderTopWidth: 1, height: 28, width: 200, borderWidth: 1, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row" }}>
                            <Text style={{ fontSize: 15 }}>Select Category</Text>
                            <Image source={LogoImg} style={{ width: 20, height: 20, marginLeft: 10 }} />

                        </View>
                    </View>
                </View>
                <View style={{ display: "flex", alignItems: "center", justifyContent: "start", flexDirection: "row", flexWrap: "wrap" }}>

                    <View style={{ display: "flex", alignItems: "center", justifyContent: "center", }}>
                        <Image source={LogoImg} style={{ width: 80, height: 80, margin: 10 }} />
                        <Text style={{ fontSize: 15, color: "black" }}>
                            Plumbers
                        </Text>
                    </View>

                    <View style={{ display: "flex", alignItems: "center", justifyContent: "center", }}>
                        <Image source={LogoImg} style={{ width: 80, height: 80, margin: 10 }} />
                        <Text style={{ fontSize: 15, color: "black" }}>
                            Carpenter
                        </Text>
                    </View>

                    <View style={{ display: "flex", alignItems: "center", justifyContent: "center", }}>
                        <Image source={LogoImg} style={{ width: 80, height: 80, margin: 10 }} />
                        <Text style={{ fontSize: 15, color: "black" }}>
                            Drivers
                        </Text>
                    </View>

                </View>

            </View>
        </View>


    )
}
export default ExploreNearServices;