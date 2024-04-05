import React from "react";
import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import AwesomeIcon from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

const RealState = () => {
    const navigation = useNavigation();


    const handlePress = () => {
        navigation.navigate('Rent')

    }

    return (

        <View>

            <View style={{ display: 'flex', alignItems: 'flex-end', marginRight: 8 }}>
                <AwesomeIcon name="search" color="#73fdea" size={25} />
            </View>
{/* 
            <View style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row" }}>
                <View style={{}}>
                    <View style={{ backgroundColor: "#61d836", height: 30, width: 160, display: "flex", alignItems: "center" }}>
                        <Text style={{ color: "white", fontSize: 15, padding: 5, paddingLeft: 5 }}>Near by Classifieds</Text>
                    </View>
                </View>

                <View>
                    <View style={{ backgroundColor: "white", borderTopWidth: 2, borderTopColor: "#d6d5d5", height: 28, width: 50, display: "flex", alignItems: "center" }}>
                        <AwesomeIcon name="globe" color="#d6d5d5" size={25} />
                    </View>
                </View>

                <View>
                    <View style={{ backgroundColor: "white", borderWidth: 2, borderColor: "#d6d5d5", height: 29, width: 210, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row" }}>
                        <Text style={{ fontSize: 17 }}>Select Category</Text>
                        <AwesomeIcon name="play" color="#d6d5d5" size={20} marginLeft={18} />
                    </View>
                </View>
            </View> */}
            <View style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row" }}>



<View >
    <View style={{ backgroundColor: "#61d836", height: 30, width: 160, display: "flex", alignItems: "center" }}>
        <Text style={{ color: "white", fontSize: 14, padding: 3, paddingLeft: 20 , width:160 }}>Near by Classified</Text>
    </View>
</View>


<View style={{ borderColor: '#a5a5a5', backgroundColor: "white", borderTopWidth: 1, height: 28, width: 50, paddingHorizontal: 10 }}>
    <TouchableOpacity>
        <Image source={require('../images/radius.jpg')} />
    </TouchableOpacity>
</View>




<View>
    <View style={{ borderColor: '#a5a5a5', backgroundColor: "white", borderTopWidth: 1, height: 29, width: 200, borderWidth: 1, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row" }}>
        <Text style={{ fontSize: 15, color: '#a5a5a5', fontWeight: '400', marginRight: 20 , color:'black'}}>Select Category</Text>
        <Icon name="caretdown" size={15} color="#a5a5a5" />

    </View>
</View>
</View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ marginHorizontal: 20, fontSize: 12, fontWeight: '500',color:'black' }}>Real Estate</Text>
                <View>
                    <Text style={{ marginHorizontal: 20, fontSize: 12, fontWeight: '500' ,color:'black'}}>12</Text>
                </View>
            </View>

            <ScrollView style={{ marginBottom: 30 }}>

                <View style={{ flexDirection: 'row', gap: 5, justifyContent: 'center', flexWrap: 'wrap' }}>
                    <TouchableOpacity onPress={handlePress}>
                        <View style={{ borderWidth: 1, borderColor: '#4c4c4c', paddingBottom: 30, width: 180 }}>
                            <Text style={{
                                fontSize: 20, fontWeight: '500', backgroundColor: 'black', color: 'white'
                                , textAlign: 'center'
                            }}>Rent</Text>
                            <Text style={{ textAlign: 'center', fontSize: 10, color: '#9097a1', marginTop: 10 }} >
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
                    </TouchableOpacity>

                    <View style={{ borderWidth: 1, borderColor: '#4c4c4c', paddingBottom: 30, width: 180 }}>
                        <Text style={{
                            fontSize: 20, fontWeight: '500', backgroundColor: 'black', color: 'white'
                            , textAlign: 'center'
                        }}>Plot for Sale </Text>
                        <Text style={{ textAlign: 'center', fontSize: 10, color: '#9097a1', marginTop: 10 }} >
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

                    <View style={{ borderWidth: 1, borderColor: '#4c4c4c', paddingBottom: 30, width: 180 }}>
                        <Text style={{
                            fontSize: 20, fontWeight: '500', backgroundColor: 'black', color: 'white'
                            , textAlign: 'center'
                        }}>CommercialSpace </Text>
                        <Text style={{ textAlign: 'center', fontSize: 10, color: '#9097a1', marginTop: 10 }} >
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

                    <View style={{ borderWidth: 1, borderColor: '#4c4c4c', paddingBottom: 30, width: 180 }}>
                        <Text style={{
                            fontSize: 20, fontWeight: '500', backgroundColor: 'black', color: 'white'
                            , textAlign: 'center'
                        }}>Independent House </Text>
                        <Text style={{ textAlign: 'center', fontSize: 10, color: '#9097a1', marginTop: 10 }} >
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

                    <View style={{ borderWidth: 1, borderColor: '#4c4c4c', paddingBottom: 30, width: 180 }}>
                        <Text style={{
                            fontSize: 20, fontWeight: '500', backgroundColor: 'black', color: 'white'
                            , textAlign: 'center'
                        }}>Plot for Sale </Text>
                        <Text style={{ textAlign: 'center', fontSize: 10, color: '#9097a1', marginTop: 10 }} >
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
                    <View style={{ borderWidth: 1, borderColor: '#4c4c4c', paddingBottom: 30, width: 180 }}>
                        <Text style={{
                            fontSize: 20, fontWeight: '500', backgroundColor: 'black', color: 'white'
                            , textAlign: 'center'
                        }}>Bachelors</Text>
                        <Text style={{ textAlign: 'center', fontSize: 10, color: '#9097a1', marginTop: 10 }} >
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
            </ScrollView>

        </View>
    )

}
export default RealState;