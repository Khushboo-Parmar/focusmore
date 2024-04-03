
import React, { useEffect, useState } from "react";
import { Text, View, Image, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { fetchAllData } from "./handeldetailpage/server";
import { useNavigation } from '@react-navigation/native';
import AwesomeIcon from "react-native-vector-icons/FontAwesome5";
import { ScrollView } from "react-native-gesture-handler";
// import Geolocation from '@react-native-community/geolocation';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from 'react-native-toast-message';


const BusinessAdd = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [location, setLocation] = useState('');
  const [lan, setLan] = useState('567878578957568');
  const [lat, setLat] = useState('093409309309344');



  const handelsumbit = async () => {
    const token = await AsyncStorage.getItem('token');

    try {
      const result = await fetch('https://focusmore.codelive.info/api/shop/add', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          address: 'testing',
          latitude: lat,
          longitude: lan,
          email: email,
          website: website,
          phone: phone,
          alt_phone: phone,
          description: description,
          user_id: 1,
          category_id: 1
        }),
      });
      const response = await result.json();
      console.log(response)
      if (response.status <= 200) {
        Toast.show({
          type: 'success',
          text1: `${response.message} 🚀`
        });
      } else {
        Toast.show({
          type: 'error',
          text1: `${response.details?.email ? response.details?.email : response.message} 📦`,
        });
      }
    } catch (e) {
      console.warn(e)
    }

  }

  return (
    <>
      <ScrollView>
        <View style={{ alignItems: 'center', marginTop: 20, paddingHorizontal: 20 }}>
          <Text style={{ fontWeight: '900', color: 'black' }}>Select Business Category</Text>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

            <View style={{ backgroundColor: '#d6d5d5', width: '60%', alignItems: 'center', borderRadius: 8, marginTop: 10 }}>
              <Text style={{ padding: 8, color: '#747d85', textAlign: 'center', fontWeight: '700', color: 'black' }}>Electronics & Electrical </Text>
            </View>

            <View style={{ position: 'absolute', right: -30, top: 0, backgroundColor: '#d6d5d5', alignItems: 'center', width: 45, borderRadius: 8, marginTop: 10, borderWidth: 1, borderColor: '#9b9b9b' }}>
              <Text style={{ padding: 7, color: '#747d85', textAlign: 'center' }}></Text>
            </View>

          </View>


          <View style={{ marginTop: 30 }}>

            <View style={{ flexDirection: 'row', marginBottom: 10 }}>
              <Text style={{ textAlign: 'left', width: '40%', fontWeight: '600', color: 'black' }} >
                Business Name:
              </Text>
              <TextInput
                onChangeText={(e) => { setName(e) }}
                style={[styles.input, { width: 200 }]}
                placeholder=''
              />
            </View>

            <View style={{ flexDirection: 'row', marginBottom: 10 }}>
              <Text style={{ textAlign: 'left', width: '40%', fontWeight: '600', color: 'black' }} >
                About:
              </Text>
              <TextInput
                onChangeText={(e) => { setDescription(e) }}
                style={[styles.input, { width: 200, height: 50 }]}
                placeholder=''
              />
            </View>
            <View style={{ flexDirection: 'row', marginBottom: 10 }}>
              <Text style={{ textAlign: 'left', width: '40%', fontWeight: '600', color: 'black' }} >
                Contact:
              </Text>
              <TextInput
                onChangeText={(e) => { setPhone(e) }}
                style={[styles.input, { width: 200 }]}
                placeholder=''
              />
            </View>
            <View style={{ flexDirection: 'row', marginBottom: 10 }}>
              <Text style={{ textAlign: 'left', width: '40%', fontWeight: '600', color: 'black' }} >
                Email:
              </Text>
              <TextInput
                onChangeText={(e) => { setEmail(e) }}
                style={[styles.input, { width: 200 }]}
                placeholder=''
              />
            </View>
            <View style={{ flexDirection: 'row', marginBottom: 10 }}>
              <Text style={{ textAlign: 'left', width: '40%', fontWeight: '600', color: 'black' }} >
                Website:
              </Text>
              <TextInput
                onChangeText={(e) => { setWebsite(e) }}
                style={[styles.input, { width: 200 }]}
                placeholder=''
              />
            </View>


            <View style={{ flexDirection: 'row', marginBottom: 15 }}>
              <Text style={{ textAlign: 'left', width: '22%', fontWeight: '600', color: 'black' }} >
                Location:
              </Text>
              <View style={{ paddingLeft: 10 }}>
                <View style={{ paddingHorizontal: 20, marginTop: 10 }}>

                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ borderColor: '#218a86', borderWidth: 1, borderRadius: 1, width: 13, height: 13, justifyContent: 'center', marginRight: 10 }}></View>
                    <View>
                      <Text style={{ fontWeight: '600', marginLeft: 10, color: 'black' }}>Use my current location</Text>
                      <Text style={{ color: '#747d85', fontSize: 10, marginLeft: 10, color: 'black' }}>(KPHB main road, Madhapur)</Text>
                    </View>
                  </View>



                  <Text style={{ textAlign: 'center', color: '#0c81d2', fontSize: 12, marginBottom: 10, color: 'black' }}>(OR)</Text>
                </View>

                <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                  <Text style={{ textAlign: 'left', width: '15%', fontWeight: '600', color: 'black' }} >
                    LAN:
                  </Text>
                  <TextInput
                    style={[styles.input, { width: 200 }]}
                    placeholder=''
                  />
                </View>

                <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                  <Text style={{ textAlign: 'left', width: '15%', fontWeight: '600', color: 'black' }} >
                    LAT:
                  </Text>
                  <TextInput
                    style={[styles.input, { width: 200 }]}
                    placeholder=''
                  />
                </View>


              </View>
            </View>

            <View style={{ flexDirection: 'row', marginBottom: 15 }}>
              <Text style={{ textAlign: 'left', width: '32%', fontWeight: '600', color: 'black' }} >
                Business hours:
              </Text>

              <View style={{ flexDirection: 'row' }}>
                <TextInput
                  style={[styles.time_input]}
                  placeholder=''
                  maxLength={1}
                />
                <TextInput
                  style={[styles.time_input]}
                  placeholder=''
                  maxLength={1}
                />
                <Text style={{ fontSize: 11, fontWeight: '600', marginLeft: 2, marginTop: 5, color: 'black' }}>am</Text>
              </View>

              <Text style={{ marginHorizontal: 20, fontSize: 11, fontWeight: '600', color: 'black' }}>to</Text>

              <View style={{ flexDirection: 'row' }}>
                <TextInput
                  style={[styles.time_input]}
                  placeholder=''
                  maxLength={1}
                />
                <TextInput
                  style={[styles.time_input]}
                  placeholder=''
                  maxLength={1}
                />
                <Text style={{ fontSize: 11, fontWeight: '600', marginLeft: 2, marginTop: 5, color: 'black' }}>pm</Text>
              </View>

            </View>


            <View style={{ flexDirection: 'row', marginTop: 15 }}>
              <Text style={{ textAlign: 'left', width: '32%', fontWeight: '600', color: 'black' }}>
                Business Days:
              </Text>

              <View style={{ flexDirection: 'row', flexWrap: 'wrap', flex: 1, width: 100 }}>


                <View style={{ flexDirection: 'row', gap: 10, flexWrap: 'wrap' }}>


                  <View style={{ alignItems: 'center', flexDirection: 'row' }}>

                    <View style={{ borderColor: '#218a86', borderWidth: 1, borderRadius: 1, width: 13, height: 13, justifyContent: 'center', marginRight: 10 }}></View>
                    <Text style={{ fontSize: 11, fontWeight: '600', color: 'black' }}>
                      All Days</Text>
                  </View>



                  <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                    <View style={{ borderColor: '#218a86', borderWidth: 1, borderRadius: 1, width: 13, height: 13, justifyContent: 'center', marginRight: 10 }}></View>
                    <Text style={{ fontSize: 11, fontWeight: '600', color: 'black' }}>

                      Mon</Text>
                  </View>

                  <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                    <View style={{ borderColor: '#218a86', borderWidth: 1, borderRadius: 1, width: 13, height: 13, justifyContent: 'center', marginRight: 10 }}></View>
                    <Text style={{ fontSize: 11, fontWeight: '600', color: 'black' }}>
                      {/* {/ <View style={{ backgroundColor: '#d6d5d5', borderColor: '#218a86', borderWidth: 1, borderRadius: 100, width: 13, height: 13, justifyContent: 'center', alignItems: 'center' }}></View> /} */}

                      Tue</Text>
                  </View>

                  <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                    <View style={{ borderColor: '#218a86', borderWidth: 1, borderRadius: 1, width: 13, height: 13, justifyContent: 'center', marginRight: 10 }}></View>
                    <Text style={{ fontSize: 11, fontWeight: '600', color: 'black' }}>
                      {/* {/ <View style={{ backgroundColor: '#d6d5d5', borderColor: '#218a86', borderWidth: 1, borderRadius: 100, width: 13, height: 13, justifyContent: 'center', alignItems: 'center' }}></View> /} */}

                      Wed</Text>
                  </View>

                  <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                    <View style={{ borderColor: '#218a86', borderWidth: 1, borderRadius: 1, width: 13, height: 13, justifyContent: 'center', marginRight: 10 }}></View>
                    <Text style={{ fontSize: 11, fontWeight: '600', color: 'black' }}>
                      {/* {/ <View style={{ backgroundColor: '#d6d5d5', borderColor: '#218a86', borderWidth: 1, borderRadius: 100, width: 13, height: 13, justifyContent: 'center', alignItems: 'center' }}></View> /} */}

                      Thu</Text>
                  </View>

                  <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                    <View style={{ borderColor: '#218a86', borderWidth: 1, borderRadius: 1, width: 13, height: 13, justifyContent: 'center', marginRight: 10 }}></View>
                    <Text style={{ fontSize: 11, fontWeight: '600', color: 'black' }}>
                      {/* {/ <View style={{ backgroundColor: '#d6d5d5', borderColor: '#218a86', borderWidth: 1, borderRadius: 100, width: 13, height: 13, justifyContent: 'center', alignItems: 'center' }}></View> /} */}

                      Fri</Text>
                  </View>

                  <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                    <View style={{ borderColor: '#218a86', borderWidth: 1, borderRadius: 1, width: 13, height: 13, justifyContent: 'center', marginRight: 10 }}></View>
                    <Text style={{ fontSize: 11, fontWeight: '600', color: 'black' }}>
                      {/* {/ <View style={{ backgroundColor: '#d6d5d5', borderColor: '#218a86', borderWidth: 1, borderRadius: 100, width: 13, height: 13, justifyContent: 'center', alignItems: 'center' }}></View> /} */}

                      Sat</Text>
                  </View>

                </View>
              </View>
            </View>


            <View style={{ flexDirection: 'row', marginTop: 25 }}>
              <Text style={{ textAlign: 'left', width: '48%', fontWeight: '600', color: 'black' }} >
                Home Delivery Service:
              </Text>
              <View style={{ flexDirection: 'row', gap: 20 }}>
                <View style={{ alignItems: 'center', flexDirection: 'row' }}>

                  <View style={{ borderColor: '#218a86', borderWidth: 1, borderRadius: 1, width: 13, height: 13, justifyContent: 'center', marginRight: 10 }}></View>
                  <Text style={{ fontSize: 11, fontWeight: '600', color: 'black' }}>
                    {/* {/ <View style={{ backgroundColor: '#d6d5d5', borderColor: '#218a86', borderWidth: 1, borderRadius: 100, width: 13, height: 13, justifyContent: 'center', alignItems: 'center' }}></View> /} */}

                    Yes</Text>
                </View>



                <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                  <View style={{ borderColor: '#218a86', borderWidth: 1, borderRadius: 1, width: 13, height: 13, justifyContent: 'center', marginRight: 10 }}></View>
                  <Text style={{ fontSize: 11, fontWeight: '600', color: 'black' }}>
                    {/* <View style={{ backgroundColor: '#d6d5d5', borderColor: '#218a86', borderWidth: 1, borderRadius: 100, width: 13, height: 13, justifyContent: 'center', alignItems: 'center' }}></View> */}

                    No</Text>
                </View>

              </View>
            </View>


            <View style={{ flexDirection: 'row', marginTop: 20 }}>
              <Text style={{ textAlign: 'left', width: '28%', fontWeight: '600', color: 'black' }} >
                Banner Image:
              </Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginRight: 10, marginVertical: 20 }}>
              <TouchableOpacity onPress={handelsumbit} style={{ backgroundColor: 'black', width: 125, alignItems: 'center', paddingVertical: 7, borderRadius: 10 }}>
                <Text style={{ alignItems: 'flex-end', color: 'white', fontWeight: '500' }}>Regtister</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>


        {/* // {/ 29  /}

      /* <View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ marginHorizontal: 20, fontSize: 11, fontWeight: '600' }}>Real Estate</Text>
          <View>
            <Text style={{ marginHorizontal: 20, fontSize: 11, fontWeight: '600' }}>12</Text>
          </View>
        </View>

        <View style={{flexDirection:'row',gap:5,justifyContent:'center',flexWrap:'wrap'}}>

          <View style={{borderWidth:1,borderColor:'#4c4c4c',paddingBottom:30,width:180}}>
            <Text style={{ fontSize: 20, fontWeight: '600', backgroundColor: 'black', color: 'white'
              , textAlign: 'center'
            }}>Rent</Text>
            <Text style={{textAlign:'center',fontSize: 10,color:'#9097a1',marginTop:10}} >
              Loremipsumdolorsitamet,
              etullumepicuriquo.
              pertinaxantiopamametmoderatius,
              deniquemediocremvoluptatumduoeu,
              eiusloremuteos.Nosingulispostulanthis,
              perdecoreelaboraretsadipscingte.
              Loremipsumdolorsitamet,
              etullumepicuriquo.
              pertinaxantiopamametmoderatius,
              deniquemediocremvoluptatumduoeu,
              eiusloremuteos.Nosingulispostulanthis,
              perdecoreelaboraretsadipscingte.
            </Text>
          </View>

          <View style={{borderWidth:1,borderColor:'#4c4c4c',paddingBottom:30,width:180}}>
            <Text style={{ fontSize: 20, fontWeight: '600', backgroundColor: 'black', color: 'white'
              , textAlign: 'center'
            }}>Plot for Sale </Text>
            <Text style={{textAlign:'center',fontSize: 10,color:'#9097a1',marginTop:10}} >
              Loremipsumdolorsitamet,
              etullumepicuriquo.
              pertinaxantiopamametmoderatius,
              deniquemediocremvoluptatumduoeu,
              eiusloremuteos.Nosingulispostulanthis,
              perdecoreelaboraretsadipscingte.
              Loremipsumdolorsitamet,
              etullumepicuriquo.
              pertinaxantiopamametmoderatius,
              deniquemediocremvoluptatumduoeu,
              eiusloremuteos.Nosingulispostulanthis,
              perdecoreelaboraretsadipscingte.
            </Text>
          </View>

          <View style={{borderWidth:1,borderColor:'#4c4c4c',paddingBottom:30,width:180}}>
            <Text style={{ fontSize: 20, fontWeight: '600', backgroundColor: 'black', color: 'white'
              , textAlign: 'center'
            }}>Plot for Sale </Text>
            <Text style={{textAlign:'center',fontSize: 10,color:'#9097a1',marginTop:10}} >
              Loremipsumdolorsitamet,
              etullumepicuriquo.
              pertinaxantiopamametmoderatius,
              deniquemediocremvoluptatumduoeu,
              eiusloremuteos.Nosingulispostulanthis,
              perdecoreelaboraretsadipscingte.
              Loremipsumdolorsitamet,
              etullumepicuriquo.
              pertinaxantiopamametmoderatius,
              deniquemediocremvoluptatumduoeu,
              eiusloremuteos.Nosingulispostulanthis,
              perdecoreelaboraretsadipscingte.
            </Text>
          </View>

          <View style={{borderWidth:1,borderColor:'#4c4c4c',paddingBottom:30,width:180}}>
            <Text style={{ fontSize: 20, fontWeight: '600', backgroundColor: 'black', color: 'white'
              , textAlign: 'center'
            }}>Plot for Sale </Text>
            <Text style={{textAlign:'center',fontSize: 10,color:'#9097a1',marginTop:10}} >
              Loremipsumdolorsitamet,
              etullumepicuriquo.
              pertinaxantiopamametmoderatius,
              deniquemediocremvoluptatumduoeu,
              eiusloremuteos.Nosingulispostulanthis,
              perdecoreelaboraretsadipscingte.
              Loremipsumdolorsitamet,
              etullumepicuriquo.
              pertinaxantiopamametmoderatius,
              deniquemediocremvoluptatumduoeu,
              eiusloremuteos.Nosingulispostulanthis,
              perdecoreelaboraretsadipscingte.
            </Text>
          </View>

        </View>

      </View> */}
      </ScrollView>
    </>
  )
}
export default BusinessAdd;




const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#9b9b9b',
    marginLeft: 5,
    height: 36,
    borderRadius: 3,
    paddingHorizontal: 10,
    color:'black'
  },
  time_input: {
    borderWidth: 1,
    borderColor: '#ababab',
    width: 28,
    height: 20,
    textAlign: 'center',
  },
});