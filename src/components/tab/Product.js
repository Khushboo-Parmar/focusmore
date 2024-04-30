
import { SafeAreaView, StyleSheet, Text, View, Image, Button, TouchableOpacity, TextInput, ScrollView, Alert, Modal, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import AwesomeIcon from "react-native-vector-icons/FontAwesome5";
import SetProductReview from './stackbottom/SetProductReview.js';
import Toast from 'react-native-toast-message';


const Product = (props) => {
    const [data, setData] = React.useState(null);
    const navigation = useNavigation();
    const [rating, setRating] = useState({});
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedProductId, setSelectedProductId] = useState(null);


    const handleRatingClick = (productId, value) => {
        setRating({ ...rating, [productId]: value });
    };
    const handlePressableClick = (productId) => {
        setSelectedProductId(productId);
        setModalVisible(true);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {

                const token = await AsyncStorage.getItem('token');
                if (token) {

                    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                    const response = await fetch('https://focusmore.codelive.info/api/shop/product', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`
                        },
                        body: JSON.stringify({
                            shop_id: props.route.params?.id
                        }),
                    });

                    const responseData = await response.json();
                    setData(responseData.data);
                    // Initialize ratings state for each product
                    const initialRatings = {};
                    responseData.data.forEach(product => {
                        initialRatings[product.id] = 0;
                    });
                    setRating(initialRatings);
                }
            } catch (error) {
                console.log('Error fetching data:', error);
            }
        };

        fetchData();
    }, [props.route.params?.id]);

    // add to wishlist


    const handlewishlist = async (productId) => {
        try {
            const token = await AsyncStorage.getItem('token');
            if (token) {
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                const response = await axios.post(`https://focusmore.codelive.info/api/add-product-wishlist`, {
                    product_id: productId,
                    action:1
                });
                if (response.status === 200) {
                    Toast.show({
                        type: 'success',
                        text1: `${response.data.message} 🚀`
                    })
                } else {
                    Toast.show({
                        type: 'error',
                        text1: `${response.data.details?.review || response.data.message} 📦`,
                    });
                }
            }
        } catch (error) {
            console.error('Error adding to wishlist', error);
            Alert.alert('Error', "Failed to add product to wishlist");
        }
    };
    // interest on products

    const handleInterest = async (productId) => {
        try {
            const token = await AsyncStorage.getItem('token');
            if (token) {
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
              const response=  await axios.post(`https://focusmore.codelive.info/api/add-interest-product`, {
                    product_id: productId,
                    action: 1
                });
                if (response.status === 200) {
                    Toast.show({
                        type: 'success',
                        text1: `${response.data.message} 🚀`
                    })
                } else {
                    Toast.show({
                        type: 'error',
                        text1: `${response.data.details?.review || response.data.message} 📦`,
                    });
                }
            }
        }
        catch {

        }
    };

    return (
        <>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text>Products</Text>
                </View>

                <View>
                    <Text>
                        Search
                    </Text>
                </View>

            </View>

            <ScrollView>
                {data?.length >= 1 ? (
                    <>
                        {data.map((i) => (
                            <TouchableOpacity onPress={()=>{navigation.navigate('ProductDetail',{id:i.id})}}
                            key={i.id} style={[styles.products, { padding: 10, borderBottomWidth: 2, borderBottomColor: '#ababab' }]}>

                                <View style={{ marginRight: 10 }}>
                                    <Image
                                        source={{
                                            uri: 'https://www.pngall.com/wp-content/uploads/4/Front-Load-Washing-Machine-PNG.png',
                                        }}
                                        style={{ width: 100, height: 160 }}
                                    />
                                </View>

                                <View>
                                    <Text style={{ fontWeight: '900', fontSize: 11, color: 'black' }}>{i?.name}</Text>
                                    <Text style={{ fontWeight: '900', marginBottom: 5, fontSize: 11, color: 'black' }}>Rs. <Text style={{ color: 'red', fontWeight: '900' }}>{i?.price}</Text></Text>
                                    <Text style={{ fontWeight: '900', fontSize: 11, color: 'black' }}>Availability: <Text style={{ color: '#1fb965', fontWeight: '900' }}>{i?.in_stock > 1 ? 'In stock' : 'Out Of Stock'}</Text></Text>
                                    <Text style={{ fontWeight: '900', fontSize: 11, color: 'black' }}>Delivery Charges: <Text style={{ color: '#0076ba', fontWeight: '900' }}> Free Delivery</Text></Text>
                                    <View style={[styles.products, { marginTop: 5, marginBottom: 5 }]}>
                                        <TouchableOpacity onPress={() => handlewishlist(i.id)}>
                                            <Text style={{ color: '#0076ba', fontWeight: '900', fontSize: 11 }}>Add to Wishlist {i.id}</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => handleInterest(i.id)}>
                                            <Text style={{ color: 'red', fontWeight: '900', marginLeft: 20, fontSize: 11 }}>Interest on Product</Text>
                                        </TouchableOpacity>

                                    </View>
                                    <TouchableOpacity onPress={() => { navigation.navigate('Offer', { id: data[0].id, shopid: props.route.params?.id }) }}>
                                        <Text style={{ color: '#017b76', fontWeight: '900', fontSize: 11 }}>Offers:</Text>
                                    </TouchableOpacity>
                                    <View style={{ marginTop: 7 }}>
                                        <Text style={{ fontWeight: '900', fontSize: 11, color: 'black' }}>Bajaj Finserv No Cost EMI PLANS</Text>
                                        <Text style={{ fontWeight: '900', fontSize: 11, color: 'black' }}>3 EMIs Rs. 14,430.00/month</Text>
                                        <Text style={{ fontWeight: '900', fontSize: 11, color: 'black' }}>6 EMIs Rs. 7,215.00/month</Text>
                                    </View>
                                    <TouchableOpacity onPress={() => { navigation.navigate('AddShopOffer', { id: i?.id, shopid: props.route.params?.id }) }}>
                                        <Text style={{ color: '#017b76', fontWeight: '900', fontSize: 11 }}>ADD Offers</Text>
                                    </TouchableOpacity>
                                    <Modal
                                        animationType="slide"
                                        transparent={true}
                                        visible={modalVisible && selectedProductId === i.id}
                                        onRequestClose={() => {
                                            // setModalVisible(false);
                                            setModalVisible(!modalVisible);
                                            setSelectedProductId(null);
                                            Alert.alert('Modal has been closed.');
                                        }}
                                    >
                                        <View style={styles.centeredView}>
                                            <View style={styles.modalView}>
                                                <View><SetProductReview productId={i.id} /></View>

                                                <Pressable
                                                    style={[styles.modalbutton, styles.buttonClose]}
                                                    onPress={() => setModalVisible(!modalVisible)}>
                                                    <Text style={styles.textStyle}>Hide Modal</Text>
                                                </Pressable>
                                            </View>
                                        </View>
                                    </Modal>
                                    <Pressable
                                        onPress={() => handlePressableClick(i.id)}>
                                        <Text style={styles.textStyle}>Add Rating</Text>
                                    </Pressable>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </>
                ) : <Text style={{ alignSelf: 'center', marginTop: 200, color: 'black' }}>No Data Found</Text>}
            </ScrollView>
            <View>
                <Button title="Add more Product" onPress={() => { navigation.navigate('AddProduct') }} />
            </View>
        </>
    )
}
export default Product;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#73fdea',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 10
    },
    products: {
        flexDirection: 'row',
    },
    // css for modal
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: 22,
    },
    modalView: {
        // margin: 10,
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        // elevation: 5,
        width: '90%',
        height: '35%'
    },
    modalbutton: {
        borderRadius: 20,
        padding: 10,
        marginBottom: 30,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'black',
        fontWeight: 'bold',

    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});

