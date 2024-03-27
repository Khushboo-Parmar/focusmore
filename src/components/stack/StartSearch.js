// import React, {useState} from 'react';
// import { SafeAreaView, StyleSheet, View, Text, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
// import NearByShop from './NearByShop';
// import NearByServices from './NearByServices';
// import NearByClassified from './NearByClassified';
// import Icon from 'react-native-vector-icons/AntDesign';
// import { useNavigation } from '@react-navigation/native';

// const StartSearch = () => {
//   const [text, onChangeText] = React.useState('Useless Text');
//   const [number, onChangeNumber] = React.useState('');
//   const [numberc, setNumberc] = useState('');

// const navigation=useNavigation();
//   const handleBottom=()=>{
//     navigation.navigate('BottomNavPage');
//   }

//   return (
//     <ScrollView>
//       <View style={styles.maincontainerr}>
//         <View style={styles.containerr}>
//           <View>
//             <TouchableOpacity
//             onPress={handleBottom}
//             style={{ display: 'felx', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
//               <Image source={require('../images/radius.jpg')} style={styles.radiusimage} />
//             </TouchableOpacity>
//           </View>
//           <View >
//             <Text style={styles.searcheadr}>Start your Search</Text>
//             <View style={styles.flexr}>
//               <Text style={styles.labelr}>Keyword:</Text>
//               <TextInput
//                 style={styles.inputr}
//                 onChangeText={onChangeNumber}
//                 value={number}
//                 keyboardType="numeric"
//               />
//             </View>
//           </View>

//           <View style={styles.flexr}>
//             {/* <Text style={styles.labelr}>Category:</Text>
//             <TextInput
//               style={styles.inputr}
//               onChangeText={onChangeNumber}
//               value={number}
//               keyboardType="numeric"

//             /> */}

