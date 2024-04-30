import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator } from 'react-native-paper';
import React, { useEffect, useState } from "react";
import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import { fetchAllData } from "../../stack/handeldetailpage/server";
import { useNavigation } from '@react-navigation/native';
import AwesomeIcon from "react-native-vector-icons/FontAwesome5";
import Icon from 'react-native-vector-icons/AntDesign';
import Share from 'react-native-share';
const DetailPage = (props) => {
    const [detailData, setDetailData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [otherdata, setOtherdata] = useState(null);
    const navigation = useNavigation();
    const { id } = props.route.params.data[0];

    console.warn("id =", props.route.params.data[0].id);

    useEffect(() => {
        const fetchData = async () => {
            const token = await AsyncStorage.getItem('token');
            try {
                const result = await fetch(`https://focusmore.codelive.info/api/shop/detail/${props.route.params.data[0].id}`, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "latitude": 22.6708,
                        "longitude": 71.5724,
                        "radius": 2222
                    })

                });
                const response = await result.json();
                setDetailData(response.data)
                setLoading(false)
                console.warn('detailspage=', response)
            } catch (error) {
                console.log('Error fetching products:', JSON.stringify(error));
                throw error;
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <View style={{ justifyContent: 'center' }}>
                <ActivityIndicator size="large" color="black" style={{ marginTop: 200 }} />
            </View>
        );
    }
    console.warn(otherdata)


    if (detailData?.length === 0) {
        return (
            <View>
                <Text style={{ color: 'black' }}>No data available</Text>
            </View>
        );
    }



    const handleShare = async () => {
        try {
            const shareOptions = {
                message: 'Check out this shop!',
                url: 'https://example.com', // Replace with the URL you want to share
            };
            await Share.open(shareOptions);
        } catch (error) {
            console.error('Error sharing:', error.message);
        }
    };

    return (
        <ScrollView style={{ marginBottom: 20 }}>

            <View style={{ backgroundColor: "#f2f2f2", flex: 1 }}>
                <View style={{ paddingHorizontal: 10, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row" }}>
                    <Text style={{ color: "black", marginRight: 3, fontSize: 12, marginLeft: 2, fontWeight: '600' }}>
                        {/* Driver */}
                        {detailData.title}
                    </Text>

                    <Icon name="search1" size={22} color="#00a2ff" />
                </View>

                <View>
                    <Image source={{ uri: 'https://www.shutterstock.com/shutterstock/photos/373602469/display_1500/stock-photo-geneva-switzerland-september-interior-of-migros-supermarket-migros-is-switzerland-s-373602469.jpg' }} style={{ width: 400, height: 150, marginRight: 10 }} />
                </View>

                <View style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row" }}>
                    <View >
                        <Text style={{ paddingLeft: 8, fontSize: 20, color: "black", width: 150 }}>{detailData.info?.name}</Text>
                        <Text style={{ paddingLeft: 12, color: 'black', fontSize: 12 }}> Distance 0.5 kms</Text>
                    </View>

                    <Image source={{ uri: 'https://a.storyblok.com/f/191576/1200x800/215e59568f/round_profil_picture_after_.webp' }} style={{ width: 80, height: 80, marginRight: 10, borderRadius: 50, borderWidth: 1, borderColor: "#f2f2f2", marginTop: -90 }} />

                    <View style={{ margin: 5, display: "flex", alignItems: "center", justifyContent: "center" }}>

                        {/* <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: 80 }}>
                            <AwesomeIcon name="star" color="yellow" size={10} />
                            <AwesomeIcon name="star" color="yellow" size={10} />
                            <AwesomeIcon name="star" color="yellow" size={10} />
                            <AwesomeIcon name="star" color="yellow" size={10} />
                            <AwesomeIcon name="star" color="#929292" size={10} />

                        </View> */}

                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: 80 }}>
                            {[...Array(detailData.info?.rating)].map((_, index) => (
                                <AwesomeIcon key={index} name="star" color="yellow" size={10} />
                            ))}
                            {[...Array(5 - detailData.info?.rating)].map((_, index) => (
                                <AwesomeIcon key={index} name="star" color="#929292" size={10} />
                            ))}
                        </View>
                        <Text style={{ fontSize: 14, color: "#929292", borderBottomWidth: 1 }}> {detailData.info?.rating} Reviews</Text>
                        <View>
                            <Text style={{ marginTop: 5, paddingLeft: 20, color: "white", padding: 8, backgroundColor: "#61d836", alignItems: "center", fontSize: 18, borderWidth: 1, borderRadius: 10, marginRight: 10, borderColor: 'none' }} onPress={() => { navigation.navigate('Location') }}>
                                Directions
                            </Text>
                        </View>
                    </View>
                </View>

                <View>
                    <Image source={{ uri: 'https://img.freepik.com/premium-vector/gps-map-navigator-concept-street-maps-directions-vector-illustration_230920-2779.jpg' }} style={{ width: 400, height: 140, marginRight: 10 }} />
                </View>


                <View style={{ paddingHorizontal: 10 }}>
                    <Text style={{ fontSize: 19, color: "black", marginTop: 5, fontWeight: '500' }}>
                        About
                    </Text>
                    <Text style={{ fontSize: 11, color: "black", marginBottom: 35 }}>
                        {detailData?.info?.description}
                    </Text>
                </View>

                <TouchableOpacity onPress={() => { navigation.navigate('Product', { id: detailData.info?.id }); }}>
                    <View style={{ borderBottomWidth: 1, borderBottomColor: "#dddcdc", borderTopWidth: 1, borderTopColor: "#dddcdc", width: 400, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row" }}>
                        <View style={{ paddingVertical: 5, display: "flex", alignItems: "center", flexDirection: "row", width: 200, paddingHorizontal: 10 }} >

                            <AwesomeIcon name="briefcase" color="#8c8c8c" size={15} />
                            <Text style={{ fontSize: 13, color: "black", marginLeft: 3 }}>Products</Text>
                        </View>

                        <View style={{ marginRight: 30, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row", width: 80 }}>
                            <Text style={{ fontSize: 13, color: "black" }}>{detailData.other?.Products}</Text>
                            <Icon name="right" size={10} color="#000" />
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { navigation.navigate('Services', { id: detailData.info?.id }) }} style={{ borderBottomWidth: 1, borderBottomColor: "#dddcdc", width: 400, height: 25, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row" }}>
                    <View style={{ paddingVertical: 5, display: "flex", alignItems: "center", flexDirection: "row", width: 200, paddingHorizontal: 10 }} >

                        <AwesomeIcon name="dribbble" color="#8c8c8c" size={15} />
                        <Text style={{ fontSize: 13, color: "black", marginLeft: 3 }}>Service</Text>
                    </View>

                    <View style={{ marginRight: 30, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row", width: 80 }}>
                        <Text style={{ fontSize: 13, color: "black" }}>{detailData.other?.Services}</Text>
                        <Icon name="right" size={10} color="#000" />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { navigation.navigate('ShopGallery', { id: detailData.info?.id }) }} style={{ borderBottomWidth: 1, borderBottomColor: "#dddcdc", width: 400, height: 25, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row" }}>
                    <View style={{ display: "flex", alignItems: "center", flexDirection: "row", width: 200, paddingHorizontal: 10 }} >

                        <AwesomeIcon name="image" color="#8c8c8c" size={15} />
                        <Text style={{ fontSize: 13, color: "black", marginLeft: 3 }}>Gallery</Text>
                    </View>

                    <View style={{ marginRight: 30, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row", width: 80 }}>
                        <Text style={{ fontSize: 13, color: "black" }}>{detailData.other?.Gallery}</Text>
                        <Icon name="right" size={10} color="#000" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.navigate('Offer', { id: detailData.info?.id }) }} style={{ borderBottomWidth: 1, borderBottomColor: "#dddcdc", width: 400, height: 25, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row" }}>
                    <View style={{ borderBottomWidth: 1, borderBottomColor: "#dddcdc", width: 400, height: 25, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row" }}>
                        <View style={{ display: "flex", alignItems: "center", flexDirection: "row", width: 200, paddingHorizontal: 10 }} >

                            <AwesomeIcon name="language" color="#8c8c8c" size={15} />
                            <Text style={{ fontSize: 13, color: "black", marginLeft: 3 }}>Offer</Text>
                        </View>

                        <View style={{ marginRight: 30, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row", width: 80 }}>
                            <Text style={{ fontSize: 13, color: "black" }}>{detailData.other?.Offers}</Text>
                            <Icon name="right" size={10} color="#000" />
                        </View>
                    </View>
                </TouchableOpacity>

                {/* <View style={{ borderBottomWidth: 1, borderBottomColor: "#dddcdc", width: 400, height: 25, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row" }}>
                    <TouchableOpacity onPress={() => { navigation.navigate('SocialMedia') }}>
                        <View style={{ display: "flex", alignItems: "center", flexDirection: "row", width: 200, paddingHorizontal: 10 }} >
                            <AwesomeIcon name="share" color="#8c8c8c" size={15} />
                            <Text style={{ fontSize: 13, color: "black", marginLeft: 3 }}>Share this shop</Text>
                        </View>
                    </TouchableOpacity>
                </View> */}
                <TouchableOpacity onPress={handleShare}>
                    <View style={{ borderBottomWidth: 1, borderBottomColor: "#dddcdc", width: 400, height: 25, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row" }}>
                        <View style={{ display: "flex", alignItems: "center", flexDirection: "row", width: 200, paddingHorizontal: 10 }} >
                            <AwesomeIcon name="share" color="#8c8c8c" size={15} />
                            <Text style={{ fontSize: 13, color: "black", marginLeft: 3 }}>Share this shop</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { navigation.navigate('Broucher', { id: detailData.info?.id }) }}>
                    <View style={{ borderBottomWidth: 1, borderBottomColor: "#dddcdc", borderTopWidth: 1, borderTopColor: "#dddcdc", width: 400, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row" }}>
                        <View style={{ paddingVertical: 5, display: "flex", alignItems: "center", flexDirection: "row", width: 200, paddingHorizontal: 10 }} >

                            <AwesomeIcon name="briefcase" color="#8c8c8c" size={15} />
                            <Text style={{ fontSize: 13, color: "black", marginLeft: 3 }}>Broucher</Text>
                        </View>

                        <View style={{ marginRight: 30, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row", width: 80 }}>
                            <Text style={{ fontSize: 13, color: "black" }}>{detailData.other?.Brochure}</Text>
                            <Icon name="right" size={10} color="#000" />
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.navigate('ServiceTiming', { id: detailData.info?.id }) }}>
                    <View style={{ borderBottomWidth: 1, borderBottomColor: "#dddcdc", borderTopWidth: 1, borderTopColor: "#dddcdc", width: 400, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row" }}>
                        <View style={{ paddingVertical: 5, display: "flex", alignItems: "center", flexDirection: "row", width: 200, paddingHorizontal: 10 }} >

                            <AwesomeIcon name="briefcase" color="#8c8c8c" size={15} />
                            <Text style={{ fontSize: 13, color: "black", marginLeft: 3 }}>Business Timing</Text>
                        </View>

                        <View style={{ marginRight: 30, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row", width: 80 }}>
                            <Text style={{ fontSize: 13, color: "black" }}>{detailData.other?.BusinesTimings}</Text>
                            <Icon name="right" size={10} color="#000" />
                        </View>
                    </View>
                </TouchableOpacity>

                <View style={{ borderBottomWidth: 1, borderBottomColor: "#dddcdc", width: 400, height: 25, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row" }}>
                    <TouchableOpacity onPress={() => { navigation.navigate('Reviews', { screen: 'StackAndBottom', params: { screen: 'Reviews', params: { id: detailData.info?.id } } }) }}>
                        <View style={{ display: "flex", alignItems: "center", flexDirection: "row", width: 200, paddingHorizontal: 10 }} >

                            <AwesomeIcon name="square" color="#8c8c8c" size={15} />
                            <Text style={{ fontSize: 13, color: "black", marginLeft: 3 }}>Reviews</Text>

                        </View>
                    </TouchableOpacity>
                    <View style={{ marginRight: 30, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row", width: 80 }}>
                        <Text style={{ fontSize: 13, color: "black" }}>{detailData.other?.Review}</Text>
                        <Icon name="right" size={10} color="#000" />
                    </View>
                </View>

                <TouchableOpacity onPress={() => { navigation.navigate('Employees', { id: detailData.info?.id }) }}>
                    <View style={{ borderBottomWidth: 1, borderBottomColor: "#dddcdc", borderTopWidth: 1, borderTopColor: "#dddcdc", width: 400, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row" }}>
                        <View style={{ paddingVertical: 5, display: "flex", alignItems: "center", flexDirection: "row", width: 200, paddingHorizontal: 10 }} >

                            <AwesomeIcon name="briefcase" color="#8c8c8c" size={15} />
                            <Text style={{ fontSize: 13, color: "black", marginLeft: 3 }}>Employees</Text>
                        </View>
                        <View style={{ marginRight: 30, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row", width: 80 }}>
                            <Text style={{ fontSize: 13, color: "black" }}>{detailData.other?.BusinesTimings}</Text>
                            <Icon name="right" size={10} color="#000" />
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { navigation.navigate('AddCategory', { id: detailData.info?.id }) }}>
                    <View style={{ borderBottomWidth: 1, borderBottomColor: "#dddcdc", borderTopWidth: 1, borderTopColor: "#dddcdc", width: 400, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row" }}>
                        <View style={{ paddingVertical: 5, display: "flex", alignItems: "center", flexDirection: "row", width: 200, paddingHorizontal: 10 }} >
                            <AwesomeIcon name="briefcase" color="#8c8c8c" size={15} />
                            <Text style={{ fontSize: 13, color: "black", marginLeft: 3 }}>Add category</Text>
                        </View>
                        <View style={{ marginRight: 30, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row", width: 80 }}>
                        </View>
                    </View>
                </TouchableOpacity>

            </View>
        </ScrollView>
    );
}
export default DetailPage;