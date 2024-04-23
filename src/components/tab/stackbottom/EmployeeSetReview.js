import React, { useState } from "react";
import { Text, View, TextInput } from "react-native";
import AwesomeIcon from "react-native-vector-icons/FontAwesome5";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from "react-native-gesture-handler";
import axios from 'axios';
import Toast from 'react-native-toast-message';


const EmployeeSetReviewjs = ({ props }) => {
  const [rating, setRating] = useState(0);
  const [reviewTitle, setReviewTitle] = useState("");
  const [data, setData] = React.useState(null);
  const handleRatingClick = (value) => {
    if (value === rating) {
      setRating(0);
    } else {
      setRating(value);
    }
  };


  const handelsumbit = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        // const response = await fetch('https://focusmore.codelive.info/api/addrating', {
        const response = await fetch('https://focusmore.codelive.info/api/add-employee-service-rating', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({
              rating: rating,
              employee_id:37,
              review: reviewTitle
          }),
    
        }
      
    
    );
    console.log('reviewTitle=', reviewTitle);
    console.log('rating=', rating);
    console.log('props.route.params.params.params?.id=', props.route.params.params.params?.id);

        const responseData = await response.json();
        setData(responseData.data);
        if (responseData.status <= 200) {
          Toast.show({
            type: 'success',
            text1: `${responseData.message} 🚀`
          })
        } else {
          Toast.show({
            type: 'error',
            text1: `${responseData.details?.review} 📦`,
          });
        }
      }
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  }
  return (
    <View>
      <View style={{ marginTop: 20 }}>
        <View
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <TextInput
            onChangeText={(e) => { setReviewTitle(e) }}
            style={{
              borderRadius: 7,
              backgroundColor: "#d6d5d5",
              width: 200,
              marginLeft: 10,
              padding: 5,
              color:'black'
            }}
            placeholder="Review Title"
          />
          <View
            style={{
              borderRadius: 7,
              backgroundColor: "#d6d5d5",
              width: 120,
              marginRight: 10,
              padding: 6,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: 80,
                marginLeft: 10,
                alignItems: 'center'
              }}
            >
              {[1, 2, 3, 4, 5].map((index) => (
                <AwesomeIcon
                  key={index}
                  name="star"
                  color={rating >= index ? "yellow" : "#929292"}
                  size={10}
                  onPress={() => handleRatingClick(index)}
                />
              ))}
            </View>
          </View>
        </View>
        <TextInput
          style={{
            backgroundColor: "#d6d5d5",
            width: 375,
            height: 80,
            borderRadius: 10,
            margin: 8,
            paddingLeft: 20,
            fontSize: 17,
            color:'black',
          }}
          multiline={true}
          numberOfLines={4}
        />
        <View
          style={{
            backgroundColor: "#00a2ff",
            width: 80,
            height: 30,
            // marginLeft: 293,
            // marginTop: 10,
            borderRadius: 10,
            // position: 'absolute',
            // bottom: 8,
            // right: 0
            // padding:5,
            alignSelf:'center',
          }}
        >
          <TouchableOpacity
            onPress={handelsumbit}
            style={{
              color: "white",
              fontSize: 18,
              textAlign: "center",
             
              // lineHeight: 25,
            }}
          >
            <Text style={{ textAlign: 'center' }}>Post</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default EmployeeSetReviewjs;
