
import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

const ImagePick = () => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const pickImage = () => {
    setLoading(true);
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then((selectedImage) => {
        setImage(selectedImage.path); 
      })
      .catch((error) => {
        console.log('Image picking error:', error);
       
      })
      .finally(() => {
        setLoading(false); 
      });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={pickImage}>
        <Text style={{ fontSize: 18, color: 'blue', marginBottom: 10 }}>Pick Image</Text>
        {loading ? ( 
          <ActivityIndicator size="small" color="blue" />
        ) : (
          <View>
            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
            {!image && <Text>No image selected</Text>}
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default ImagePick;
