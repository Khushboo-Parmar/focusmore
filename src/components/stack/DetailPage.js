import React, { useEffect, useState } from "react";
import { Text, View, Image } from "react-native";
import { fetchAllData } from "./handeldetailpage/server";
import { useNavigation } from '@react-navigation/native';
import AwesomeIcon from "react-native-vector-icons/FontAwesome5";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Details(props) {
    const [detailData, setDetailData] = useState(props.route.params);
    const [loading, setLoading] = useState(true);
    const [otherdata, setOtherdata] = useState(null);
    const navigation = useNavigation();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { products, services } = await fetchAllData(props.route.params.data[0]?.id);
                setOtherdata({ products, services });
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <View style={{ justifyContent: 'center' }}>
                <Text>Loading...</Text>
            </View>
        );
    }

    if (!detailData) {
        return (
            <View>
                <Text>No data available</Text>
            </View>
        );
    }
    return (
        <View>

            <View style={{ backgroundColor: "#f2f2f2", width: 400, height: 800 }}>



                <View style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row" }}>
                    {/* <Text style={{ color: "black", marginRight: 3, fontSize: 10, marginLeft: 2 }}>Driver</Text> */}
                    <Text style={{ color: "black", marginRight: 3, fontSize: 10, marginLeft: 2 }}>Driver</Text>

                    <Image source={{}} style={{ width: 30, height: 30, marginRight: 10 }} />
                </View>

                <View>
                    <Image source={{ uri: 'https://www.shutterstock.com/shutterstock/photos/373602469/display_1500/stock-photo-geneva-switzerland-september-interior-of-migros-supermarket-migros-is-switzerland-s-373602469.jpg' }} style={{ width: 400, height: 150, marginRight: 10 }} />
                </View>

                <View style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row" }}>
                    <View >
                        <Text style={{ paddingLeft: 8, fontSize: 22, color: "black" }}>{detailData.data[0]?.name}</Text>
                        <Text style={{ paddingLeft: 12, color: 'black', fontSize: 12 }}> Distance 0.5 kms</Text>
                    </View>

                    <Image source={{ uri: 'https://a.storyblok.com/f/191576/1200x800/215e59568f/round_profil_picture_after_.webp' }} style={{ width: 80, height: 80, marginRight: 10, borderRadius: 50, borderWidth: 1, borderColor: "#f2f2f2", marginTop: -90 }} />

                    <View style={{ margin: 5, display: "flex", alignItems: "center", justifyContent: "center" }}>

                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: 80 }}>
                            <AwesomeIcon name="star" color="yellow" size={8} />
                            <AwesomeIcon name="star" color="yellow" size={8} />
                            <AwesomeIcon name="star" color="yellow" size={8} />
                            <AwesomeIcon name="star" color="yellow" size={8} />
                            <AwesomeIcon name="star" color="#929292" size={8} />

                        </View>
                        <Text style={{ fontSize: 12, color: "black", borderBottomWidth: 1 }}>5Reviews</Text>
                        <View>
                            <Text style={{ marginBottom: -10, marginTop: 5, paddingLeft: 20, color: "white", padding: 8, backgroundColor: "#61d836", width: 110, alignItems: "center", fontSize: 18 }}>
                                Directions
                            </Text>
                        </View>
                    </View>
                </View>

                <View>
                    <Image source={{}} style={{ width: 400, height: 140, marginRight: 10 }} />
                </View>


                <View style={{ paddingHorizontal: 10 }}>
                    <Text style={{ fontSize: 19, color: "black", marginTop: 5 }}>
                        About
                    </Text>
                    <Text style={{ fontSize: 10, color: "black", marginBottom: 35 }}>
                        Paragraphs are the building blocks of papers. Many  define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among
                    </Text>
                </View>

                <TouchableOpacity onPress={() => { navigation.navigate('ShopProducts', { id: detailData.data[0]?.id }); }}>
                    <View style={{ borderBottomWidth: 1, borderBottomColor: "#929292", borderTopWidth: 1, borderTopColor: "#929292", width: 400, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row" }}>
                        <View style={{ display: "flex", alignItems: "center", flexDirection: "row", width: 200, paddingHorizontal: 10 }} >

                            <AwesomeIcon name="briefcase" color="#929292" size={15} />
                            <Text style={{ fontSize: 13, color: "black", marginLeft: 3 }}>Products</Text>
                        </View>

                        <View style={{ marginRight: 30, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row", width: 80 }}>
                            <Text style={{ fontSize: 13, color: "black" }}>{otherdata?.products}</Text>
                            <Text style={{ fontSize: 15, color: "black" }}>&</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { navigation.navigate('Services') }} style={{ borderBottomWidth: 1, borderBottomColor: "#929292", width: 400, height: 25, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row" }}>
                    <View style={{ display: "flex", alignItems: "center", flexDirection: "row", width: 200, paddingHorizontal: 10 }} >

                        <AwesomeIcon name="dribbble" color="#929292" size={15} />
                        <Text style={{ fontSize: 13, color: "black", marginLeft: 3 }}>Service</Text>
                    </View>

                    <View style={{ marginRight: 30, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row", width: 80 }}>
                        <Text style={{ fontSize: 13, color: "black" }}>{otherdata?.services}</Text>
                        <Text style={{ fontSize: 15, color: "black" }}>&</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { navigation.navigate('Gallery') }} style={{ borderBottomWidth: 1, borderBottomColor: "#929292", width: 400, height: 25, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row" }}>
                    <View style={{ display: "flex", alignItems: "center", flexDirection: "row", width: 200, paddingHorizontal: 10 }} >

                        <AwesomeIcon name="image" color="#929292" size={15} />
                        <Text style={{ fontSize: 13, color: "black", marginLeft: 3 }}>Gallery</Text>
                    </View>

                    <View style={{ marginRight: 30, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row", width: 80 }}>
                        <Text style={{ fontSize: 13, color: "black" }}>02</Text>
                        <Text style={{ fontSize: 15, color: "black" }}>&</Text>
                    </View>
                </TouchableOpacity>

                <View style={{ borderBottomWidth: 1, borderBottomColor: "#929292", width: 400, height: 25, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row" }}>
                    <View style={{ display: "flex", alignItems: "center", flexDirection: "row", width: 200, paddingHorizontal: 10 }} >

                        <AwesomeIcon name="language" color="#929292" size={15} />
                        <Text style={{ fontSize: 13, color: "black", marginLeft: 3 }}>Language</Text>
                    </View>

                    <View style={{ marginRight: 30, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row", width: 80 }}>
                        <Text style={{ fontSize: 13, color: "black" }}>34</Text>
                        <Text style={{ fontSize: 15, color: "black" }}>&</Text>
                    </View>
                </View>

                <View style={{ borderBottomWidth: 1, borderBottomColor: "#929292", width: 400, height: 25, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row" }}>
                    <View style={{ display: "flex", alignItems: "center", flexDirection: "row", width: 200, paddingHorizontal: 10 }} >
                        <TouchableOpacity onPress={() => { navigation.navigate('SocialMedia') }}>
                            <AwesomeIcon name="share" color="#929292" size={15} />
                            <Text style={{ fontSize: 13, color: "black", marginLeft: 3 }}>Share</Text>
                        </TouchableOpacity>
                    </View>


                </View>


                <View style={{ borderBottomWidth: 1, borderBottomColor: "#929292", width: 400, height: 25, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row" }}>
                    <View style={{ display: "flex", alignItems: "center", flexDirection: "row", width: 200, paddingHorizontal: 10 }} >
                        <TouchableOpacity onPress={() => { navigation.navigate('Certificates') }}>
                            <AwesomeIcon name="clipboard" color="#929292" size={15} />
                            <Text style={{ fontSize: 13, color: "black", marginLeft: 3 }}>Certificates</Text>

                        </TouchableOpacity>
                    </View>

                    <View style={{ marginRight: 30, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row", width: 80 }}>
                        <Text style={{ fontSize: 13, color: "black" }}>01</Text>
                        <Text style={{ fontSize: 15, color: "black" }}>&</Text>
                    </View>
                </View>

                <View style={{ borderBottomWidth: 1, borderBottomColor: "#929292", width: 400, height: 25, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row" }}>
                    <View style={{ display: "flex", alignItems: "center", flexDirection: "row", width: 200, paddingHorizontal: 10 }} >
                        <TouchableOpacity onPress={() => { navigation.navigate('ServiceTiming') }}>
                            <AwesomeIcon name="briefcase" color="#929292" size={15} />
                            <Text style={{ fontSize: 13, color: "black", marginLeft: 3 }}>Service Timings</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginRight: 30, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row", width: 80 }}>
                        <Text style={{ fontSize: 13, color: "black" }}>06</Text>
                        <Text style={{ fontSize: 15, color: "black" }}>&</Text>
                    </View>
                </View>

                <View style={{ borderBottomWidth: 1, borderBottomColor: "#929292", width: 400, height: 25, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row" }}>
                    <View style={{ display: "flex", alignItems: "center", flexDirection: "row", width: 200, paddingHorizontal: 10 }} >
                        <TouchableOpacity onPress={() => { navigation.navigate('Reviews') }}>
                            <AwesomeIcon name="square" color="#929292" size={15} />
                            <Text style={{ fontSize: 13, color: "black", marginLeft: 3 }}>Reviews</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginRight: 30, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row", width: 80 }}>
                        <Text style={{ fontSize: 13, color: "black" }}>34</Text>
                        <Text style={{ fontSize: 15, color: "black" }}>&</Text>
                    </View>
                </View>




            </View>
        </View>
    );
}