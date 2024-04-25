
import { useEffect, useState } from "react";
import { Text, View, ScrollView, TextInput, StyleSheet, Button, Image, TouchableOpacity, ActivityIndicator } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Toast from 'react-native-toast-message';

export default function AddEmployeServices() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [expierence, setExpirence] = useState(null);
    const [area, setArea] = useState(null);
    const [cahrges, setCharges] = useState(null);
    const [servicecharges, setServicesCharges] = useState(null);

    const [selectedShop, setSelectedShop] = useState(null);
    const [selectedservices, setSelectedServices] = useState(null);
    const [selcetedemploye, setSelectedEmploye] = useState(null);



    const [shops, setShops] = useState([]);
    const [services, setServices] = useState([]);
    const [employe, setEmploye] = useState([]);

  const [shopdropdown, setShopDropdownOpen] = useState(false);
  const [servicedropdown, setServiceDropdownOpen] = useState(false);
  const [employedropdown, setEmployeDropdownOpen] = useState(false);




    useEffect(() => {
        fetchServices();
        fetchShops();
        // fetchEmploye();
    }, []);
    useEffect(() => {
        if (shops.length > 0) {
            fetchEmploye();
        }
    }, [shops]);


    const formdata = new FormData();

    const handleSumbit = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        formdata.append('employee_id', selcetedemploye?.id);
        formdata.append('service_id', selectedservices?.id);
        formdata.append('service_experience', expierence+'year')
        formdata.append('service_areas', area)
        formdata.append('visiting_charge', cahrges)
        formdata.append('service_charge', servicecharges+'/day')
        formdata.append('shop_id', selectedShop?.id)
  
        const response = await fetch(`https://focusmore.codelive.info/api/add-employees-services`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`
          },
          body: formdata
        });
  
        if (!response.ok) {
          throw new Error('Failed to add classified');
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




    const fetchShops = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            const response = await axios.post('https://focusmore.codelive.info/api/shop/list');
            setShops(response.data.data);
        } catch (error) {
            console.error('Error fetching shops:', error);
        }
    };

    const fetchServices = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            const response = await axios.post('https://focusmore.codelive.info/api/service/list');
            setServices(response.data.data);
        } catch (error) {
            console.error('Error fetching shops:', error);
        }
    };

    const fetchEmploye = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            const response = await axios.post('https://focusmore.codelive.info/api/get-employee-list', {
                shop_id: shops[0]?.id
            });
            setEmploye(response.data.data);
        } catch (error) {
            console.error('Error fetching shops:', error);
        }
    };

    const handleShopSelection = (shop) => {
        setSelectedShop(shop);
        setShopDropdownOpen(false);

    };

    const handleServiceSelection = (shop) => {
        setSelectedServices(shop);
        setServiceDropdownOpen(false);
    };

    const handleEmployeSelection = (shop) => {
        setSelectedEmploye(shop);
        setEmployeDropdownOpen(false);
    };

    return (
        <>
            <View style={styles.header}>
                <Text style={styles.headerText}>Add Employes Services</Text>
            </View>
            <ScrollView contentContainerStyle={styles.container}>

                <Text style={styles.heading}>Select Shop</Text>
                <TouchableOpacity onPress={() => setShopDropdownOpen(!shopdropdown)}>
                    <View style={styles.dropdown}>
                        <Text style={styles.dropdownText}>
                            {selectedShop ? selectedShop.title : 'Select Shop'}
                        </Text>
                    </View>
                </TouchableOpacity>
                {shopdropdown && (
                    <View style={styles.dropdownList}>
                        {shops.map(shop => (
                            <TouchableOpacity key={shop?.id} onPress={() => handleShopSelection(shop)}>
                                <View style={styles.dropdownItem}>
                                    <Text>{shop.title}</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                )}

                <Text style={styles.heading}>Select Services</Text>
                <TouchableOpacity onPress={() => setServiceDropdownOpen(!servicedropdown)}>
                    <View style={styles.dropdown}>
                        <Text style={styles.dropdownText}>
                            {selectedservices ? selectedservices?.title : 'Select Services'}
                        </Text>
                    </View>
                </TouchableOpacity>
                {servicedropdown && (
                    <View style={styles.dropdownList}>
                        {services.map(shop => (
                            <TouchableOpacity key={shop?.id} onPress={() => handleServiceSelection(shop)}>
                                <View style={styles.dropdownItem}>
                                    <Text>{shop.title}</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                )}


                <Text style={styles.heading}>Select Employe</Text>
                <TouchableOpacity onPress={() => setEmployeDropdownOpen(!employedropdown)}>
                    <View style={styles.dropdown}>
                        <Text style={styles.dropdownText}>
                            {selcetedemploye ? selcetedemploye?.employee_name : 'Select Employe'}
                        </Text>
                    </View>
                </TouchableOpacity>
                {employedropdown && (
                    <>
                        {shops[0]?.id ? (
                            <View style={styles.dropdownList}>
                                {employe.map(shop => (
                                    <TouchableOpacity key={shop?.id} onPress={() => handleEmployeSelection(shop)}>
                                        <View style={styles.dropdownItem}>
                                            <Text>{shop.employee_name}</Text>
                                        </View>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        ) : <Text style={styles.dropdownItem}>First Select Shop</Text>}
                    </>
                )}

                <TextInput
                    style={styles.input}
                    placeholder="Service Expirence"
                    value={expierence}
                    keyboardType="numeric"
                    onChangeText={setExpirence}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Service Area"
                    value={area}
                    onChangeText={setArea}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Visiting Charge"
                    keyboardType="numeric"
                    value={cahrges}
                    onChangeText={setCharges}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Service Charge"
                    keyboardType="numeric"
                    value={servicecharges}
                    onChangeText={setServicesCharges}
                />

<TouchableOpacity style={styles.button} onPress={handleSumbit}>
        <Text style={styles.buttonText}>Add Employe Service</Text>
      </TouchableOpacity>

            </ScrollView>
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