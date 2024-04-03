import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Dropdown = ({ onSelect }) => {
  const [clicked, setClicked] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
     const token = await AsyncStorage.getItem('token');
        if (token) {
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
          const response = await axios.get('https://focusmore.codelive.info/api/category/list');
          setCategories(response.data.data);
          console.log('ex= ', response);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setClicked(false);
    onSelect(category);
  };

  return (
    <View style={{position:'absolute', zIndex:999,}}>
      <TouchableOpacity
        style={{
          width: 215,
          height: 40,
          borderRadius: 10,
          borderWidth: 0.5,
          marginLeft:10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingLeft: 15,
          paddingRight: 15,
          
        }}
        onPress={() => {
          setClicked(!clicked);
        }}>
        <Text style={{ fontWeight: '500',color:'black' }}>
          {selectedCategory === '' ? 'Select Category' : selectedCategory}
        </Text>
        {clicked ? (
          <Image
            source={require('../images/upload.png')}
            style={{ width: 20, height: 20 }}
          />
        ) : (
          <Image
            source={require('../images/dropdown.png')}
            style={{ width: 20, height: 20 }}
          />
        )}
      </TouchableOpacity>
      {clicked ? (
        <View
          style={{
            elevation: 5,
            marginTop: 20,
            height: 300,
            alignSelf: 'center',
            width: '80%',
            backgroundColor: '#fff',
            borderRadius: 10,
            color:'black'
          }}>
          <FlatList
            data={categories}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  style={{
                    width: '85%',
                    alignSelf: 'center',
                    height: 50,
                    justifyContent: 'center',
                    borderBottomWidth: 0.5,
                    borderColor: '#8e8e8e',
                    color:'black'
                  }}
                  onPress={() => handleCategorySelect(item.type)}>
                  <Text style={{ fontWeight: '500', color:'black', fontSize:20 }}>{item.type}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      ) : null}
    </View>
  );
};

export default Dropdown;
