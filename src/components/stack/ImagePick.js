// import React from 'react';
// import ImagePicker from 'react-native-image-crop-picker';
// import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";

// const ImagePick =()=>{
//     const pickImage = () => {
//         ImagePicker.openPicker({
//             width: 300,
//             height: 400,
//             cropping: true
//         }).then(image => {
//             console.log(image);
//         }).catch(error => {
//             console.log(error);
//         });
//     }
//     return(
//         <>
//           <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//             <TouchableOpacity onPress={pickImage}>
//                 <Text style={{ fontSize: 18, color: 'blue' }}>Pick Image</Text>
//             </TouchableOpacity>
//         </View>
//         </>
//     )
    
// }
// export default ImagePick;
import React, { useState } from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

const ImagePick = ({ onSelectImage }) => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      onSelectImage(result.uri); 
    }
  };

  return (
    <TouchableOpacity onPress={pickImage}>
      <Text>Select Image</Text>
      {image && <Image source={{ uri: image }} style={{ width: 50, height: 50 }} />}
    </TouchableOpacity>
  );
};

export default ImagePick;
