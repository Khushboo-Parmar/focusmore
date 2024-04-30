import { Text, View, Image, TouchableOpacity, TextInput, ScrollView, ActivityIndicator, StyleSheet } from "react-native";
import { Avatar, Title } from 'react-native-paper';

export default function Profile(props){
    console.warn(props.route.params)
    return(
        <>

        <View>
          <View>
            <View style={{alignItems:'center',marginVertical:10}}>
                <Avatar.Image size={150}  source={{uri:props.route.params?.profile_pic}} />
                <Text style={{fontSize:20,marginVertical:10,fontWeight:'bold',color:'black'}}>{props.route.params?.name} {props.route.params?.last_name}</Text>
            </View>
            <View>
                <View  style={{flexDirection:'row',justifyContent:'space-between',borderBottomWidth:1,borderColor:'grey',margin:10,padding:10}}>
                    <Text style={{fontSize:14,fontWeight:'bold',color:'black'}}>Email</Text>
                    <Text style={{fontSize:14,fontWeight:'bold',color:'black'}}>{props.route.params?.email}</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',borderBottomWidth:1,borderColor:'grey',margin:10,padding:10}}>
                    <Text style={{fontSize:14,fontWeight:'bold',color:'black'}}>City</Text>
                    <Text style={{fontSize:14,fontWeight:'bold',color:'black'}}>{props.route.params?.city}</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',borderBottomWidth:1,borderColor:'grey',margin:10,padding:10}}>
                    <Text style={{fontSize:14,fontWeight:'bold',color:'black'}}>State</Text>
                    <Text style={{fontSize:14,fontWeight:'bold',color:'black'}}>{props.route.params?.state}</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',borderBottomWidth:1,borderColor:'grey',margin:10,padding:10}}>
                    <Text style={{fontSize:14,fontWeight:'bold',color:'black'}}>Pin Code</Text>
                    <Text style={{fontSize:14,fontWeight:'bold',color:'black'}}>{props.route.params?.pin_code}</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',borderBottomWidth:1,borderColor:'grey',margin:10,padding:10}}>
                    <Text style={{fontSize:14,fontWeight:'bold',color:'black'}}>Mobile Number</Text>
                    <Text style={{fontSize:14,fontWeight:'bold',color:'black'}}>{props.route.params?.mobile_number}</Text>
                </View>
            </View>
          </View>
        </View>
        
        </>
    )
}