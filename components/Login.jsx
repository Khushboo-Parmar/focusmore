import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'

export default function Login() {
  return (
    <View style={styles.container}>

      <Text style={styles.text}>Welcome </Text>
      <Text style={styles.texttwo}>To</Text>
      <Text style={styles.textthree}>F
        <Text style={styles.textfour}>O</Text>CUSM<Text style={styles.textfour}>O</Text>RE</Text>


      <View style={styles.form}>
        <TextInput style={styles.input} placeholder='Mobile number/Email' placeholderTextColor='white' />
        <TextInput style={styles.input} placeholder='Password' 
        placeholderTextColor='white'
        secureTextEntry={true} />
        <TouchableOpacity style={styles.loginbutton}>
          <Text style={styles.loginbuttonText}>Login</Text>
        </TouchableOpacity>

      </View>



      <View>
        <></>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    paddingTop: 10,

  },
  text: {
    color: 'black',
    fontSize: 30,
    fontWeight: '500',
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
  form: {
    alignItems: 'center',
    marginTop: 100,
    gap: 15,

  },
  label: {
    textAlign: 'center',
    padding: 5,
  },

  input: {
    backgroundColor: '#af792f',
    width: 330,
    color: 'white',
    borderRadius: 12,
    padding:12,
    fontSize:18,
  },
  textfour: {
    color: 'aqua'

  },
  loginbutton: {
    backgroundColor: '#51473a',
    width: 329,
    color: 'white',
    borderRadius: 12,
    padding: 14,
  },
  loginbuttonText: {
    color: 'white',
    textAlign: 'center',

  },
})