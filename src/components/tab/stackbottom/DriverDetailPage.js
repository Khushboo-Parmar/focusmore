
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator } from 'react-native-paper';
import React, { useEffect, useState } from "react";
import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import { fetchAllData } from "../../stack/handeldetailpage/server";
import { useNavigation } from '@react-navigation/native';
import AwesomeIcon from "react-native-vector-icons/FontAwesome5";
import Icon from 'react-native-vector-icons/AntDesign';
import { Picker } from '@react-native-picker/picker';

const DriverDetailPage = ({route}) => {
    const { employee } = route.params;
console.warn('employee.idddddd=',employee.id);
    const [detailData, setDetailData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [otherdata, setOtherdata] = useState(null);
    const navigation = useNavigation();
    const [languages, setLanguages] = useState([]);
    const [selectedLanguage, setSelectedLanguage] = useState(null); 
    
    const [showPicker, setShowPicker] = useState(false);


    const togglePicker = () => {
        setShowPicker(!showPicker);
    };

    useEffect(() => {
        const fetchLanguages = async () => {
            const token = await AsyncStorage.getItem('token');
            try {
                const result = await fetch('https://focusmore.codelive.info/api/get-languages', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });
                const response = await result.json();
                setLanguages(response.data);
                // Set default selected language, e.g., the first language from the list
                setSelectedLanguage(response.data[0]?.name || null);
            } catch (error) {
                console.log('Error fetching languages:', JSON.stringify(error));
                throw error;
            }
        };
    
        fetchLanguages();
    }, []);
    

    useEffect(() => {
        const fetchData = async () => {
            const token = await AsyncStorage.getItem('token');
            try {
    
                const result = await fetch(`https://focusmore.codelive.info/api/get-employees-detail/${employee.employee_id}`
                    , {
                        method: 'POST',
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            "latitude": "22.9676",
                            "longitude": "76.0534"
                        }),

                    });
                const response = await result.json();
                setDetailData(response.data)
                setLoading(false)
                // console.warn('Driver detailspage=', response)
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
    // console.warn(otherdata)

    if (!detailData) {
        return (
            <View>
                <Text>No data available</Text>
            </View>
        );
    }
    return (
        <ScrollView>

            <View style={{ backgroundColor: "#f2f2f2", flex: 1 }}>
                <View style={{ paddingHorizontal: 10, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row" }}>
                    <Text style={{ color: "black", marginRight: 3, fontSize: 12, marginLeft: 2, fontWeight: '600' }}>
                        {/* Driver */}
                    </Text>

                    <Icon name="search1" size={22} color="#00a2ff" />
                </View>

                <View>
                    <Image source={{ uri: 'https://www.shutterstock.com/shutterstock/photos/373602469/display_1500/stock-photo-geneva-switzerland-september-interior-of-migros-supermarket-migros-is-switzerland-s-373602469.jpg' }}
                        style={{ width: 400, height: 150, marginRight: 10 }} />
                </View>

                <View style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row", padding:5 }}>
                    <View >
                        <Text style={{ paddingLeft: 8, fontSize: 20, color: "black" }}>{detailData.info?.name}</Text>
                        <Text style={{ paddingLeft: 1, color: 'black', fontSize: 12 }}> Distance : {detailData?.info?.distance}</Text>
                    </View>
                    <Image source={{
                        uri: detailData?.info?.image_path
                    }} style={{ width: 80, height: 80, marginRight: 10, borderRadius: 50, borderWidth: 1, borderColor: "#f2f2f2", marginTop: -90 }} />

                    <View style={{ margin: 5, display: "flex", alignItems: "center", justifyContent: "center" }}>

                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: 80 }}>
                            <AwesomeIcon name="star" color="yellow" size={10} />
                            <AwesomeIcon name="star" color="yellow" size={10} />
                            <AwesomeIcon name="star" color="yellow" size={10} />
                            <AwesomeIcon name="star" color="yellow" size={10} />
                            <AwesomeIcon name="star" color="#929292" size={10} />

                        </View>
                        <Text style={{ fontSize: 14, color: "#929292", borderBottomWidth: 1 }}>Review:  {detailData.info?.review}</Text>
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

                <TouchableOpacity onPress={() => { navigation.navigate('Experience', { id: detailData.info?.id }); }}>
                    <View style={{ borderBottomWidth: 1, borderBottomColor: "#dddcdc", borderTopWidth: 1, borderTopColor: "#dddcdc", width: 400, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row" }}>
                        <View style={{ paddingVertical: 5, display: "flex", alignItems: "center", flexDirection: "row", width: 200, paddingHorizontal: 10 }} >

                            <AwesomeIcon name="briefcase" color="#8c8c8c" size={15} />
                            <Text style={{ fontSize: 13, color: "black", marginLeft: 3 }}>Experience</Text>
                        </View>

                        <View style={{ marginRight: 30, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row", width: 80 }}>
                            <Text style={{ fontSize: 13, color: "black" }}>{detailData.other?.experience}</Text>
                            <Icon name="right" size={10} color="#000" />
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { navigation.navigate('EmployeeServices', { id: detailData.info?.id }) }} style={{ borderBottomWidth: 1, borderBottomColor: "#dddcdc", width: 400, height: 25, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row" }}>
                    <View style={{ paddingVertical: 5, display: "flex", alignItems: "center", flexDirection: "row", width: 200, paddingHorizontal: 10 }} >

                        <AwesomeIcon name="dribbble" color="#8c8c8c" size={15} />
                        <Text style={{ fontSize: 13, color: "black", marginLeft: 3 }}>Service</Text>
                    </View>

                    <View style={{ marginRight: 30, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row", width: 80 }}>
                        <Text style={{ fontSize: 13, color: "black" }}>{detailData.other?.services}</Text>
                        <Icon name="right" size={10} color="#000" />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { navigation.navigate('ServiceGallery') }} style={{ borderBottomWidth: 1, borderBottomColor: "#dddcdc", width: 400, height: 25, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row" }}>
                    <View style={{ display: "flex", alignItems: "center", flexDirection: "row", width: 200, paddingHorizontal: 10 }} >

                        <AwesomeIcon name="image" color="#8c8c8c" size={15} />
                        <Text style={{ fontSize: 13, color: "black", marginLeft: 3 }}>Gallery</Text>
                    </View>

                    <View style={{ marginRight: 30, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row", width: 80 }}>
                        <Text style={{ fontSize: 13, color: "black" }}>{detailData.other?.gallery}</Text>
                        <Icon name="right" size={10} color="#000" />
                    </View>
                </TouchableOpacity>


                <View style={{ borderBottomWidth: 1, borderBottomColor: "#dddcdc", width: 400, height: 25, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row" }}>
            <View style={{ display: "flex", alignItems: "center", flexDirection: "row", width: 200, paddingHorizontal: 10 }} >
                <AwesomeIcon name="language" color="#8c8c8c" size={15} />
                <Text style={{ fontSize: 13, color: "black", marginLeft: 3 }}>Language</Text>
            </View>
            
            <TouchableOpacity onPress={togglePicker}>
                <View style={{ marginRight: 30, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row", width: 80 }}>
                    <Text style={{ fontSize: 13, color: "black" }}>
                        {/* {selectedLanguage} */}
                        {detailData.other?.Languages}
                        </Text>
                    <Icon name={showPicker ? "down" : "right"} size={10} color="#000" />
                </View>
            </TouchableOpacity>
        </View>

        {showPicker && (
            <View style={{ width: 150 }}>
                <Picker
                    selectedValue={selectedLanguage}
                    style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue) => setSelectedLanguage(itemValue)}
                >
                    {languages.map((language) => (
                        <Picker.Item key={language.id} label={language.name} value={language.name} />
                    ))}
                </Picker>
            </View>
        )}




        

                <View style={{ borderBottomWidth: 1, borderBottomColor: "#dddcdc", width: 400, height: 25, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row" }}>
                    <TouchableOpacity onPress={() => { navigation.navigate('SocialMedia') }}>
                        <View style={{ display: "flex", alignItems: "center", flexDirection: "row", width: 200, paddingHorizontal: 10 }} >
                            <AwesomeIcon name="share" color="#8c8c8c" size={15} />
                            <Text style={{ fontSize: 13, color: "black", marginLeft: 3 }}>Share</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={{ marginRight: 30, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row", width: 80 }}>
                        <Text style={{ fontSize: 13, color: "black" }}>{detailData.other?.Share}</Text>
                        <Icon name="right" size={10} color="#000" />
                    </View>
                </View>



                <View style={{ borderBottomWidth: 1, borderBottomColor: "#dddcdc", width: 400, height: 25, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row" }}>
                    <TouchableOpacity onPress={() => { navigation.navigate('Certificates') }}>
                        <View style={{ display: "flex", alignItems: "center", flexDirection: "row", width: 200, paddingHorizontal: 10 }} >

                            <AwesomeIcon name="clipboard" color="#8c8c8c" size={15} />
                            <Text style={{ fontSize: 13, color: "black", marginLeft: 3 }}>Certificates</Text>


                        </View>
                    </TouchableOpacity>

                    <View style={{ marginRight: 30, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row", width: 80 }}>
                        <Text style={{ fontSize: 13, color: "black" }}>{detailData.other?.Certificates}</Text>
                        <Icon name="right" size={10} color="#000" />
                    </View>
                </View>


                <TouchableOpacity onPress={() => { navigation.navigate('ServiceTiming', { id: detailData.info?.id }) }}>
                    <View style={{ borderBottomWidth: 1, borderBottomColor: "#dddcdc", borderTopWidth: 1, borderTopColor: "#dddcdc", width: 400, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row" }}>
                        <View style={{ paddingVertical: 5, display: "flex", alignItems: "center", flexDirection: "row", width: 200, paddingHorizontal: 10 }} >

                            <AwesomeIcon name="briefcase" color="#8c8c8c" size={15} />
                            <Text style={{ fontSize: 13, color: "black", marginLeft: 3 }}>Service Timing</Text>
                        </View>

                        <View style={{ marginRight: 30, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row", width: 80 }}>
                            <Text style={{ fontSize: 13, color: "black" }}>{detailData.other?.ServiceTimings}</Text>
                            <Icon name="right" size={10} color="#000" />
                        </View>
                    </View>
                </TouchableOpacity>

                <View style={{ borderBottomWidth: 1, borderBottomColor: "#dddcdc", width: 400, height: 25, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row" }}>
                    <TouchableOpacity onPress={() => { navigation.navigate('EmployeeReview', { screen: 'StackAndBottom', params: { screen: 'Reviews', params: { id: detailData.info?.id } } }) }}>
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
            </View>
        </ScrollView>
    );
}
export default DriverDetailPage;