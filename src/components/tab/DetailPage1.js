import React from "react";
import { Text, View, Image } from "react-native";
import LogoImg from "../images/blog.png"
import { TouchableOpacity } from "react-native-gesture-handler";

const DetailPage1 = () => {
    return (

        <View style={{ backgroundColor: "#f2f2f2", width: 400, height: 800 }}>
            <View style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row" }}>
                <Text style={{ color: "black", marginRight: 3, fontSize: 10, marginLeft: 2 }}>Electronics & Home application</Text>
                <Image source={LogoImg} style={{ width: 30, height: 30, marginRight: 10 }} />
            </View>

            <View>
                <Image source={LogoImg} style={{ width: 400, height: 110, marginRight: 10 }} />
            </View>

            <View style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row" }}>
                <View >
                    <Text style={{ fontSize: 22, color: "black" }}>Bajaj Electronics</Text>
                    <Text style={{ paddingLeft: 20, color: 'black' }}> Distance 0.5 kms</Text>
                </View>

                <Image source={LogoImg} style={{ width: 80, height: 80, marginRight: 10, borderRadius:50, borderWidth:1, borderColor:"#f2f2f2",marginTop:-90}} />
                 
                <View style={{ margin: 5, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Image source={LogoImg} style={{ width: 80, height: 15, marginRight: 10 }} />
                    <Text style={{ fontSize: 12, color: "black", borderBottomWidth: 1 }}>34Reviews</Text>
                    <View>
                        {/* <TouchableOpacity onPress={}> */}
                        <Text style={{ marginTop: 5,paddingLeft:20,color:"white", padding: 8, backgroundColor: "#61d836", width: 110, alignItems: "center", fontSize: 18 }}>
                            Directions
                        </Text>
                        {/* </TouchableOpacity> */}
                    </View>
                </View>
            </View>

            <View>
                <Image source={LogoImg} style={{ width: 400, height: 110, marginRight: 10 }} />
            </View>

            <View>
                <Text style={{ fontSize: 18, color: "black" }}>
                    About
                </Text>
                <Text style={{ fontSize: 11, color: "black", marginBottom:30 }}>
                    Paragraphs are the building blocks of papers. Many  define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among
                </Text>
            </View>

          

            <View style={{borderBottomWidth:1, borderTopWidth:1, width: 400,height:28, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection:"row" }}>
                <View style={{display:"flex" ,alignItems:"center",flexDirection:"row" ,width:200}} >
                    <Image source={LogoImg} style={{ width: 30, height: 20, marginRight: 10 }} />
                    <Text style={{ fontSize:15, color:"black"}}>Products</Text>
                </View>

                <View  style={{ marginRight:30,display:"flex" ,alignItems:"center",justifyContent:"space-between",flexDirection:"row", width:80}}>
                    <Text style={{ fontSize:15, color:"black"}}>12</Text>
                    <Text style={{ fontSize:18, color:"black"}}>&</Text>
                </View>
            </View>

            <View style={{borderBottomWidth:1, width: 400,height:28, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection:"row" }}>
                <View style={{display:"flex" ,alignItems:"center",flexDirection:"row" ,width:200}} >
                    <Image source={LogoImg} style={{ width: 30, height: 20, marginRight: 10 }} />
                    <Text style={{ fontSize:15, color:"black"}}>Service</Text>
                </View>

                <View  style={{ marginRight:30,display:"flex" ,alignItems:"center",justifyContent:"space-between",flexDirection:"row", width:80}}>
                    <Text style={{ fontSize:15, color:"black"}}>02</Text>
                    <Text style={{ fontSize:18, color:"black"}}>&</Text>
                </View>
            </View>

            <View style={{borderBottomWidth:1, width: 400, height:28, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection:"row" }}>
                <View style={{display:"flex" ,alignItems:"center",flexDirection:"row" ,width:200}} >
                    <Image source={LogoImg} style={{ width: 30, height: 20, marginRight: 10 }} />
                    <Text style={{ fontSize:15, color:"black"}}>Gallery</Text>
                </View>

                <View  style={{ marginRight:30,display:"flex" ,alignItems:"center",justifyContent:"space-between",flexDirection:"row", width:80}}>
                    <Text style={{ fontSize:15, color:"black"}}>35</Text>
                    <Text style={{ fontSize:18, color:"black"}}>&</Text>
                </View>
            </View>

            <View style={{borderBottomWidth:1, width: 400,height:28, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection:"row" }}>
                <View style={{display:"flex" ,alignItems:"center",flexDirection:"row" ,width:200}} >
                    <Image source={LogoImg} style={{ width: 30, height: 20, marginRight: 10 }} />
                    <Text style={{ fontSize:15, color:"black"}}>Offers</Text>
                </View>

                <View  style={{ marginRight:30,display:"flex" ,alignItems:"center",justifyContent:"space-between",flexDirection:"row", width:80}}>
                    <Text style={{ fontSize:15, color:"black"}}>05</Text>
                    <Text style={{ fontSize:18, color:"black"}}>&</Text>
                </View>
            </View>

            <View style={{borderBottomWidth:1, width: 400,height:28, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection:"row" }}>
                <View style={{display:"flex" ,alignItems:"center",flexDirection:"row" ,width:200}} >
                    <Image source={LogoImg} style={{ width: 30, height: 20, marginRight: 10 }} />
                    <Text style={{ fontSize:15, color:"black"}}>Share this Shop</Text>
                </View>

                <View  style={{ marginRight:30,display:"flex" ,alignItems:"center",justifyContent:"space-between",flexDirection:"row", width:80}}>
                    <Text style={{ fontSize:15, color:"black"}}>12</Text>
                    <Text style={{ fontSize:18, color:"black"}}>&</Text>
                </View>
            </View>

            <View style={{borderBottomWidth:1, width: 400,height:28, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection:"row" }}>
                <View style={{display:"flex" ,alignItems:"center",flexDirection:"row" ,width:200}} >
                    <Image source={LogoImg} style={{ width: 30, height: 20, marginRight: 10 }} />
                    <Text style={{ fontSize:15, color:"black"}}>Brochure</Text>
                </View>

                <View  style={{ marginRight:30,display:"flex" ,alignItems:"center",justifyContent:"space-between",flexDirection:"row", width:80}}>
                    <Text style={{ fontSize:15, color:"black"}}>12</Text>
                    <Text style={{ fontSize:18, color:"black"}}>&</Text>
                </View>
            </View>

            <View style={{borderBottomWidth:1, width: 400,height:28, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection:"row" }}>
                <View style={{display:"flex" ,alignItems:"center",flexDirection:"row" ,width:200}} >
                    <Image source={LogoImg} style={{ width: 30, height: 20, marginRight: 10 }} />
                    <Text style={{ fontSize:15, color:"black"}}>Business Timings</Text>
                </View>

                <View  style={{ marginRight:30,display:"flex" ,alignItems:"center",justifyContent:"space-between",flexDirection:"row", width:80}}>
                    <Text style={{ fontSize:15, color:"black"}}>12</Text>
                    <Text style={{ fontSize:18, color:"black"}}>&</Text>
                </View>
            </View>

            <View style={{borderBottomWidth:1, width: 400,height:28, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection:"row" }}>
                <View style={{display:"flex" ,alignItems:"center",flexDirection:"row" ,width:200}} >
                    <Image source={LogoImg} style={{ width: 30, height: 20, marginRight: 10 }} />
                    <Text style={{ fontSize:15, color:"black"}}>Review</Text>
                </View>

                <View  style={{ marginRight:30,display:"flex" ,alignItems:"center",justifyContent:"space-between",flexDirection:"row", width:80}}>
                    <Text style={{ fontSize:15, color:"black"}}>12</Text>
                    <Text style={{ fontSize:18, color:"black"}}>&</Text>
                </View>
            </View>
        </View>
    )
}
export default DetailPage1;