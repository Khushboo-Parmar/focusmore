// import React from 'react';
// import { SafeAreaView, StyleSheet, View, Text, Image } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
// import { useNavigation } from '@react-navigation/native';

// const NearByClassified = () => {
//   const [text, onChangeText] = React.useState('Useless Text');
//   const [number, onChangeNumber] = React.useState('');

//   const navigation=useNavigation();

//   const handleExplore=()=>{
//     navigation.navigate('ExploreClassified');

//   }

//   return (
//     <View style={styles.componentr2}>

//       <Text style={styles.nearbyboxr}>NearByClassified</Text>
//       <View style={styles.flexboxr}>
//         <View style={styles.imagesbox}>
//           <Image source={require('../images/bajaj.png')} style={styles.nearbyimg} />
//           <View>
//             <Text style={styles.textCenter}>Bajaj Electronics</Text>
//             <Text style={styles.textCenter}>0.5 kms</Text>

//           </View>
//         </View>

//         <View style={styles.imagesbox}>
//           <Image source={require('../images/bajaj.png')} style={styles.nearbyimg} />
//           <View>
//             <Text style={styles.textCenter}>Havells</Text>

//             <Text style={styles.textCenter}>0.6 kms</Text>

//           </View>


//         </View>

//         <View>
//           <Image source={require('../images/bajaj.png')} style={styles.nearbyimg} />
//             <View>
//             <Text style={styles.textCenter}>Universal Book Store</Text>
//             <Text style={styles.textCenter}>0.8 kms</Text>
//           </View>
//         </View>
//         <View>
//           <TouchableOpacity onPress={handleExplore}>
//           <Text style={styles.exploretext}>Explore More</Text>
//           </TouchableOpacity>
//         </View>
//       </View>

//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   componentr2: {
//     marginTop: 30,
//   },
//   nearbyboxr: {
//     backgroundColor: '#61d836',
//     fontSize: 18,
//     color: '#fff',
//     width: "40%",
//     paddingLeft: 0,
//     paddingRight: 0,
//     paddingTop: 7,
//     paddingBottom: 7,
//     textAlign: 'center',
//     marginLeft: 20,
//   },
//   flexboxr: {
//     backgroundColor: '#edeaea',
//     // height: 'windowHeight',
//     width: 390,
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     // alignItems: 'center',
//     paddingTop: 25,
//     paddingBottom: 20,
//     paddingLeft: 30,
//     paddingRight: 30,
//     gap: 40,
//   },
//   nearbyimg: {
//     marginBottom: 10,
//   },
//   textCenter: {
//     textAlign: 'center',
//     width: 75,
//     color: 'black',
//     fontSize: 11,
//   },
//   exploretext: {
//     marginTop: 30,
//     width: 50,
//     textAlign: 'center',
//     color: '#6ec8f8',
//     fontFamily: 'math',
//   },
// });

// export default NearByClassified;
import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const NearByClassified = () => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');
  const [data, setData] = React.useState(null);

  useEffect(()=>{
    const fecthdata = async ()=>{
      try{
      const result = await fetch('http://focusmore.codelive.info/api/classifield/list',{
       method:'GET',
       headers:{
        'Authorization' : 'Bearer 13|PmgqcSMWjH1KmGs9yTdSLX6Nr3xIoocPOEzZgxkJc655b6bb'
       }
      });
      
      const response = await result.json();
      setData(response.data)
    }catch(e){
      console.log(JSON.stringify(e),);
    }
   }
   fecthdata()
  },[])

  const navigation=useNavigation();

  const handleExplore=()=>{
    navigation.navigate('ExploreClassified');

  }

  return (
    <View style={styles.componentr2}>

      <Text style={styles.nearbyboxr}>NearByClassified</Text>
      <View style={styles.flexboxr}>

      {data ? (
          <>
          {data.slice(0, 3).map((i)=>(
        <View style={styles.imagesbox} key={i.id}>
        <Image source={require('../images/bajaj.png')} style={styles.nearbyimg} />
        <View>
          <Text style={styles.textCenter}>{i.title}</Text>
          <Text style={styles.textCenter}>0.5 kms</Text>
        </View>
      </View>
          ))}
          </>
        ):<Text>'Loading'</Text>}

        {/* <View style={styles.imagesbox}>
          <Image source={require('../images/bajaj.png')} style={styles.nearbyimg} />
          <View>
            <Text style={styles.textCenter}>Bajaj Electronics</Text>
            <Text style={styles.textCenter}>0.5 kms</Text>

          </View>
        </View>

        <View style={styles.imagesbox}>
          <Image source={require('../images/bajaj.png')} style={styles.nearbyimg} />
          <View>
            <Text style={styles.textCenter}>Havells</Text>

            <Text style={styles.textCenter}>0.6 kms</Text>

          </View>


        </View>

        <View>
          <Image source={require('../images/bajaj.png')} style={styles.nearbyimg} />
            <View>
            <Text style={styles.textCenter}>Universal Book Store</Text>
            <Text style={styles.textCenter}>0.8 kms</Text>
          </View>
        </View> */}

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
    width: "40%",
    paddingLeft: 0,
    paddingRight: 0,
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
    paddingBottom: 20,
    paddingLeft: 30,
    paddingRight: 30,
    gap: 40,
  },
  nearbyimg: {
    marginBottom: 10,
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

export default NearByClassified;
