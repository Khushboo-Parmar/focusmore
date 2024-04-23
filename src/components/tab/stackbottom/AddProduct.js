
import React, { useState } from "react";
import { Text, View, ScrollView, TextInput, StyleSheet, Button, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios';


const AddProduct = (props) => {
    const [productData, setProductData] = useState({
        name: "",
        description: "",
        price: "",
        in_stock: "",
        delivery_charge: "",
        shop_id: "",
        phone: ""
    });

    const handleInputChange = (key, value) => {
        setProductData({ ...productData, [key]: value });
    };

    const addProduct = async () => {
        const token = await AsyncStorage.getItem('token');
        try {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            const response = await fetch("https://focusmore.codelive.info/api/product/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(productData)
            });
            const data = await response.json();
            if (response.ok) {
                // Product added successfully
                Alert.alert("Success", "Product added successfully");
                // Clear input fields
                setProductData({
                    name: "",
                    description: "",
                    price: "",
                    in_stock: "",
                    delivery_charge: "",
                    shop_id: "",
                    phone: ""
                });
            } else {
                Alert.alert("Error", data.message);
            }
        } catch (error) {
            console.error("Error adding product:", error);
            Alert.alert("Error", "Failed to add product. Please try again.");
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.heading}>Add Product</Text>
            <ScrollView>

                <TextInput
                    style={styles.input}
                    placeholder="Product Name"
                    value={productData.name}
                    onChangeText={(text) => handleInputChange("name", text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Description"
                    value={productData.description}
                    onChangeText={(text) => handleInputChange("description", text)}
                    multiline
                />
                <TextInput
                    style={styles.input}
                    placeholder="Price"
                    value={productData.price}
                    onChangeText={(text) => handleInputChange("price", text)}
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Purchase Price"
                    value={productData.PurchasePrice}
                    onChangeText={(text) => handleInputChange("Purchase price", text)}
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Sell  Price"
                    value={productData.SellPrice}
                    onChangeText={(text) => handleInputChange("Sell price", text)}
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    placeholder="DiscountAmount"
                    value={productData.DiscountAmount}
                    onChangeText={(text) => handleInputChange("Discount amount", text)}
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Offer Limit"
                    value={productData.OfferLimit}
                    onChangeText={(text) => handleInputChange("offer limit", text)}
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    placeholder="In Stock"
                    value={productData.in_stock}
                    onChangeText={(text) => handleInputChange("in_stock", text)}
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Delivery Charge"
                    value={productData.delivery_charge}
                    onChangeText={(text) => handleInputChange("delivery_charge", text)}
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Shop ID"
                    value={productData.shop_id}
                    onChangeText={(text) => handleInputChange("shop_id", text)}
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Phone"
                    value={productData.phone}
                    onChangeText={(text) => handleInputChange("phone", text)}
                    keyboardType="phone-pad"
                />

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
        textAlign: "center"
    },
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
        color:'black',
    }
});

