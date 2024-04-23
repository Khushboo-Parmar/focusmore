// // import React, { useEffect, useState } from 'react';
// // import { ScrollView, StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
// // import NearByShop from './NearByShop';
// // import NearByServices from './NearByServices';
// // import NearByClassified from './NearByClassified';
// // import Dropdown from './Dropdown';


// // const StartSearch = () => {
// //   const [text, onChangeText] = useState('Useless Text');
// //   const [number, onChangeNumber] = useState('');
// //   const [selectedCategory, setSelectedCategory] = useState('');

// //   const handleCategorySelect = (category) => {
// //     setSelectedCategory(category);
// //   };
       
// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const token = await AsyncStorage.getItem('token');
// //         if (token) {
// //           axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
// //           const response = await axios.post('https://focusmore.codelive.info/api/search' , {
// //                 name: A,
// //                 category_id: 4,
// //                 latitude: 22.9676,
// //                 longitude: 76.0534,
// //                 radius: 5000 , 
// //          } );
// //           setData(response.data.data);
// //           console.warn('explore shop= ', response.data.data);
// //         }
// //       } catch (error) {
// //         console.error('Error fetching nearby shops:', error);
// //       }
// //     };

// //     fetchData();
// //   }, []);
// //   return (
// //     <ScrollView style={{ marginBottom: 20 }}>
// //       <View style={styles.maincontainer}>
// //         <View style={{ display: 'flex', alignItems: 'flex-end', marginRight: 15, marginTop: 10 }}>
// //           <TouchableOpacity>
// //             <Image source={require('../images/radius.jpg')} style={styles.radiusimage} />
// //           </TouchableOpacity>
// //         </View>
// //         <View style={styles.container}>
// //           <View>
// //             <Text style={styles.searchheader}>Start your Search</Text>
// //             <View style={styles.flex}>
// //               <Text style={styles.label}>Keyword:</Text>
// //               <TextInput
// //                 style={styles.input}
// //                 onChangeText={onChangeText}
// //                 keyboardType="text"
// //               />
// //             </View>

// //             <View style={styles.flex2}>
// //               <Text style={[styles.label,{marginLeft:10}]}>Category:</Text>
// //               <View>
// //                 <Dropdown onSelect={handleCategorySelect} />
// //               </View>

// //             </View>
// //             {/* {selectedCategory !== '' && (
// //               <Text style={styles.selectedCategoryText}>Selected Category: {selectedCategory}</Text>
// //             )} */}
// //           </View>
// //         </View>
// //         <NearByShop />
// //         <NearByServices />
// //         <NearByClassified />
// //       </View>
// //     </ScrollView>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   maincontainer: {
// //     display: 'flex',
// //     textAlign: 'center',
// //     justifyContent: 'center',
// //     flex:1,
// //   },
// //   container: {
// //     alignItems: 'center',
// //   },
// //   searchheader: {
// //     color: '#b51e3b',
// //     fontSize: 18,
// //   },
// //   label: {
// //     color: '#525355',
// //     fontSize: 20,
// //   },
// //   input: {
// //     margin: 12,
// //     paddingLeft: 15,
// //     paddingRight: 15,
// //     width: '62%',
// //     height: 40,
// //     borderRadius: 10,
// //     borderWidth: 0.5,
// //     color:'black'
// //   },
// //   flex: {
// //     display: 'flex',
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     justifyContent: 'center'
// //   },
// //   flex2: {
// //     display: 'flex',
// //     flexDirection: 'row',
// //   },
// // });

// // export default StartSearch;

// import React, { useEffect, useState } from 'react';
// import { ScrollView, StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import NearByShop from './NearByShop';
// import NearByServices from './NearByServices';
// import NearByClassified from './NearByClassified';
// import Dropdown from './Dropdown';

// const StartSearch = () => {
//   const [text, onChangeText] = useState('Useless Text');
//   const [number, onChangeNumber] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('');

//   const handleCategorySelect = (category) => {
//     setSelectedCategory(category);
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const token = await AsyncStorage.getItem('token');
//         if (token) {
//           axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//           const response = await axios.post('https://focusmore.codelive.info/api/search', {
//             name: text, 
//             category_id: selectedCategory.id, 
//             latitude: 22.9676,
//             longitude: 76.0534,
//             radius: 5000,
//           });
//           console.warn('explore shop= ', response.data.data);
          
