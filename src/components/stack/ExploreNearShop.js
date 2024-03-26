
import React from "react";
import { Text, View, Image,TouchableOpacity } from "react-native";
// import LogoImg from "../images/blog.png"
import LogoImg from "../images/bajaj.png"

const ExploreNearShop= () => {
    return (

        <View style={{ backgroundColor: "#f2f2f2", width: 400, height: 800 }}>


            <View style={{}}>

                <Image source={LogoImg} style={{ width: 30, height: 30, marginLeft: 355 }} />
            </View>

            <View style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row" }}>

                <View >
                    <View style={{ backgroundColor: "#61d836", height: 30, width: 130, display: "flex", alignItems: "center" }}>
                        <Text style={{ color: "white", fontSize: 16, padding: 3, paddingLeft: 20 }}>Near by Shop</Text>
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
                        {/* <Image source={LogoImg} style={{ width: 20, height: 20, marginLeft: 10 }} /> */}

                    </View>
                </View>
            </View>

            <View style={{  }}>
                <View style={{ display: "flex", flexDirection: "row" }}>
                    <View style={{ margin:5, width: 100, display: 'flex', alignItems: "center", justifyContent: "center", alignContent: "center" }}>
                       <TouchableOpacity> <Image source={LogoImg} style={{ width: 100, height: 55 }} /></TouchableOpacity>
                        <Text style={{ fontSize: 15 }}>Bajaj </Text>
                        <Text style={{ fontSize: 15 }}>Electronics</Text>
                        <Text style={{ fontSize: 15 }}> 0.5 Kms</Text>
                    </View>

                    <View style={{  width: 300, height: 120, display: "flex", alignItems: "start",
                     justifyContent: "space-evenly", backgroundColor: "white", margin:5, padding:3 }}>

                        <View style={{ paddingLeft: 5 }}>

                            <Text style={{fontSize:10}}>ELECTROINCS & Home Applience</Text>
                            <Text style={{ fontSize: 20, marginBottom: 5 }}>Bajaj Electroincs</Text>
                            <Image source={LogoImg} style={{ width: 120, height: 15, }} />
                            <Text style={{ fontSize:10, marginBottom:2 }}>Address line text text text text</Text>
                        </View>

                        <View style={{ width: 230, display: "flex", alignItems: "start", justifyContent: "space-between",
                         flexDirection: "row" }}>

                            <View style={{ display: "flex", alignItems: "center" }}>
                                <Image source={LogoImg} style={{ width: 30, height: 25, }} />
                                <Text style={{ fontSize: 10 }}>Products</Text>
                            </View>

                            <View style={{ display: "flex", alignItems: "center" }}>
                                <Image source={LogoImg} style={{ width: 30, height: 25, }} />
                                <Text style={{ fontSize: 10 }}>Call</Text>
                            </View>

                            <View style={{ display: "flex", alignItems: "center" }}>
                                <Image source={LogoImg} style={{ width: 30, height: 25, }} />
                                <Text style={{ fontSize: 10 }}>Chat</Text>
                            </View>

                            <View style={{ display: "flex", alignItems: "center" }}>
                                <Image source={LogoImg} style={{ width: 30, height: 25, }} />
                                <Text style={{ fontSize: 10 }}>Mail</Text>
                            </View>

                            <View style={{ display: "flex", alignItems: "center" }}>
                                <Image source={LogoImg} style={{ width: 30, height: 25, }} />
                                <Text style={{ fontSize: 10 }}>Website</Text>
                            </View>

                        </View>
                    </View>

                    
                </View>

                <View style={{ display: "flex", flexDirection: "row" }}>
                    <View style={{ margin:5, width: 100, display: 'flex', alignItems: "center", justifyContent: "center", alignContent: "center" }}>
                        <Image source={LogoImg} style={{ width: 100, height: 55 }} />
                        <Text style={{ fontSize: 15 }}>Bajaj </Text>
                        <Text style={{ fontSize: 15 }}>Electronics</Text>
                        <Text style={{ fontSize: 15 }}> 0.5 Kms</Text>
                    </View>

                    <View style={{  width: 300, height: 120, display: "flex", alignItems: "start",
                     justifyContent: "space-evenly", backgroundColor: "white", margin:5, padding:3 }}>

                        <View style={{ paddingLeft: 5 }}>

                            <Text style={{fontSize:10}}>ELECTROINCS & Home Applience</Text>
                            <Text style={{ fontSize: 20, marginBottom: 5 }}>Bajaj Electroincs</Text>
                            <Image source={LogoImg} style={{ width: 120, height: 15, }} />
                            <Text style={{ fontSize:10, marginBottom:2 }}>Address line text text text text</Text>
                        </View>

                        <View style={{ width: 230, display: "flex", alignItems: "start", justifyContent: "space-between",
                         flexDirection: "row" }}>

                            <View style={{ display: "flex", alignItems: "center" }}>
                                <Image source={LogoImg} style={{ width: 30, height: 25, }} />
                                <Text style={{ fontSize: 10 }}>Products</Text>
                            </View>

                            <View style={{ display: "flex", alignItems: "center" }}>
                                <Image source={LogoImg} style={{ width: 30, height: 25, }} />
                                <Text style={{ fontSize: 10 }}>Call</Text>
                            </View>

                            <View style={{ display: "flex", alignItems: "center" }}>
                                <Image source={LogoImg} style={{ width: 30, height: 25, }} />
                                <Text style={{ fontSize: 10 }}>Chat</Text>
                            </View>

                            <View style={{ display: "flex", alignItems: "center" }}>
                                <Image source={LogoImg} style={{ width: 30, height: 25, }} />
                                <Text style={{ fontSize: 10 }}>Mail</Text>
                            </View>

                            <View style={{ display: "flex", alignItems: "center" }}>
                                <Image source={LogoImg} style={{ width: 30, height: 25, }} />
                                <Text style={{ fontSize: 10 }}>Website</Text>
                            </View>

                        </View>
                    </View>

                    
                </View>

                <View style={{ display: "flex", flexDirection: "row" }}>
                    <View style={{ margin:5, width: 100, display: 'flex', alignItems: "center", justifyContent: "center", alignContent: "center" }}>
                        <Image source={LogoImg} style={{ width: 100, height: 55 }} />
                        <Text style={{ fontSize: 15 }}>Bajaj </Text>
                        <Text style={{ fontSize: 15 }}>Electronics</Text>
                        <Text style={{ fontSize: 15 }}> 0.5 Kms</Text>
                    </View>

                    <View style={{  width: 300, height: 120, display: "flex", alignItems: "start",
                     justifyContent: "space-evenly", backgroundColor: "white", margin:5, padding:3 }}>

                        <View style={{ paddingLeft: 5 }}>

                            <Text style={{fontSize:10}}>ELECTROINCS & Home Applience</Text>
                            <Text style={{ fontSize: 20, marginBottom: 5 }}>Bajaj Electroincs</Text>
                            <Image source={LogoImg} style={{ width: 120, height: 15, }} />
                            <Text style={{ fontSize:10, marginBottom:2 }}>Address line text text text text</Text>
                        </View>

                        <View style={{ width: 230, display: "flex", alignItems: "start", justifyContent: "space-between",
                         flexDirection: "row" }}>

                            <View style={{ display: "flex", alignItems: "center" }}>
                                <Image source={LogoImg} style={{ width: 30, height: 25, }} />
                                <Text style={{ fontSize: 10 }}>Products</Text>
                            </View>

                            <View style={{ display: "flex", alignItems: "center" }}>
                                <Image source={LogoImg} style={{ width: 30, height: 25, }} />
                                <Text style={{ fontSize: 10 }}>Call</Text>
                            </View>

                            <View style={{ display: "flex", alignItems: "center" }}>
                                <Image source={LogoImg} style={{ width: 30, height: 25, }} />
                                <Text style={{ fontSize: 10 }}>Chat</Text>
                            </View>

                            <View style={{ display: "flex", alignItems: "center" }}>
                                <Image source={LogoImg} style={{ width: 30, height: 25, }} />
                                <Text style={{ fontSize: 10 }}>Mail</Text>
                            </View>

                            <View style={{ display: "flex", alignItems: "center" }}>
                                <Image source={LogoImg} style={{ width: 30, height: 25, }} />
                                <Text style={{ fontSize: 10 }}>Website</Text>
                            </View>

                        </View>
                    </View>

                    
                </View>


       

            </View>

        </View>

    )
}
export default ExploreNearShop;
