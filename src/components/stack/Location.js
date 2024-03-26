
import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Image, Button, TouchableOpacity, TextInput } from 'react-native';
import getDirections from 'react-native-google-maps-directions'


export const Location = () => {
    handleGetDirections = () => {
    const data = {
      source: {
        latitude: -33.8356372,
        longitude: 18.6947617
      },
      destination: {
        latitude: -33.8600024,
        longitude: 18.697459
      },
      params: [
        {
          key: "travelmode",
          value: "driving"
        },
        {
          key: "dir_action",
          value: "navigate"
        }
      ],
      waypoints: [
        {
          latitude: -33.8600025,
          longitude: 18.697452
        },
        {
          latitude: -33.8600026,
          longitude: 18.697453
        },
        {
          latitude: -33.8600036,
          longitude: 18.697493
        }
      ]
    };

    getDirections(data)
  }

    return (
        <>
        <View style={{marginTop:200}}>
        <Button onPress={this.handleGetDirections} title="Get Directions" />
      </View> 

        
        </>)
    }