


// import React from "react";
// import { Text, View, Image } from "react-native";

// import LogoImg from "../imagestab/blog.png";
// import AwesomeIcon from "react-native-vector-icons/FontAwesome5";

// const Certificates = () => {

//   useEffect(() => {
//     const fetchData = async () => {
//         try {
//             const token = await AsyncStorage.getItem('token');
//             if (token) {
//                 axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//                 const response = await axios.post('https://focusmore.codelive.info/api/get-certificate');
//                 setData(response.data.data);
//                 console.warn('certificate= ', response);
//             }
//         } catch (error) {
//             console.error('Error fetching nearby shops:', error);
//         }
//     };
//     fetchData();
// }, []);



//   return (
//     <View>
//       <View>
//         <View
//           style={{
//             backgroundColor: "#73fdea",
//             height: 35,
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-between",
//             flexDirection: "row",
//           }}
//         >
//           <View style={{ display: "flex", alignItems: "center", flexDirection: "row" }}>
//             <AwesomeIcon name="star" color="#929292" size={22} marginLeft={10} />
//             <Text style={{ color: "black", marginRight: 28, fontSize: 18, marginLeft: 2 }}>Reviews</Text>
//           </View>
//           <AwesomeIcon name="search" color="white" size={22} marginRight={10} marginTop={5} />
//         </View>

//         <View style={{ borderBottomWidth: 2, borderBottomColor: "#d6d5d5", width: 400, height: 350, display: "flex", alignItems: "center", justifyContent: "center" }}>
//           <Image source={LogoImg} style={{ width: "80%", height: "70%", marginLeft: 10, marginRight: 5 }} />
//         </View>
//       </View>
//     </View>
//   );
// };

// export default Certificates;

import React, { useEffect, useState } from "react";
import { Text, View, Image } from "react-native";
import AwesomeIcon from "react-native-vector-icons/FontAwesome5";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import LogoImg from "../imagestab/blog.png";

const Certificates = () => {
  const [certificateImage, setCertificateImage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        if (token) {
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
          const response = await axios.post('https://focusmore.codelive.info/api/get-certificate', {
            service_id: 5,
            user_id: 3
          });
          if (response.data.status === 200 && response.data.data.length > 0) {
            setCertificateImage(response.data.data[0].Certificate);
            console.warn('certificate= ', response);
          } else {
            console.warn('No certificate found');
          }
        }
      } catch (error) {
        console.error('Error fetching certificate:', error);
      }
    };
    fetchData();
  }, []);

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
          {certificateImage ? (
            <Image source={{ uri: certificateImage }} style={{ width: "80%", height: "70%", marginLeft: 10, marginRight: 5 }} />
          ) : (
            <Text>No certificate found</Text>
          )}
        </View>
      </View>
    </View>
  );
};

export default Certificates;

