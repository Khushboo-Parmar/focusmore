import React, { useEffect, useState } from "react";
import { Text, View, Image, TouchableOpacity, StyleSheet, TextInput, ActivityIndicator, Platform } from "react-native";
import { fetchAllData } from "./handeldetailpage/server";
import { useNavigation } from '@react-navigation/native';
import AwesomeIcon from "react-native-vector-icons/FontAwesome5";
import { ScrollView } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from 'react-native-toast-message';
import ImagePick from "./ImagePick";
import Dropdown from "./Dropdown";
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import ImagePicker from 'react-native-image-crop-picker';
import { PermissionsAndroid } from 'react-native';
import GetLocation from 'react-native-get-location';

const AddBusiness = () => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [website, setWebsite] = useState('');
    const [location, setLocation] = useState('');
    const [lan, setLan] = useState('');
    const [lat, setLat] = useState('');
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [homeDelivery, setHomeDelivery] = useState();
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [categories, setCategories] = useState([]);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [selectedDays, setSelectedDays] = useState({
        allDays: false,
        Mon: false,
        Tue: false,
        Wed: false,
        Thu: false,
        Fri: false,
        Sat: false,
    });

    const pickImage = () => {
        setLoading(true);
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
        })
            .then((selectedImage) => {
                setImage(selectedImage.path);
                console.warn(image)
            })
            .catch((error) => {
                console.log('Image picking error:', error);

            })
            .finally(() => {
                setLoading(false);
            });
    };

    useEffect(() => {
        _getLocationPermission();
        fetchCategories();
      }, []);
      
      async function _getLocationPermission() {
        try {
            const granted = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
              {
                title: 'Geolocation Permission',
                message: 'Can we access your location?',
                buttonNeutral: 'Ask Me Later',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
              },
            );
            console.log('granted', granted);
            if (granted === 'granted') {
              console.log('You can use Geolocation');
              return true;
            } else {
              console.log('You cannot use Geolocation');
              return false;
            }
          } catch (err) {
            return false;
          }
      }


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

    const handleCategorySelection = (category) => {
        setSelectedCategory(category);
        setDropdownOpen(false);
    }

    const toggleDaySelection = (day) => {
        if (day === 'allDays') {

            setSelectedDays(prevState => ({
                ...prevState,
                allDays: !prevState.allDays,
                Mon: !prevState.allDays,
                Tue: !prevState.allDays,
                Wed: !prevState.allDays,
                Thu: !prevState.allDays,
                Fri: !prevState.allDays,
                Sat: !prevState.allDays,
            }));
        } else {

            setSelectedDays(prevState => ({
                ...prevState,
                [day]: !prevState[day],
            }));
        }
    };
    const filename = image?.split("/").pop();
    const match = /\.(\w+)$/.exec(filename);
    const ext = match?.[1];


    const handelsumbit = async () => {
        const token = await AsyncStorage.getItem('token');
        const daysArray = Object.keys(selectedDays).filter(day => selectedDays[day]);
        try {
            const formData = new FormData();
            formData.append('category_id', selectedCategory?.id);
            formData.append('name', name);
            formData.append('about', description);
            formData.append('contact', phone);
            formData.append('email', email);
            formData.append('website', website);
            formData.append('latitude', 28.7041);
            formData.append('longitude', 77.1025);
            formData.append('days', JSON.stringify(daysArray));
            formData.append('home_delivery', 1);
            formData.append('business_image', {
                uri: image,
                type: `image/${ext}`,
                name: filename
            });

            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            const response = await axios.post('https://focusmore.codelive.info/api/add-business', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            // Log the response data
            console.log("Response:", response.data);
            // Handle the response as needed
            if (response.status === 200) {
                Toast.show({
                    type: 'success',
                    text1: `${response.data.message} 🚀`
                });
            } else {
                Toast.show({
                    type: 'error',
                    text1: `${response.data.details?.email ? response.data.details?.email : response.data.message} 📦`,
                });
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }
    
    return (
        <>
            <ScrollView>

                <View style={{ alignItems: 'center', marginTop: 20, paddingHorizontal: 20 }}>


                    <View style={{ marginTop: 10, zIndex: 999 }}>
                        <Text style={{ fontWeight: '900', color: 'black' }}>Select Business Category</Text>
                        <TouchableOpacity onPress={() => setDropdownOpen(!dropdownOpen)}>
                            <View style={{ backgroundColor: '#d6d5d5', width: '60%', alignItems: 'center', borderRadius: 8, marginTop: 10 }}>
                                <Text style={{ padding: 8, color: '#747d85', textAlign: 'center', fontWeight: '700', color: 'black' }}>
                                    {selectedCategory ? selectedCategory.name : 'Select Category'}
                                </Text>
                            </View>
                        </TouchableOpacity>
                        {dropdownOpen && (
                            <View style={{ marginTop: 5, borderWidth: 1, borderColor: '#ccc', borderRadius: 5 }}>
                                {categories.map(category => (
                                    <TouchableOpacity key={category?.id} onPress={() => handleCategorySelection(category)}>
                                        <View style={{ padding: 10 }}>
                                            <Text>{category.name}</Text>
                                        </View>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        )}
                    </View>





                    <View style={{ marginTop: 30 }}>
                        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                            <Text style={{ textAlign: 'left', width: '40%', fontWeight: '600', color: 'black' }} >
                                Business Name:
                            </Text>
                            <TextInput
                                onChangeText={(e) => { setName(e) }}
                                style={[styles.input, { width: 200 }]}
                                placeholder=''
                            />
                        </View>

                        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                            <Text style={{ textAlign: 'left', width: '40%', fontWeight: '600', color: 'black' }} >
                                About:
                            </Text>
                            <TextInput
                                onChangeText={(e) => { setDescription(e) }}
                                style={[styles.input, { width: 200, height: 50 }]}
                                placeholder=''
                            />
                        </View>
                        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                            <Text style={{ textAlign: 'left', width: '40%', fontWeight: '600', color: 'black' }} >
                                Contact:
                            </Text>
                            <TextInput
                                onChangeText={(e) => { setPhone(e) }}
                                style={[styles.input, { width: 200 }]}
                                placeholder=''
                            />
                        </View>
                        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                            <Text style={{ textAlign: 'left', width: '40%', fontWeight: '600', color: 'black' }} >
                                Email:
                            </Text>
                            <TextInput
                                onChangeText={(e) => { setEmail(e) }}
                                style={[styles.input, { width: 200 }]}
                                placeholder=''
                            />
                        </View>
                        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                            <Text style={{ textAlign: 'left', width: '40%', fontWeight: '600', color: 'black' }} >
                                Website:
                            </Text>
                            <TextInput
                                onChangeText={(e) => { setWebsite(e) }}
                                style={[styles.input, { width: 200 }]}
                                placeholder=''
                            />
                        </View>


                        <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                            <Text style={{ textAlign: 'left', width: '22%', fontWeight: '600', color: 'black' }} >
                                Location:
                            </Text>
                            <View style={{ paddingLeft: 10 }}>
                                <View style={{ paddingHorizontal: 20, marginTop: 10 }}>

                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={{ borderColor: '#218a86', borderWidth: 1, borderRadius: 1, width: 13, height: 13, justifyContent: 'center', marginRight: 10 }}></View>
                                        <View>
                                            <Text style={{ fontWeight: '600', marginLeft: 10, color: 'black' }}>Use my current location</Text>
                                            <Text style={{ color: '#747d85', fontSize: 10, marginLeft: 10, color: 'black' }}>(KPHB main road, Madhapur)</Text>
                                        </View>
                                    </View>



                                    <Text style={{ textAlign: 'center', color: '#0c81d2', fontSize: 12, marginBottom: 10, color: 'black' }}>(OR)</Text>
                                </View>

                                <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                                    <Text style={{ textAlign: 'left', width: '15%', fontWeight: '600', color: 'black' }} >
                                        LAN:
                                    </Text>
                                    <TextInput
                                        onChangeText={(e) => { setLan(e) }}
                                        style={[styles.input, { width: 200 }]}
                                        placeholder=''
                                    />
                                </View>

                                <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                                    <Text style={{ textAlign: 'left', width: '15%', fontWeight: '600', color: 'black' }} >
                                        LAT:
                                    </Text>
                                    <TextInput
                                        onChangeText={(e) => { setLat(e) }}
                                        style={[styles.input, { width: 200 }]}
                                        placeholder=''
                                    />
                                </View>


                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                            <Text style={{ textAlign: 'left', width: '32%', fontWeight: '600', color: 'black' }} >
                                Business hours:
                            </Text>

                            <View style={{ flexDirection: 'row' }}>
                                <TextInput
                                    onChangeText={(e) => { setStart(e) }}
                                    style={[styles.time_input]}
                                    placeholder=''
                                    maxLength={5}
                                />

                                <Text style={{ fontSize: 11, fontWeight: '600', marginLeft: 2, marginTop: 5, color: 'black' }}>am</Text>
                            </View>

                            <Text style={{ marginHorizontal: 25, fontSize: 11, fontWeight: '600', color: 'black' }}>to</Text>

                            <View style={{ flexDirection: 'row' }}>
                                <TextInput
                                    onChangeText={(e) => { setEnd(e) }}
                                    style={[styles.time_input]}
                                    placeholder=''
                                    maxLength={5}
                                />

                                <Text style={{ fontSize: 11, fontWeight: '600', marginLeft: 2, marginTop: 5, color: 'black' }}>pm</Text>
                            </View>

                        </View>


                        {/* <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <Text style={{ textAlign: 'left', width: '32%', fontWeight: '600', color: 'black' }}>
                                Business Days:
                            </Text>

                            <View style={{ flexDirection: 'row', flexWrap: 'wrap', flex: 1, width: 100 }}>


                                <View style={{ flexDirection: 'row', gap: 10, flexWrap: 'wrap' }}>


                                    <View style={{ alignItems: 'center', flexDirection: 'row' }}>

                                        <View style={{ borderColor: '#218a86', borderWidth: 1, borderRadius: 1, width: 13, height: 13, justifyContent: 'center', marginRight: 10 }}></View>
                                        <Text style={{ fontSize: 11, fontWeight: '600', color: 'black' }}>
                                            All Days</Text>
                                    </View>



                                    <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                                        <View style={{ borderColor: '#218a86', borderWidth: 1, borderRadius: 1, width: 13, height: 13, justifyContent: 'center', marginRight: 10 }}></View>
                                        <Text style={{ fontSize: 11, fontWeight: '600', color: 'black' }}>

                                            Mon</Text>
                                    </View>

                                    <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                                        <View style={{ borderColor: '#218a86', borderWidth: 1, borderRadius: 1, width: 13, height: 13, justifyContent: 'center', marginRight: 10 }}></View>
                                        <Text style={{ fontSize: 11, fontWeight: '600', color: 'black' }}>

                                            Tue</Text>
                                    </View>

                                    <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                                        <View style={{ borderColor: '#218a86', borderWidth: 1, borderRadius: 1, width: 13, height: 13, justifyContent: 'center', marginRight: 10 }}></View>
                                        <Text style={{ fontSize: 11, fontWeight: '600', color: 'black' }}>


                                            Wed</Text>
                                    </View>

                                    <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                                        <View style={{ borderColor: '#218a86', borderWidth: 1, borderRadius: 1, width: 13, height: 13, justifyContent: 'center', marginRight: 10 }}></View>
                                        <Text style={{ fontSize: 11, fontWeight: '600', color: 'black' }}>
                                            Thu</Text>
                                    </View>

                                    <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                                        <View style={{ borderColor: '#218a86', borderWidth: 1, borderRadius: 1, width: 13, height: 13, justifyContent: 'center', marginRight: 10 }}></View>
                                        <Text style={{ fontSize: 11, fontWeight: '600', color: 'black' }}>
                                            Fri</Text>
                                    </View>

                                    <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                                        <View style={{ borderColor: '#218a86', borderWidth: 1, borderRadius: 1, width: 13, height: 13, justifyContent: 'center', marginRight: 10 }}></View>
                                        <Text style={{ fontSize: 11, fontWeight: '600', color: 'black' }}>
                                            Sat</Text>
                                    </View>

                                </View>
                            </View>
                        </View> */}

                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <Text style={{ textAlign: 'left', width: '32%', fontWeight: '600', color: 'black' }}>
                                Business Days:
                            </Text>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap', flex: 1, width: 100 }}>
                                {Object.keys(selectedDays).map(day => (
                                    <TouchableOpacity
                                        key={day}
                                        onPress={() => toggleDaySelection(day)}
                                        style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
                                        <View
                                            style={[styles.checkbox, selectedDays[day] && styles.checkedBox]}>
                                            {selectedDays[day] && <Icon name="check" size={14} color="black" />}
                                        </View>
                                        <Text style={{ fontSize: 11, fontWeight: '600', color: 'black' }}>
                                            {day}
                                        </Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>

                        {/* 
                        <View style={{ flexDirection: 'row', marginTop: 25 }}>
                            <Text style={{ textAlign: 'left', width: '48%', fontWeight: '600', color: 'black' }} >
                                Home Delivery Service:
                            </Text>
                            <View style={{ flexDirection: 'row', gap: 20 }}>
                                <View style={{ alignItems: 'center', flexDirection: 'row' }}>

                                    <View style={{ borderColor: '#218a86', borderWidth: 1, borderRadius: 1, width: 13, height: 13, justifyContent: 'center', marginRight: 10 }}></View>
                                    <Text style={{ fontSize: 11, fontWeight: '600', color: 'black' }}>
                                        Yes</Text>
                                </View>



                                <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                                    <View style={{ borderColor: '#218a86', borderWidth: 1, borderRadius: 1, width: 13, height: 13, justifyContent: 'center', marginRight: 10 }}></View>
                                    <Text style={{ fontSize: 11, fontWeight: '600', color: 'black' }}>
                                        No</Text>
                                </View>

                            </View>
                        </View> */}
                        <View style={{ flexDirection: 'row', marginTop: 25 }}>
                            <Text style={{ textAlign: 'left', width: '48%', fontWeight: '600', color: 'black' }}>
                                Home Delivery Service:
                            </Text>
                            <View style={{ flexDirection: 'row', gap: 20 }}>
                                <TouchableOpacity onPress={() => setHomeDelivery(1)}>
                                    <View style={[styles.deliveryOption, homeDelivery === 1 && styles.selectedOption]}>
                                        <Text style={{ fontSize: 11, fontWeight: '600', color: 'black' }}>Yes</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setHomeDelivery(0)}>
                                    <View style={[styles.deliveryOption, homeDelivery === 0 && styles.selectedOption]}>
                                        <Text style={{ fontSize: 11, fontWeight: '600', color: 'black' }}>No</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>



                        <View style={{ flexDirection: 'row', marginTop: 20 }}>
                            <Text style={{ textAlign: 'left', width: '28%', fontWeight: '600', color: 'black' }} >
                                Banner Image:
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <TouchableOpacity onPress={pickImage}>
                                        <Text style={{ fontSize: 18, color: 'blue', marginBottom: 10 }}>Pick Image</Text>
                                        {loading ? (
                                            <ActivityIndicator size="small" color="blue" />
                                        ) : (
                                            <View>
                                                {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
                                                {!image && <Text>No image selected</Text>}
                                            </View>
                                        )}
                                    </TouchableOpacity>
                                </View>

                            </Text>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginRight: 10, marginVertical: 20 }}>
                            <TouchableOpacity onPress={handelsumbit} style={{ backgroundColor: 'black', width: 125, alignItems: 'center', paddingVertical: 7, borderRadius: 10 }}>
                                <Text style={{ alignItems: 'flex-end', color: 'white', fontWeight: '500' }}>Regtister</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>


            </ScrollView>
        </>
    )
}
export default AddBusiness;


const styles = StyleSheet.create({
    input: {
      borderWidth: 1,
      borderColor: '#9b9b9b',
      marginLeft: 5,
      height: 36,
      borderRadius: 3,
      paddingHorizontal: 10,
      color:'black'
    },
    time_input: {
      borderWidth: 1,
      borderColor: '#ababab',
      width: 28,
      height: 20,
      textAlign: 'center',
    },
  });