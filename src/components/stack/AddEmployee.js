import React, { useEffect, useState } from "react";
import { Text, View, Image, TouchableOpacity, StyleSheet, TextInput, ActivityIndicator, Platform ,ScrollView} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from 'react-native-toast-message';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import ImagePicker from 'react-native-image-crop-picker';
import { PermissionsAndroid } from 'react-native';
import GetLocation from 'react-native-get-location';

const AddEmployee = () => {
    // const Location = useSelector((state) => state.location);
    const [currentLocationText, setCurrentLocationText] = useState('');
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [pincode, setPincode] = useState('');
    const [image, setImage] = useState(null);
    const [lat, setLat] = useState('');
    const [lan, setLan] = useState('');
    const [experience, setExperience] = useState('');
    const [selectedDays, setSelectedDays] = useState({
        allDays: false,
        Mon: false,
        Tue: false,
        Wed: false,
        Thu: false,
        Fri: false,
        Sat: false,
    });
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [mobile, setMobile] = useState('');
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

        if (!token) {
            console.error("Token not found");
            return;
        }
        try {
            const formData = new FormData();

            formData.append('name', name);
            formData.append('last_name', lastname);
            formData.append('email', email);
            formData.append('password', password);
            formData.append('city', city);
            formData.append('state', state);
            formData.append('pin_code', pincode);
            formData.append('profile_pic', {
                uri: image,
                type: `image/${ext}`,
                name: filename
            });
            formData.append('latitude', lat);
            // formData.append('latitude',Location[0][0]?.lat);
            formData.append('longitude', lan);
            // formData.append('longitude', Location[0][0]?.lat);
            formData.append('shop_id', '1');
            formData.append('service_id', JSON.stringify([5, 6, 7]));
            formData.append('exprience', experience);
            formData.append('employee_language_id', JSON.stringify([1, 2]));
            formData.append('days', JSON.stringify(daysArray));
            formData.append('start_time', start);
            formData.append('end_time', end);
            formData.append('mobile_number', mobile);

            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            const response = await axios.post('https://focusmore.codelive.info/api/add-employee', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log("Response:", response.data);

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
    
    }, []);

    const handlePlaceSelected = (latitude, longitude) => {
        setLat(latitude.toString());
        setLan(longitude.toString());
        setCurrentLocationText(`${latitude.toString()}, ${longitude.toString()}`);
    };
    return (
        <>
            <ScrollView>

                <View style={{ alignItems: 'center', marginTop: 20, paddingHorizontal: 20 }}>
                <Text style={{ textAlign: 'center', fontWeight: '600', color: 'black' }} >
                               Add Employee 
                            </Text>
                    <View style={{ marginTop: 30 }}>
                        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                            <Text style={{ textAlign: 'left', width: '40%', fontWeight: '600', color: 'black' }} >
                                Employee Name:
                            </Text>
                            <TextInput
                                onChangeText={(e) => { setName(e) }}
                                style={[styles.input, { width: 200 }]}
                                placeholder=''
                            />
                        </View>
                        {/* last name */}
                        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                            <Text style={{ textAlign: 'left', width: '40%', fontWeight: '600', color: 'black' }} >
                                Last name:
                            </Text>
                            <TextInput
                                onChangeText={(e) => { setLastname(e) }}
                                style={[styles.input, { width: 200 }]}
                                placeholder=''
                            />
                        </View>
                        {/* email */}
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

                        {/* password*/}
                        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                            <Text style={{ textAlign: 'left', width: '40%', fontWeight: '600', color: 'black' }} >
                                Password
                            </Text>
                            <TextInput
                                onChangeText={(e) => { setPassword(e) }}
                                style={[styles.input, { width: 200 }]}
                                placeholder=''
                            />
                        </View>
                        {/* city */}
                        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                            <Text style={{ textAlign: 'left', width: '40%', fontWeight: '600', color: 'black' }} >
                                city
                            </Text>
                            <TextInput
                                onChangeText={(e) => { setCity(e) }}
                                style={[styles.input, { width: 200 }]}
                                placeholder=''
                            />
                        </View>
                        {/* state */}
                        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                            <Text style={{ textAlign: 'left', width: '40%', fontWeight: '600', color: 'black' }} >
                                state
                            </Text>
                            <TextInput
                                onChangeText={(e) => { setState(e) }}
                                style={[styles.input, { width: 200 }]}
                                placeholder=''
                            />
                        </View>
                        {/* Pin code  */}
                        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                            <Text style={{ textAlign: 'left', width: '40%', fontWeight: '600', color: 'black' }} >
                                Pin code
                            </Text>
                            <TextInput
                                onChangeText={(e) => { setPincode(e) }}
                                style={[styles.input, { width: 200 }]}
                                placeholder=''
                                keyboardType="numeric"
                             

                            />
                        </View>
                        {/* profile pic */}
                        <View style={{ flexDirection: 'row', marginTop: 20 }}>
                            <Text style={{ textAlign: 'left', width: '28%', fontWeight: '600', color: 'black' }} >
                                Profile Pic:
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <TouchableOpacity onPress={pickImage}>
                                        <Text style={{ fontSize: 10, color: 'blue', marginBottom: 10 }}>Pick Image</Text>
                                        {loading ? (
                                            <ActivityIndicator size="small" color="blue" />
                                        ) : (
                                            <View>
                                                {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
                                                {!image && <Text style={{ color:'black'}}>No image selected</Text>}
                                            </View>
                                        )}
                                    </TouchableOpacity>
                                </View>

                            </Text>
                        </View>




                        {/* location */}
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

                        {/* shop id  */}


                        {/* experience  */}
                        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                            <Text style={{ textAlign: 'left', width: '40%', fontWeight: '600', color: 'black' }} >
                                Experience
                            </Text>
                            <TextInput
                                onChangeText={(e) => { setExperience(e) }}
                                style={[styles.input, { width: 200 }]}
                                placeholder=''
                            />
                        </View>

                        {/* 
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <Text style={{ textAlign: 'left', width: '32%', fontWeight: '600', color: 'black' }}>
                                Days:
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
                        </View> */}
                        {/* Days Selection */}
                        {/* <View style={styles.daysContainer}>
                            <Text style={styles.label}>Days:</Text>
                            <View style={styles.daysWrapper}>
                                {Object.keys(selectedDays).map(day => (
                                    <TouchableOpacity
                                        key={day}
                                        onPress={() => toggleDaySelection(day)}
                                        style={styles.dayButton}>
                                        <View
                                            style={[styles.checkbox, selectedDays[day] && styles.checkedBox]}>
                                            {selectedDays[day] && <Icon name="check" size={14} color="black" />}
                                        </View>
                                        <Text style={styles.dayText}>{day}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View> */}
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

                        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                            <Text style={{ textAlign: 'left', width: '40%', fontWeight: '600', color: 'black' }} >
                                Start Time:
                            </Text>
                            <TextInput
                                onChangeText={(e) => { setStart(e) }}
                                style={[styles.input, { width: 200 }]}
                                placeholder=''
                            />
                        </View>

                        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                            <Text style={{ textAlign: 'left', width: '40%', fontWeight: '600', color: 'black' }} >
                                End time :
                            </Text>
                            <TextInput
                                onChangeText={(e) => { setEnd(e) }}
                                style={[styles.input, { width: 200 }]}
                                placeholder=''
                            />
                        </View>


                        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                            <Text style={{ textAlign: 'left', width: '40%', fontWeight: '600', color: 'black' }} >
                                Mobile number:
                            </Text>
                            <TextInput
                                onChangeText={(e) => { setMobile(e) }}
                                style={[styles.input, { width: 200 }]}
                                placeholder=''
                            />
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
export default AddEmployee;


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
        width: 28,
        height: 20,
        textAlign: 'center',
    },
    daysContainer: {
        flexDirection: 'row',
        marginTop: 15,
    },
    daysWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
        width: 100,
    },
    dayButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
    },
    // checkbox: {
    //     borderColor: '#218a86',
    //     borderWidth: 1,
    //     borderRadius: 1,
    //     width: 13,
    //     height: 13,
    //     justifyContent: 'center',
    //     marginRight: 10,
    // },
    // checkedBox: {
    //     backgroundColor: '#218a86',
    // },
    dayText: {
        fontSize: 11,
        fontWeight: '600',
        color: 'black',
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