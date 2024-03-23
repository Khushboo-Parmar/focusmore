import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Welcome() {
  const navigation = useNavigation();

  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  // const handleWelcomePress = () => {
  //   navigation.navigate('Login');
  // };

  return (
    // <TouchableWithoutFeedback onPress={handleWelcomePress}>
      <View style={styles.container}>
        <Text style={styles.text}>focusmore.in</Text>
        <Text style={styles.texttwo}>mobile app presentation</Text>
        <Button title="Login" onPress={handleLoginPress} />
      </View>
    // </TouchableWithoutFeedback>
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
