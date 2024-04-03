
import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Image, Button, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native'

const OtpRegistration = () => {
  const navigation = useNavigation();
    return (
        <>
             {/* <View style={{padding:20}}>
      <View style={{flexDirection:'row',width:'100%',alignItems:'center'}}>
        <Text style={{color:'#5e5e61',fontSize:17}}>Mobile Number:</Text>
        <TextInput
        style={{borderWidth:1,borderColor:'#9b9b9b',marginLeft:10,width:'60%'}}
        placeholder=''
        />
      </View>
      <View style={{ flexDirection:'row', justifyContent:'flex-end', marginTop: 10 ,marginRight:10}}>
    <TouchableOpacity style={{ backgroundColor: 'black', width: 125, alignItems: 'center', paddingVertical: 7, borderRadius: 13 }}>
      <Text style={{ alignItems: 'flex-end',color: 'white', fontWeight: '500' }}>Get</Text>
    </TouchableOpacity>
  </View>
     </View> */}

           <View style={{ alignItems: 'center' }}>
  <Text style={{ justifyContent: 'center', marginBottom: 30,marginTop:30 , fontSize:20 , color:'#5f5e61'}}>Get Verified !</Text>
  <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 10 }}>
    <TextInput style={styles.input} maxLength={1} />
    <TextInput style={styles.input} maxLength={1} />
    <TextInput style={styles.input} maxLength={1} />
    <TextInput style={styles.input} maxLength={1} />
    <TextInput style={styles.input} maxLength={1} />
    <TextInput style={styles.input} maxLength={1} />
  </View>
  <View style={{ flexDirection:'row', justifyContent:'flex-end', marginTop: 20 ,marginRight:10}}>
    <TouchableOpacity onPress={()=>{ navigation.navigate('resgistration');}} style={{ backgroundColor: 'black', width: 125, alignItems: 'center', paddingVertical: 7, borderRadius: 13 }}>
      <Text style={{ alignItems: 'flex-end',color: 'white', fontWeight: '500' }}>Get</Text>
    </TouchableOpacity>
  </View>
</View>

        
        </>)
    }

    const styles = StyleSheet.create({
        input: {
          borderWidth: 1,
          borderColor: '#9b9b9b',
          marginLeft: 10,
          width: 30,
          height: 30,
          textAlign: 'center',
          borderRadius: 5,
        },
      });
      export default OtpRegistration;