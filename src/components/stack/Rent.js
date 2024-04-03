import React from "react";
import { Text, View, Image, TouchableOpacity, ScrollView ,TextInput} from "react-native";
import AwesomeIcon from "react-native-vector-icons/FontAwesome5";
import Icon from 'react-native-vector-icons/AntDesign';

const Rent =()=>{

    return(

        <View>
      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%', height: 30, backgroundColor: 'white', justifyContent: 'space-between' }}>

        <TextInput>

        </TextInput>
        <TouchableOpacity>
          <Icon name="search1" size={24} color="blue" />
        </TouchableOpacity>

      </View>



        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ marginHorizontal: 30, fontSize: 18,color:'black'  }}>Uploaded by : Rangaswami</Text>
         
        </View>

 

        <View style={{flexDirection:'row',gap:5,justifyContent:'center',flexWrap:'wrap' , marginTop:10}}>

          <View style={{borderWidth:1,borderColor:'#4c4c4c',paddingBottom:30,width:180}}>
            <Text style={{ fontSize: 20, fontWeight: '500', backgroundColor: 'black', color: 'white'
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

       


        </View>
     
      </View> 
    )

}
export default Rent;