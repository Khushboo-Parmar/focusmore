
import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { useNavigation } from '@react-navigation/native';
import { ImageBackground, StyleSheet, Text, View, Image, Button, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Toast from 'react-native-toast-message';


export const SignUp = () => {
  const [email,setEmail] = React.useState(null)
  const [password,setPassword] = React.useState(null)
  const navigation = useNavigation();

  const handelsumbit = async () =>{
    const token = await AsyncStorage.getItem('token');
  
      try{
        const result = await fetch('https://focusmore.codelive.info/api/user/add', {
          method: 'POST',
          headers: {
              'Authorization': `Bearer ${token}` ,
              'Content-Type':'application/json'
          },
          body:JSON.stringify({
              name:email,
              last_name:email,
              email:email,
              password:password
            }),
      });
      const response = await result.json();
      console.warn(response)
      if(response.status <= 200){
        Toast.show({
          type: 'success',
          text1:  `${response.message} 🚀`
        });
        navigation.navigate('Login');
      }else{
        Toast.show({
          type: 'error',
          text1:  `${response.details?.email ? response.details?.email :response.message} 📦`,
        });
      }
      }catch(e){
       console.warn(e)
      }
  
  }

    return (
        <>
        <View style={{ alignItems: 'center' }}>
  <Image source={{uri:'https://png.pngtree.com/png-vector/20220826/ourmid/pngtree-gold-congratulations-lettering-graduate-sticker-with-confetti-transparent-background-png-image_6109456.png'}} style={{width:150,height:150}} />
<ScrollView>
  <View style={{ paddingHorizontal: 20 }}>
  <View style={styles.inputRow}>
    <Text style={[styles.label,{textAlign:'right'}]}><Text style={styles.required}>*</Text> email:</Text>
    <TextInput
    onChangeText={(e)=>{setEmail(e)}}
      style={[styles.input,{width:200}]}
      placeholder=''
    />
  </View>
  <View style={styles.inputRow}>
    <Text style={[styles.label,{textAlign:'right'}]}><Text style={styles.required}>*</Text> password:</Text>
    <TextInput
    onChangeText={(e)=>{setPassword(e)}}
      style={[styles.input,{width:200}]}
      placeholder=''
    />
  </View>
  <View style={styles.inputRow}>
    <Text style={[styles.label,{textAlign:'right'}]}><Text style={styles.required}>*</Text> confirm cassword:</Text>
    <TextInput
      style={[styles.input,{width:200}]}
      placeholder=''
    />
  </View>
  <View style={styles.inputRow}>
    <Text style={[styles.label,{textAlign:'right'}]}><Text style={styles.required}>*</Text> city/town/village:</Text>
    <TextInput
      style={[styles.input,{width:200}]}
      placeholder=''
    />
  </View>
  <View style={styles.inputRow}>
    <Text style={[styles.label,{textAlign:'right'}]}><Text style={styles.required}>*</Text> state:</Text>
    <TextInput
      style={[styles.input,{width:200}]}
      placeholder=''
    />
  </View>
  <View style={styles.inputRow}>
    <Text style={[styles.label,{textAlign:'right'}]}>pin Code:</Text>
    <TextInput
      style={[styles.input,{width:200}]}
      placeholder=''
    />
  </View>
  <View style={styles.inputRow}>
  <Text style={[styles.label, { textAlign: 'right' }]}>profile pic:</Text>
  <View style={{ position: 'relative', width: 200, height: 200 }}>

  <ImageBackground
    style={[styles.input,{ width: '100%', height: '100%' }]}
    resizeMode="cover"
  >
    <TouchableOpacity
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      onPress={(e) => {
      }}
    >
      <Text style={{ fontSize: 20 , color:'#5e5e61' }}>+</Text>
    </TouchableOpacity>
  </ImageBackground>

</View>

</View>
  <View style={{ flexDirection:'row', justifyContent:'flex-end', marginTop: 10 ,marginRight:10}}>
    <TouchableOpacity  onPress={handelsumbit} style={{ backgroundColor: 'black', width: 125, alignItems: 'center', paddingVertical: 7, borderRadius: 13 }}>
      <Text style={{ alignItems: 'flex-end',color: 'white', fontWeight: '500' }}>Register</Text>
    </TouchableOpacity>
  </View>
</View>
</ScrollView>
</View>

        
        </>)
    }

    const styles = StyleSheet.create({
        inputRow: {
          flexDirection: 'row',
          marginBottom: 10,
          paddingRight:20
        },
        label: {
          color: '#5e5e61',
          width: '40%',
          textAlign: 'right', 
          fontSize:14
        },
        required: {
          color: 'red',
        },
        input: {
          borderWidth: 1,
          borderColor: '#9b9b9b',
          marginLeft: 5, 
          borderRadius:2,
          height:36 ,
          borderRadius: 8, 
          color:'black',
        },
      });
