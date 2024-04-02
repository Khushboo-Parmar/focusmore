import { useNavigation } from '@react-navigation/native';

import React, { useEffect } from 'react';

import { Text, View, Image, TouchableOpacity } from "react-native";
import LogoImg from "../images/bajaj.png";

const ExploreNearShop = () => {
  const [data, setData] = React.useState(null);
  const navigation = useNavigation();

    useEffect(()=>{
        const fecthdata = async ()=>{
          try{
          const result = await fetch('https://focusmore.codelive.info/api/shop/list',{
           method:'GET',
           headers:{
            'Authorization' : 'Bearer 75|FnSWnuPls0OUPd64UMIYaHviEvVvQDvOQ2kYOIOWf96768f7'
           }
          });
          
          const response = await result.json();
          setData(response.data)
        }catch(e){
          console.log(JSON.stringify(e),);
        }
       }
       fecthdata()
      },[])
  return (
    <View style={{ backgroundColor: "#f2f2f2", width: 400, height: 800 }}>
      <View>
        <Image source={LogoImg} style={{ width: 30, height: 30, marginLeft: 355 }} />
      </View>

      <View style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row" }}>
        <View>
          <View style={{ backgroundColor: "#61d836", height: 30, width: 130, display: "flex", alignItems: "center" }}>
            <Text style={{ color: "white", fontSize: 16, padding: 3, paddingLeft: 20 }}>Near by Shop</Text>
          </View>
        </View>

        <View>
          <View style={{ backgroundColor: "white", borderTopWidth: 1, height: 28, width: 100, display: "flex", alignItems: "center" }}>
            <Image source={LogoImg} style={{ width: 30, height: 28, marginRight: 35 }} />
          </View>
        </View>

        <View>
          <View style={{ backgroundColor: "white", borderTopWidth: 1, height: 28, width: 200, borderWidth: 1, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row" }}>
            <Text style={{ fontSize: 15 }}>Select Category</Text>
            <Image source={LogoImg} style={{ width: 20, height: 20, marginLeft: 10 }} />
          </View>
        </View>
      </View>

      <View>

      {data ? (
        <>
        {data.map((i)=>(
        <View style={{ display: "flex", flexDirection: "row" }}>
          <View style={{ margin: 5, width: 100, display: 'flex', alignItems: "center", justifyContent: "center", alignContent: "center" }}>
            <TouchableOpacity>
              <Image source={LogoImg} style={{ width: 100, height: 55 }} />
            </TouchableOpacity>
            <Text style={{ fontSize: 15 }}>{i.name} </Text>
            <Text style={{ fontSize: 15 }}>Electronics</Text>
            <Text style={{ fontSize: 15 }}> 0.5 Kms</Text>
          </View>

          <TouchableOpacity onPress={()=>{navigation.navigate('Detail',{data:[{id:i.id,name:i.name,address:i.address,phone:i.phone}]});}}
           style={{ width: 300, height: 120, display: "flex", alignItems: "start", justifyContent: "space-evenly", backgroundColor: "white", margin: 5, padding: 3 }}>
           
            <View style={{ paddingLeft: 5 }}>
              <Text style={{ fontSize: 10 }}>ELECTRONICS & Home Appliance</Text>
              <Text style={{ fontSize: 20, marginBottom: 5 }}>{i.name}</Text>
              <Image source={LogoImg} style={{ width: 120, height: 15 }} />
              <Text style={{ fontSize: 10, marginBottom: 2 }}>{i.address}</Text>
            </View>
            <View style={{ width: 230, display: "flex", alignItems: "start", justifyContent: "space-between", flexDirection: "row" }}>
              <View style={{ display: "flex", alignItems: "center" }}>
                <Image source={LogoImg} style={{ width: 30, height: 25 }} />
                <Text style={{ fontSize: 10 }}>Products</Text>
              </View>
              <View style={{ display: "flex", alignItems: "center" }}>
                <Image source={LogoImg} style={{ width: 30, height: 25 }} />
                <Text style={{ fontSize: 10 }}>Call</Text>
              </View>
              <View style={{ display: "flex", alignItems: "center" }}>
                <Image source={LogoImg} style={{ width: 30, height: 25 }} />
                <Text style={{ fontSize: 10 }}>Chat</Text>
              </View>
              <View style={{ display: "flex", alignItems: "center" }}>
                <Image source={LogoImg} style={{ width: 30, height: 25 }} />
                <Text style={{ fontSize: 10 }}>Mail</Text>
              </View>
              <View style={{ display: "flex", alignItems: "center" }}>
                <Image source={LogoImg} style={{ width: 30, height: 25 }} />
                <Text style={{ fontSize: 10 }}>Website</Text>
              </View>
            </View>
          </TouchableOpacity>



        </View>
        ))}
        </>
        ):<Text>'Loading'</Text>}


      </View>
    </View>
  );
}

export default ExploreNearShop;
