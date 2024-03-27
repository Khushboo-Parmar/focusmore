
import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Image, Button, TouchableOpacity, TextInput } from 'react-native';


 const Service = () => {

    return (
        <>
        
        <View style={styles.container}>

<View style={styles.header}>
  <Text>Services</Text>
</View>

<View>
  <Text>
    Search
  </Text>
</View>

</View>


<View style={{ padding: 10, borderBottomWidth: 2, borderBottomColor: '#ababab' }}>
  <Text style={{ color: 'red', fontWeight: '900', marginLeft: 30, fontSize: 12, marginBottom: 15 }}>Samsung Product Service Available at your door Step</Text>

  <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
    <Text style={{ color: '#34a3ff', fontWeight: '900', fontSize: 11 }}>Description:</Text>
    <Text style={{ fontWeight: '900', fontSize: 11}}>
      Samsung TV's, Washing machines, Micro Ovens, Refrigerators can
      be repaired by our authorized Samsung Company Engineer. This
      is a home Service you can send your request for further details/services.
    </Text>
  </View>

  <View style={[styles.products, { marginTop: 5, marginBottom: 5, justifyContent: 'flex-end', marginTop: 30 }]}>
    <Text style={{ color: '#0076ba', fontWeight: '900', fontSize: 11 }}>Add to Wishlist</Text>
    <Text style={{ color: 'red', fontWeight: '900', marginLeft: 20, fontSize: 11 }}>Request Service</Text>
  </View>
</View>

        </>)
    }
    export default Service;