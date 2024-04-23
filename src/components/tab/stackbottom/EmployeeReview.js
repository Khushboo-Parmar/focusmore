import React, { useEffect } from "react";
import { Text, View, Image, ScrollView } from "react-native";
import AwesomeIcon from "react-native-vector-icons/FontAwesome5";
import SetReviews from "./SetReview";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const EmployeeReview = (props) => {
    const [data, setData] = React.useState([]);
  
    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = await AsyncStorage.getItem('token');
                if (token) {
                    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                    const response = await axios.post('https://focusmore.codelive.info/api/get-employee-service-ratings', {
                        "employee_id":37,
                     
                    });
                    setData(response.data.data);
                    console.log('data= ', data);
                    console.log('data type= ', data[0].type);
                }
            } catch (error) {
                console.error('Error fetching Reviews:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                <View>
                    <View style={{
                        backgroundColor: "#73fdea", height: 43, display: "flex",
                        alignItems: "center", justifyContent: "space-between", flexDirection: "row"
                    }}>
                        <View style={{ display: "flex", alignItems: "center", flexDirection: "row", marginHorizontal: 20 }}>
                            <AwesomeIcon name="clipboard" color="black" size={20} marginLeft={5} />
                            <Text style={{ color: "black", marginRight: 28, fontSize: 18, marginLeft: 2 }}>Review</Text>
                        </View>
                        <AwesomeIcon name="search" color="white" size={20} marginRight={5} />
                    </View>

                    {data.map((review) => (

                        <View style={{ marginTop: 20, borderBottomWidth: 2, borderBottomColor: "#929292" }}>

                            <View style={{ paddingHorizontal: 10 }}>

                                <View style={{ paddingHorizontal: 10, display: "flex", alignContent: "center", justifyContent: "space-between", flexDirection: "row", marginRight: 8 }}>
                                    <Text style={{ color: "black", marginLeft: 12 }}>
                                        {/* Best Electronic shop */}
                                        {/* {review.shop_ratings.name} */}
                                        {review.review}

                                    </Text>
                                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: 80 }}>
                                        {/* <Text>{review.rating}</Text> */}
                                        {[...Array(review.rating)].map((_, index) => (
                                            <AwesomeIcon key={index} name="star" color="yellow" size={10} />
                                        ))}

                                    </View>
                                </View>
                                <View style={{ paddingBottom: 10, display: "flex", alignContent: "center", marginLeft: 40 }}>
                                    <Text style={{ fontSize: 12, color: 'black' }}> Ramesh / Ameerpet</Text>
                                </View>
                                <View>
                                    <Text style={{ marginBottom: 10, fontSize: 12, color: 'black' }}>
                                        Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among
                                    </Text>
                                </View>
                            </View>

                        </View>

                    ))}


                </View>
            </ScrollView>


            <View>
                <SetReviews props={props} />
            </View>


        </View>
    )
}
export default EmployeeReview;