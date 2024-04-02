import React from "react";
import { Text, View, Image } from "react-native";
// import LogoImg from "../imagestab/blog.png";
import  AwesomeIcon  from "react-native-vector-icons/FontAwesome5"; 

const Gallery = () => {
    return (

        <View style={{ backgroundColor: "#f2f2f2", width: 400, height: 800 }}>

            <View>


                <View style={{
                    backgroundColor: "#73fdea", height: 43, display: "flex",
                    alignItems: "center", justifyContent: "space-between", flexDirection: "row"
                }}>


                    <View style={{ display: "flex", alignItems: "center", flexDirection: "row" }}>
                    <AwesomeIcon name="image" color="#d6d5d5" marginLeft={5} size={25}/> 
                        <Text style={{ color: "black", marginRight: 3, fontSize: 18, marginLeft: 5 }}>
                            Gallery</Text>

                    </View>
                    <AwesomeIcon name="user" color="white" marginRight={15} size={20}/> 

                </View>

              <View style={{display:"flex" , alignItems:"start",flexDirection:"row"}}>
                    <View>
                    <Image source={LogoImg} style={{ width: 200, height: 200, margin:2}} />
                    <Image source={LogoImg} style={{ width: 200, height: 200, margin:2}} />


                    </View>
                    <View>
                    <Image source={LogoImg} style={{ width: 200, height: 100, margin:2 }} />
                    <Image source={LogoImg} style={{ width: 200, height: 200 , margin:2}} />

                    </View>
              </View>
           
            </View>
        </View>


    )
}
export default Gallery;