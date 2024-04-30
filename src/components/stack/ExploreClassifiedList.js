import React, { useEffect, useState } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet, TextInput } from "react-native";
// import LogoImg from "../images/blog.png"
import Icon from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { ActivityIndicator } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

const ExploreClassifiedList = (props) => {
    const [data, setData] = React.useState(null);
    const navigation = useNavigation();
    const [shopname, setShopName] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [searchData, setSearchData] = useState(null);
    const [categories, setCategories] = useState([]);
    const [dropdownOpen, setDropdownOpen] = useState(false);



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
    const handleSearch = async () => {
        try {
            setLoading(true);
            const token = await AsyncStorage.getItem('token');
            if (token && shopname) {
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                const response = await axios.post('https://focusmore.codelive.info/api/search', {
                    name: shopname,
                    category_id: selectedCategory?.id,
                    latitude: 87889887,
                    longitude: 8778878,
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
    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = await AsyncStorage.getItem('token');
                if (token) {
                    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                    const response = await axios.post('https://focusmore.codelive.info/api/classifield/list');
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

        <View style={{ backgroundColor: "#f2f2f2", flex: 1 }}>

            <View>

            <View style={styles.searchBar}>
                    <TextInput
                        placeholder="Search"
                        placeholderTextColor="gray"
                        onChangeText={setShopName}
                        style={{ flex: 1 }}
                    />
                    <TouchableOpacity onPress={handleSearch}>
                        <Icon name="search1" size={24} color="blue" />
                    </TouchableOpacity>
                </View>
{/* 
                <View style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row" }}>
                    <View >
                        <View style={{ backgroundColor: "#61d836", height: 30, width: 160, display: "flex", alignItems: "center" }}>
                            <Text style={{ color: "white", fontSize: 14, padding: 3, paddingLeft: 20 }}>Near by Classified</Text>
                        </View>
                    </View>

                    <View style={{ borderColor: '#a5a5a5', backgroundColor: "white", borderTopWidth: 1, height: 28, width: 50, paddingHorizontal: 10 }}>
                        <TouchableOpacity>
                            <Image source={require('../images/radius.jpg')} />
                        </TouchableOpacity>
                    </View>

                    <View>
                        <View style={{ borderColor: '#a5a5a5', backgroundColor: "white", borderTopWidth: 1, height: 29, width: 200, borderWidth: 1, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row" }}>
                            <Text style={{ fontSize: 15, color: '#a5a5a5', fontWeight: '400', marginRight: 20 }}>Select Category</Text>
                            <Icon name="caretdown" size={15} color="#a5a5a5" />

                        </View>
                    </View>
                </View> */}
   <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', }}>

<View style={{ backgroundColor: "#61d836", margin: 0, height: 40 }}>
  <Text style={{ color: 'white', fontSize: 20, padding: 8 }}>Near by Classified</Text>
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
                    <View style={{ display: "flex", alignItems: "center", flexDirection: "row", flexWrap: "wrap" , marginBottom:40 }}>

                        {data ? (
                            <>
                                {data.map((i) => (

                                    <ScrollView>
                                    <TouchableOpacity onPress={() => navigation.navigate('ClassifiedDetails',  { id: i.id })}>
                                        <View style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
                                            <Image source={{ uri: i.image_path }} style={{ width: 90, height: 90, margin: 10 }} />
                                            <Text style={{ fontSize: 10, color: "black", fontWeight: '500' }}>
                                                {i.title}
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                    </ScrollView>

                                ))}
                            </>
                        ) : <ActivityIndicator size="large" color="black" style={{ marginLeft: 160, marginTop: 200 }} />}

                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default ExploreClassifiedList;




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