import React from "react";
import { Text, View, Image } from "react-native";
// import LogoImg from "../images/blog.png"
// import LogoImg from "../imagestab/blog.png";
import  AwesomeIcon  from "react-native-vector-icons/FontAwesome5"; 
const SetReviews = () => {
    return (

        <View>

          <View style={{ marginTop: 20 }}>
<View style={{
    display: "flex", alignContent: "center", justifyContent: "space-between"
    , flexDirection: "row"
}}>
    <View style={{ borderRadius: 7, backgroundColor: "#d6d5d5", width: 200, marginLeft: 10, padding: 5 }}>
        <Text style={{ color: "black" }}>Review Title</Text>
    </View>
    <View style={{ borderRadius: 7, backgroundColor: "#d6d5d5", width: 120,
     marginRight: 10, padding: 6 }}>
    <View style={{display:"flex", flexDirection:"row",justifyContent:"space-between", width:80 ,marginLeft:10}}>
<AwesomeIcon name="star" color="yellow"  size={8}  />
<AwesomeIcon name="star" color="yellow" size={8}  />
<AwesomeIcon name="star" color="yellow" size={8}  />
<AwesomeIcon name="star" color="yellow" size={8}  />
<AwesomeIcon name="star" color="#929292" size={8}  />

</View> 
    </View>

</View>
<View style={{ backgroundColor: "#d6d5d5", width: 375, height: 80, borderRadius: 10, margin: 8 }}>
<Text style={{ paddingLeft:20, color:"white" ,fontSize:17,backgroundColor:"#00a2ff", width:80, height:25, marginLeft:293, marginTop:55, borderRadius:10}}>
    Post
 </Text>
</View>

</View> 

        </View>


    )
}
export default SetReviews;