// import { useNavigation } from '@react-navigation/native';
// import React, { useEffect } from 'react';
// import { Text, View, Image, TouchableOpacity } from "react-native";
// import LogoImg from "../images/bajaj.png";
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from 'axios';
// import Dropdown from './Dropdown';
// import productIcon from '../images/cart.jpg';
// import callIcon from '../images/call.png'
// import chatIcon from '../images/chat.png';
// import mailIcon from '../images/mail.png';
// import websiteIcon from '../images/web.png';
// import star from '../images/star.png';
// import Icon from 'react-native-vector-icons/AntDesign';


// const ExploreNearShop = () => {
//   const [data, setData] = React.useState(null);
//   const navigation = useNavigation();
//     useEffect(() => {
//       const fetchData = async () => {
//         try {
//           const token = await AsyncStorage.getItem('token');
//           if (token) {
//             axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//             const response = await axios.post('https://focusmore.codelive.info/api/shop/list');
//             setData(response.data.data);
//             console.warn('explore shop= ',response);
//           }
//         } catch (error) {
//           console.error('Error fetching nearby shops:', error);
//         }
//       };

//       fetchData();
//     }, []);
//   return (
//     <View style={{ backgroundColor: "#f2f2f2", width: 400, height: 800 }}>
//       <View>
//       <Icon name="search1" size={24} color="blue" />
//       </View>

//       <View style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row" }}>
//         <View>
//           <View style={{ backgroundColor: "#61d836", height: 30, width: 130, display: "flex", alignItems: "center" }}>
//             <Text style={{ color: "white", fontSize: 16, padding: 3, paddingLeft: 20 }}>Near by Shop</Text>
//           </View>
//         </View>

//         <View>
//           <View style={{ backgroundColor: "white", borderTopWidth: 1, height: 28, width: 100, display: "flex", alignItems: "center" }}>
//           <TouchableOpacity>
//             <Image source={require('../images/radius.jpg')} />
//           </TouchableOpacity>
//           </View>
//         </View>

//         <View>
//           <View 
//           style={{ backgroundColor: "white", borderTopWidth: 1, height: 28, width: 200, borderWidth: 1, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row" }}
//           >

//           </View>
//         </View>
//       </View>

//       <View>

//       {data ? (
//         <>
//         {data.map((i)=>(
//         <View style={{ display: "flex", flexDirection: "row" }}>
//           <View style={{ margin: 5, width: 100, display: 'flex', alignItems: "center", justifyContent: "center", alignContent: "center" }}>
//             <TouchableOpacity>

//               <Image
//                     source={{ uri: i.image }}
//                     style={{ width: 100, height: 55 }}
//                   />
//             </TouchableOpacity>
//             <Text style={{ fontSize: 15 }}>{i.name} </Text>

//             <Text style={{ fontSize: 15 }}> 0.5 Kms</Text>
//           </View>




//           <TouchableOpacity onPress={() =>
//                   navigation.navigate('BottomNavPage', {
//                     screen: 'StackAndBottom',
//                     params: {
//                       screen: 'DetailPage',
//                       params: { data: [{ id: i.id, name: i.name, address: i.address, phone: i.phone }] }
//                     }
//                   })}
//            style={{ width: 300, height: 120, display: "flex", alignItems: "start", justifyContent: "space-evenly", backgroundColor: "white", margin: 5, padding: 3 }}>

//             <View style={{ paddingLeft: 5 }}>
//               <Text style={{ fontSize: 14, marginTop:10 }}>ELECTRONICS & Home Appliance</Text>
//               <Text style={{ fontSize: 20, marginBottom: 5 }}>{i.name}</Text>
//               <Image source={star} style={{ width: 15, height:15 }} />
//               <Text style={{ fontSize: 15, marginBottom: 2 }}>{i.address}</Text>
//             </View>
//             <View style={{ width: 230, display: "flex", alignItems: "start", justifyContent: "space-between", flexDirection: "row" }}>
//               <View style={{ display: "flex", alignItems: "center" }}>
//                 <Image source={productIcon} style={{ width: 30, height: 25 }} />
//                 <Text style={{ fontSize: 10 }}>Products</Text>
//               </View>
//               <View style={{ display: "flex", alignItems: "center" }}>
//                 <Image source={callIcon} style={{ width: 30, height: 25 }} />
//                 <Text style={{ fontSize: 10 }}>Call</Text>
//               </View>
//               <View style={{ display: "flex", alignItems: "center" }}>
//                 <Image source={chatIcon} style={{ width: 30, height: 25 }} />
//                 <Text style={{ fontSize: 10 }}>Chat</Text>
//               </View>
//               <View style={{ display: "flex", alignItems: "center" }}>
//                 <Image source={mailIcon} style={{ width: 30, height: 25 }} />
//                 <Text style={{ fontSize: 10 }}>Mail</Text>
//               </View>
//               <View style={{ display: "flex", alignItems: "center" }}>
//                 <Image source={websiteIcon} style={{ width: 30, height: 25 }} />
//                 <Text style={{ fontSize: 10 }}>Website</Text>
//               </View>
//             </View>
//           </TouchableOpacity>



//         </View>
//         ))}
//         </>
//         ):<Text>'Loading'</Text>}


//       </View>
//     </View>
//   );
// }

// export default ExploreNearShop;

import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet, TextInput } from "react-native";

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import productIcon from '../images/cart.jpg';
import callIcon from '../images/call.png'
import chatIcon from '../images/chat.png';
import mailIcon from '../images/mail.png';
import websiteIcon from '../images/web.png';
import star from '../images/star.png';
import Icon from 'react-native-vector-icons/AntDesign';

