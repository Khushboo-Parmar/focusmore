
import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Image, Button, TouchableOpacity, TextInput } from 'react-native';


export const SignUp = () => {

    return (
        <>
        <View style={{ alignItems: 'center' }}>
  <Image source={{uri:'https://img.freepik.com/premium-vector/inscription-congrats-vector_712079-844.jpg'}} style={{width:150,height:150}} />

  <View style={{ paddingHorizontal: 20 }}>
  <View style={styles.inputRow}>
    <Text style={[styles.label,{textAlign:'right'}]}><Text style={styles.required}>*</Text> email:</Text>
    <TextInput
      style={[styles.input,{width:200}]}
      placeholder=''
    />
  </View>
  <View style={styles.inputRow}>
    <Text style={[styles.label,{textAlign:'right'}]}><Text style={styles.required}>*</Text> password:</Text>
    <TextInput
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
    <TextInput
      style={[styles.input, { width: '100%', height: '100%' }]}
      placeholder=''
    />
    <Text style={{ position: 'absolute', top: '50%', left: '50%', transform: [{ translateX: -5 }, { translateY: -10 }], fontSize: 20 }}>+</Text>
  </View>
</View>
  <View style={{ flexDirection:'row', justifyContent:'flex-end', marginTop: 10 ,marginRight:10}}>
    <TouchableOpacity style={{ backgroundColor: 'black', width: 125, alignItems: 'center', paddingVertical: 7, borderRadius: 13 }}>
      <Text style={{ alignItems: 'flex-end',color: 'white', fontWeight: '500' }}>Done</Text>
    </TouchableOpacity>
  </View>
</View>

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
        },
      });