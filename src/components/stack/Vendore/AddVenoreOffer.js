import { useEffect, useState } from "react";
import { Text, View, ScrollView, TextInput, StyleSheet, Button, Image, TouchableOpacity, ActivityIndicator } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Toast from 'react-native-toast-message';

import {  useSelector } from 'react-redux';

export default function AddVendoreOffer(){
    const [offertittle, setOfferTittle] = useState([]);
    const userid = useSelector((state)=> state.upostion)
    const [shops, setShops] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedShop, setSelectedShop] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [shopdropdown, setShopDropdownOpen] = useState(false);
    const [productdropdown, setProductDropdownOpen] = useState(false);


    useEffect(() => {
        fetchShops();
        fetchProducts();
      }, []);
    

      const formData = new FormData();

      const handleSubmit = async () => {
        try {
          const token = await AsyncStorage.getItem('token');
          formData.append('user_id', userid[0]);
          formData.append('shop_id', selectedShop?.id);
          formData.append('product_id', selectedProduct?.id);
          formData.append('offer_data', offertittle);
    
          const response = await fetch(`https://focusmore.codelive.info/api/add-vendor-offer`, {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${token}`
            },
            body: formData
          });
    
          if (!response.ok) {
            throw new Error('Failed to add shop offer');
          }
    
          const result = await response.json();
          if(result.status <=200){
            Toast.show({
              type: 'success',
              text1:`${result.message}`,
            });
          }else{
            Toast.show({
              type:'error',
              text1:`${result.details.offer_data}`,
            });
          }
          console.warn(result);
        } catch (error) {
          Toast.show({
            type:'error',
            text1:`Please Field All Fields`,
          });
        }
      };


      const fetchShops = async () => {
        try {
          const token = await AsyncStorage.getItem('token');
          const response = await axios.post('https://focusmore.codelive.info/api/shop/list');
          setShops(response.data.data);
        } catch (error) {
          console.error('Error fetching shops:', error);
        }
      };
    
      const fetchProducts = async () => {
        try {
          const token = await AsyncStorage.getItem('token');
          const response = await axios.post('https://focusmore.codelive.info/api/product/list');
          setProducts(response.data.data);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };

    
      const handleShopSelection = (shop) => {
        setSelectedShop(shop);
        setShopDropdownOpen(false);
    
      };
    
      const handleProductSelection = (product) => {
        setSelectedProduct(product);
        setProductDropdownOpen(false);
    
      };

    return(
        <>
        <View style={styles.header}>
    <Text style={styles.headerText}>Add Vendore Offer</Text>
  </View>


    <ScrollView contentContainerStyle={styles.container}>

    <Text style={styles.heading}>Select Shop</Text>
        <TouchableOpacity onPress={() => setShopDropdownOpen(!shopdropdown)}>
          <View style={styles.dropdown}>
            <Text style={styles.dropdownText}>
              {selectedShop ? selectedShop.title : 'Select Shop'}
            </Text>
          </View>
        </TouchableOpacity>
        {shopdropdown && (
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


<Text style={styles.heading}>Select product</Text>
        <TouchableOpacity onPress={() => setProductDropdownOpen(!productdropdown)}>
          <View style={styles.dropdown}>
            <Text style={styles.dropdownText}>
              {selectedProduct ? selectedProduct.name : 'Select Product'}
            </Text>
          </View>
        </TouchableOpacity>
        {productdropdown && (
          <View style={styles.dropdownList}>
            {products.map(shop => (
              <TouchableOpacity key={shop?.id} onPress={() => handleProductSelection(shop)}>
                <View style={styles.dropdownItem}>
                  <Text>{shop.name}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        )}


      <TextInput
        style={styles.input}
        placeholder="Offer Tittle"
        value={offertittle}
        onChangeText={setOfferTittle}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Add Offer</Text>
      </TouchableOpacity>
    </ScrollView>
</>
    )
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