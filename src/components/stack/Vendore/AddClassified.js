import { Text, View, ScrollView, TextInput, StyleSheet, Button, Image, TouchableOpacity, ActivityIndicator } from "react-native";
import ImagePicker from 'react-native-image-crop-picker';
import React, { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';


export default function AddClasified(props) {
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [title, setTittle] = useState(null)
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [categories, setCategories] = useState([]);
    const [description, setDescription] = useState()
    const [dropdownOpen, setDropdownOpen] = useState(false);
    console.warn(selectedCategory)
    // console.warn(props.route.params.id)

    useEffect(() => {
        fetchCategories();
    }, [props]);


    const fetchCategories = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            if (token) {
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                const response = await axios.get('https://focusmore.codelive.info/api/category/list');
                setCategories(response.data.data);
            }
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    }

    const filename = image?.split("/").pop();
    const match = /\.(\w+)$/.exec(filename);
    const ext = match?.[1];

    const formdata = new FormData()

    const handelSumbit = async () => {
        try {
          const token = await AsyncStorage.getItem('token');
          formdata.append('title', title);
          formdata.append('image_path', {
            uri: image,
            type: `image/${ext}`,
            name: filename
          });
          formdata.append('description', description);
          formdata.append('visible', 1)
          formdata.append('category_id', selectedCategory?.id)
          formdata.append('shop_id', props.route.params?.id)
      
          const response = await fetch(`https://focusmore.codelive.info/api/classifield/add`, {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${token}`
            },
            body: formdata
          });
      
          if (!response.ok) {
            throw new Error('Failed to add classified');
          }
      
          const result = await response.json();
          console.warn(result);
        } catch (error) {
          console.error('Error submitting classified:', error);
        }
      }
      


    const handleCategorySelection = (category) => {
        setSelectedCategory(category);
        setDropdownOpen(false);
    }


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
        <>
            <View>

                <ScrollView>

                    <View style={{ marginTop: 10, zIndex: 999 }}>
                        <Text style={{ fontWeight: '900', color: 'black' }}>Select Business Category</Text>
                        <TouchableOpacity onPress={() => setDropdownOpen(!dropdownOpen)}>
                            <View style={{ backgroundColor: '#d6d5d5', width: '60%', alignItems: 'center', borderRadius: 8, marginTop: 10 }}>
                                <Text style={{ padding: 8, color: '#747d85', textAlign: 'center', fontWeight: '700', color: 'black' }}>
                                    {selectedCategory ? selectedCategory.name : 'Select Category'}
                                </Text>
                            </View>
                        </TouchableOpacity>
                        {dropdownOpen && (
                            <View style={{ marginTop: 5, borderWidth: 1, borderColor: '#ccc', borderRadius: 5 }}>
                                {categories.map(category => (
                                    <TouchableOpacity key={category?.id} onPress={() => handleCategorySelection(category)}>
                                        <View style={{ padding: 10 }}>
                                            <Text>{category.name}</Text>
                                        </View>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        )}
                    </View>

                    <TextInput
                        style={styles.input}
                        placeholder="Product title"
                        // value={productData.name}
                        onChangeText={(e) => setTittle(e)}
                    />

                    <TouchableOpacity onPress={pickImage}>
                        <Text style={{ fontSize: 18, color: 'blue', marginBottom: 10 }}>Pick Image</Text>
                        {loading ? (
                            <ActivityIndicator size="small" color="blue" />
                        ) : (
                            <View>
                                {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
                                {!image && <Text>No image selected</Text>}
                            </View>
                        )}
                    </TouchableOpacity>

                    <TextInput
                        style={styles.input}
                        placeholder="description"
                        // value={productData.price}
                        onChangeText={(e) => setDescription(e)}
                        keyboardType="numeric"
                    />
                    <Button title="Add Clasified" onPress={handelSumbit} />
                </ScrollView>
            </View>
        </>
    )
}

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
        color: 'black',
    }
});