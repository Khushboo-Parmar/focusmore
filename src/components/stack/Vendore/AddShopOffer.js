import { Text, View, ScrollView, TextInput, StyleSheet, Button, Image, TouchableOpacity, ActivityIndicator } from "react-native";
import ImagePicker from 'react-native-image-crop-picker';
import React, { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export default function AddShopOffer(props){
    const [description, setDescription] = useState()
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [title, setTittle] = useState(null)
    const [tittle, setTitle] = useState(null)


    const filename = image?.split("/").pop();
    const match = /\.(\w+)$/.exec(filename);
    const ext = match?.[1];
    console.warn(props.route.params)

    const formdata = new FormData()

    const handelSumbit = async () => {
        try {
          const token = await AsyncStorage.getItem('token');
          formdata.append('name', title);
          formdata.append('title', tittle);
          formdata.append('offer_image', {
            uri: image,
            type: `image/${ext}`,
            name: filename
          });
          formdata.append('description', description);
          formdata.append('product_id',props.route.params?.id)
          formdata.append('shop_id', props.route.params?.shopid)
      
          const response = await fetch(`https://focusmore.codelive.info/api/add-shop-offer`, {
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
    return(
        <>
        <ScrollView>

        <TextInput
                        style={styles.input}
                        placeholder="Offer name"
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
                        placeholder="Tittle"
                        // value={productData.price}
                        onChangeText={(e) => setDescription(e)}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="description"
                        // value={productData.price}
                        onChangeText={(e) => setDescription(e)}
                    />

<Button title="Add Offer" onPress={handelSumbit} />


        </ScrollView>
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