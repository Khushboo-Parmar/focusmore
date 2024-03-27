// import React from "react";
// import { Text, View, Image } from "react-native";
// import LogoImg from "../images/blog.png"
// import AwesomeIcon from "react-native-vector-icons/FontAwesome5";
// const Certificates = () => {
//     return (
//         <View>

//             <View>
//                 <View style={{
//                     backgroundColor: "#73fdea", height: 35, display: "flex",
//                     alignItems: "cente", justifyContent: "space-between", flexDirection: "row"
//                 }}>
//                     <View style={{ display: "flex", alignItems: "center", flexDirection: "row" }}>
//                         <AwesomeIcon name="search" color="#929292" size={22} marginLeft={10} />
//                         <Text style={{ color: "black", marginRight: 28, fontSize: 18, marginLeft: 2 }}>ReviewS</Text>
//                     </View>
//                     <AwesomeIcon name="search" color="white" size={22} marginRight={10} marginTop={5} />
//                 </View>

//                 <View style={{ borderBottomWidth: 2, borderBottomColor: "#d6d5d5", width: 400, height: 350, display: "flex", alignItems: "center", justifyContent: "center" }}>
//                     <Image source={LogoImg} style={{ width: 280, height: 170, marginLeft: 10, marginRight: 5 }} />
//                 </View>



//             </View>
//         </View>


//     )
// }
// export default Certificates;



import React from "react";
import { Text, View, Image } from "react-native";
import LogoImg from "../images/blog.png";
import AwesomeIcon from "react-native-vector-icons/FontAwesome5";

const Certificates = () => {
  return (
    <View>
      <View>
        <View
          style={{
            backgroundColor: "#73fdea",
            height: 35,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <View style={{ display: "flex", alignItems: "center", flexDirection: "row" }}>
            <AwesomeIcon name="star" color="#929292" size={22} marginLeft={10} />
            <Text style={{ color: "black", marginRight: 28, fontSize: 18, marginLeft: 2 }}>Reviews</Text>
          </View>
          <AwesomeIcon name="search" color="white" size={22} marginRight={10} marginTop={5} />
        </View>

        <View style={{ borderBottomWidth: 2, borderBottomColor: "#d6d5d5", width: 400, height: 350, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Image source={LogoImg} style={{ width: "80%", height: "70%", marginLeft: 10, marginRight: 5 }} />
        </View>
      </View>
    </View>
  );
};

export default Certificates;
