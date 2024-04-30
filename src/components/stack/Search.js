
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const SearchData = ({ data }) => {
    const advertiseData = data;
    const navigation = useNavigation();

    console.warn(advertiseData)
    return (
        <>

            <Text style={styles.nearbyboxr}>Shop</Text>
            <View style={{ margin: '0 auto', display: "flex", alignItems: "center", flexDirection: "row", flexWrap: "wrap" }}>
                {advertiseData || advertiseData?.length >= 1 ? (
                    advertiseData?.shops?.map((item, index) => (

                        <TouchableOpacity onPress={() =>
                            navigation.navigate('BottomNavPage', {
                                screen: 'StackAndBottom',
                                params: {
                                    screen: 'DetailPage',
                                    params: { data: [{ id: advertiseData?.shops[index]?.id }] }
                                }
                            })}>
                            <View key={index} style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
                                <Image source={{ uri: "https://i.guim.co.uk/img/media/dd2550cfdaea6be71f94fc7fa2bf81b7d3961005/0_382_5760_3458/master/5760.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=552cc915c846985effe7c44b3719720e" }} style={{ width: 90, height: 90, margin: 10 }} />
                                <Text style={{ fontSize: 10, color: "black", fontWeight: '500' }}>
                                    {item?.name}
                                </Text>
                                <Text style={{ fontSize: 10, color: "black", fontWeight: '500' }}>
                                    {item?.rating}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    ))
                ) : (
                    <Text style={styles.heading}>No Data Found</Text>
                )}
            </View>


            <Text style={styles.nearbyboxr}>Classifields</Text>
            <View style={{ margin: '0 auto', display: "flex", alignItems: "center", flexDirection: "row", flexWrap: "wrap" }}>
                {advertiseData || advertiseData?.length >= 1 ? (
                    advertiseData?.classifields?.map((item, index) => (

                        <TouchableOpacity onPress={() =>
                            navigation.navigate('BottomNavPage', {
                                screen: 'StackAndBottom',
                                params: {
                                    screen: 'DetailPage',
                                    // params: { id: advertiseData?.classifields[index]?.id }
                                    params: { data: [{ id: advertiseData?.classifields[index]?.id }] }
                                }
                            })}>
                            <View key={index} style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
                                <Image source={{ uri: "https://i.guim.co.uk/img/media/dd2550cfdaea6be71f94fc7fa2bf81b7d3961005/0_382_5760_3458/master/5760.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=552cc915c846985effe7c44b3719720e" }} style={{ width: 90, height: 90, margin: 10 }} />
                                <Text style={{ fontSize: 10, color: "black", fontWeight: '500' }}>
                                    {item?.title}
                                </Text>
                                <Text style={{ fontSize: 10, color: "black", fontWeight: '500' }}>
                                    {item?.distance}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    ))
                ) : (
                    <Text style={styles.heading}>No Data Found</Text>
                )}
            </View>


            <Text style={styles.nearbyboxr}>Services</Text>
            <View style={{ margin: '0 auto', display: "flex", alignItems: "center", flexDirection: "row", flexWrap: "wrap" }}>
                {advertiseData || advertiseData?.length >= 1 ? (
                    advertiseData?.services?.map((item, index) => (

                        <TouchableOpacity onPress={() =>
                            navigation.navigate('BottomNavPage', {
                                screen: 'StackAndBottom',
                                params: {
                                    screen: 'DetailPage',
                                    // params: { id: advertiseData?.classifields[index]?.id }
                                    params: { data: [{ id: advertiseData?.services[index]?.id }] }
                                }
                            })}>
                            <View key={index} style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
                                <Image source={{ uri: "https://i.guim.co.uk/img/media/dd2550cfdaea6be71f94fc7fa2bf81b7d3961005/0_382_5760_3458/master/5760.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=552cc915c846985effe7c44b3719720e" }} style={{ width: 90, height: 90, margin: 10 }} />
                                <Text style={{ fontSize: 10, color: "black", fontWeight: '500' }}>
                                    {item?.name}
                                </Text>
                                <Text style={{ fontSize: 10, color: "black", fontWeight: '500' }}>
                                    {item?.rating}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    ))
                ) : (
                    <Text style={styles.heading}>No Data Found</Text>
                )}
            </View>
        </>

    );
};
export default SearchData;


const styles = StyleSheet.create({
    nearbyboxr: {
        backgroundColor: '#61d836',
        fontSize: 18,
        color: '#fff',
        width: 125,
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 7,
        paddingBottom: 7,
        textAlign: 'center',
        marginLeft: 20,
    },

    heading: {
        color: 'black',
    }
});