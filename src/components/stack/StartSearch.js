
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
      try {0
        const token = await AsyncStorage.getItem('token');
        if (token) {
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
          const response = await axios.post('http://focusmore.codelive.info/api/category/list');
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
      <View style={{ display:'flex',alignItems: 'flex-end', marginRight:15 , marginTop:10}}>
  <TouchableOpacity>
    <Image source={require('../images/radius.jpg')} style={styles.radiusimage} />
  </TouchableOpacity>
</View>
        <View style={styles.container}>
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
    // marginTop: 15,
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

// import React, { useEffect, useState } from 'react';
// import { ScrollView, StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from 'axios';
// import NearByShop from './NearByShop';
// import NearByServices from './NearByServices';
// import NearByClassified from './NearByClassified';
// const StartSearch = () => {
//   const [text, onChangeText] = React.useState('Useless Text');
//   const [number, onChangeNumber] = React.useState('');
//   const [selectedValue, setSelectedValue] = React.useState(null);
//   const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
//   const [options, setOptions] = React.useState([]);

//   useEffect(() => {
//     const fetchOptions = async () => {
//       try {
//         const token = await AsyncStorage.getItem('token');
//         if (token) {
//           axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//           const response = await axios.get('http://focusmore.codelive.info/api/category/list');
//           setOptions(response.data.data);
//           console.log("satrt =" ,response);
//         }
//       } catch (error) {
//         console.error('Error fetching options:', error);
//       }
//     };

//     fetchOptions();
//   }, []);

//   const handleOptionSelect = (option) => {
//     setSelectedValue(option);
//     setIsDropdownOpen(false);
//   };

//   return (
//     <ScrollView>
//       <View style={styles.maincontainer}>
//         <View style={styles.container}>
//           <View>
//             <TouchableOpacity>
//               <Image source={require('../images/radius.jpg')} style={styles.radiusimage} />
//             </TouchableOpacity>
//           </View>
//           <View>
//             <Text style={styles.searchheader}>Start your Search</Text>
//             <View style={styles.flex}>
//               <Text style={styles.label}>Keyword:</Text>
//               <TextInput
//                 style={styles.input}
//                 onChangeText={onChangeText}
//                 value={number}
//                 keyboardType="text"
//               />
//             </View>
//             <View style={styles.flex}>
//               <Text style={styles.label}>Category:</Text>
//               <TextInput
//                 style={styles.input}
//                 onChangeText={onChangeText}
//                 keyboardType="text"
//                 onFocus={() => setIsDropdownOpen(true)}
//                 onBlur={() => setIsDropdownOpen(false)}
//               />
//               {/ Dropdown /}
//               {isDropdownOpen && (
//                 <View style={styles.dropdown}>
//                   {options.map((option, index) => (
//                     <TouchableOpacity
//                       key={index}
//                       style={styles.option}
//                       onPress={() => handleOptionSelect(option.name)}
//                     >
//                       <Text>{option.name}</Text>
//                     </TouchableOpacity>
//                   ))}
//                 </View>
//               )}
//             </View>
//           </View>
  
//         </View>
//         <NearByShop />
//       <NearByServices />
//       <NearByClassified />
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   maincontainer: {
//     display: 'flex',
//     textAlign: 'center',
//     justifyContent: 'center',
//   },
//   container: {
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   searchheader: {
//     color: '#b51e3b',
//     fontSize: 18,
//   },
//   label: {
//     color: '#525355',
//     fontSize: 20,
//   },
//   input: {
//     margin: 12,
//     borderWidth: 1,
//     paddingLeft: 10,
//     paddingRight: 10,
//     paddingTop: 1,
//     paddingBottom: 1,
//     width: 250
//   },
//   flex: {
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center'
//   },
//   dropdown: {
//     position: 'absolute',
//     top: 44,
//     left: 95,
//     zIndex: 999,
//     borderWidth: 1,
//     borderColor: 'black',
//     borderRadius: 5,
//     padding: 10,
//     width: 150,
//     backgroundColor: '#fff',
//   },
//   option: {
//     padding: 10,
//   },
// });

// export default StartSearch;