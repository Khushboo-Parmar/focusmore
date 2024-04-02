import React from "react";
import { Text, View, Image } from "react-native";
import  AwesomeIcon  from "react-native-vector-icons/FontAwesome5"; 

const ServiceTiming = () => {
    return (

        <View>

            <View>


                <View>
                 
                    <View style={{paddingHorizontal:10,paddingVertical:15,display:"flex",alignItems:"center", justifyContent:"space-between" , flexDirection:"row" , borderBottomWidth:1  , borderBottomColor:"#d6d5d5"  }}>
                        <Text style={{fontWeight:'500',fontSize:21, color:"black" }}>
                            Monday
                        </Text>

                        <Text style={{fontSize:15 , color:"black"}}>
                            20am to 22pm
                        </Text>
                     </View>

                     <View style={{paddingHorizontal:10,paddingVertical:15,display:"flex",alignItems:"center", justifyContent:"space-between" , flexDirection:"row" , borderBottomWidth:1  , borderBottomColor:"#d6d5d5"  }}>
                        <Text style={{fontWeight:'500',fontSize:21, color:"black" }}>
                            Tuesday
                        </Text>

                        <Text style={{fontSize:15 , color:"black"}}>
                            20am to 22pm
                        </Text>
                     </View>

                     <View style={{paddingHorizontal:10,paddingVertical:15,display:"flex",alignItems:"center", justifyContent:"space-between" , flexDirection:"row" , borderBottomWidth:1  , borderBottomColor:"#d6d5d5"  }}>
                        <Text style={{fontWeight:'500',fontSize:21, color:"black" }}>
                            Wednesday
                        </Text>

                        <Text style={{fontSize:15 , color:"black"}}>
                            20am to 22pm
                        </Text>
                     </View>

                     
                     <View style={{paddingHorizontal:10,paddingVertical:15,display:"flex",alignItems:"center", justifyContent:"space-between" , flexDirection:"row" , borderBottomWidth:1  , borderBottomColor:"#d6d5d5"  }}>
                        <Text style={{fontWeight:'500',fontSize:21, color:"black" }}>
                            Thursday
                        </Text>

                        <Text style={{fontSize:15 , color:"black"}}>
                            20am to 22pm
                        </Text>
                     </View>

                     <View style={{paddingHorizontal:10,paddingVertical:15,display:"flex",alignItems:"center", justifyContent:"space-between" , flexDirection:"row" , borderBottomWidth:1  , borderBottomColor:"#d6d5d5"  }}>
                        <Text style={{fontWeight:'500',fontSize:21, color:"black" }}>
                            Friday
                        </Text>

                        <Text style={{fontSize:15 , color:"black"}}>
                            20am to 22pm
                        </Text>
                     </View>

                     <View style={{paddingHorizontal:10,paddingVertical:15,display:"flex",alignItems:"center", justifyContent:"space-between" , flexDirection:"row" , borderBottomWidth:1  , borderBottomColor:"#d6d5d5"  }}>
                        <Text style={{fontWeight:'500',fontSize:21, color:"black" }}>
                            Saturady
                        </Text>

                        <Text style={{fontSize:15 , color:"black"}}>
                            20am to 22pm
                        </Text>
                     </View>

                     <View style={{paddingHorizontal:10,paddingVertical:15,display:"flex",alignItems:"center", justifyContent:"space-between" , flexDirection:"row" , borderBottomWidth:1  , borderBottomColor:"#d6d5d5"  }}>
                        <Text style={{fontWeight:'500',fontSize:21, color:"black" }}>
                        Sunday
                        </Text>

                        <Text style={{fontSize:15 , marginRight:50, color:"black"}}>
                           Closed
                        </Text>
                     </View>




                </View>

            </View>
        </View>


    )
}
export default ServiceTiming;