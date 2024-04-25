import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddCategory = () => {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const handelSumbit = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            if (token) {
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                const response = await axios.post('https://focusmore.codelive.info/api/category/add', {
                    name: name,
                    type: type
                });
                setData(response.data.data);
                setIsLoading(false);
            }
        } catch (error) {
            console.error('Error fetching Reviews:', error);
            setIsLoading(false);
        }
    };

    // if (isLoading) {
    //     return <ActivityIndicator size="large" color="#0000ff" />;
    // }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="name"
                value={name}
                onChangeText={(text) => setName(text)}
            />

            <TextInput
                style={styles.input}
                placeholder="type"
                value={type}
                onChangeText={(text) => setType(text)}
            />

            <TouchableOpacity style={styles.button} onPress={handelSumbit}>
                <Text style={styles.buttonText}>
                    Add Category
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default AddCategory;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#ffffff',
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
    button: {
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
    },
});
