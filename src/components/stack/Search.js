

// / SearchData.js 
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const SearchData = ({ data }) => {
    const advertiseData = data;
    const navigation = useNavigation();

    // console.warn(advertiseData?.shops[0].id)
    return (

        <View style={{ margin: '0 auto', display: "flex", alignItems: "center", flexDirection: "row", flexWrap: "wrap" }}>
            {advertiseData || advertiseData?.length >= 1 ? (
                advertiseData?.shops?.map((item, index) => (

                    <TouchableOpacity onPress={() =>
                        navigation.navigate('BottomNavPage', {
                            screen: 'StackAndBottom',
                            params: {
                                screen: 'DetailPage',
                                params: { id: advertiseData?.shops[index]?.id }
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
                <Text>No Data Found</Text>
            )}
        </View>

    );
};
export default SearchData;