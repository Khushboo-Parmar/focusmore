// import React from "react";
// import { Text, View, Image } from "react-native";
// import LogoImg from "../images/blog.png"

// const ExploreClassified= () => {
//     return (

//         <View style={{ backgroundColor: "#f2f2f2", width: 400, height: 800 }}>

//             <View style={{   }}>
              
//                 <Image source={LogoImg} style={{ width: 30, height: 30, marginLeft: 355 }} />
//             </View>

//             <View style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row" }}>             
                
//                 <View >
//                     <View style={{ backgroundColor: "#61d836", height: 30, width: 130, display: "flex", alignItems: "center" }}>
//                         <Text style={{ color: "white", fontSize: 14, padding:3, paddingLeft:20 }}>Near by Services</Text>
//                     </View>
//                 </View>

//                 <View>
//                     <View style={{ backgroundColor: "white", borderTopWidth: 1, height: 28, width: 100, display: "flex", alignItems: "center" }}>
//                         <Image source={LogoImg} style={{ width: 30, height: 28, marginRight: 35 }} />
//                     </View>
//                 </View>

//                 <View>
//                     <View style={{ backgroundColor: "white", borderTopWidth: 1, height: 28, width: 200, borderWidth: 1, display: "flex", alignItems: "center", justifyContent:"center",flexDirection:"row" }}>
//                         <Text style={{ fontSize: 15 }}>Select Category</Text>
//                         <Image source={LogoImg} style={{ width: 20, height: 20 ,marginLeft:10 }} />

//                     </View>
//                 </View>
//             </View>

//             <View style={{backgroundColor:" #e0e0d1" , padding:10}}>
//                 <Image source={LogoImg} style={{ width: 370, height: 150 }} />
//             </View>
          

//             <View style={{borderBottomWidth:1, borderTopWidth:1, width: 400, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection:"row" }}>
//                 <View style={{display:"flex" ,alignItems:"center",flexDirection:"row" ,width:200}} >
                   
//                     <Text style={{ fontSize:15, color:"black" , paddingLeft:25}}>Experience</Text>
//                 </View>

//                 <View  style={{ marginRight:30,display:"flex" ,alignItems:"center",justifyContent:"space-between",flexDirection:"row", width:80}}>
//                     <Text style={{ fontSize:15, color:"black"}}>12</Text>
//                     <Text style={{ fontSize:18, color:"black"}}>&</Text>
//                 </View>
//             </View>

//             <View style={{borderBottomWidth:1, width: 400,height:28,  display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection:"row" }}>
//                 <View style={{display:"flex" ,alignItems:"center",flexDirection:"row" ,width:200}} >
                
//                     <Text style={{ fontSize:15, color:"black", paddingLeft:25}}>Service</Text>
//                 </View>

//                 <View  style={{ marginRight:30,display:"flex" ,alignItems:"center",justifyContent:"space-between",flexDirection:"row", width:80}}>
//                     <Text style={{ fontSize:15, color:"black"}}>15 Year</Text>
//                     <Text style={{ fontSize:18, color:"black"}}>&</Text>
//                 </View>
//             </View>

//             <View style={{borderBottomWidth:1, width: 400,height:28,  display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection:"row" }}>
//                 <View style={{display:"flex" ,alignItems:"center",flexDirection:"row" ,width:200}} >
                   
//                     <Text style={{ fontSize:15, color:"black", paddingLeft:25}}>Gallery</Text>
//                 </View>

//                 <View  style={{ marginRight:30,display:"flex" ,alignItems:"center",justifyContent:"space-between",flexDirection:"row", width:80}}>
//                     <Text style={{ fontSize:15, color:"black"}}>02</Text>
//                     <Text style={{ fontSize:18, color:"black"}}>&</Text>
//                 </View>
//             </View>
//         </View>
//     )
// }
// export default ExploreClassified;



import React from "react";
import { Text, View, Image } from "react-native";
import LogoImg from "../images/blog.png"
import  AwesomeIcon  from "react-native-vector-icons/FontAwesome5"; 
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';

