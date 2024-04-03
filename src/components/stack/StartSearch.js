
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import NearByShop from './NearByShop';
import NearByServices from './NearByServices';
import NearByClassified from './NearByClassified';
import Dropdown from './Dropdown';

const StartSearch = () => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');

  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    // Handle category selection logic here
  };


  useEffect(() => {
    const fetchOptions = async () => {
      try {
        0
        const token = await AsyncStorage.getItem('token');
        if (token) {
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
          const response = await axios.post('http://focusmore.codelive.info/api/category/list');
          setOptions(response.data.data);
          console.warn(response)
        }
      } catch (error) {
        console.error('Error fetching options:', error);
      }
    };

    fetchOptions();
  }, []);

  // const handleOptionSelect = (option) => {
  //   setSelectedValue(option);
  //   setIsDropdownOpen(false);
  // };

  return (
    <ScrollView style={{marginBottom:20}}>
      <View style={styles.maincontainer}>
        <View style={{ display: 'flex', alignItems: 'flex-end', marginRight: 15, marginTop: 10 }}>
          <TouchableOpacity>
            <Image source={require('../images/radius.jpg')} style={styles.radiusimage} />
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <View>
            <Text style={styles.searchheader}>Start your Search</Text>
            <View style={styles.flex}>
              <Text style={styles.label}>Keyword:</Text>
              <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={number}
                keyboardType="text"
              />
            </View>

            <View style={styles.flex2}>
              <Text style={styles.label}>Category:</Text>
              <View >
                <Dropdown onSelect={handleCategorySelect} />
              </View>

            </View>
            {selectedCategory !== '' && (
              <Text style={styles.selectedCategoryText}>Selected Category: {selectedCategory}</Text>
            )}
          </View>

        </View>
        <NearByShop />
        <NearByServices />
        <NearByClassified />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
    // marginTop: 15,
  },
  searchheader: {
    color: '#b51e3b',
    fontSize: 18,
  },
  label: {
    color: '#525355',
    fontSize: 20,

  },
  input: {
    margin: 12,
    paddingLeft: 15,
    paddingRight: 15,
    width: '62%',
    height: 40,
    borderRadius: 10,
    borderWidth: 0.5,
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  flex2: {
    display: 'flex',
    flexDirection: 'row',

  },


});

export default StartSearch;
