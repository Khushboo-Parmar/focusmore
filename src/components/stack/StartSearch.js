import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import NearByShop from './NearByShop';
import NearByServices from './NearByServices';
import NearByClassified from './NearByClassified';
import Dropdown from './Dropdown';


const StartSearch = () => {
  const [text, onChangeText] = useState('Useless Text');
  const [number, onChangeNumber] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <ScrollView style={{ marginBottom: 20 }}>
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
                keyboardType="text"
              />
            </View>

            <View style={styles.flex2}>
              <Text style={[styles.label,{marginLeft:10}]}>Category:</Text>
              <View>
                <Dropdown onSelect={handleCategorySelect} />
              </View>

            </View>
            {/* {selectedCategory !== '' && (
              <Text style={styles.selectedCategoryText}>Selected Category: {selectedCategory}</Text>
            )} */}
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
    flex:1,
  },
  container: {
    alignItems: 'center',
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
    color:'black'
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
