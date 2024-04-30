import React, { useEffect, useState } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput, ScrollView, ActivityIndicator, StyleSheet } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import { SelectList } from 'react-native-dropdown-select-list';
import productIcon from '../images/cart.jpg';
import callIcon from '../images/call.png';
import chatIcon from '../images/chat.png';
import mailIcon from '../images/mail.png';
import websiteIcon from '../images/web.png';
import star from '../images/star.png';
import { useSelector } from 'react-redux';

const ExploreNearShop = (props) => {
  const [data, setData] = useState(null);
  const [shopname, setShopName] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchData, setSearchData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const Location = useSelector((state) => state.location);

  const navigation = useNavigation();

  useEffect(() => {
    fetchCategories();
  }, [props]);


  const fetchCategories = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        const response = await axios.get('https://focusmore.codelive.info/api/category/list');
        setCategories(response.data.data);
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        if (token) {
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
          const response = await axios.post('https://focusmore.codelive.info/api/shop/list');
          setData(response.data.data);
        }
      } catch (error) {
        console.error('Error fetching nearby shops:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = async () => {
    try {
      setLoading(true);
      const token = await AsyncStorage.getItem('token');
      if (token && shopname) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        const response = await axios.post('https://focusmore.codelive.info/api/search', {
          name: shopname,
          category_id: selectedCategory?.id,
          latitude: 0,
          longitude: 0,
          // latitude: Location[0][0]?.lat,
          // longitude: Location[0][1]?.long,
          radius: 78879
        });
        setSearchData(response.data.data);
      }
    } catch (error) {
      console.error('Error fetching search results:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCategorySelection = (category) => {
    setSelectedCategory(category);
    setDropdownOpen(false);
  }

  console.warn(searchData)

  return (
    <View style={{ flex: 1 }}>

      <View style={styles.searchBar}>
        <TextInput
          placeholder="Shop Name"
          placeholderTextColor="gray"
          onChangeText={setShopName}
          style={{ flex: 1, color:'black' }}
        />
        <TouchableOpacity onPress={handleSearch}>
          <Icon name="search1" size={24} color="blue" />
        </TouchableOpacity>
      </View>
      <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', }}>

        <View style={{ backgroundColor: "#61d836", margin: 0, height: 40 }}>
          <Text style={{ color: 'white', fontSize: 20, padding: 8 }}>Near by Shops</Text>
        </View>
        <View >
          <TouchableOpacity>
            <Image source={require('../images/radius.jpg')} />
          </TouchableOpacity>
        </View>

        <View style={styles.selectListContainer}>
          <ScrollView>
            <TouchableOpacity onPress={() => setDropdownOpen(!dropdownOpen)}>
              <View style={{ height: 40 }}>
                <Text style={{ padding: 8, color: '#747d85', textAlign: 'center', fontWeight: '700', color: 'black' }}>
                  {selectedCategory ? selectedCategory.name : 'Select Category'}
                </Text>
              </View>
            </TouchableOpacity>
            {dropdownOpen && (
                            <ScrollView style={{ marginTop: 5, borderWidth: 1, borderColor: '#ccc', borderRadius: 5 , height:300 }}>
                                {categories.map(category => (
                                    <TouchableOpacity key={category?.id} onPress={() => handleCategorySelection(category)}>
                                        <View style={{ padding: 10}}>
                                            <Text style={{color:'grey'}}>{category.name}</Text>
                                        </View>
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>
                        )}
          </ScrollView>


        </View>

        {/* <View style={styles.selectlistContainer}>
<Dropdown />
</View> */}
      </View>

      <ScrollView>
        {loading ? (
          <ActivityIndicator size="large" color="black" style={{ marginTop: 200 }} />
        ) : (
          searchData ? (
            searchData.shops?.length > 0 ? (
              searchData.shops.map((shop, index) => (
                <TouchableOpacity
                  key={shop.id}
                  onPress={() => navigation.navigate('BottomNavPage', {
                    screen: 'StackAndBottom',
                    params: {
                      screen: 'DetailPage',
                      params: { data: [{ id: shop.id }] }
                    }
                  })}
                >
                  <View style={{ display: 'flex', flexDirection: 'row', padding: 10, justifyContent: 'space-between' }}>

                    <View style={{ alignItems: 'center' }}>
                      <TouchableOpacity>
                        <Image
                          source={{ uri: shop.image_path }}
                          style={{ width: 100, height: 80 }}
                        />
                      </TouchableOpacity>
                      <Text style={{ fontSize: 10, textAlign: 'center', width: 80, fontWeight: '600', color: 'black' }}>{shop.title} </Text>
                      <Text style={{ fontSize: 10, fontWeight: '600', color: 'black' }}> 0.5 Kms</Text>
                    </View>

                    <TouchableOpacity onPress={() =>
                      navigation.navigate('BottomNavPage', {
                        screen: 'StackAndBottom',
                        params: {
                          screen: 'DetailPage',
                          params: { data: [{ id: searchData?.shops[index]?.id }] }
                        }
                      })}>

                      <View style={{ backgroundColor: 'white', padding: 8, width: 260, flex: 1 }}>
                        <View style={{ display: "flex", justifyContent: 'space-between', flexDirection: 'row' }} >
                          <View>
                            <Text style={{ fontSize: 8, fontWeight: '500', color: 'black' }}>ELECTRONICS & Home Appliance</Text>
                            <Text style={{ fontSize: 15, fontWeight: '500', color: 'black' }}>{shop.name}</Text>
                            <View style={{ display: 'flex', flexDirection: 'row', marginVertical: 6 }}>
                              <Image source={star} style={{ width: 11, height: 11 }} />
                              <Image source={star} style={{ width: 11, height: 11, marginHorizontal: 5 }} />
                              <Image source={star} style={{ width: 11, height: 11 }} />
                              <Image source={star} style={{ width: 11, height: 11, marginHorizontal: 5 }} />
                              <Image source={star} style={{ width: 11, height: 11 }} />
                              <Image source={star} style={{ width: 11, height: 11, marginHorizontal: 5 }} />
                            </View>
                            <Text style={{ fontSize: 12, color: 'black' }}>{shop.address}</Text>

                          </View>
                          <View style={{ alignSelf: 'center' }}>
                            <Image source={require('../images/shops.png')} style={{ width: 40, height: 40 }}></Image>
                          </View>
                        </View>


                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>

                          <View style={{ display: "flex", alignItems: "center" }}>
                            <Image source={productIcon} style={{ width: 25, height: 20 }} />
                            <Text style={{ fontSize: 10, color: 'black' }}>Products</Text>
                          </View>


                          <View style={{ display: "flex", alignItems: "center" }} >
                            <Image source={callIcon} style={{ width: 20, height: 20 }} />
                            <Text style={{ fontSize: 10, color: 'black' }}>Call</Text>
                          </View>

                          <View style={{ display: "flex", alignItems: "center" }}>
                            <Image source={chatIcon} style={{ width: 20, height: 20 }} />
                            <Text style={{ fontSize: 10, color: 'black' }}>Chat</Text>
                          </View>

                          <View style={{ display: "flex", alignItems: "center" }}>
                            <Image source={mailIcon} style={{ width: 20, height: 20 }} />
                            <Text style={{ fontSize: 10, color: 'black' }}>Mail</Text>
                          </View>

                          <View style={{ display: "flex", alignItems: "center" }}>
                            <Image source={websiteIcon} style={{ width: 20, height: 20 }} />
                            <Text style={{ fontSize: 10, color: 'black' }}>Website</Text>
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>

                  </View>
                </TouchableOpacity>
              ))
            ) : (
              <Text>No Dtata Found</Text>
            )
          ) : (
            data && data.map((shop) => (
              <TouchableOpacity
                key={shop.id}
                onPress={() => navigation.navigate('BottomNavPage', {
                  screen: 'StackAndBottom',
                  params: {
                    screen: 'DetailPage',
                    params: { data: [{ id: shop.id }] }
                  }
                })}
              >
                <View style={{ display: 'flex', flexDirection: 'row', padding: 10, justifyContent: 'space-between' }}>

                  <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity>
                      <Image
                        source={{ uri: shop.image_path }}
                        style={{ width: 100, height: 80 }}
                      />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 10, textAlign: 'center', width: 80, fontWeight: '600', color: 'black' }}>{shop.title} </Text>
                    <Text style={{ fontSize: 10, fontWeight: '600', color: 'black' }}> 0.5 Kms</Text>
                  </View>

                  <TouchableOpacity onPress={() =>
                    navigation.navigate('BottomNavPage', {
                      screen: 'StackAndBottom',
                      params: {
                        screen: 'DetailPage',
                        params: { data: [{ id: shop.id }] }
                      }
                    })}>

                    <View style={{ backgroundColor: 'white', padding: 8, width: 260, flex: 1 }}>
                      <View style={{ display: "flex", justifyContent: 'space-between', flexDirection: 'row' }} >
                        <View>
                          <Text style={{ fontSize: 8, fontWeight: '500', color: 'black' }}>ELECTRONICS & Home Appliance</Text>
                          <Text style={{ fontSize: 15, fontWeight: '500', color: 'black' }}>{shop.title}</Text>
                          <View style={{ display: 'flex', flexDirection: 'row', marginVertical: 6 }}>
                            <Image source={star} style={{ width: 11, height: 11 }} />
                            <Image source={star} style={{ width: 11, height: 11, marginHorizontal: 5 }} />
                            <Image source={star} style={{ width: 11, height: 11 }} />
                            <Image source={star} style={{ width: 11, height: 11, marginHorizontal: 5 }} />
                            <Image source={star} style={{ width: 11, height: 11 }} />
                            <Image source={star} style={{ width: 11, height: 11, marginHorizontal: 5 }} />
                          </View>
                          <Text style={{ fontSize: 12, color: 'black' }}>{shop.address}</Text>

                        </View>
                        <View style={{ alignSelf: 'center' }}>
                          <Image source={require('../images/shops.png')} style={{ width: 40, height: 40 }}></Image>
                        </View>
                      </View>


                      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>

                        <View style={{ display: "flex", alignItems: "center" }}>
                          <Image source={productIcon} style={{ width: 25, height: 20 }} />
                          <Text style={{ fontSize: 10, color: 'black' }}>Products</Text>
                        </View>


                        <View style={{ display: "flex", alignItems: "center" }} >
                          <Image source={callIcon} style={{ width: 20, height: 20 }} />
                          <Text style={{ fontSize: 10, color: 'black' }}>Call</Text>
                        </View>

                        <View style={{ display: "flex", alignItems: "center" }}>
                          <Image source={chatIcon} style={{ width: 20, height: 20 }} />
                          <Text style={{ fontSize: 10, color: 'black' }}>Chat</Text>
                        </View>

                        <View style={{ display: "flex", alignItems: "center" }}>
                          <Image source={mailIcon} style={{ width: 20, height: 20 }} />
                          <Text style={{ fontSize: 10, color: 'black' }}>Mail</Text>
                        </View>

                        <View style={{ display: "flex", alignItems: "center" }}>
                          <Image source={websiteIcon} style={{ width: 20, height: 20 }} />
                          <Text style={{ fontSize: 10, color: 'black' }}>Website</Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            ))
          )
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    marginRight: 10
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: "#61d836",
    margin: 0,
    height: 40,
    alignItems: 'center',
    padding: 8
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  selectListContainer: {
    width: 180,
    zIndex: 999,
    position: 'absolute',
    right: 0,
    backgroundColor: 'white',
  },
});

export default ExploreNearShop;