import React, { useState, useEffect } from "react";
import { Text, View, Image } from "react-native";
// import LogoImg from "../imagestab/blog.png";
import AwesomeIcon from "react-native-vector-icons/FontAwesome5";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const Experience = () => {

    const [experienceData, setExperienceData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const token = await AsyncStorage.getItem('token');
            if (token) {
              axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
              const response = await axios.post('https://focusmore.codelive.info/api/get-employee-experience', {
                employee_id: 21,
              });
        
              setExperienceData(response.data.data);
          
            } else {
              console.error('Token not found');
            }
          } catch (error) {
            console.error('Error fetching experience data:', error);
          }
        };
        
        fetchData();
    }, []);
    

    return (

        <View style={{ backgroundColor: "#f2f2f2", width: 400, height: 800 }}>

            <View>


                <View style={{
                    backgroundColor: "#73fdea", height: 43, display: "flex",
                    alignItems: "center", justifyContent: "space-between", flexDirection: "row"
                }}>


                    <View style={{ display: "flex", alignItems: "center", flexDirection: "row" }}>
                        <AwesomeIcon name="briefcase" color="#d6d5d5" marginLeft={5} marginRight={5} size={20} />
                        <Text style={{ color: "black", marginRight: 3, fontSize: 15, marginLeft: 2 }}>Experience</Text>

                    </View>
                    <AwesomeIcon name="search" color="#f2f2f2" marginRight={15} size={20} />

                </View>

                <View style={{ padding: 12 }}>
                    <Text style={{ fontWeight: '800', color: "red", fontSize: 13 }}>
                        Experience
                    </Text>



                    {experienceData.map((experience, index) => (         

                    <View>
                        
                        <View style={{ display: "flex", alignItems: "center", flexDirection: "row", marginTop: 20, margin: 5 }}>
                            <Text style={{ fontWeight: '800', color: "#01a2ff", fontSize: 10 }}>
                                Description:
                            </Text>
                            <Text style={{ marginLeft: 10, fontWeight: '800', color: "black", fontSize: 10 }}>
                                {/* 15 Year Experience from amazone as a cab driver */}
                                {experience["description\t"]}
                            </Text>
                        </View>

                        <View style={{ display: "flex", alignItems: "center", flexDirection: "row", margin: 5 }}>
                            <Text style={{ fontWeight: '800', color: "#01a2ff", fontSize: 10, paddingRight: 40 }}>
                                Other
                            </Text>
                            <Text style={{ marginLeft: 10, fontWeight: '800', color: "black", fontSize: 10 }}>
                            {experience.others}
                            </Text>
                        </View>
                    </View>
                     ))}
                </View>

                <View style={{ display: "flex", alignItems: "end", justifyContent: "center", flexDirection: "row", marginTop: 20, marginLeft: 250 }}>

                    <AwesomeIcon name="user" color="#d6d5d5" marginRight={5} size={15} />
                    <Text style={{ fontWeight: '800', borderBottomWidth: 2, color: "red", borderBottomColor: "red", fontSize: 10 }}>Request Service</Text>
                </View>

            </View>
        </View>
    )
}
export default Experience;