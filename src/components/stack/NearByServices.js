import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const NearByServices = () => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');
  const [data, setData] = React.useState(null);


  // useEffect(()=>{
  //   const fecthdata = async ()=>{
  //     try{
  //     const result = await fetch('http://focusmore.codelive.info/api/service/list',{
  //      method:'GET',
  //      headers:{
  //       'Authorization' : 'Bearer 13|PmgqcSMWjH1KmGs9yTdSLX6Nr3xIoocPOEzZgxkJc655b6bb'
  //      }
  //     });

  //     const response = await result.json();
  //     setData(response.data)
  //   }catch(e){
  //     console.log(JSON.stringify(e),);
  //   }
  //  }
  //  fecthdata()
  // },[])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        if (token) {
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
          const response = await axios.post('https://focusmore.codelive.info/api/service/list');
          setData(response.data.data);
          console.warn(response)
        }
      } catch (error) {
        console.error('Error fetching nearby shops:', error);
      }
    };

    fetchData();
  }, []);
  const navigation = useNavigation();

  const handleExplore = () => {
    navigation.navigate('ExploreNearServices');

  }

  return (
    <View style={styles.componentr2}>

      <Text style={styles.nearbyboxr}>Near by Services</Text>
      <View style={styles.flexboxr}>

        {data ? (
          <>
            {data.slice(0, 3).map((i) => (
              <View style={styles.imagesbox} key={i.id}>

                <Image
                  source={{ uri: i.image }}
                  style={styles.nearbyimg}
                />


                <View>
                  <Text style={styles.textCenter}>{i.name}</Text>
                  <Text style={styles.textCenter}>0.5 kms</Text>
                </View>
              </View>

            ))}
          </>
        ) : <Text>'Loading'</Text>}

        <View>
          <TouchableOpacity onPress={handleExplore}>
            <Text style={styles.exploretext}>Explore More</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  componentr2: {
    marginTop: 30,
  },
  nearbyboxr: {
    backgroundColor: '#61d836',
    fontSize: 18,
    color: '#fff',
    width: '38%',
    paddingLeft: 2,
    paddingRight: 2,
    paddingTop: 7,
    paddingBottom: 7,
    textAlign: 'center',
    marginLeft: 20,
  },
  flexboxr: {
    backgroundColor: '#edeaea',
    // height: 'windowHeight',
    width: 390,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    // alignItems: 'center',
    paddingTop: 25,
    paddingBottom: 25,
    paddingLeft: 30,
    paddingRight: 30,
    gap: 40,
  },
  nearbyimg: {
    marginBottom: 10,
    width: 80,
    height: 80,
  },
  textCenter: {
    textAlign: 'center',
    width: 75,
    color: 'black',
    fontSize: 11,
  },
  exploretext: {
    marginTop: 30,
    width: 50,
    textAlign: 'center',
    color: '#6ec8f8',
    fontFamily: 'math',
  },
});

export default NearByServices;

