import React, { useEffect, useState } from 'react';
import { Text, View, Image, ScrollView, ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const Employees = (props) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigation = useNavigation();
    const serviceId = props.route.params.data[0].id 
 
    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = await AsyncStorage.getItem('token');
                if (token) {
                    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                    const response = await axios.post('https://focusmore.codelive.info/api/employees-service', {
                        service_id: "5",
                        // service_id: props.route.params.data[0].id,
                        latitude: 22.9676,
                        longitude: 76.0534,
                        radius: 50000
                    });
                    console.warn('service id=', props.route.params.data[0].id)
                    setData(response.data.data);
                    setLoading(false);
                    console.warn('employees service = ', response.data.data);
                }
            } catch (error) {
                setError('Error fetching employee list');
                setLoading(false);
                console.error('Error fetching employee list:', error);
            }
        };
        fetchData();
    }, []);

    const handleEmployeePress = (employee) => {
        navigation.navigate('DriverDetailPage', { employee });
    };

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="black" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>{error}</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.employeeContainer}>
                    {data && data.map((item, index) => (
                        <TouchableOpacity key={index} onPress={() => handleEmployeePress(item)}>
                            <View style={styles.employeeItem}>
                                <Image source={{ uri: item.employee_image }} style={styles.employeeImage} />
                                <Text style={styles.employeeText}>
                                    {item.service_name}
                                </Text>
                                <Text style={styles.employeeText}>
                                    Ename: {item.employee_name} (ID: {item.employee_id})
                                </Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f2f2f2"
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#f2f2f2"
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#f2f2f2"
    },
    errorText: {
        fontSize: 16,
        color: 'red'
    },
    employeeContainer: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        flexWrap: "wrap",
        padding: 10,
        gap: 10
    },
    employeeItem: {
        display: "flex",
        alignItems: "center",
        justifyContent: 'center'
    },
    employeeImage: {
        width: 90,
        height: 90,
        margin: 10
    },
    employeeText: {
        fontSize: 10,
        color: "black",
        fontWeight: '500',
        textAlign: 'center'
    }
});

export default Employees;