import { SelectList } from 'react-native-dropdown-select-list'
import { ScrollView } from 'react-native-gesture-handler';



const ExploreNearShop = () => {
  const [data, setData] = React.useState(null);
  const navigation = useNavigation();
  const [selected, setSelected] = React.useState("");

  const datadropdown = [
    { key: '1', value: 'Mobiles', disabled: true },
    { key: '2', value: 'Appliances' },
    { key: '3', value: 'Cameras' },
    { key: '4', value: 'Computers', disabled: true },
    { key: '5', value: 'Vegetables' },
    { key: '6', value: 'Diary Products' },
    { key: '7', value: 'Drinks' },
  ]


  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        if (token) {
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
          const response = await axios.post('https://focusmore.codelive.info/api/shop/list');
          setData(response.data.data);
          console.warn('explore shop= ', response);
        }
      } catch (error) {
        console.error('Error fetching nearby shops:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <View style={{ flex: 1 }}>
      {/* 1 */}
      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%', height: 30, backgroundColor: 'white', justifyContent: 'space-between' }}>

        <TextInput>

        </TextInput>
        <TouchableOpacity>
          <Icon name="search1" size={24} color="blue" />
        </TouchableOpacity>

      </View>

      {/* 2*/}
      <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'baseline' }}>
        <View style={{ backgroundColor: "#61d836" }}>
          <Text style={{ color: 'white', fontSize: 20, padding: 8 }}>Near by Shops</Text>
        </View>
        <View>
          <TouchableOpacity>
            <Image source={require('../images/radius.jpg')} />
          </TouchableOpacity>
        </View>

        <View style={styles.selectlistContainer}>
          <SelectList
            setSelected={(val) => setSelected(val)}
            data={datadropdown}
            save="value"
            style={styles.selectlist}
          />

        </View>
      </View>

      {/* 3 */}
      <ScrollView>
        {data ? (
          <>
            {data.map((i) => (

              <View style={{ display: 'flex', flexDirection: 'row', padding: 10, justifyContent: 'space-between' }}>

                {/* 3.1 */}
                <View style={{ alignItems: 'center' }}>
                  <TouchableOpacity>
                    <Image
                      source={{ uri: i.image }}
                      style={{ width: 100, height: 80 }}
                    />
                  </TouchableOpacity>
                  <Text style={{ fontSize: 15, textAlign: 'center', width: 80, }}>{i.name} </Text>
                  <Text style={{ fontSize: 15 }}> 0.5 Kms</Text>
                </View>
                {/* 3.2 */}

                <TouchableOpacity onPress={() =>
                  navigation.navigate('BottomNavPage', {
                    screen: 'StackAndBottom',
                    params: {
                      screen: 'DetailPage',
                      params: { data: [{ id: i.id, name: i.name, address: i.address, phone: i.phone }] }
                    }
                  })}>

                <View style={{ backgroundColor: 'white', padding: 5 }}>
                  <View style={{ display: "flex", justifyContent: 'space-between', flexDirection: 'row' }} >
                    <View>
                      <Text style={{ fontSize: 14 }}>ELECTRONICS & Home Appliance</Text>
                      <Text style={{ fontSize: 18, }}>{i.name}</Text>
                      <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <Image source={star} style={{ width: 15, height: 15 }} />
                        <Image source={star} style={{ width: 15, height: 15 }} />
                        <Image source={star} style={{ width: 15, height: 15 }} />
                        <Image source={star} style={{ width: 15, height: 15 }} />
                        <Image source={star} style={{ width: 15, height: 15 }} />
                        <Image source={star} style={{ width: 15, height: 15 }} />
                      </View>
                      <Text style={{ fontSize: 16 }}>{i.address}</Text>

                    </View>
                    <View style={{ alignSelf: 'center' }}>
                      <Image source={require('../images/shops.png')} style={{ width: 40, height: 40 }}></Image>
                    </View>
                  </View>


                  <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>

                    <View style={{ display: "flex", alignItems: "center" }}>
                      <Image source={productIcon} style={{ width: 25, height: 20 }} />
                      <Text style={{ fontSize: 10 }}>Products</Text>
                    </View>


                    <View style={{ display: "flex", alignItems: "center" }} >
                      <Image source={callIcon} style={{ width: 20, height: 20 }} />
                      <Text style={{ fontSize: 10 }}>Call</Text>
                    </View>

                    <View style={{ display: "flex", alignItems: "center" }}>
                      <Image source={chatIcon} style={{ width: 20, height: 20 }} />
                      <Text style={{ fontSize: 10 }}>Chat</Text>
                    </View>

                    <View style={{ display: "flex", alignItems: "center" }}>
                      <Image source={mailIcon} style={{ width: 20, height: 20 }} />
                      <Text style={{ fontSize: 10 }}>Mail</Text>
                    </View>

                    <View style={{ display: "flex", alignItems: "center" }}>
                      <Image source={websiteIcon} style={{ width: 20, height: 20 }} />
                      <Text style={{ fontSize: 10 }}>Website</Text>
                    </View>


                  </View>

                </View>
              </TouchableOpacity>

                


              </View>

            ))}
          </>
        ) : <Text>'Loading'</Text>}
      </ScrollView>

    </View>
  );
}

export default ExploreNearShop;



const styles = StyleSheet.create({
  selectlistContainer: {
    width: '50%',
  },
  selectlist: {
    height: 20,

  }
});