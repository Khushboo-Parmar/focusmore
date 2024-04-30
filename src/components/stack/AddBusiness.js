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
import Places from "./Places";

const AddBusiness = () => {
    const [currentLocationText, setCurrentLocationText] = useState('');

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
    const [address, setAddress] = useState('');
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

    // useEffect(() => {
    //     _getLocationPermission();
    //     fetchCategories();
    //   }, []);



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
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('You can use Geolocation');
                return true;
            } else {
                console.log('Geolocation permission denied');
                return false;
            }
        } catch (err) {
            console.error('Error getting location permission:', err);
            return false;
        }
    }
    const getLocationDetails = async (latitude, longitude) => {
        try {
            const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&result_type=street_address|locality&key=AIzaSyBhkpTMfI6A9Gp03KiC2zEqetFkxWHj0b8`);

            console.log("Geocoding API Response:", response.data);

            if (response.data.results.length > 0) {

                const relevantResult = response.data.results.find(result => result.types.includes('street_address') || result.types.includes('locality'));

                if (relevantResult) {
                    const addressComponents = relevantResult.address_components;
                    const city = addressComponents.find(component => component.types.includes('locality'))?.long_name || '';
                    const state = addressComponents.find(component => component.types.includes('administrative_area_level_1'))?.long_name || '';
                    const locationName = addressComponents.find(component => component.types.includes('point_of_interest'))?.long_name || '';

                    const locationDetails = `${locationName}, ${city}, ${state}`;
                    setCurrentLocationText(locationDetails);
                } else {
                    setCurrentLocationText('Location details not found');
                }
            } else {
                setCurrentLocationText('Location details not found');
            }
        } catch (error) {
            console.error('Error fetching location details:', error);
            setCurrentLocationText('Error fetching location details');
        }
    };


    //  print only lat long value 
    // const getCurrentLocation = async () => {
    //     try {
    //         const location = await GetLocation.getCurrentPosition({
    //             enableHighAccuracy: true,
    //             timeout: 15000,
    //         });
    //         setLat(location.latitude.toString());
    //         setLan(location.longitude.toString());
    //         setCurrentLocationText(`${location.latitude.toString()}, ${location.longitude.toString()}`);
    //     } catch (error) {
    //         const { code, message } = error;
    //         console.warn(code, message);
    //         Toast.show({
    //             type: 'error',
    //             text1: 'Error getting location',
    //         });
    //     }
    // };

    //  convert lat long to city name 

    // const getCurrentLocation = async () => {
    //     try {
    //         const location = await GetLocation.getCurrentPosition({
    //             enableHighAccuracy: true,
    //             timeout: 15000,
    //         });
    //         setLat(location.latitude.toString());
    //         setLan(location.longitude.toString());

    //         await getLocationDetails(location.latitude, location.longitude);


    //         console.warn("currentLocationText=", currentLocationText);
    //     } catch (error) {
    //         const { code, message } = error;
    //         console.warn(code, message);
    //         Toast.show({
    //             type: 'error',
    //             text1: 'Error getting location',
    //         });
    //     }
    // };
    const getCurrentLocation = async () => {
        try {
            const location = await GetLocation.getCurrentPosition({
                enableHighAccuracy: true,
                timeout: 15000,
            });
            setLat(location.latitude.toString());
            setLan(location.longitude.toString());
            setCurrentLocationText(`${location.latitude.toString()}, ${location.longitude.toString()}`);
            await getLocationDetails(location.latitude, location.longitude);
        } catch (error) {
            const { code, message } = error;
            console.warn(code, message);
            Toast.show({
                type: 'error',
                text1: 'Error getting location',
            });
        }
    };
    




    useEffect(() => {
        const fetchLocation = async () => {
            const hasPermission = await _getLocationPermission();
            if (hasPermission) {
                await getCurrentLocation();
            }
        };

        fetchLocation();
        fetchCategories();
    }, []);



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
            formData.append('latitude', lat);
            formData.append('longitude', lan);
            formData.append('days', JSON.stringify(daysArray));
            formData.append('home_delivery', homeDelivery);
            formData.append('business_image', {
                uri: image,
                type: `image/${ext}`,
                name: filename
            });
            formData.append('start_time', start);
            formData.append('end_time', end);
            formData.append('address',address);


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
    const handlePlaceSelected = (latitude, longitude) => {
        setLat(latitude.toString());
        setLan(longitude.toString());
        setCurrentLocationText(`${latitude.toString()}, ${longitude.toString()}`);
    };
    
    return (
        <>
            <ScrollView>

                <View style={{ alignItems: 'center', marginTop: 20, paddingHorizontal: 20 }}>


                    <View style={{ marginTop: 10, zIndex: 999 , width:'100%' ,alignItems: 'center'}}>
                        <Text style={{ fontWeight: '900', color: 'black' }}>Select Business Category</Text>
                        <TouchableOpacity onPress={() => setDropdownOpen(!dropdownOpen)}>
                            <View style={{ backgroundColor: '#d6d5d5', width: 200, alignItems: 'center', borderRadius: 8, marginTop: 10 }}>
                                <Text style={{ padding: 8, color: '#747d85', textAlign: 'center', fontWeight: '700', color: 'black' }}>
                                    {selectedCategory ? selectedCategory.name : 'Select Category'}
                                </Text>
                            </View>
                        </TouchableOpacity>
                        {dropdownOpen && (
                            <ScrollView style={{ marginTop: 5, borderWidth: 1, borderColor: '#ccc', borderRadius: 5 , height:200 }}>
                                {categories.map(category => (
                                    <TouchableOpacity key={category?.id} onPress={() => handleCategorySelection(category)}>
                                        <View style={{ padding: 10}}>
                                            <Text style={{color:'grey'}}>{category.name}</Text>
                                        </View>
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>
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
                        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                            <Text style={{ textAlign: 'left', width: '40%', fontWeight: '600', color: 'black' }} >
                                address:
                            </Text>
                            <TextInput
                                onChangeText={(e) => { setAddress(e) }}
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
                                        {/* <View style={{ borderColor: '#218a86', borderWidth: 1, borderRadius: 1, width: 13, height: 13, justifyContent: 'center', marginRight: 10 }}></View> */}
                                        <View>
                                            <TouchableOpacity onPress={getCurrentLocation}>
                                                <Text style={{ fontWeight: '600', marginLeft: 30, color: 'black' }}>Use my current location</Text>
                                            </TouchableOpacity>
                                            <Text style={{ color: '#747d85', fontSize: 10, marginLeft: 30, color: 'black' }}>{currentLocationText}</Text>
                                        </View>
                                    </View>



                                    {/* <Text style={{ textAlign: 'center', color: '#0c81d2', fontSize: 12, marginBottom: 10, color: 'black' }}>(OR)</Text> */}
                                </View>



                                {/* <View style={{ flexDirection: 'row', marginBottom: 10 }}>

                                    <Text style={{ textAlign: 'left', width: '15%', fontWeight: '600', color: 'black' }} >
                                        select yours
                                    </Text>
                                    <Places onPlaceSelected={handlePlaceSelected} />


                                </View> */}

                                <View style={{ flexDirection: 'row', marginBottom: 10,marginTop:20 }}>
                                    <Text style={{ textAlign: 'left', width: '15%', fontWeight: '600', color: 'black' }} >
                                        LAN:
                                    </Text>
                                    <TextInput
                                        onChangeText={(e) => { setLan(e) }}
                                        value={lan}
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
                                        value={lat}
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

                                <Text style={{ fontSize: 12, fontWeight: '600', marginLeft: 2, marginTop: 10, color: 'black' }}>am</Text>
                            </View>

                            <Text style={{ marginHorizontal: 25, fontSize: 12, fontWeight: '600', color: 'black',marginTop:10 }}>to</Text>

                            <View style={{ flexDirection: 'row' }}>
                                <TextInput
                                    onChangeText={(e) => { setEnd(e) }}
                                    style={[styles.time_input]}
                                    placeholder=''
                                    maxLength={5}

                                />

                                <Text style={{ fontSize: 12, fontWeight: '600', marginLeft: 2, marginTop: 10, color: 'black' }}>pm</Text>
                            </View>

                        </View>


                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <Text style={{ textAlign: 'left', width: '32%', fontWeight: '600', color: 'black' }}>
                                Business Days:
                            </Text>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap', flex: 1, width: 100 , gap:8}}>
                                {Object.keys(selectedDays).map(day => (
                                    <TouchableOpacity
                                        key={day}
                                        onPress={() => toggleDaySelection(day)}
                                        style={{ flexDirection: 'row', alignItems: 'center', gap:8 }}>
                                        <View
                                            style={[styles.checkbox, selectedDays[day] && styles.checkedBox]}>
                                            {selectedDays[day] && <Icon name="check" size={14} color="black" />}
                                        </View>
                                        <Text style={{ fontSize: 13, fontWeight: '600', color: 'black' }}>
                                            {day}
                                        </Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>


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
                                                {!image && <Text style={styles.heading}>No image selected</Text>}
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
        color: 'black'
    },
    time_input: {
        borderWidth: 1,
        borderColor: '#ababab',
        width: 40,
        height: 35,
        // textAlign: '7center',
        color:'black',


    },
    heading:{
        color: 'black',
      },
      deliveryContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    deliveryOption: {
        borderWidth: 1,
        borderColor: '#9b9b9b',
        borderRadius: 5,
        paddingVertical: 8,
        paddingHorizontal: 15,
    },
    selectedOption: {
        backgroundColor: '#007bff',
        borderColor: '#007bff',
    },
    optionText: {
        fontSize: 14,
        fontWeight: '600',
        color: 'black',
    },
    checkbox:{
        borderWidth: 1,
        borderColor: '#9b9b9b',
        borderRadius: 5,
        padding:3
    }
});