const ExploreClassified = () => {
    const navigation = useNavigation();

    const handlePress=()=>{
navigation.navigate('RealState')
    }
    return (

        <View style={{ backgroundColor: "#f2f2f2", width: 400, height: 800 }}>


            <View style={{display:'flex', alignItems: 'flex-end', marginRight:8}}>
              
            <AwesomeIcon name="search" color="#73fdea" size={25}  />
            </View>

            <View style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row" }}>             
                
                <View style={{}} >
                    <View style={{ backgroundColor: "#61d836", height: 30, width: 160, display: "flex", alignItems: "center" }}>
                        <Text style={{ color: "white", fontSize: 15, padding:5, paddingLeft:5 }}>Near by Classifieds</Text>
                    </View>
                </View>

                <View>
                    <View style={{ backgroundColor: "white", borderTopWidth:2,borderTopColor:"#d6d5d5", height:28, width: 50, display: "flex", alignItems: "center" }}>
                    <AwesomeIcon name="globe" color="#d6d5d5" size={25}   />
                    </View>
                </View>

                <View>
                    <View style={{ backgroundColor: "white", borderWidth:2, borderColor:"#d6d5d5", height: 29, width: 210,  display: "flex", alignItems: "center", justifyContent:"center",flexDirection:"row" }}>
                        <Text style={{ fontSize: 17 }}>Select Category</Text>
                        <AwesomeIcon name="play" color="#d6d5d5" size={20}  marginLeft={18}  />

                    </View>
                </View>
            </View> 

            <View style={{backgroundColor:" #e0e0d1" , padding:3}}>
                <Image source={LogoImg} style={{ borderWidth:1, borderColor:"#d6d5d5", width: 388, height: 200 }} />
            </View>
          

            <View style={{borderBottomWidth:1, borderTopWidth:1,borderTopColor:"#d6d5d5",  borderBottomColor:"#d6d5d5",width: 400, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection:"row" }}>
                <View style={{display:"flex" ,alignItems:"center",flexDirection:"row" ,width:200}} >
                   
                   <TouchableOpacity onPress={handlePress}
                   
                   ><Text style={{ fontSize:12, color:"black" , paddingLeft:25}}>Real Estate</Text> </TouchableOpacity>
                </View>

                <View  style={{ marginRight:30,display:"flex" ,alignItems:"center",justifyContent:"space-between",flexDirection:"row", width:80}}>
                    <Text style={{ fontSize:12, color:"black"}}>12</Text>
                    <Text style={{ fontSize:15, color:"black"}}>&</Text>
                </View>
            </View>

            <View style={{borderBottomWidth:1,  borderBottomColor:"#d6d5d5",width: 400,height:28,  display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection:"row" }}>
                <View style={{display:"flex" ,alignItems:"center",flexDirection:"row" ,width:200}} >
                
                    <Text style={{ fontSize:12, color:"black", paddingLeft:25}}>Job openigs</Text>
                </View>

                <View  style={{ marginRight:30,display:"flex" ,alignItems:"center",justifyContent:"space-between",flexDirection:"row", width:80}}>
                    <Text style={{ fontSize:12, color:"black"}}>15 </Text>
                    <Text style={{ fontSize:15, color:"black"}}>&</Text>
                </View>
            </View>

            <View style={{borderBottomWidth:1,  borderBottomColor:"#d6d5d5",width: 400,height:28,  display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection:"row" }}>
                <View style={{display:"flex" ,alignItems:"center",flexDirection:"row" ,width:200}} >
                   
                    <Text style={{ fontSize:12, color:"black", paddingLeft:25}}>Business offer</Text>
                </View>

                <View  style={{ marginRight:30,display:"flex" ,alignItems:"center",justifyContent:"space-between",flexDirection:"row", width:80}}>
                    <Text style={{ fontSize:12, color:"black"}}>02</Text>
                    <Text style={{ fontSize:15, color:"black"}}>&</Text>
                </View>
            </View>



          

          
        </View>


    )
}
export default ExploreClassified;