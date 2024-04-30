
import React, { useEffect, useRef } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {StyleSheet } from 'react-native';

const Places = ({ onPlaceSelected }) => {
  const ref = useRef();

  useEffect(() => {
    ref.current?.setAddressText('');
  }, []);

  return (
    <GooglePlacesAutocomplete
      ref={ref}
      placeholder='Search'
      styles={{
        textInputContainer: styles.inputContainer,
        textInput: styles.input,
        listView: styles.listView,
        row: styles.row, 
        // listItemText: styles.listItemText,
        predefinedPlacesDescription:styles.pre,
 
      }}
      onPress={(data, details = null) => {
        // console.log(data, details);
        onPlaceSelected(details.geometry.location.lat, details.geometry.location.lng);
      }}
      query={{
        key: 'AIzaSyBhkpTMfI6A9Gp03KiC2zEqetFkxWHj0b8',
        language: 'en',
      }}
    />
  );
};
const styles = StyleSheet.create({
  inputContainer:{
    width:205,
   
  },

  input: {
    borderWidth: 1,
    borderColor: '#9b9b9b',
    marginLeft: 5,
    borderRadius: 2,
    height: 36,
    borderRadius: 8,
    color: 'black',
    width:230,
    backgroundColor:'#f2f2f2'
  },
  // listItemText:{
  //   color: 'black',
  // },
  listView: {
    backgroundColor: 'white', // Set background color for the list view
  },
  row: {
    // backgroundColor: 'D3D3D3', 
    backgroundColor: '#D3D3D3', 
    // color: 'red',
  },

})

export default Places;


