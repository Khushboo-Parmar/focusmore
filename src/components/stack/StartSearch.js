import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, TextInput ,Image,TouchableOpacity,ScrollView} from 'react-native';
import NearByShop from './NearByShop';
import NearByServices from './NearByServices';
import NearByClassified from './NearByClassified';

const StartSearch = () => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');

  return (
    <ScrollView>
    <View style={styles.maincontainerr}>
    <View style={styles.containerr}>
      <View style={{}}>
        <TouchableOpacity>
        <Image source={require('../images/radius.jpg')} style={styles.radiusimage}  />
        </TouchableOpacity>
      </View>
      <View>
      <Text style={styles.searcheadr}>Start your Search</Text>
      <View style={styles.flexr}>
        <Text  style={styles.labelr}>Keyword:</Text>
        <TextInput
          style={styles.inputr}
          onChangeText={onChangeNumber}
          value={number}
          keyboardType="numeric"
        />
      </View></View>

      <View style={styles.flexr}>
        <Text style={styles.labelr}>Category:</Text>
        <TextInput
          style={styles.inputr}
          onChangeText={onChangeNumber}
          value={number}
          keyboardType="numeric"
        />
      </View>
      </View>
      <NearByShop />
      <NearByServices />
      <NearByClassified />
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  maincontainerr:{
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
  },
  containerr: {

   alignItems: 'center',
    marginTop: 20,
  },
  searcheadr:{
    color: '#b51e3b',
    fontSize: 18,
  },
  labelr:{
    color: '#525355',
    fontSize: 20,
  },
  inputr: {
    margin: 12,
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 1,
    paddingBottom: 1,
    width: 250
  },
  flexr: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#333',
  },
  selectedButton: {
    backgroundColor: 'blue',
    borderColor: 'blue',
  },
  buttonText: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default StartSearch;
