import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios';

export default function Login() {
  const navigation = useNavigation();

  const [emailOrMobile, setEmailOrMobile] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // const handleLogin = async () => {
  //   try {
  //     setLoading(true);
  //     const response = await axios.post(`http://focusmore.codelive.info/api/login`, {
  //       email: emailOrMobile,
  //       password: password,
  //     });
  //     const token = response.data.data.token;
  //     await AsyncStorage.setItem('token', token);
  //     navigation.navigate('StartSearch');
  //   } catch (error) {
  //     console.error('Login error:', error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };


  const handleLogin=()=>{
    navigation.navigate('StartSearch');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome </Text>
      <Text style={styles.text}>To</Text>
      <Text style={styles.logo}>FOCUSMORE</Text>

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
        <TouchableOpacity style={styles.newUser}>
          <Text>New user sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.forgetPassword}>
          <Text>Forget Password?</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.continue}>
        <Text style={styles.continueGuest}>Continue as a Guest</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    paddingTop: 10,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 30,
    fontWeight: '500',
    textAlign: 'center',
  },
  logo: {
    color: 'aqua',
    fontSize: 45,
    fontWeight: '500',
    textAlign: 'center',
    letterSpacing: 3,
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
    borderBottomColor: '#325066',
    color: '#325066',
  },
  forgetPassword: {
    borderBottomWidth: 1,
    borderBottomColor: '#325066',
    color: '#325066',
  },
  continue: {
    marginTop: 100,
  },
  continueGuest: {
    color: '#325066',
    fontSize: 20,
  },
});
