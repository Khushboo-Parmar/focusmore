import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Toast from 'react-native-toast-message';
import { ActivityIndicator } from 'react-native-paper';
import { add } from '../store/auth/Slice';
import { UseDispatch, useDispatch } from 'react-redux';


export default function Login() {
  const navigation = useNavigation();
  const dispatch =useDispatch();

  const [emailOrMobile, setEmailOrMobile] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

 const handleForgetPassword = async(emailOrMobile) => {

try{
  const response= await axios.post(`https://focusmore.codelive.info/api/forget-password` ,{
    email:emailOrMobile
  });

  if (response.data.status === 200){
    const newPassword = response.data.new_password;

    Toast.show({
      type: 'success',
      text1:`${response.data.message}`,
      text2: `your new password is ${newPassword}` ,
    });
  }
  else{
    Toast.show({
      type:'error',
      text1:'Failed to reset password',
    });
  }
}
catch(error){
  Toast.show({
    type:'error',
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
        text1:  `${response.data.message}`,
        text2: `Welcome ${response.data.data.name} 👋`
      });
      
      dispatch(add(token))
      navigation.navigate('StartSearch');
    } catch (error) {
      Toast.show({
        type: 'error',
        text1:  `Not A User Please Field A Valid Information 📦`,
      });
    } finally {
      setLoading(false);
    }
  };

if(loading){
  return <ActivityIndicator size="large" color="black" style={{ marginTop: 200}} />
}else{

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
        <TextInput
          style={styles.input}
          placeholder='Password'
          placeholderTextColor='white'
          secureTextEntry={true}
          value={password}
          onChangeText={text => setPassword(text)}
        />
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
        <Icon name="play-box-multiple-outline" size={30} color="black"/>
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

});
