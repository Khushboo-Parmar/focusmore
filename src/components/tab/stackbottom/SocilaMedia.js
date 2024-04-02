import React from "react";
import { Text, View, Image } from "react-native";
import LogoImg from "../imagestab/blog.png";
import AwesomeIcon from "react-native-vector-icons/FontAwesome5";
const SocialMedia = () => {
  return (

    <View>

      <View>
        <View style={{ backgroundColor: "#73fdea", height: 35, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row" }}>
          <View style={{ display: "flex", alignItems: "center", flexDirection: "row" }}>
            <AwesomeIcon name="share" color="#929292" size={22} marginLeft={10} />
            <Text style={{ color: "black", marginRight: 28, fontSize: 18, marginLeft: 2 }}>Share</Text>
          </View>
          <AwesomeIcon name="search" color="white" size={25} marginRight={15} />
        </View>

        <View style={{ display: "flex", alignItems: "center", justifyContent: "space-evenly", flexDirection: "row", flexWrap: "wrap" }}>
          <Image source={LogoImg} style={{ width: 90, height: 90, margin: 10 }} />
          <Image source={LogoImg} style={{ width: 90, height: 90, margin: 10 }} />
          <Image source={LogoImg} style={{ width: 90, height: 90, margin: 10 }} />
          <Image source={LogoImg} style={{ width: 90, height: 90, margin: 10 }} />
          <Image source={LogoImg} style={{ width: 90, height: 90, margin: 10 }} />
          <Image source={LogoImg} style={{ width: 90, height: 90, margin: 10 }} />
          <Image source={LogoImg} style={{ width: 90, height: 90, margin: 10 }} />
          <Image source={LogoImg} style={{ width: 90, height: 90, margin: 10 }} />
          <Image source={LogoImg} style={{ width: 90, height: 90, margin: 10 }} />
        </View>

      </View>
    </View>
  )
}
export default SocialMedia;