// <View style={styles.inputContainer}>
//       <Icon name="down" size={24} color="black" style={styles.icon} />
//       <TextInput
//         style={styles.input}
//         onChangeText={setNumberc}
//         value={number}
//         keyboardType="numeric"
//         placeholder="Enter your number"
//         placeholderTextColor="#a9a9a9"
//       />
//     </View>
//           </View>
//         </View>
//         <NearByShop />
//         <NearByServices />
//         <NearByClassified />
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   maincontainerr: {
//     display: 'flex',
//     textAlign: 'center',
//     justifyContent: 'center',
//   },
//   containerr: {


//     marginTop: 20,
//   },
//   searcheadr: {
//     color: '#b51e3b',
//     fontSize: 18,
//   },
//   labelr: {
//     color: '#525355',
//     fontSize: 20,
//   },
//   inputr: {
//     margin: 12,
//     borderWidth: 1,
//     paddingLeft: 10,
//     paddingRight: 10,
//     paddingTop: 1,
//     paddingBottom: 1,
//     width: 250
//   },
//   flexr: {
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   container: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   button: {
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//     borderWidth: 1,
//     borderColor: '#333',
//   },
//   selectedButton: {
//     backgroundColor: 'blue',
//     borderColor: 'blue',
//   },
//   buttonText: {
//     color: '#333',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 8,
//     paddingHorizontal: 10,
//     marginTop: 10,
//   },
//   input: {
//     flex: 1,
//     height: 40,
//     fontSize: 16,
//     color: '#000',
//   },
//   icon: {
//     marginRight: 10,
//   },
// });

// export default StartSearch;
// import React, { useEffect } from 'react';

// import { SafeAreaView, StyleSheet, View, Text, TextInput ,Image,TouchableOpacity,ScrollView} from 'react-native';
// import NearByShop from './NearByShop';
// import NearByServices from './NearByServices';
// import NearByClassified from './NearByClassified';
// import { Location } from './Location';
// import axios from "axios";
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const StartSearch = () => {
//   const [text, onChangeText] = React.useState('Useless Text');
//   const [number, onChangeNumber] = React.useState('');
//   const [selectedValue, setSelectedValue] = React.useState(null); 
//   const [isDropdownOpen, setIsDropdownOpen] =  React.useState(false); 
//   const [options, setOptions] = React.useState([]); 
//   const handleOptionSelect = (option) => {
//     setSelectedValue(option);
//     setIsDropdownOpen(false); 
//   };
//   const token = await AsyncStorage.getItem('token');

//   useEffect(() => {
    
//     const fetchData = async () => {
//     try {
//       axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

//     const response = await fetch('http://focusmore.codelive.info/api/category/list',{
//       method:'GET',
//       // headers:{
//       //  'Authorization' : 'Bearer 45|neT3OvlNU0LKpA05F9C4IfS3bKFsKRtCKe0D9oL78fbf33ff'
//       // }
//     });
//     const data = await response.json();
//     setOptions(data.data);
//     } catch (error) {
//     console.error('Error fetching options:', error);
//     }
//     };
    
//     fetchData();
//     },[]);

//   return (
//     <ScrollView>
//     <View style={styles.maincontainerr}>
//     <View style={styles.containerr}>
//       <View style={{}}>
//         <TouchableOpacity>
//         <Image source={require('../images/radius.jpg')} style={styles.radiusimage}  />
//         </TouchableOpacity>
//       </View>
//       <View>
//       <Text style={styles.searcheadr}>Start your Search</Text>
//       <View style={styles.flexr}>
//         <Text  style={styles.labelr}>Keyword:</Text>
//         <TextInput
//           style={styles.inputr}
//           onChangeText={onChangeText}
//           value={number}
//           keyboardType="text"
//         />
//       </View></View>

//       <View style={styles.flexr}>
// <Text style={styles.labelr}>Category:</Text>
// <TextInput
//           style={styles.inputr}
//           onChangeText={onChangeText}
//           keyboardType="text"
//           onFocus={() => setIsDropdownOpen(true)}
//         onBlur={() => setIsDropdownOpen(false)} 
//         />

//            {/ Dropdown /}
//       {/* {isDropdownOpen && (
//         <View style={styles.dropdown}>
//         {options.map((option, index) => (
//         <TouchableOpacity
//         key={index}
//         style={styles.option}
//         onPress={handleOptionSelect(option.name)}
//         >
//         <Text>{option.name}</Text>
//         </TouchableOpacity>
//         ))}
//         </View>
//       )} */}
// </View>
//       </View>
//       <NearByShop />
//       <NearByServices />
//       <NearByClassified />

//     </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   maincontainerr:{
//     display: 'flex',
//     textAlign: 'center',
//     justifyContent: 'center',
//   },
//   containerr: {

//    alignItems: 'center',
//     marginTop: 20,
//   },
//   searcheadr:{
//     color: '#b51e3b',
//     fontSize: 18,
//   },
//   labelr:{
//     color: '#525355',
//     fontSize: 20,
//   },
//   inputr: {
//     margin: 12,
//     borderWidth: 1,
//     paddingLeft: 10,
//     paddingRight: 10,
//     paddingTop: 1,
//     paddingBottom: 1,
//     width: 250
//   },
//   flexr: {
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems:'center'
//   },
//   container: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   button: {
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//     borderWidth: 1,
//     borderColor: '#333',
//   },
//   selectedButton: {
//     backgroundColor: 'blue',
//     borderColor: 'blue',
//   },
//   buttonText: {
//     color: '#333',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   dropdown: {
//     position: 'absolute',
//     top: 44,
//     left:95,
//     zIndex:999,
//     borderWidth: 1,
//     borderColor: 'black',
//     borderRadius: 5,
//     padding: 10,
//     width: 150,
//     backgroundColor: '#fff',
//     },
//     option: {
//     padding: 10,
//     },
//     selectedValue: {
//     marginTop: 10,
//     },
// });

// export default StartSearch;
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import NearByShop from './NearByShop';
import NearByServices from './NearByServices';
import NearByClassified from './NearByClassified';
const StartSearch = () => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');
  const [selectedValue, setSelectedValue] = React.useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        if (token) {
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
          const response = await axios.get('http://focusmore.codelive.info/api/category/list');
          setOptions(response.data.data);
          console.warn(response)
        }
      } catch (error) {
        console.error('Error fetching options:', error);
      }
    };

    fetchOptions();
  }, []);

  const handleOptionSelect = (option) => {
    setSelectedValue(option);
    setIsDropdownOpen(false);
  };

  return (
    <ScrollView>
      <View style={styles.maincontainer}>
        <View style={styles.container}>
          <View>
            <TouchableOpacity>
              <Image source={require('../images/radius.jpg')} style={styles.radiusimage} />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.searchheader}>Start your Search</Text>
            <View style={styles.flex}>
              <Text style={styles.label}>Keyword:</Text>
              <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={number}
                keyboardType="text"
              />
            </View>
            <View style={styles.flex}>
              <Text style={styles.label}>Category:</Text>
              <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                keyboardType="text"
                onFocus={() => setIsDropdownOpen(true)}
                onBlur={() => setIsDropdownOpen(false)}
              />
              {/* Dropdown */}
              {isDropdownOpen && (
                <View style={styles.dropdown}>
                  {options.map((option, index) => (
                    <TouchableOpacity
                      key={index}
                      style={styles.option}
                      onPress={() => handleOptionSelect(option.name)}
                    >
                      <Text>{option.name}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>
          </View>
  
        </View>
        <NearByShop />
      <NearByServices />
      <NearByClassified />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  searchheader: {
    color: '#b51e3b',
    fontSize: 18,
  },
  label: {
    color: '#525355',
    fontSize: 20,
  },
  input: {
    margin: 12,
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 1,
    paddingBottom: 1,
    width: 250
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  dropdown: {
    position: 'absolute',
    top: 44,
    left: 95,
    zIndex: 999,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 10,
    width: 150,
    backgroundColor: '#fff',
  },
  option: {
    padding: 10,
  },
});

export default StartSearch;

