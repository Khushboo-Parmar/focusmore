import React, { useEffect } from "react";
import { Text, View, Image } from "react-native";
import AwesomeIcon from "react-native-vector-icons/FontAwesome5";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios';
const ServiceTiming = (props) => {
  const [data, setData] = React.useState(null)
  console.warn(props.route.params?.id)
  useEffect(() => {
    const fetchData = async () => {
      try {

        const token = await AsyncStorage.getItem('token');
        if (token) {

          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
          const response = await fetch('https://focusmore.codelive.info/api/get-shop-business-hours', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
              type: 0,
              shop_id: props.route.params?.id
            }),
          });

          const responseData = await response.json();
          setData(responseData.data);
          console.warn(responseData.data)
        }
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, [props.route.params?.id])
  return (

    <View>

      <View>


        <View>

          {data?.length > 1 ? (
            <>
              {data.map((i) => (
                <View style={{ paddingHorizontal: 10, paddingVertical: 15, display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "#d6d5d5" }}>
                  <Text style={{ fontWeight: '500', fontSize: 21, color: "black" }}>
                    {i.day}
                  </Text>

                  <Text style={{ fontSize: 15, color: "black" }}>
                    {i.is_closed === 1 ? `Closed` : `${i.start_time}am to ${i.end_time}pm`}
                  </Text>
                </View>
              ))}
            </>
          )
            : <Text style={{ alignSelf: 'center', marginTop: 200, color: 'black' }}>No Time is  Available</Text>}
        </View>

      </View>
    </View>


  )
}
export default ServiceTiming;