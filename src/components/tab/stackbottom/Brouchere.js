import React from "react";
import { Text, View, Image } from "react-native";
import  AwesomeIcon  from "react-native-vector-icons/FontAwesome5"; 
const Broucher = () => {
    return (

        <View>

            <View>
                <View style={{
                    backgroundColor: "#73fdea", height: 43, display: "flex",
                    alignItems: "center", justifyContent: "space-between", flexDirection: "row"
                }}>
                    <View style={{ display: "flex", alignItems: "center", flexDirection: "row" }}>
                    <AwesomeIcon name="clipboard" color="#929292" size={28} marginLeft={5}/>  
                        <Text style={{ color: "black", marginRight: 28, fontSize: 18, marginLeft: 5 }}>Brochure</Text>
                    </View>
                    <AwesomeIcon name="searchengin" color="white" size={28} marginRight={5}/>  
                </View>


                <View style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: 12 }} >
                    <Image source={{uri:'https://cdn4.iconfinder.com/data/icons/file-extensions-1/64/pdfs-512.png'}} style={{ width: 50, height: 50, marginLeft: 10, margin: 10 }} />
                    <Text style={{fontSize:13,fontWeight:'700', fontStyle:'italic', textDecorationLine: "underline", color: "#00a2ff", textDecorationColor: "#00a2ff" }}>
                        IndiaTime Magazine(Hyderabad) about Bajaj Electronics
                    </Text>
                </View>
                <View style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: 12 }} >
                    <Image source={{uri:'https://cdn4.iconfinder.com/data/icons/file-extensions-1/64/pdfs-512.png'}} style={{ width: 50, height: 50, marginLeft: 10, margin: 10 }} />
                    <Text style={{fontStyle:'italic', fontSize:13,fontWeight:'700',textDecorationLine: "underline", color: "#00a2ff", textDecorationColor: "#00a2ff" }}>
                        Diwali 2018 Lucky Draw-Terms &Conditions
                    </Text>
                </View>

            </View>
        </View>

    )
}
export default Broucher;