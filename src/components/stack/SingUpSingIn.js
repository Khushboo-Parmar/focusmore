
import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { useNavigation } from '@react-navigation/native';
import { ImageBackground, StyleSheet, Text, View, Image, Button, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Toast from 'react-native-toast-message';
import axios from 'axios';
import ImagePicker from 'react-native-image-crop-picker';
import { useDispatch } from 'react-redux';
import { remove } from '../../store/auth/Slice';
import Places from "./Places";

export const SignUp = () => {
  const [email, setEmail] = React.useState(null)
  const [name, setName] = React.useState(null)
  const [lastname, seLasttName] = React.useState(null)
  const [city, setCity] = React.useState(null)
  const [pincode, setPinCode] = React.useState(null)
  const [state, setState] = React.useState(null)
  const [image, setImage] = React.useState(null);
  const [password, setPassword] = React.useState(null)
  const [mobile, setmobile] = React.useState(null)
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const LogOut = async () => {
    try {
      dispatch(remove())
      await AsyncStorage.removeItem('token');
      Toast.show({
        type: 'error',
        text1: `User Created Succefuly Plaese ReLogin 👋`
      });
      navigation.navigate('Login');
    } catch (error) {
      console.warn('Error while logging out:', error);
    }
  }

  const pickImage = () => {
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
  };

  const filename = image?.split("/").pop();
  const match = /\.(\w+)$/.exec(filename);
  const ext = match?.[1];


  const checkEmailExistence = async (email) => {

    try {
      const response = await axios.post(`https://focusmore.codelive.info/api/check-email`, {
        email: email
      });
      return response.data.status === 200;
    }
    catch (error) {
      console.warn('error checking email existence:', error);
      return false;
    }

  }


  const handelsumbit = async () => {

    const isEmailExist = await checkEmailExistence(email)
    if (isEmailExist) {
      Toast.show({
        type: 'error',
        text1: 'Email already existes 📧'
      });
      return;
    }



    const token = await AsyncStorage.getItem('token');

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('last_name', lastname);
      formData.append('mobile_number', mobile);
      formData.append('email', email);
      formData.append('password', password);
      formData.append('city', city);
      formData.append('state', state);
      formData.append('pin_code', pincode);
      formData.append('profile_pic', {
        uri: image ? image : '',
        type: `image/${ext}`,
        name: filename
      });
      formData.append('latitude', 28.7041);
      formData.append('longitude', 77.1025);


      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      const response = await axios.post('https://focusmore.codelive.info/api/user/add', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      const result = response
      console.warn('DATA => ', result.data)

      if (result.data.status <= 200) {
        Toast.show({
          type: 'success',
          text1: `${response.data.message} 🚀`
        });
        LogOut()
      } else {
        Toast.show({
          type: 'error',
          text1: `${result.data.details?.email ? result.data.details?.email : result.data.message} 📦`,
        });
      }
    } catch (e) {
      console.warn(e)
    }

  }

  return (
    <>
      <ScrollView>
        <View style={{ alignItems: 'center' }}>
          <Image source={{ uri: 'https://png.pngtree.com/png-vector/20220826/ourmid/pngtree-gold-congratulations-lettering-graduate-sticker-with-confetti-transparent-background-png-image_6109456.png' }} style={{ width: 150, height: 150 }} />
        </View>
        <ScrollView>
          <View style={{ paddingHorizontal: 20 }}>

            <View style={styles.inputRow}>
              <Text style={[styles.label, { textAlign: 'right' }]}><Text style={styles.required}>*</Text> Name:</Text>
              <TextInput
                onChangeText={(e) => { setName(e) }}
                style={[styles.input, { width: 200 }]}
                placeholder=''
              />
            </View>


            <View style={styles.inputRow}>
              <Text style={[styles.label, { textAlign: 'right' }]}><Text style={styles.required}>*</Text> Last Name:</Text>
              <TextInput
                onChangeText={(e) => { seLasttName(e) }}
                style={[styles.input, { width: 200 }]}
                placeholder=''
              />
            </View>


            <View style={styles.inputRow}>
              <Text style={[styles.label, { textAlign: 'right' }]}><Text style={styles.required}>*</Text> Mobile:</Text>
              <TextInput
                onChangeText={(e) => { setmobile(e) }}
                style={[styles.input, { width: 200 }]}
                placeholder=''
              />
            </View>

            <View style={styles.inputRow}>
              <Text style={[styles.label, { textAlign: 'right' }]}><Text style={styles.required}>*</Text> email:</Text>
              <TextInput
                onChangeText={(e) => { setEmail(e) }}
                style={[styles.input, { width: 200 }]}
                placeholder=''
              />
            </View>
            <View style={styles.inputRow}>
              <Text style={[styles.label, { textAlign: 'right' }]}><Text style={styles.required}>*</Text> password:</Text>
              <TextInput
                onChangeText={(e) => { setPassword(e) }}
                style={[styles.input, { width: 200 }]}
                placeholder=''
              />
            </View>
            <View style={styles.inputRow}>
              <Text style={[styles.label, { textAlign: 'right' }]}><Text style={styles.required}>*</Text> confirm cassword:</Text>
              <TextInput
                style={[styles.input, { width: 200 }]}
                placeholder=''
              />
            </View>
            <View style={styles.inputRow}>
              <Text style={[styles.label, { textAlign: 'right' }]}><Text style={styles.required}>*</Text> city/town/village:</Text>
              {/* <TextInput
                onChangeText={(e) => { setCity(e) }}
                style={[styles.input, { width: 200 }]}
                placeholder=''
              /> */}
              <Places />
            </View>
            <View style={styles.inputRow}>
              <Text style={[styles.label, { textAlign: 'right' }]}><Text style={styles.required}>*</Text> state:</Text>
              <TextInput
                onChangeText={(e) => { setState(e) }}
                style={[styles.input, { width: 200 }]}
                placeholder=''
              />
            </View>
            <View style={styles.inputRow}>
              <Text style={[styles.label, { textAlign: 'right' }]}>pin Code:</Text>
              <TextInput
                onChangeText={(e) => { setPinCode(e) }}
                style={[styles.input, { width: 200 }]}
                placeholder=''
              />
            </View>
            <View style={styles.inputRow}>
              <Text style={[styles.label, { textAlign: 'right' }]}>profile pic:</Text>
              <View style={{ position: 'relative', width: 200, height: 200 }}>

                <ImageBackground
                  style={[styles.input, { width: '100%', height: '100%' }]}
                  resizeMode="cover"
                >
                  <TouchableOpacity
                    style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                    onPress={pickImage}
                  >
                    {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
                    {!image && <Text style={{ fontSize: 20, color: '#5e5e61' }}>+</Text>}
                  </TouchableOpacity>
                </ImageBackground>

              </View>

            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 10, marginRight: 10 }}>
              <TouchableOpacity onPress={handelsumbit} style={{ backgroundColor: 'black', width: 125, alignItems: 'center', paddingVertical: 7, borderRadius: 13 }}>
                <Text style={{ alignItems: 'flex-end', color: 'white', fontWeight: '500' }}>Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ScrollView>
    </>)
}

const styles = StyleSheet.create({
  inputRow: {
    flexDirection: 'row',
    marginBottom: 10,
    paddingRight: 20
  },
  label: {
    color: '#5e5e61',
    width: '40%',
    textAlign: 'right',
    fontSize: 14
  },
  required: {
    color: 'red',
  },
  input: {
    borderWidth: 1,
    borderColor: '#9b9b9b',
    marginLeft: 5,
    borderRadius: 2,
    height: 36,
    borderRadius: 8,
    color: 'black',
  },
});
