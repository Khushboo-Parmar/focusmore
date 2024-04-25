import React, { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text, View, ScrollView, TextInput, StyleSheet, Button, Image, TouchableOpacity, ActivityIndicator } from "react-native";
import ImagePicker from 'react-native-image-crop-picker';
import axios from 'axios';
import Toast from 'react-native-toast-message';


export default function AddShopGallery(props){
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [shops, setShops] = useState([]);
  const [selectedShop, setSelectedShop] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  useEffect(() => {
    fetchShops();
  }, []);

  const fetchShops = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      const response = await axios.post('https://focusmore.codelive.info/api/shop/list');
      setShops(response.data.data);
    } catch (error) {
      console.error('Error fetching shops:', error);
    }
  };

  const filename = image?.split("/").pop();
  const match = /\.(\w+)$/.exec(filename);
  const ext = match?.[1];
  const formData = new FormData();

  const handleSubmit = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      formData.append('shop_id', selectedShop?.id);
      formData.append('gallery', {
        uri: image,
        type: `image/${ext}`,
        name: filename
      });

      const response = await fetch('https://focusmore.codelive.info/api/add-shop-gallery', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData
      });

      if (!response.ok) {
        throw new Error('Failed to add shop gallery');
      }

      const result = await response.json();
      Toast.show({
        type: 'success',
        text1:`${result.message}`,
      });
      console.warn(result);
    } catch (error) {
      Toast.show({
        type:'error',
        text1:`Please Field All Fields`,
      });
    }
  };

  const pickImage = () => {
    setLoading(true);
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
    .then((selectedImage) => {
      setImage(selectedImage.path);
    })
    .catch((error) => {
      console.log('Image picking error:', error);
    })
    .finally(() => {
      setLoading(false);
    });
  };

  const handleShopSelection = (shop) => {
    setSelectedShop(shop);
    setDropdownOpen(false);
  };

  return(
<>
<View style={styles.header}>
    <Text style={styles.headerText}>Add Shop Gallery</Text>
  </View>
    <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>Select Shop</Text>
        <TouchableOpacity onPress={() => setDropdownOpen(!dropdownOpen)}>
          <View style={styles.dropdown}>
            <Text style={styles.dropdownText}>
              {selectedShop ? selectedShop.title : 'Select Shop'}
            </Text>
          </View>
        </TouchableOpacity>
        {dropdownOpen && (
          <View style={styles.dropdownList}>
            {shops.map(shop => (
              <TouchableOpacity key={shop?.id} onPress={() => handleShopSelection(shop)}>
                <View style={styles.dropdownItem}>
                  <Text>{shop.title}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        )}
      <TouchableOpacity onPress={pickImage}>
        <Text style={styles.imagePickerText}>Pick Image</Text>
        {loading ? (
          <ActivityIndicator size="small" color="blue" />
        ) : (
          <View>
            {image && <Image source={{ uri: image }} style={styles.image} />}
            {!image && <Text style={{fontSize:12,marginBottom:10}}>No image selected</Text>}

          </View>
        )}
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Add Gallery</Text>
      </TouchableOpacity>
    </ScrollView>
</>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
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
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: 'black',
  },
  imagePickerText: {
    fontSize: 15,
    color: 'grey',
    marginBottom: 10,
    fontStyle:'italic'
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  dropdown: {
    backgroundColor: 'black',
    width: '100%', 
    alignItems: 'center',
    paddingVertical: 8,
    borderRadius: 8,
    marginVertical: 10,
  },
  dropdownText: {
    color: 'white',
    fontWeight: '700',
  },
  dropdownList: {
    marginTop: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  dropdownItem: {
    padding: 10,
  },
  button: {
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems:'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});