
import { useEffect, useState } from "react";
import { Text, View, ScrollView, TextInput, StyleSheet, Button, Image, TouchableOpacity, ActivityIndicator } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImagePicker from 'react-native-image-crop-picker';
import Toast from 'react-native-toast-message';

export default function AddHomeBanner(){
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState(false);
    const [url, setUrl] = useState(false);

    const filename = image?.split("/").pop();
    const match = /\.(\w+)$/.exec(filename);
    const ext = match?.[1];
    const formData = new FormData();

    const handleSubmit = async () => {
        try {
          const token = await AsyncStorage.getItem('token');
          formData.append('title', title);
          formData.append('image', {
            uri: image,
            type: `image/${ext}`,
            name: filename
          });
          formData.append('url', url);

    
          const response = await fetch('https://focusmore.codelive.info/api/add-homebanner', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${token}`
            },
            body: formData
          });
    
          if (!response.ok) {
            throw new Error('Failed to add shop gallery');
          }
    
          const result = await response.json();
          Toast.show({
            type: 'success',
            text1:`${result.message}`,
          });
          console.warn(result);
        } catch (error) {
          Toast.show({
            type:'error',
            text1:`Please Field All Fields`,
          });
        }
      };

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
    

    return(
        <>

<>
            <View style={styles.header}>
                <Text style={styles.headerText}>Add Banners</Text>
            </View>
            <ScrollView contentContainerStyle={styles.container}>

                <TextInput
                    style={styles.input}
                    placeholder="title"
                    value={title}
                    onChangeText={setTitle}
                />

                <TextInput
                    style={styles.input}
                    placeholder="URL..."
                    value={url}
                    onChangeText={setUrl}
                />

<TouchableOpacity onPress={pickImage}>
        <Text style={styles.imagePickerText}>Pick Image</Text>
        {loading ? (
          <ActivityIndicator size="small" color="blue" />
        ) : (
          <View>
            {image && <Image source={{ uri: image }} style={styles.image} />}
            {!image && <Text style={{fontSize:12,marginBottom:10}}>No image selected</Text>}

          </View>
        )}
      </TouchableOpacity>

<TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Add Banner</Text>
      </TouchableOpacity>

            </ScrollView>
        </>
        
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
    },
    headerText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '700',
    },
    header: {
        backgroundColor: '#000000',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginBottom: 20
    },
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
        color: 'black',
    },
    imagePickerText: {
        fontSize: 15,
        color: 'grey',
        marginBottom: 10,
        fontStyle: 'italic'
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 10,
    },
    dropdown: {
        backgroundColor: 'black',
        width: '100%',
        alignItems: 'center',
        paddingVertical: 8,
        borderRadius: 8,
        marginVertical: 10,
    },
    dropdownText: {
        color: 'white',
        fontWeight: '700',
    },
    dropdownList: {
        marginTop: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    dropdownItem: {
        padding: 10,
    },
    button: {
        backgroundColor: 'black',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});