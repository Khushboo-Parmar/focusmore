// import React from "react";

// export const Product=()=>{

// }

import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Image, Button, TouchableOpacity, TextInput } from 'react-native';


export const Product = () => {

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


            <View style={[styles.products, { padding: 10, borderBottomWidth: 2, borderBottomColor: '#ababab' }]}>

                <View style={{ marginRight: 10 }}>
                    <Image
                        source={{
                            uri: 'https://www.pngall.com/wp-content/uploads/4/Front-Load-Washing-Machine-PNG.png',
                        }}
                        style={{ width: 100, height: 160 }}
                    />
                </View>

                <View>
                    <Text style={{ fontWeight: '900', fontSize: 11 }}>IFB WASHING MACHINE EXECUTIVE PLUS 8.5KG</Text>
                    <Text style={{ fontWeight: '900', marginBottom: 5, fontSize: 11 }}>Rs. <Text style={{ color: 'red', fontWeight: '900' }}>43,290.00</Text></Text>
                    <Text style={{ fontWeight: '900', fontSize: 11 }}>Availability: <Text style={{ color: '#1fb965', fontWeight: '900' }}>In stock</Text></Text>
                    <Text style={{ fontWeight: '900', fontSize: 11 }}>Delivery Charges: <Text style={{ color: '#0076ba', fontWeight: '900' }}> Free Delivery</Text></Text>
                    <View style={[styles.products, { marginTop: 5, marginBottom: 5 }]}>
                        <Text style={{ color: '#0076ba', fontWeight: '900', fontSize: 11 }}>Add to Wishlist</Text>
                        <Text style={{ color: 'red', fontWeight: '900', marginLeft: 20, fontSize: 11 }}>Interest on Product</Text>

                    </View>
                    <Text style={{ color: '#017b76', fontWeight: '900', fontSize: 11 }}>Offers:</Text>
                    <View style={{ marginTop: 7 }}>
                        <Text style={{ fontWeight: '900', fontSize: 11 }}>Bajaj Finserv No Cost EMI PLANS</Text>
                        <Text style={{ fontWeight: '900', fontSize: 11 }}>3 EMIs Rs. 14,430.00/month</Text>
                        <Text style={{ fontWeight: '900', fontSize: 11 }}>6 EMIs Rs. 7,215.00/month</Text>


                    </View>

                </View>

            </View>
        </>
    )


}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#73fdea',
      justifyContent: 'space-between',
      flexDirection: 'row',
      paddingHorizontal: 10
    },
    products: {
      flexDirection: 'row',
    }
  });

