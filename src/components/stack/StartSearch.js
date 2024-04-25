// import React, { useEffect, useState } from 'react';
// import { ScrollView, StyleSheet, View, Text, TextInput, Image, TouchableOpacity ,Dimensions} from 'react-native';
// import NearByShop from './NearByShop';
// import NearByServices from './NearByServices';
// import NearByClassified from './NearByClassified';
// import Dropdown from './Dropdown';
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import axios from 'axios';
// import SearchData from './Search';
// import { ActivityIndicator } from 'react-native-paper';
// const StartSearch = () => {
//   const [keyword, setKeyword] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [searchData, setSearchData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const { width } = Dimensions.get('window');
//   const [banners, setBanners] = useState([]);



//   const handleCategorySelect = (category) => {
//     setSelectedCategory(category);
//   };
//   const handelSearch = async () => {
//     try {
//       setLoading(true);
//       const token = await AsyncStorage.getItem('token');
//       if (token && selectedCategory) {
//         axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//         const response = await axios.post('https://focusmore.codelive.info/api/search', {
//           name: keyword,
//           category_id: selectedCategory?.id,
//           latitude: 87889887,
//           longitude: 8778878,
//           radius: 78879
//         });
//         setSearchData(response.data.data);
//       }
//     } catch (error) {
//       console.error('Error fetching search results:', error);
//     } finally {
//       setLoading(false);
//     }
//   }
//   useEffect(() => {
//     if (selectedCategory) {
//       handelSearch();
//       // console.warn('working')
//     }
//   }, [selectedCategory]);

// // banner

//   useEffect(() => {
//     const fetchBanners = async () => {
//         try {
//             const response = await axios.get(`https://focusmore.codelive.info/api/get-homebanner`);
//             setBanners(response.data.data);
//             setLoading(false);
//         } catch (error) {
//             console.error('Error fetching banners:', error);
//             setLoading(false);
//         }
//     };

//     fetchBanners();
// }, []);



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
//                   onChangeText={(e)=>{setKeyword(e)}}
//                 style={styles.input}
//                 value={keyword}
//                 keyboardType="text"
//               />
//             </View>
//             <View style={styles.flex2}>
//               <Text style={[styles.label, { marginLeft: 10 }]}>Category:</Text>
//               <View>
//                 <Dropdown onSelect={handleCategorySelect} />
//               </View>
//             </View>
//           </View>
//         </View>





//         <View>
//         {/* <Image
//                       source={{ uri:}}
//                       style={{ width: 100, height: 80 }}
//                     /> */}

// <ScrollView horizontal pagingEnabled>
//             {loading ? (
//                 <ActivityIndicator size="large" color="black" style={styles.loadingIndicator} />
//             ) : (
//                 banners.map((banner) => (
//                     <View key={banner.id} style={styles.bannerContainer}>
//                         <Image source={{ uri: banner.image }} style={styles.bannerImage} />
//                     </View>
//                 ))
//             )}
//         </ScrollView>


//         </View>

//         {selectedCategory ? (
//           <SearchData data={searchData} />
//         ) : (
//           // <ActivityIndicator size="large" color="black" />
// <>
// <NearByShop />
//           <NearByServices />
//           <NearByClassified />
// </>
//         )}

//       </View>
//     </ScrollView>
//   );
// };
// const styles = StyleSheet.create({
//   maincontainer: {
//     display: 'flex',
//     textAlign: 'center',
//     justifyContent: 'center',
//     flex: 1,
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
//     color: 'black'
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

//   bannerContainer: {
//     width:200,
//     height: 200,
//     padding:10,
//     marginTop:10,
// },
// bannerImage: {
//     width: '100%',
//     height: '100%',
//     resizeMode: 'cover',
// },
// loadingIndicator: {
//   // flex: 1,
//   justifyContent: 'center',
//   alignItems: 'center',
//   gap:10,
// },
// });
// export default StartSearch;

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
      console.warn('working')
    }
  }, [selectedCategory,keyword]);
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
              <View >
                <Dropdown onSelect={handleCategorySelect} />
              </View>
            </View>
          </View>
        </View>
{selectedCategory ? (<Text style={{margin:20}} onPress={()=>{setSelectedCategory('')}}>Back</Text>):('')}

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
    height:'100%'
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