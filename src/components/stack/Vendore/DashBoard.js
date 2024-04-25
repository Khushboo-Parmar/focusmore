import { Text, View, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import AwesomeIcon from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from '@react-navigation/native';


export default function DashBoard(props){
    const navigation = useNavigation();

  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Dashboard</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* <Text style={styles.sectionTitle}>All</Text> */}
        <View style={styles.boxContainer}>
          <TouchableOpacity style={styles.box} onPress={() => { navigation.navigate('AddClassifieds') }}>
            <AwesomeIcon name="briefcase" color="black" size={30} />
            <Text style={styles.boxText}>Add Classified</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.box} onPress={() => { navigation.navigate('AddLanguage') }}>
            <AwesomeIcon name="briefcase" color="black" size={30} />
            <Text style={styles.boxText}>Add Language</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.box} onPress={() => { navigation.navigate('AddServices') }}>
            <AwesomeIcon name="briefcase" color="black" size={30} />
            <Text style={styles.boxText}>Add Servcices</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.box} onPress={() => { navigation.navigate('AddBrouche') }}>
            <AwesomeIcon name="briefcase" color="black" size={30} />
            <Text style={styles.boxText}>Add Brouchre</Text>
          </TouchableOpacity>


          <TouchableOpacity style={styles.box} onPress={() => { navigation.navigate('AddShopGallery') }}>
            <AwesomeIcon name="briefcase" color="black" size={30} />
            <Text style={styles.boxText}>Add Gallery</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.box} onPress={() => { navigation.navigate('AddShopOffer') }}>
            <AwesomeIcon name="briefcase" color="black" size={30} />
            <Text style={styles.boxText}>Add Offer</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.box} onPress={() => { navigation.navigate('AddBusiness') }}>
            <AwesomeIcon name="briefcase" color="black" size={30} />
            <Text style={styles.boxText}>Add Shop</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.box} onPress={() => { navigation.navigate('AddEmployeServices') }}>
            <AwesomeIcon name="briefcase" color="black" size={30} />
            <Text style={styles.boxText}>Add Employe</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.box} onPress={() => { navigation.navigate('AddEmployeExpirence') }}>
            <AwesomeIcon name="briefcase" color="black" size={30} />
            <Text style={styles.boxText}>Add Expirence</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.box} onPress={() => { navigation.navigate('AddVendoreOffer') }}>
            <AwesomeIcon name="briefcase" color="black" size={30} />
            <Text style={styles.boxText}>Add Vend Offer</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.box} onPress={() => { navigation.navigate('AddCertiffect') }}>
            <AwesomeIcon name="briefcase" color="black" size={30} />
            <Text style={styles.boxText}>Add Csertificate</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.box} onPress={() => { navigation.navigate('AddHomeBanner') }}>
            <AwesomeIcon name="briefcase" color="black" size={30} />
            <Text style={styles.boxText}>Add HomeBanner</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#000000',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingVertical: 20,
    backgroundColor:'white'
  },
  sectionTitle: {
    color: 'black',
    fontSize: 15,
    fontWeight: '700',
    marginLeft: 15,
    marginBottom: 10,
  },
  boxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '40%',
    aspectRatio: 1,
    borderWidth:1,
    borderColor: 'grey',
    borderRadius: 30,
    marginBottom: 10,
  },
  boxText: {
    color: 'black',
    fontSize: 15,
    fontWeight: '700',
    marginVertical: 10,
  },
});
