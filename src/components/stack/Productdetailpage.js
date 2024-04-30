import { useEffect, useState } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text, View, Image, TouchableOpacity, TextInput, ScrollView, ActivityIndicator, StyleSheet } from "react-native";


export default function ProductDetail(props) {
    const [data, setData] = useState(null)
    // console.warn(props.route.params?.id)
    useEffect(() => {
        const fetchProductDetail = async () => {
            try {
                const token = await AsyncStorage.getItem('token');
                const response = await fetch(`https://focusmore.codelive.info/api/product/details/${props.route.params?.id}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
                const result = await response.json()
                setData(result.data)
                console.warn('RESULT', result)

            } catch (e) {
                console.warn(e)
            }
        }
        fetchProductDetail()
    }, [])

    return (
        <>
      {data != null  ? (
              <ScrollView>
              <View style={{ alignItems: 'center',marginVertical:20 }}>
                  <Image source={{ uri: data?.image }} style={{ width: 200, height: 200 }} />
              </View>
              <View>
                  <View style={{alignItems:'center'}}>
                      <Text style={{fontSize:20,marginVertical:10,fontWeight:'bold',color:'black'}}>{data?.name}</Text>
                      <Text style={{fontSize:13,textAlign:'center'}}>{data?.description}</Text>
                  </View>
                  <View>
                      <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderColor: 'grey', margin: 10, padding: 10 }}>
                          <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'black' }}>In Stock</Text>
                          <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'black' }}>{data?.in_stock}</Text>
                      </View>
                      <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderColor: 'grey', margin: 10, padding: 10 }}>
                          <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'black' }}>Rating</Text>
                          <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'black' }}>{data?.rating}</Text>
                      </View>
                      <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderColor: 'grey', margin: 10, padding: 10 }}>
                          <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'red'  }}>Purchase Price</Text>
                          <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'red' }}>{data?.purchase_price}</Text>
                      </View>
                      <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderColor: 'grey', margin: 10, padding: 10 }}>
                          <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'black' }}>Sell Price</Text>
                          <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'black' }}>{data?.sell_price}</Text>
                      </View>
                      <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderColor: 'grey', margin: 10, padding: 10 }}>
                          <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'green' }}>Discount Amount</Text>
                          <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'green' }}>{data?.discount_amount}</Text>
                      </View>
{data?.vendor_offer.length >=1 ? (
                          <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderColor: 'grey', margin: 10, padding: 10 }}>
                          <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'gold' }}>Offer</Text>
                          <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'gold' }}>{data?.vendor_offer[0]?.offer_data}</Text>
                      </View>
):('')}
                  </View>
              </View>
          </ScrollView>
      ):(<Text style={{alignItems:'center',justifyContent:'center',marginVertical:20}}>No Data Found</Text>)}

        </>
    )
}