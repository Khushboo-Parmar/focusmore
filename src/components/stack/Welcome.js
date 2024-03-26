import React,{useEffect} from 'react';
import { StyleSheet, Text, View,} from 'react-native';

export default function Welcome({ navigation }) {

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
      // navigation.replace('Parent');
    }, 2000);
  }, []);

  return (
      <View style={styles.container}>
        <Text style={styles.text}>focusmore.in</Text>
        <Text style={styles.texttwo}>mobile app presentation</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 55,
    fontWeight: '500',
    textAlign: 'center',
  },
  texttwo: {
    color: 'black',
    fontSize: 30,
    fontWeight: '100',
    textAlign: 'center',
  },
});
