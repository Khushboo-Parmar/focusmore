import React from "react";
import { Text, View, Image } from "react-native";
import LogoImg from "../images/blog.png"
import  AwesomeIcon  from "react-native-vector-icons/FontAwesome5"; 

const ServiceTiming = () => {
    return (

        <View>

            <View>
                <View style={{
                    backgroundColor: "#73fdea", height: 30, display: "flex",
                    alignItems: "center", justifyContent: "space-between", flexDirection: "row"
                }}>
                    <View style={{ display: "flex", alignItems: "center", flexDirection: "row" }}>
                    <AwesomeIcon name="briefcase" color="#929292" size={22} marginLeft={5}  />
                        <Text style={{ color: "black", marginLeft:5, fontSize: 18}}>Service Timing</Text>
                    </View>
                    <AwesomeIcon name="search" color="white" size={22} marginRight={10}  />
                </View>


                <View>
                 
                    <View style={{display:"flex",alignItems:"center", justifyContent:"space-between" , flexDirection:"row" , borderBottomWidth:2  , borderBottomColor:"#d6d5d5"  }}>
                        <Text style={{fontSize:22 ,margin:20, color:"black" }}>
                            Monday
                        </Text>

                        <Text style={{fontSize:15 , color:"black"}}>
                            20am to 22pm
                        </Text>
                     </View>

                     <View style={{display:"flex",alignItems:"center", justifyContent:"space-between" , flexDirection:"row", borderBottomWidth:2 , borderBottomColor:"#d6d5d5"   }}>
                        <Text style={{fontSize:22 ,margin:20 , color:"black"}}>
                            Tuesday
                        </Text>

                        <Text style={{fontSize:15 , color:"black"}}>
                            20am to 22pm
                        </Text>
                     </View>

                     <View style={{display:"flex",alignItems:"center", justifyContent:"space-between" , flexDirection:"row" , borderBottomWidth:2  , borderBottomColor:"#d6d5d5"  }}>
                        <Text style={{fontSize:22 ,margin:20 , color:"black"}}>
                            Wednesday
                        </Text>

                        <Text style={{fontSize:15 , color:"black"}}>
                            20am to 22pm
                        </Text>
                     </View>

                     
                     <View style={{display:"flex",alignItems:"center", justifyContent:"space-between" , flexDirection:"row", borderBottomWidth:2, borderBottomColor:"#d6d5d5"  }}>
                        <Text style={{fontSize:22 ,margin:20, color:"black"}}>
                            Thursday
                        </Text>

                        <Text style={{fontSize:15 , color:"black"}}>
                            20am to 22pm
                        </Text>
                     </View>

                     <View style={{display:"flex",alignItems:"center", justifyContent:"space-between" , flexDirection:"row" , borderBottomWidth:2  , borderBottomColor:"#d6d5d5"  }}>
                        <Text style={{fontSize:22 ,margin:20,  color:"black"}}>
                            Friday
                        </Text>

                        <Text style={{fontSize:15, color:"black"}}>
                            20am to 22pm
                        </Text>
                     </View>

                     <View style={{display:"flex",alignItems:"center", justifyContent:"space-between" , flexDirection:"row" , borderBottomWidth:2 , borderBottomColor:"#d6d5d5" }}>
                        <Text style={{fontSize:22 ,margin:20, color:"black"}}>
                            Saturday
                        </Text>

                        <Text style={{fontSize:15, color:"black"}}>
                            20am to 22pm
                        </Text>
                     </View>

                     <View style={{display:"flex",alignItems:"center", justifyContent:"space-between" , flexDirection:"row", borderBottomWidth:2   , borderBottomColor:"#d6d5d5"  }}>
                        <Text style={{fontSize:22 ,margin:20, color:"black"}}>
                        Sunday
                        </Text>

                        <Text style={{fontSize:15 , marginRight:50, color:"black"}}>
                           Close
                        </Text>
                     </View>




                </View>

            </View>
        </View>


    )
}
export default ServiceTiming;