//         }
//       } catch (error) {
//         console.error('Error fetching nearby shops:', error);
//       }
//     };

//     if (selectedCategory !== '') {
//       fetchData();
//     }
//   }, [selectedCategory, text]); 

//   return (
//     <ScrollView style={{ marginBottom: 20 }}>
//       <View style={styles.maincontainer}>
//         <View style={{ display: 'flex', alignItems: 'flex-end', marginRight: 15, marginTop: 10 }}>
//           <TouchableOpacity>
//             <Image source={require('../images/radius.jpg')} style={styles.radiusimage} />
//           </TouchableOpacity>
//         </View>
//         <View style={styles.container}>
//           <View>
//             <Text style={styles.searchheader}>Start your Search</Text>
//             <View style={styles.flex}>
//               <Text style={styles.label}>Keyword:</Text>
//               <TextInput
//                 style={styles.input}
//                 onChangeText={onChangeText}
//                 keyboardType="text"
//               />
//             </View>

//             <View style={styles.flex2}>
//               <Text style={[styles.label,{marginLeft:10}]}>Category:</Text>
//               <View>
//                 <Dropdown onSelect={handleCategorySelect} />
//               </View>

//             </View>
//             {/* {selectedCategory !== '' && (
//               <Text style={styles.selectedCategoryText}>Selected Category: {selectedCategory}</Text>
//             )} */}
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
//   maincontainer: {
//     display: 'flex',
//     textAlign: 'center',
//     justifyContent: 'center',
//     flex:1,
//   },
//   container: {
//     alignItems: 'center',
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
//     paddingLeft: 15,
//     paddingRight: 15,
//     width: '62%',
//     height: 40,
//     borderRadius: 10,
//     borderWidth: 0.5,
//     color:'black'
//   },
//   flex: {
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   flex2: {
//     display: 'flex',
//     flexDirection: 'row',
//   },
// });

// export default StartSearch;
// StartSearch.js
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import NearByShop from './NearByShop';
import NearByServices from './NearByServices';
import NearByClassified from './NearByClassified';
import Dropdown from './Dropdown';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios';
import SearchData from './Search';
import { ActivityIndicator } from 'react-native-paper';
const StartSearch = () => {
  const [keyword, setKeyword] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchData, setSearchData] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };
  const handelSearch = async () => {
    try {
      setLoading(true);
      const token = await AsyncStorage.getItem('token');
      if (token && selectedCategory) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        const response = await axios.post('https://focusmore.codelive.info/api/search', {
          name: keyword,
          category_id: selectedCategory?.id,
          latitude: 87889887,
          longitude: 8778878,
          radius: 78879
        });
        setSearchData(response.data.data);
      }
    } catch (error) {
      console.error('Error fetching search results:', error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    if (selectedCategory) {
      handelSearch();
      // console.warn('working')
    }
  }, [selectedCategory]);
  return (
    <ScrollView style={{ marginBottom: 20 }}>
      <View style={styles.maincontainer}>
        <View style={{ display: 'flex', alignItems: 'flex-end', marginRight: 15, marginTop: 10 }}>
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
                  onChangeText={(e)=>{setKeyword(e)}}
                style={styles.input}
                value={keyword}
                keyboardType="text"
              />
            </View>
            <View style={styles.flex2}>
              <Text style={[styles.label, { marginLeft: 10 }]}>Category:</Text>
              <View>
                <Dropdown onSelect={handleCategorySelect} />
              </View>
            </View>
          </View>
        </View>

        {selectedCategory ? (
          <SearchData data={searchData} />
        ) : (
          // <ActivityIndicator size="large" color="black" />
<>
<NearByShop />
          <NearByServices />
          <NearByClassified />
</>
        )}

      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  maincontainer: {
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  container: {
    alignItems: 'center',
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
    paddingLeft: 15,
    paddingRight: 15,
    width: '62%',
    height: 40,
    borderRadius: 10,
    borderWidth: 0.5,
    color: 'black'
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  flex2: {
    display: 'flex',
    flexDirection: 'row',
  },
});
export default StartSearch;