
import React, { useState, useEffect } from "react";
import { Text, View, ScrollView, TextInput, StyleSheet, Button, Image, TouchableOpacity, ActivityIndicator } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios';
import ImagePicker from 'react-native-image-crop-picker';



const AddProduct = (props) => {
    const [loading, setLoading] = useState(false);
    const [shops, setShops] = useState([]);

    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [price, setPrice] = useState();
    const [in_tock, setInStock] = useState();
    const [deliverycharge, setDeliveryCharge] = useState();
    const [phone, setPhone] = useState();
    const [purchaseprice, setPurchasePrice] = useState();
    const [sellprice, setSellPrice] = useState();
    const [discountamount, setDiscountAmount] = useState();
    const [offerlimit, setOfferLimit] = useState();
    const [image, setImage] = useState();
    const [selectedShop, setSelectedShop] = useState(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        fetchShops();
    }, []);

    const filename = image?.split("/").pop();
    const match = /\.(\w+)$/.exec(filename);
    const ext = match?.[1];
    const formData = new FormData();
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


    const addProduct = async () => {
        const token = await AsyncStorage.getItem('token');
        try {
            formData.append('shop_id', selectedShop?.id);
            formData.append('image_path', {
                uri: image,
                type: `image/${ext}`,
                name: filename
            });
            formData.append('name', name);
            formData.append('description', description);
            formData.append('in_stock', in_tock);
            formData.append('delivery_charge', deliverycharge);
            formData.append('phone', phone);
            formData.append('purchase_price', purchaseprice);
            formData.append('sell_price', sellprice);
            formData.append('discount_amount', discountamount);
            formData.append('offer_limit', offerlimit);





            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            const response = await fetch("https://focusmore.codelive.info/api/product/add", {
                method: "POST",
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
                body: formData
            });
            const data = await response.json();
            console.warn(data)
        } catch (error) {
            // console.error("Error adding product:", error);
            // Alert.alert("Error", "Failed to add product. Please try again.");
        }
    };
    const handleShopSelection = (shop) => {
        setSelectedShop(shop);
        setDropdownOpen(false);
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
                console.warn(image)
            })
            .catch((error) => {
                console.log('Image picking error:', error);

            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.heading}>Add Product</Text>
            <ScrollView>
                {/* <Text style={styles.heading}>Select Shop</Text> */}
                <TouchableOpacity onPress={() => setDropdownOpen(!dropdownOpen)}>
                    <View style={styles.dropdown}>
                        <Text style={styles.headingg}>
                            {selectedShop ? selectedShop.title : 'Select Shop'}
                        </Text>
                    </View>
                </TouchableOpacity>
                {dropdownOpen && (
                    <View style={styles.dropdownList}>
                        {shops.map(shop => (
                            <TouchableOpacity key={shop?.id} onPress={() => handleShopSelection(shop)}>
                                <View style={styles.dropdownItem}>
                                    <Text style={styles.headingg}>{shop.title}</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                )}
                <TextInput
                    style={styles.input}
                    placeholder="Product Name"
                    placeholderTextColor="gray"
                    value={name}
                    onChangeText={setName}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Description"
                    placeholderTextColor="gray"
                    value={description}
                    onChangeText={setDescription}
                    multiline
                />
                <TextInput
                    style={styles.input}
                    placeholder="Price"
                    placeholderTextColor="gray"
                    value={price}
                    onChangeText={setPrice}
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Purchase Price"
                    placeholderTextColor="gray"
                    value={purchaseprice}
                    onChangeText={setPurchasePrice}
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Sell  Price"
                    placeholderTextColor="gray"
                    value={sellprice}
                    onChangeText={setSellPrice}
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    placeholder="DiscountAmount"
                    placeholderTextColor="gray"
                    value={discountamount}
                    onChangeText={setDiscountAmount}
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Offer Limit"
                    placeholderTextColor="gray"
                    value={offerlimit}
                    onChangeText={setOfferLimit}
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    placeholder="In Stock"
                    placeholderTextColor="gray"
                    value={in_tock}
                    onChangeText={setInStock}
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Delivery Charge"
                    placeholderTextColor="gray"
                    value={deliverycharge}
                    onChangeText={setDeliveryCharge}
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Phone"
                    placeholderTextColor="gray"
                    value={phone}
                    onChangeText={setPhone}
                    keyboardType="phone-pad"
                />
                <TextInput
                    style={styles.input}
                    placeholder="purchase_price"
                    placeholderTextColor="gray"
                    onChangeText={setPurchasePrice}
                    keyboardType="phone-pad"
                />

                <TextInput
                    style={styles.input}
                    placeholder="sell_price"
                    placeholderTextColor="gray"
                    onChangeText={setSellPrice}
                    keyboardType="phone-pad"
                />

                <TextInput
                    style={styles.input}
                    placeholder="discount_amount"
                    placeholderTextColor="gray"
                    onChangeText={setDiscountAmount}
                    keyboardType="phone-pad"
                />

                <TextInput
                    style={styles.input}
                    placeholder="offer_limit"
                    placeholderTextColor="gray"
                    onChangeText={setOfferLimit}
                    keyboardType="phone-pad"
                />

                <TouchableOpacity onPress={pickImage}>
                    <Text style={{ fontSize: 18, color: 'blue', marginBottom: 10 }}>Pick Image</Text>
                    {loading ? (
                        <ActivityIndicator size="small" color="blue" />
                    ) : (
                        <View>
                            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
                            {!image && <Text style={styles.headingg} >No image selected</Text>}
                        </View>
                    )}
                </TouchableOpacity>

            </ScrollView>
            <Button title="Add Product" onPress={addProduct} />
        </ScrollView>
    );
};
export default AddProduct;


const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        justifyContent: "center"
    },
    heading: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
        color:'black'
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
        width: '100%',
        marginBottom: 20
    },
    headingg:{
        color: 'black',
      }
});

