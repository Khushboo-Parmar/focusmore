
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button, Text } from 'react-native-paper';


export default  function LogOut(){
    const navigation = useNavigation();
    const  handellogout =  async () =>{
    await AsyncStorage.removeItem('token')
    navigation.navigate('Login');
   
}
return(
    <>
    <Text onPress={handellogout}>LOGOUT</Text>
    </>
)

}