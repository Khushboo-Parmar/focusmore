import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Toast from 'react-native-toast-message';
import { ActivityIndicator } from 'react-native-paper';
import { add } from '../store/auth/Slice';
import { UseDispatch, useDispatch } from 'react-redux';
import { userid } from '../store/auth/UserIdSlice';
import { setinfo } from '../store/auth/UserPostion';

import { PermissionsAndroid } from 'react-native';
import GetLocation from 'react-native-get-location';
import { addlocation } from '../store/location/Location';



export default function Login() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [emailOrMobile, setEmailOrMobile] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [currentLocationText, setCurrentLocationText] = useState('');
  const [lat, setLat] = useState('');
  const [lan, setLan] = useState('');
  const [currentlatlong, setSetCurrentLataLong] = useState('');
  // State variable to track password visibility 
  const [showPassword, setShowPassword] = useState(false);
  // Function to toggle the password visibility state 
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleForgetPassword = async (emailOrMobile) => {

    try {
      const response = await axios.post(`https://focusmore.codelive.info/api/forget-password`, {
        email: emailOrMobile
      });

      if (response.data.status === 200) {
        const newPassword = response.data.new_password;

        Toast.show({
          type: 'success',
          text1: `${response.data.message}`,
          text2: `your new password is ${newPassword}`,
        });
      }
      else {
        Toast.show({
          type: 'error',
          text1: 'Failed to reset password',
        });
      }
    }
    catch (error) {
      Toast.show({
        type: 'error',
        text1: `Failed to reset Password`,
      })
    }

  }


  const handleLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post(`https://focusmore.codelive.info/api/login`, {
        email: emailOrMobile,
        password: password,
      });
      const token = response.data.data.token;
      await AsyncStorage.setItem('token', token);

      Toast.show({
        type: 'success',
        text1: `${response.data.message}`,
        text2: `Welcome ${response.data.data.user[0]?.name} 👋`
      });

      dispatch(add(token))
      dispatch(userid(response.data.data.user[0].id))
      dispatch(setinfo(response.data.data.user[0].role_id))
      navigation.navigate('StartSearch');
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: `Not A User Please Field A Valid Information 📦`,
      });
    } finally {
      setLoading(false);
    }
  };

  // Function to handle location permission
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
  const getCurrentLocation = async () => {
    try {
      const hasPermission = await _getLocationPermission();
      if (hasPermission) {
        const location = await GetLocation.getCurrentPosition({
          enableHighAccuracy: true,
          timeout: 15000,
        });
        setLat(location.latitude.toString());
        setLan(location.longitude.toString());
        console.log('Current Location:', location);
        await getLocationDetails(location.latitude, location.longitude);
        dispatch(addlocation(location)); // Dispatch the entire location object
        
      } else {
        // Handle case where permission is denied
        Toast.show({
          type: 'error',
          text1: 'Location permission denied',
        });
      }
    } catch (error) {
      // Handle error while getting location
      console.error('Error getting location:', error);
      Toast.show({
        type: 'error',
        text1: 'Error getting location',
      });
    }
  };
  

  // const getCurrentLocation = async () => {
  //   try {
  //     const location = await GetLocation.getCurrentPosition({
  //       enableHighAccuracy: true,
  //       timeout: 15000,
  //     });
  //     setLat(location.latitude.toString());
  //     setLan(location.longitude.toString());
  //     console.log('Current Location:', location);
  //     // setCurrentLocationText(`${location.latitude.toString()}, ${location.longitude.toString()}`);
  //     setSetCurrentLataLong(`${location.latitude.toString()}, ${location.longitude.toString()}`);

  //     console.warn('location', currentLocationText)
  //     await getLocationDetails(location.latitude, location.longitude);

  //     if (currentLocationText || lat || lan) {
  //       dispatch(addlocation(String(currentLocationText))); 
  //       dispatch(addlocation([{ lat: lat }, { long: lan }]));
  //     }



  //   } catch (error) {
  //     const { code, message } = error;
  //     console.warn(code, message);
  //     Toast.show({
  //       type: 'error',
  //       text1: 'Error getting location',
  //     });
  //   }
  // };

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
          console.warn("check city=", currentLocationText)


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

  useEffect(() => {
    const fetchLocation = async () => {
      const hasPermission = await _getLocationPermission();
      if (hasPermission) {
        await getCurrentLocation(); 
      }
    };

    fetchLocation();
    // fetchCategories();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="black" style={{ marginTop: 200 }} />
  } else {

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Welcome </Text>
        <Text style={styles.texttwo}>To</Text>
        <Text style={styles.textthree}>F<Text style={styles.textfour}>O</Text>CUSM<Text style={styles.textfour}>O</Text>RE</Text>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder='Mobile number/Email'
            placeholderTextColor='white'
            value={emailOrMobile}
            onChangeText={text => setEmailOrMobile(text)}
          />



          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <TextInput
              secureTextEntry={!showPassword}
              style={styles.input}
              placeholder='Password'
              placeholderTextColor='white'
              // secureTextEntry={true}
              value={password}
              onChangeText={text => setPassword(text)}
            />
            <Icon
              name={showPassword ? 'eye-off' : 'eye'}
              size={24}
              color="#aaa"
              style={styles.eyeicon}
              onPress={toggleShowPassword}
            />
          </View>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomBtns}>
          <TouchableOpacity >
            <Text style={styles.newUser}>New user sign up</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleForgetPassword(emailOrMobile)}>
            <Text style={styles.newUser}>Forget Password?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.continue}>
          <Icon name="play-box-multiple-outline" size={30} color="black" />
          <Text style={styles.continueGuest}>Continue as a Guest</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    paddingTop: 15,
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 30,
    fontWeight: '800',
    textAlign: 'center',
    // letterSpacing:0
  },
  texttwo: {
    color: 'white',
    fontSize: 30,
    fontWeight: '500',
    textAlign: 'center',
  },
  textthree: {
    color: 'white',
    fontSize: 45,
    fontWeight: '500',
    textAlign: 'center',
    letterSpacing: 3,
  },
  textfour: {
    color: 'aqua',
  },
  form: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#af792f',
    width: 330,
    color: 'white',
    borderRadius: 12,
    padding: 12,
    fontSize: 18,
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#51473a',
    width: 329,
    borderRadius: 12,
    padding: 14,
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
  },
  bottomBtns: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
    width: '100%',
  },
  newUser: {
    borderBottomWidth: 1,
    borderBottomColor: '#354e7d',
    color: '#354e7d',
  },
  continue: {
    marginTop: 100,
    alignItems: 'center',
  },
  continueGuest: {
    color: '#325066',
    fontSize: 20,
  },

  eyeicon: {
    position: 'absolute',
    right: 8,
    top:10
    
   
  },
});
