
import React from "react";
import { Text, View, Image } from "react-native";
import LogoImg from "../images/blog.png"
import  AwesomeIcon  from "react-native-vector-icons/FontAwesome5"; 
const Reviews = () => {
    return (

        <View>

            <View>
                <View style={{
                    backgroundColor: "#73fdea", height: 43, display: "flex",
                    alignItems: "center", justifyContent: "space-between", flexDirection: "row"
                }}>
                    <View style={{ display: "flex", alignItems: "center", flexDirection: "row" }}>
                    <AwesomeIcon name="clipboard" color="black" size={28} marginLeft={5}/>  
                        <Text style={{ color: "black", marginRight: 28, fontSize: 18, marginLeft: 2 }}>Review</Text>
                    </View>
                    <AwesomeIcon name="search" color="white" size={28} marginLeft={5}/>
                </View>

                <View style={{ marginTop: 20, borderBottomWidth: 2, borderBottomColor: "#929292" }}>
                    <View style={{ display: "flex", alignContent: "center", justifyContent: "space-between", flexDirection: "row",marginRight:8 }}>
                        <Text style={{ color: "black",marginLeft:12 }}>Best Electronic shop</Text>
                        <View style={{display:"flex", flexDirection:"row",justifyContent:"space-between", width:80}}>
                    <AwesomeIcon name="star" color="yellow"  size={8}  />
                    <AwesomeIcon name="star" color="yellow" size={8}  />
                    <AwesomeIcon name="star" color="yellow" size={8}  />
                    <AwesomeIcon name="star" color="yellow" size={8}  />
                    <AwesomeIcon name="star" color="#929292" size={8}  />
                  
                    </View>
                    </View>
                    <View style={{ display: "flex", alignContent: "center", marginLeft: 30 }}>
                        <Text > Ramesh / Ameerpet</Text>
                    </View>
                    <View>
                        <Text style={{ marginBottom: 10, fontSize: 12 }}>
                            Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among
                        </Text>
                    </View>

                </View>

                <View style={{ marginTop: 20, borderBottomWidth: 2 , borderBottomColor: "#929292" }}>
                    <View style={{ display: "flex", alignContent: "center", justifyContent: "space-between", flexDirection: "row" }}>
                        <Text style={{ color: "black" ,marginLeft:12}}>Best Electronic shop</Text>
                        <View style={{display:"flex", flexDirection:"row",justifyContent:"space-between", width:80 ,marginRight:8}}>
                    <AwesomeIcon name="star" color="yellow"  size={8}  />
                    <AwesomeIcon name="star" color="yellow" size={8}  />
                    <AwesomeIcon name="star" color="yellow" size={8}  />
                    <AwesomeIcon name="star" color="yellow" size={8}  />
                    <AwesomeIcon name="star" color="#929292" size={8}  />
                  
                    </View>
                    </View>
                    <View style={{ display: "flex", alignContent: "center", marginLeft: 30 }}>
                        <Text> Ramesh / Ameerpet</Text>
                    </View>
                    <View>
                        <Text style={{ marginBottom: 10, fontSize: 12 }}>
                            Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among
                        </Text>
                    </View>

                </View>

                <View style={{ marginTop: 20, borderBottomWidth: 2 , borderBottomColor: "#929292"}}>
                    <View style={{ display: "flex", alignContent: "center", justifyContent: "space-between", flexDirection: "row" ,marginRight:8}}>
                        <Text style={{ color: "black" ,marginLeft:12}}>Best Electronic shop</Text>
                        <View style={{display:"flex", flexDirection:"row",justifyContent:"space-between", width:80}}>
                    <AwesomeIcon name="star" color="yellow"  size={8}  />
                    <AwesomeIcon name="star" color="yellow" size={8}  />
                    <AwesomeIcon name="star" color="yellow" size={8}  />
                    <AwesomeIcon name="star" color="yellow" size={8}  />
                    <AwesomeIcon name="star" color="#929292" size={8}  />
                  
                    </View>
                    </View>
                    <View style={{ display: "flex", alignContent: "center", marginLeft: 30 }}>
                        <Text style={{}}> Ramesh / Ameerpet</Text>
                    </View>
                    <View>
                        <Text style={{ marginBottom: 10, fontSize: 12 }}>
                            Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among
                        </Text>
                    </View>

                </View>

                <View style={{ marginTop: 20 }}>
                    <View style={{ display: "flex", alignContent: "center", justifyContent: "space-between", flexDirection: "row",marginRight:8 }}>
                        <Text style={{ color: "black" ,marginLeft:12}}>Best Electronic shop</Text>
                        <View style={{display:"flex", flexDirection:"row",justifyContent:"space-between", width:80}}>
                    <AwesomeIcon name="star" color="yellow"  size={8}  />
                    <AwesomeIcon name="star" color="yellow" size={8}  />
                    <AwesomeIcon name="star" color="yellow" size={8}  />
                    <AwesomeIcon name="star" color="yellow" size={8}  />
                    <AwesomeIcon name="star" color="#929292" size={8}  />
                  
                    </View>
                    </View>
                    <View style={{ display: "flex", alignContent: "center", marginLeft: 30 }}>
                        <Text> Ramesh / Ameerpet</Text>
                    </View>
                    <View>
                        <Text style={{ marginBottom: 10, fontSize: 12 }}>
                            Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among
                        </Text>
                    </View>

                </View>

              

            </View>
        </View>


    )
}
export default Reviews;