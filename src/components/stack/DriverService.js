
import React from "react";
import { Text, View, Image } from "react-native";
import LogoImg from "../images/blog.png"
 import  AwesomeIcon  from "react-native-vector-icons/FontAwesome5"; 
     
const Services = () => {
    return (

        <View style={{ backgroundColor: "#f2f2f2", width: 400, height: 800 }}>

            <View>


                <View style={{
                    backgroundColor: "#73fdea", height: 43, display: "flex",
                    alignItems: "center", justifyContent: "space-between", flexDirection: "row"
                }}>


                    <View style={{ display: "flex", alignItems: "center", flexDirection: "row" }}>
                    <AwesomeIcon name="search" color="white" size={20}marginLeft={5} />
                    
                        <Text style={{ color: "black", marginLeft:5, fontSize: 17, marginLeft: 2 }}>
                            Services</Text>

                    </View>
                    <AwesomeIcon name="search" color="white" size={20}marginRight={12} />

                </View>

                <View style={{ borderBottomWidth: 2 , borderBottomColor:"#d6d5d5"}}>
                    <View style={{ padding: 12, width: 230, height: 200 }}>
                        <Text style={{ color: "red", fontWeight: 600, fontSize:8 }}>
                            Services1
                        </Text>
                        <View>
                            <View style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row", margin: 6 }}>
                                <Text style={{ color: "#00a2ff", fontSize: 8 }}>
                                    Service Type:
                                </Text>
                                <Text style={{ color: "black", fontSize: 8 }}>
                                    Diesel Mechanic
                                </Text>
                            </View>

                            <View style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row", margin: 6 }}>
                                <Text style={{ color: "#00a2ff", fontSize: 8, paddingRight: 40 }}>
                                    Service Expericence:
                                </Text>
                                <Text style={{ color: "black", fontSize: 8 }}>
                                    5 Year
                                </Text>
                            </View>

                            <View style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row", margin: 6 }}>
                                <Text style={{ color: "#00a2ff", fontSize: 8, paddingRight: 40 }}>
                                    Service area:
                                </Text>
                                <Text style={{ color: "black", fontSize: 8 }}>
                                    Hyderabad, Secunderabad
                                </Text>
                            </View>

                            <View style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row", margin: 6 }}>
                                <Text style={{ color: "#00a2ff", fontSize: 8, paddingRight: 40 }}>
                                    Visiting Charges:
                                </Text>
                                <Text style={{ color: "black", fontSize: 8 }}>
                                    Free
                                </Text>
                            </View>

                            <View style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row", margin: 6 }}>
                                <Text style={{ color: "#00a2ff", fontSize: 8, paddingRight: 40 }}>
                                    Service charge:
                                </Text>
                                <Text style={{ color: "black", fontSize: 8 }}>
                                    800/Day
                                </Text>
                            </View>



                            <View style={{marginLeft:150,marginTop:18, width:200, display: "flex", alignItems: "end", justifyContent: "flex-end", flexDirection: "row", }}>
                            <AwesomeIcon name="user" color="gray" size={11} marginRight={2   }/> 
                                    <Text style={{borderBottomColor:"red", borderBottomWidth: 1, color: "red",fontSize:8 }}>Request Service</Text>
                                </View>



                        </View>
                    </View>
                </View>

                <View style={{ borderBottomWidth: 2 , borderBottomColor:"#d6d5d5"}}>
                    <View style={{ padding: 12, width: 230, height: 200 }}>
                        <Text style={{ color: "red", fontWeight: 600, fontSize:8  }}>
                            Services1
                        </Text>
                        <View>
                            <View style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row", margin: 6 }}>
                                <Text style={{ color: "#00a2ff", fontSize: 8 }}>
                                    Service Type:
                                </Text>
                                <Text style={{ color: "black", fontSize: 8 }}>
                                    Diesel Mechanic
                                </Text>
                            </View>

                            <View style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row", margin: 6 }}>
                                <Text style={{ color: "#00a2ff", fontSize: 8, paddingRight: 40 }}>
                                    Service Expericence:
                                </Text>
                                <Text style={{ color: "black", fontSize: 8 }}>
                                    5 Year
                                </Text>
                            </View>

                            <View style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row", margin: 6 }}>
                                <Text style={{ color: "#00a2ff", fontSize: 8, paddingRight: 40 }}>
                                    Service area:
                                </Text>
                                <Text style={{ color: "black", fontSize: 8 }}>
                                    Hyderabad, Secunderabad
                                </Text>
                            </View>

                            <View style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row", margin: 6 }}>
                                <Text style={{ color: "#00a2ff", fontSize: 8, paddingRight: 40 }}>
                                    Visiting Charges:
                                </Text>
                                <Text style={{ color: "black", fontSize: 8 }}>
                                    Free
                                </Text>
                            </View>

                            <View style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row", margin: 6 }}>
                                <Text style={{ color: "#00a2ff", fontSize: 8, paddingRight: 40 }}>
                                    Service charge:
                                </Text>
                                <Text style={{ color: "black", fontSize: 8 }}>
                                    800/Day
                                </Text>
                                </View>

                                <View style={{marginLeft:150,marginTop:18, width:200, display: "flex", alignItems: "end", justifyContent: "flex-end", flexDirection: "row", }}>
                                <AwesomeIcon name="user" color="gray" size={11} marginRight={2   }/> 
                                    <Text style={{borderBottomColor:"red", borderBottomWidth: 1, color: "red", fontSize:8 }}>Request Service</Text>
                                </View>
                         

                       </View>
                    </View>
                </View>
            </View>
        </View>


    )
}
export default Services;
