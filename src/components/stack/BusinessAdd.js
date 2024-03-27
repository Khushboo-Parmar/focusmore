import React, { useEffect, useState } from "react";
import { Text, View, Image,TouchableOpacity,StyleSheet, TextInput } from "react-native";
import { fetchAllData } from "./handeldetailpage/server";
import { useNavigation } from '@react-navigation/native';
import AwesomeIcon from "react-native-vector-icons/FontAwesome5";
import { ScrollView } from "react-native-gesture-handler";

const BusinessAdd=()=>{
    return(
      <>
<ScrollView>
      <View style={{alignItems:'center'  ,marginTop:20,paddingHorizontal:20}}>
  <Text style={{fontWeight:'900'}}>Select Business Category</Text>

  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
    
  <View style={{ backgroundColor: '#d6d5d5', width: '60%', alignItems: 'center',  borderRadius: 8, marginTop: 10}}>
    <Text style={{ padding: 8, color: '#747d85', textAlign: 'center',fontWeight:'700' }}>Electronics & Electrical </Text>
  </View>
  
  <View style={{position:'absolute', right:-30, top:0, backgroundColor: '#d6d5d5',alignItems: 'center',width:45, borderRadius: 8, marginTop: 10 ,borderWidth:1,borderColor:'#9b9b9b'}}>
    <Text style={{ padding: 7, color: '#747d85', textAlign: 'center' }}></Text>
  </View>

</View>


  <View style={{marginTop:30}}>

    <View style={{flexDirection:'row',marginBottom:10}}>
      <Text style={{textAlign:'left',width:'40%',fontWeight:'600'}} >
      Business Name:
      </Text>
      <TextInput
      style={[styles.input,{width:200}]}
      placeholder=''
    />
    </View>

    <View style={{flexDirection:'row',marginBottom:10}}>
      <Text style={{textAlign:'left',width:'40%',fontWeight:'600'}} >
      About:
      </Text>
      <TextInput
      style={[styles.input,{width:200,height:50}]}
      placeholder=''
    />
    </View>
    <View style={{flexDirection:'row',marginBottom:10}}>
      <Text style={{textAlign:'left',width:'40%',fontWeight:'600'}} >
      Contact:
      </Text>
      <TextInput
      style={[styles.input,{width:200}]}
      placeholder=''
    />
    </View>
    <View style={{flexDirection:'row',marginBottom:10}}>
      <Text style={{textAlign:'left',width:'40%',fontWeight:'600'}} >
      Email:
      </Text>
      <TextInput
      style={[styles.input,{width:200}]}
      placeholder=''
    />
    </View>
    <View style={{flexDirection:'row',marginBottom:10}}>
      <Text style={{textAlign:'left',width:'40%',fontWeight:'600'}} >
      Website:
      </Text>
      <TextInput
      style={[styles.input,{width:200}]}
      placeholder=''
    />
    </View>


    <View style={{flexDirection:'row',marginBottom:15}}>
      <Text style={{textAlign:'left',width:'22%',fontWeight:'600'}} >
      Location:
      </Text>
      <View style={{paddingLeft:10}}>
      <View style={{paddingHorizontal:20,marginTop:10}}>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
  <View style={{ backgroundColor: '#d6d5d5', borderColor: '#218a86', borderWidth: 1, borderRadius: 100, width: 13, height: 13, justifyContent: 'center', alignItems: 'center' }}>
    
  </View>
  <View>
  <Text style={{ fontWeight: '600', marginLeft: 10 }}>Use my current location</Text>
  <Text style={{color:'#747d85',fontSize:10,marginLeft: 10}}>(KPHB main road, Madhapur)</Text>
  </View>
</View>



      <Text style={{textAlign:'center',color:'#0c81d2',fontSize:12}}>(OR)</Text>
      </View>

      <View style={{flexDirection:'row',marginBottom:10}}>
      <Text style={{textAlign:'left',width:'15%',fontWeight:'600'}} >
      LAN:
      </Text>
      <TextInput
      style={[styles.input,{width:200}]}
      placeholder=''
    />
    </View>

    <View style={{flexDirection:'row',marginBottom:10}}>
      <Text style={{textAlign:'left',width:'15%',fontWeight:'600'}} >
      LAT:
      </Text>
      <TextInput
      style={[styles.input,{width:200}]}
      placeholder=''
    />
    </View>


      </View>
    </View>

    <View style={{flexDirection:'row',marginBottom:15}}>
      <Text style={{textAlign:'left',width:'32%',fontWeight:'600'}} >
      Business hours:
      </Text>

      <View style={{flexDirection:'row'}}>
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
    <Text style={{fontSize:11,fontWeight:'600',marginLeft:2,marginTop:5}}>am</Text>
      </View>

      <Text style={{marginHorizontal:20,fontSize:11,fontWeight:'600'}}>to</Text>

      <View style={{flexDirection:'row'}}>
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
    <Text style={{fontSize:11,fontWeight:'600',marginLeft:2,marginTop:5}}>pm</Text>
      </View>

    </View>


    <View style={{ flexDirection: 'row', marginBottom: 15 }}>
  <Text style={{ textAlign: 'left', width: '32%', fontWeight: '600' }}>
    Business Days:
  </Text>

  <View style={{ flexDirection: 'row', flexWrap: 'wrap', flex: 1 }}>
    <Text style={{ fontSize: 11, fontWeight: '600', marginRight: 15 , alignItems:'center' }}>
      <View style={{ backgroundColor: '#d6d5d5', borderColor: '#218a86', borderWidth: 1, borderRadius: 100, width: 13, height: 13, justifyContent: 'center', alignItems: 'center' }}></View>
      All Days</Text>
    <Text style={{ fontSize: 11, fontWeight: '600', marginRight: 10 }}>
    <View style={{ backgroundColor: '#d6d5d5', borderColor: '#218a86', borderWidth: 1, borderRadius: 100, width: 13, height: 13, justifyContent: 'center', alignItems: 'center' }}></View>
      Mon</Text>
    <Text style={{ fontSize: 11, fontWeight: '600', marginRight: 10 }}>
    <View style={{ backgroundColor: '#d6d5d5', borderColor: '#218a86', borderWidth: 1, borderRadius: 100, width: 13, height: 13, justifyContent: 'center', alignItems: 'center' }}></View>
      Tue</Text>
    <Text style={{ fontSize: 11, fontWeight: '600', marginRight: 10 }}>
    <View style={{ backgroundColor: '#d6d5d5', borderColor: '#218a86', borderWidth: 1, borderRadius: 100, width: 13, height: 13, justifyContent: 'center', alignItems: 'center' }}></View>
      Wed</Text>
    <Text style={{ fontSize: 11, fontWeight: '600', marginRight: 10 }}>
    <View style={{ backgroundColor: '#d6d5d5', borderColor: '#218a86', borderWidth: 1, borderRadius: 100, width: 13, height: 13, justifyContent: 'center', alignItems: 'center' }}></View>
      Thu</Text>
    <Text style={{ fontSize: 11, fontWeight: '600', marginRight: 10 }}>
    <View style={{ backgroundColor: '#d6d5d5', borderColor: '#218a86', borderWidth: 1, borderRadius: 100, width: 13, height: 13, justifyContent: 'center', alignItems: 'center' }}></View>
      Fri</Text>
    <Text style={{ fontSize: 11, fontWeight: '600', marginRight: 10 }}>
    <View style={{ backgroundColor: '#d6d5d5', borderColor: '#218a86', borderWidth: 1, borderRadius: 100, width: 13, height: 13, justifyContent: 'center', alignItems: 'center' }}></View>
      Sat</Text>
    <Text style={{ fontSize: 11, fontWeight: '600' }}>
    <View style={{ backgroundColor: '#d6d5d5', borderColor: '#218a86', borderWidth: 1, borderRadius: 100, width: 13, height: 13, justifyContent: 'center', alignItems: 'center' }}></View>
      Sun</Text>
  </View>
</View>


<View style={{flexDirection:'row',marginBottom:15}}>
      <Text style={{textAlign:'left',width:'48%',fontWeight:'600'}} >
      Home Delivery Service:
      </Text>
      <View style={{flexDirection:'row'}}>
        <Text style={{ fontSize: 11, fontWeight: '600', marginRight: 35 }}>
        <View style={{ backgroundColor: '#d6d5d5', borderColor: '#218a86', borderWidth: 1, borderRadius: 100, width: 13, height: 13, justifyContent: 'center', alignItems: 'center' }}></View>
          Yes</Text>
        <Text style={{ fontSize: 11, fontWeight: '600', marginRight: 15 }}>
        <View style={{ backgroundColor: '#d6d5d5', borderColor: '#218a86', borderWidth: 1, borderRadius: 100, width: 13, height: 13, justifyContent: 'center', alignItems: 'center' }}></View>
          No</Text>
        
      </View>
    </View>


    <View style={{flexDirection:'row',marginBottom:15}}>
      <Text style={{textAlign:'left',width:'28%',fontWeight:'600'}} >
      Banner Image:
      </Text>
    <Image style={{width:150,height:150}} source={{uri:'https://thumbs.dreamstime.com/b/businessman-avatar-image-beard-hairstyle-male-profile-vector-illustration-178545831.jpg'}} />
    </View>

    <View style={{ flexDirection:'row', justifyContent:'flex-start' ,marginRight:10}}>
    <TouchableOpacity style={{ backgroundColor: 'black', width: 125, alignItems: 'center', paddingVertical: 7, borderRadius: 13 }}>
      <Text style={{ alignItems: 'flex-end',color: 'white', fontWeight: '500' }}>Regtister</Text>
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
      height:30,
    },
    time_input: {
      borderWidth: 1,
      borderColor: '#ababab',
      width: 28,
      height: 20,
      textAlign: 'center',
    },
  });