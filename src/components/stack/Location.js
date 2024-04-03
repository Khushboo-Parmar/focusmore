

// import React from "react";
// import { Button, View, Alert } from 'react-native'; 
// import getDirections from 'react-native-google-maps-directions';

// const Location = () => {
  
//   const handleGetDirections = () => {
//     const data = {
//       source: {
//         latitude: -33.8356372,
//         longitude: 18.6947617
//       },
//       destination: {
//         latitude: -33.8600024,
//         longitude: 18.697459
//       },
//       params: [
//         {
//           key: "travelmode",
//           value: "driving"
//         },
//         {
//           key: "dir_action",
//           value: "navigate"
//         }
//       ],
//       waypoints: [
//         {
//           latitude: -33.8600025,
//           longitude: 18.697452
//         },
//         {
//           latitude: -33.8600026,
//           longitude: 18.697453
//         },
//         {
//           latitude: -33.8600036,
//           longitude: 18.697493
//         }
//       ]
//     };

//     getDirections(data)
//       .catch(error => {
//         Alert.alert("Error", "Could not open the URL for directions. Please make sure the app has permission to open external URLs.");
//         console.error("Error opening URL for directions:", error);
//       });
//   };

//   return (
//     <View style={{marginTop: 200}}>
//       <Button onPress={handleGetDirections} title="Get Directions" />
//     </View>
//   );
// };
// export default Location;import React from 'react';
import { Button, View } from 'react-native';
import getDirections from 'react-native-google-maps-directions';

const Location = () => {
  const handleGetDirections = () => {
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
          value: "driving" // may be "walking", "bicycling" or "transit" as well
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
    }

    getDirections(data);
  }

  return (
    <View>
      <Button onPress={handleGetDirections} title="Get Directions" />
    </View>
  );
}

export default Location;
