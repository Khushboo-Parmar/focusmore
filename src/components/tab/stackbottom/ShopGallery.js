
import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import axios from 'axios';
import Gallery from 'react-native-awesome-gallery';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from "react-redux";

const ShopGallery = (props) => {
    const [images, setImages] = useState([]);
    const userId = useSelector((state) => state.uId)
    // console.warn('u id=', userId[0])
    // console.warn('shop id=', props.route.params.id)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = await AsyncStorage.getItem('token');
                if (token) {
                    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                    const response = await axios.post('https://focusmore.codelive.info/api/get-shop-gallery', {
                        // shop_id: 5,
                        user_id: 3,
                        shop_id: props.route.params?.id,
                        // user_id: userId[0]
                    });
                    console.warn('Gallery API Response:', response); 
                    const imageURLs = response.data.data.map(item => item.shop_gallery);
                    console.warn('Image URLs:', imageURLs); 
                    setImages(imageURLs);
                }
            } catch (error) {
                console.error('Error fetching nearby shops:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <View style={{ flex: 1 }}>
            {images.length > 0 ? (
                <Gallery
                    data={images}
                    onIndexChange={(newIndex) => {
                        console.log('Selected image index:', newIndex);
                    }}
                />
            ) : (
                <Text>No images found</Text>
            )}
        </View>
    );
}

export default ShopGallery;

