import React from "react";
import { Text, View, Image } from "react-native";
import LogoImg from "../images/blog.png"
  import  AwesomeIcon  from "react-native-vector-icons/FontAwesome5"; 
       
const Experience = () => {
    return (

        <View style={{ backgroundColor: "#f2f2f2", width: 400, height: 800 }}>

            <View>


                <View style={{
                    backgroundColor: "#73fdea", height: 43, display: "flex",
                    alignItems: "center", justifyContent: "space-between", flexDirection: "row"
                }}>


                    <View style={{ display: "flex", alignItems: "center", flexDirection: "row" }}>
                    <AwesomeIcon name="briefcase" color="#d6d5d5" marginLeft={5} marginRight={5} size={20}/> 
                        <Text style={{ color: "black", marginRight: 3, fontSize: 15, marginLeft: 2 }}>Experience</Text>
                        
                    </View>
                    <AwesomeIcon name="search" color="#f2f2f2" marginRight={15} size={20} />

                </View>

               <View style={{padding:12}}>
                     <Text style={{color:"red" , fontWeight:500 ,fontSize:13}}>
                        Experience
                     </Text>
                     <View>
                     <View style={{display:"flex" ,alignItems:"center", flexDirection:"row", marginTop:20, margin:5}}>
                           <Text style={{color:"#00a2ff", fontSize:10}}>
                            Description
                           </Text>
                           <Text style={{color:"black", fontSize:10}}>
                              15 Year Experience from amazone as a cab driver
                           </Text>
                     </View>

                     <View style={{display:"flex" ,alignItems:"center", flexDirection:"row", margin:5}}>
                           <Text style={{color:"#00a2ff", fontSize:10, paddingRight:40}}>
                            Other
                           </Text>
                           <Text style={{color:"black", fontSize:10}}>
                              Text line two
                           </Text>
                     </View>
                     </View>
               </View>

               <View style={{display:"flex", alignItems:"end", justifyContent:"center", flexDirection:"row" ,marginTop:20,marginLeft:250}}>
              
               <AwesomeIcon name="user" color="#d6d5d5" marginRight={5} size={15}/> 
                 <Text style={{borderBottomWidth:2, color:"red", borderBottomColor:"red", fontSize:11}}>Request Service</Text>
               </View>

            </View>
        </View>
    )
}
export default Experience;