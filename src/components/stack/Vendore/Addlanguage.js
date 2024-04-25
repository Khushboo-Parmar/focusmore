import { Text, View, ScrollView, TextInput, StyleSheet, Button, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';

export default function AddLanguage() {
  const [title, setTitle] = useState("");

  const handleSumbit = async () => {
    const token = await AsyncStorage.getItem('token');
    const formData = new FormData();
    formData.append('name', title);

    try {
      const response = await fetch('http://focusmore.codelive.info/api/add-languages', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData
      });
      
      const result = await response.json();
if(result.status <=200){
  Toast.show({
    type: 'success',
    text1:`${result.message}`,
  });
}else{
  Toast.show({
    type:'error',
    text1:`${result.details.name}`,
  });
}
      console.warn(result);
    } catch (error) {
      Toast.show({
        type:'error',
        text1:`Something Went Wrong`,
      });
    }
  };

  return (
<>
<View style={styles.header}>
    <Text style={styles.headerText}>Add Language</Text>
  </View>
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Language name"
        value={title}
        onChangeText={setTitle}
      />
      <TouchableOpacity style={styles.button} onPress={handleSumbit}>
        <Text style={styles.buttonText}>Add Language</Text>
      </TouchableOpacity>
    </View>
</>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    color: 'black',
  },
  button: {
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
  header: {
    backgroundColor: '#000000',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    width:'100%',
    marginBottom:20
  },
});
