import React, { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text, View, ScrollView, TextInput, StyleSheet, Button, Image, TouchableOpacity, ActivityIndicator } from "react-native";
import ImagePicker from 'react-native-image-crop-picker';


export default function AddShopGallery(props){
    // console.warn(props.route.params)
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);


    const filename = image?.split("/").pop();
    const match = /\.(\w+)$/.exec(filename);
    const ext = match?.[1];

    const formdata = new FormData()


    const handelSumbit = async () => {
        try {
          const token = await AsyncStorage.getItem('token');
          formdata.append('shop_id', props.route.params?.id);
          formdata.append('gallery', {
            uri: image,
            type: `image/${ext}`,
            name: filename
          });
      
          const response = await fetch(`https://focusmore.codelive.info/api/add-shop-gallery`, {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${token}`
            },
            body: formdata
          });
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

<Button title="Add Offer" onPress={handelSumbit} />

        </>
    )
}