// import React, { useEffect } from 'react';
// import { View, StyleSheet, Text, ImageBackground } from 'react-native';
// import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
// import { Avatar, Title } from 'react-native-paper';
// import { TouchableOpacity } from 'react-native-gesture-handler';
// import { useNavigation } from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import IonIcon from 'react-native-vector-icons/Ionicons';
// import BusinessAdd from '../stack/BusinessAdd';
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import Toast from 'react-native-toast-message';
// import { useDispatch } from 'react-redux';
// import { remove } from '../../store/auth/Slice';
// import axios from 'axios';

// const DrawerList = [
//   { icon: 'file-document-outline', label: 'Register', navigateTo: 'MobileRegistration' },
//   // {icon: 'login', label: 'Login', navigateTo: 'Login'},
//   { icon: 'home-outline', label: 'Home', navigateTo: 'Home' },
//   { icon: 'border-none', label: 'Categories', navigateTo: 'Categories' },
//   // {icon: 'home-city-outline', label: 'Add Business', navigateTo: 'BusinessAdd'},
//   { icon: 'home-city-outline', label: 'Add Business', navigateTo: 'AddBusiness' },
//   { icon: 'account-search', label: 'Add Services', navigateTo: '' },
//   // {icon: 'account-search', label: 'Add Product', navigateTo: 'AddProduct'},
//   { icon: 'text-box-search-outline', label: 'Add Classifieds', navigateTo: 'AddClassifieds' },
//   { icon: 'briefcase-account-outline', label: 'Find Job', navigateTo: '' },
//   { icon: 'wrench-clock', label: 'Setting', navigateTo: '' },
//   { icon: 'shield-lock-outline', label: 'Privacy Policy', navigateTo: '' },
//   { icon: 'note-check-outline', label: 'Terms & Condition', navigateTo: '' },
//   { icon: 'information-outline', label: 'Help', navigateTo: '' },
//   { icon: 'information-outline', label: 'Add Employee', navigateTo: 'AddEmployee' },
//   { icon: 'letter-outline', label: 'Dashboard', navigateTo: 'Dashboard' },
// ];

// const DrawerLayout = ({ icon, label, navigateTo }) => {
//   const navigation = useNavigation();

//   return (
//     <DrawerItem
//       icon={({ color, size }) => <Icon name={icon} color={color} size={size} />}
//       label={label}
//       onPress={() => {
//         navigation.navigate(navigateTo);
//       }}
//     />
//   );
// };

// const DrawerItems = props => {
//   return DrawerList.map((el, i) => {
//     return (
//       <DrawerLayout
//         key={i}
//         icon={el.icon}
//         label={el.label}
//         navigateTo={el.navigateTo}
//       />
//     );
//   });
// };
// function DrawerContent(props) {
//   const dispatch = useDispatch();
//   const navigation = useNavigation();

//   const [userData, setUserData] = React.useState(null);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const token = await AsyncStorage.getItem('token');
//         if (token) {
//           axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//           const response = await axios.get(`https://focusmore.codelive.info/api/user/list`);

//           if (response.data.status === 200) {
//             setUserData(response.data.data);
//             console.log("userData=",userData)
//           }

//         }

//       }
//       catch (error) {
//         console.warn('Error fetching user data:', error);
//       }

//     };
//     fetchUserData();
//   }, []);

//   const LogOut = async () => {
//     try {
//       dispatch(remove())
//       await AsyncStorage.removeItem('token');
//       Toast.show({
//         type: 'error',
//         text1: `Loged Out Sucessfuly 👋`
//       });
//       navigation.navigate('Login');
//     } catch (error) {
//       console.warn('Error while logging out:', error);
//     }
//   }

//   return (
//     <View style={{ flex: 1 }}>
//       <DrawerContentScrollView {...props}>
//         <View style={styles.drawerContent}>

//           <ImageBackground source={require('../images/bgimage.jpg')}>
//             <TouchableOpacity activeOpacity={0.8} style={styles.bgImage}>

//               <View style={styles.userInfoSection}>
//                 <View style={{ flexDirection: 'row', marginTop: 15 }}>
//                   <Avatar.Image
//                     source={{
//                       // uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAM1BMVEXFzeD////Byt7L0uPByd7Q1+b7/P3j5/Dv8fbe4+3r7vTFzuDL0+P19/rn6/LZ3urW2+lU+LHUAAAFLklEQVR4nO2dC3arMAxEQXwCcfjsf7XPkLw2tEka5AEziu8CeuKpJVmyLLIskUgkEkdFbsT+HXEQKbNqOPWN59y72D9nd/z/vWqbOv/mozSY9n116vIl1acYg1++G9v+5/rzvMs+QwL/7x/O9a/lT5zL2D9uF7wAzcP1e+pP2AQi4/mZAJ6TfQ3EtY9N4D+jdQ2k6F8K4OltayDFKyP4cghmI6PzVvDnHrDuEqR9UwFPY1IEufw+C72yh8LeIUFOaxSY6K0dFt2qTXDDVJCUi0IBT2vHHmTUSWAnPjgZtBJ4p2BjJ4RIYCSHlCpEAi+CAXMowiSwIIJoguKSE7k5rD8aPWDg3gnKg8EPLrGXEUL5tGC2ijr2OkIIjAlfEJdVBLMNcmprQEnAW09YUzT5C9aNADgbfMGaPQlOgrwj1cAlDZIGGVYD2ktIpAasiRNQgzxpkOektoCMjUkDT+zFaEFqwNqohtSgiL0YHcHlVAMaoCooM6SJo/qK7RGk+yBpkGVBl2w2NAi7aEwamNEAWE5MGiQNkgZJg6RB0sCEBoj+C3YN0j5IGkyks3LKnSegdaSkQdIgaUCtwcf7RJHy02OjVG3/+knvSlxJd+uK7Emb6eqOrQVBoJvgCtu16xYasF23QXsPWDVI+yArN9CALTyW6LhAqAE8NuaEcQH2fOMbtkNS+e7IC8MaYIuJM3TnRGwxcYbvPQ+0eDBD95TFIRv3rwyx17Qa/EGRbmqSAz1xvSP2ktaDvW3MOV9xoJ0i43tftEPgc4n4U1Ls9ajAbgTOkSCh02AW1GxJ4w2gCKwSIAspF0pLmIB5BNaXvhnwnMSXMn6DqrBzBoUrqKoiXdp8B6qqWMVeSADyzijhNyDeBiinyOwSUc95uAemYZ66sl0wLYGcFPmK6gsgCTRzZJxAlJe5TQFyQiA3hQxRVuSOChPBXrEW2trBf/RDts1sg+C8iXZA1oKwc9IY++dDCDojUKcKd5T67JF6ou4C9SHBhjO4os2hiWupv1Hm0JY00LpFKx5xQmsLpjRQdisy19R/om3MsaSB9rxsSgOdBKY00E5SZOxBeoa2kGJJA+01gyEN1JmjJQ20jxnYq+p3qPNGQxqo66qtHQ3UfUlJA0MalKJ+8NnyPfh/hFzOnbpFr6vP7JeNGaALw0BJMfzemT4+IhqSYq8hFESDInNj3ky4BPSXroieLPZDAuI7nuROsUS84iAvqKmT5gWxVxEIQgJuY8BsA+6NgPmyMXVkQHXuM+cMuBEIjO98Z4K78r5pOFtVpWiRn7Qd+aop5QU9AqJuMyYVRKoNJkT58OD/cuy1vYUX4LTBvLgrzVAcXwYpthPgSjcc2ybkgjoRvKQvjqrCVl7gEU11RJMQGTeYFvicbjyaCnsrMFG3R1JBsnZjR/hEhf4gJiHi0NOg1nCOL8OejvAJ3RBTBScy7O4GHlCfXCwV4hrBkvMlQmYpZXQjWLJ7sJTyEEawZNfMsowUC/+m38kxiNtgbDCMZgfHIMUuaVEA3cYnBnx5aAu8e9xMASkYFJjoNpo/K+7oVnBPg68xuKw8zoHoPXp0pCzHg0bDV0CTa3EsjmBJjUunsB9u35Ua08wkGecmuIEIEVIReoIFwTf38JHhEQgcxuqOlx4qCBFBCnY7uKH/uhV0SHRU9CNFUO1EB0A9TMKIIczoggP+QxpRUQ0cM+MMrmiezG7x0bmoKDYCZhLqgVjf8WvhfLhkfaPnFt/di8zq6XNbfIczMqsHDW3xTdrYPFvrP7kiUsVMV4ODAAAAAElFTkSuQmCC',

//                       uri: userData?.profile_pic
//                     }}
//                     size={80}
//                     style={{ marginTop: 5 }}
//                   />
//                   <View style={{ marginLeft: 10, flexDirection: 'column' }}>
//                     <Title style={styles.title}>Welcome</Title>
//                     <Text style={styles.caption} numberOfLines={1}>
//                       {userData?.name || 'Guest'}
//                     </Text>
//                     <Text style={styles.useraddress} numberOfLines={1}>
//                     <IonIcon name="location-outline" size={14} />{userData?.city}
//                     </Text>
//                   </View>
//                 </View>
//               </View>

//             </TouchableOpacity>
//           </ImageBackground>
//           <View style={styles.drawerSection}>
//             <DrawerItems />
//           </View>
//         </View>
//       </DrawerContentScrollView>
//       <TouchableOpacity onPress={LogOut} style={styles.bottomDrawerSection}>
//         <DrawerItem
//           icon={({ color, size }) => (
//             <Icon name="exit-to-app" color={color} size={size} />
//           )}
//           label="Sign Out"
//         />
//       </TouchableOpacity>
//     </View>
//   );
// }
// export default DrawerContent;

// const styles = StyleSheet.create({
//   drawerContent: {
//     flex: 1,
//     marginTop: 0
//   },
//   userInfoSection: {
//     paddingLeft: 20,
//   },
//   title: {
//     fontSize: 16,
//     marginTop: 5,
//     fontWeight: 800,
//     color: 'black',

//   },
//   caption: {
//     fontSize: 25,
//     lineHeight: 25,
//     color: 'black',
//     fontWeight: 'bold'
//     // width: '100%',
//   },
//   useraddress: {
//     fontSize: 15,
//     lineHeight: 25,
//     color: 'black',
//     // fontWeight: 'bold'
   
//   },
//   row: {
//     marginTop: 20,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   section: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   paragraph: {
//     fontWeight: 'bold',
//     marginRight: 3,
//   },
//   drawerSection: {

//     borderBottomWidth: 0,
//     borderBottomColor: '#dedede',
//     borderBottomWidth: 1,
//   },
//   bottomDrawerSection: {
//     marginBottom: 15,
//     borderTopColor: '#dedede',
//     borderTopWidth: 1,
//     borderBottomColor: '#dedede',
//     borderBottomWidth: 1,
//   },
//   preference: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingVertical: 12,
//     paddingHorizontal: 16,
//   },

// });


import React, { useEffect } from 'react';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Avatar, Title } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import BusinessAdd from '../stack/BusinessAdd';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from 'react-native-toast-message';
import { useDispatch } from 'react-redux';
import { remove } from '../../store/auth/Slice';
import axios from 'axios';
import { useSelector } from 'react-redux';




let DrawerList = [
  { icon: 'file-document-outline', label: 'Register', navigateTo: 'MobileRegistration' },
  { icon: 'home-outline', label: 'Home', navigateTo: 'StartSearch' },
  { icon: 'border-none', label: 'Categories', navigateTo: 'Categories' },
  { icon: 'home-city-outline', label: 'Add Business', navigateTo: 'AddBusiness' },
  { icon: 'account-search', label: 'Add Services', navigateTo: '' },
  { icon: 'text-box-search-outline', label: 'Add Classifieds', navigateTo: 'AddClassifieds' },
  { icon: 'briefcase-account-outline', label: 'Find Job', navigateTo: '' },
  { icon: 'wrench-clock', label: 'Setting', navigateTo: '' },
  { icon: 'shield-lock-outline', label: 'Privacy Policy', navigateTo: '' },
  { icon: 'note-check-outline', label: 'Terms & Condition', navigateTo: '' },
  { icon: 'information-outline', label: 'Help', navigateTo: '' },
  { icon: 'letter-outline', label: 'Add Languages', navigateTo: 'AddLanguage' },
  { icon: 'letter-outline', label: 'Add Category', navigateTo: 'AddCategory' },
  // { icon: 'letter-outline', label: 'Dashboard', navigateTo: 'Dashboard' },
  { icon: 'information-outline', label: 'Add Employee', navigateTo: 'AddEmployee' },
]
const DrawerLayout = ({ icon, label, navigateTo }) => {
  const navigation = useNavigation();
  return (
    <DrawerItem
      icon={({ color, size }) => <Icon name={icon} color={color} size={size} />}
      label={label}
      onPress={() => {
        navigation.navigate(navigateTo);
      }}
    />
  );
};

const DrawerItems = props => {

  return DrawerList.map((el, i) => {
    return (
      <DrawerLayout
        key={i}
        icon={el.icon}
        label={el.label}
        navigateTo={el.navigateTo}
      />
    );
  });
};
function DrawerContent(props) {
  const isLoggedIn = useSelector(state => state.upostion[0] === 3);
  const isLoggedIn2 = useSelector(state => state.upostion[0]);
  const isLoggedIn3 = useSelector(state => state.uid[0]);
  const isLoggedIn4 = useSelector(state => state.token[0]);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [userData, setUserData] = React.useState(null);

  const chekRole = () =>{
    DrawerList = DrawerList.filter(item => item.navigateTo !== 'Dashboard');
  
    if (isLoggedIn) {
      DrawerList.unshift({ icon: 'text-box-search-outline', label: 'Dashboard', navigateTo: 'Dashboard' });
    }
  }

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        console.warn(isLoggedIn2,!isLoggedIn3,isLoggedIn4)
        // DrawerList.shift()
        const token = await AsyncStorage.getItem('token');
        // console.warn(token)
        if (token) {
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
          const response = await axios.get(`https://focusmore.codelive.info/api/user/list`);
          if (response.data.status === 200) {
            setUserData(response.data.data);
            console.log("userData=", userData)
          }

        }

      }
      catch (error) {
        console.warn('Error fetching user data:', error);
      }

    };

    fetchUserData();
    chekRole()
  },[isLoggedIn]);

  const LogOut = async () => {
    try {
      dispatch(remove())
      await AsyncStorage.removeItem('token');
      Toast.show({
        type: 'error',
        text1: `Loged Out Sucessfuly 👋`
      });
      navigation.navigate('Login');
    } catch (error) {
      console.warn('Error while logging out:', error);
    }
  }




  //  DrawerList.shift()
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>

          <ImageBackground source={require('../images/bgimage.jpg')}>
            <TouchableOpacity onPress={()=>{userData ? 
            navigation.navigate('Profile',userData ? userData : null):''}} activeOpacity={0.8} style={styles.bgImage}>

              <View style={styles.userInfoSection}>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                  <Avatar.Image
                    source={{
                      // uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAM1BMVEXFzeD////Byt7L0uPByd7Q1+b7/P3j5/Dv8fbe4+3r7vTFzuDL0+P19/rn6/LZ3urW2+lU+LHUAAAFLklEQVR4nO2dC3arMAxEQXwCcfjsf7XPkLw2tEka5AEziu8CeuKpJVmyLLIskUgkEkdFbsT+HXEQKbNqOPWN59y72D9nd/z/vWqbOv/mozSY9n116vIl1acYg1++G9v+5/rzvMs+QwL/7x/O9a/lT5zL2D9uF7wAzcP1e+pP2AQi4/mZAJ6TfQ3EtY9N4D+jdQ2k6F8K4OltayDFKyP4cghmI6PzVvDnHrDuEqR9UwFPY1IEufw+C72yh8LeIUFOaxSY6K0dFt2qTXDDVJCUi0IBT2vHHmTUSWAnPjgZtBJ4p2BjJ4RIYCSHlCpEAi+CAXMowiSwIIJoguKSE7k5rD8aPWDg3gnKg8EPLrGXEUL5tGC2ijr2OkIIjAlfEJdVBLMNcmprQEnAW09YUzT5C9aNADgbfMGaPQlOgrwj1cAlDZIGGVYD2ktIpAasiRNQgzxpkOektoCMjUkDT+zFaEFqwNqohtSgiL0YHcHlVAMaoCooM6SJo/qK7RGk+yBpkGVBl2w2NAi7aEwamNEAWE5MGiQNkgZJg6RB0sCEBoj+C3YN0j5IGkyks3LKnSegdaSkQdIgaUCtwcf7RJHy02OjVG3/+knvSlxJd+uK7Emb6eqOrQVBoJvgCtu16xYasF23QXsPWDVI+yArN9CALTyW6LhAqAE8NuaEcQH2fOMbtkNS+e7IC8MaYIuJM3TnRGwxcYbvPQ+0eDBD95TFIRv3rwyx17Qa/EGRbmqSAz1xvSP2ktaDvW3MOV9xoJ0i43tftEPgc4n4U1Ls9ajAbgTOkSCh02AW1GxJ4w2gCKwSIAspF0pLmIB5BNaXvhnwnMSXMn6DqrBzBoUrqKoiXdp8B6qqWMVeSADyzijhNyDeBiinyOwSUc95uAemYZ66sl0wLYGcFPmK6gsgCTRzZJxAlJe5TQFyQiA3hQxRVuSOChPBXrEW2trBf/RDts1sg+C8iXZA1oKwc9IY++dDCDojUKcKd5T67JF6ou4C9SHBhjO4os2hiWupv1Hm0JY00LpFKx5xQmsLpjRQdisy19R/om3MsaSB9rxsSgOdBKY00E5SZOxBeoa2kGJJA+01gyEN1JmjJQ20jxnYq+p3qPNGQxqo66qtHQ3UfUlJA0MalKJ+8NnyPfh/hFzOnbpFr6vP7JeNGaALw0BJMfzemT4+IhqSYq8hFESDInNj3ky4BPSXroieLPZDAuI7nuROsUS84iAvqKmT5gWxVxEIQgJuY8BsA+6NgPmyMXVkQHXuM+cMuBEIjO98Z4K78r5pOFtVpWiRn7Qd+aop5QU9AqJuMyYVRKoNJkT58OD/cuy1vYUX4LTBvLgrzVAcXwYpthPgSjcc2ybkgjoRvKQvjqrCVl7gEU11RJMQGTeYFvicbjyaCnsrMFG3R1JBsnZjR/hEhf4gJiHi0NOg1nCOL8OejvAJ3RBTBScy7O4GHlCfXCwV4hrBkvMlQmYpZXQjWLJ7sJTyEEawZNfMsowUC/+m38kxiNtgbDCMZgfHIMUuaVEA3cYnBnx5aAu8e9xMASkYFJjoNpo/K+7oVnBPg68xuKw8zoHoPXp0pCzHg0bDV0CTa3EsjmBJjUunsB9u35Ua08wkGecmuIEIEVIReoIFwTf38JHhEQgcxuqOlx4qCBFBCnY7uKH/uhV0SHRU9CNFUO1EB0A9TMKIIczoggP+QxpRUQ0cM+MMrmiezG7x0bmoKDYCZhLqgVjf8WvhfLhkfaPnFt/di8zq6XNbfIczMqsHDW3xTdrYPFvrP7kiUsVMV4ODAAAAAElFTkSuQmCC',

                      uri: userData?.profile_pic
                    }}
                    size={80}
                    style={{ marginTop: 5 }}
                  />
                  <View style={{ marginLeft: 10, flexDirection: 'column' }}>
                    <Title style={styles.title}>Welcome</Title>
                    <Text style={styles.caption} numberOfLines={1}>
                      {userData?.name || 'Guest'}
                    </Text>
                    <Text style={styles.useraddress} numberOfLines={1}>
                      <IonIcon name="location-outline" size={14} />{userData?.city}
                    </Text>
                  </View>
                </View>
              </View>

            </TouchableOpacity>
          </ImageBackground>
          <View style={styles.drawerSection}>
            <DrawerItems />
          </View>
        </View>
      </DrawerContentScrollView>
      <TouchableOpacity onPress={LogOut} style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
        />
      </TouchableOpacity>
    </View>
  );
}
export default DrawerContent;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    marginTop: 0
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 5,
    fontWeight: 800,
    color: 'black',

  },
  caption: {
    fontSize: 25,
    lineHeight: 25,
    color: 'black',
    fontWeight: 'bold'
    // width: '100%',
  },
  useraddress: {
    fontSize: 15,
    lineHeight: 25,
    color: 'black',
    // fontWeight: 'bold'

  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    borderBottomWidth: 0,
    borderBottomColor: '#dedede',
    borderBottomWidth: 1,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#dedede',
    borderTopWidth: 1,
    borderBottomColor: '#dedede',
    borderBottomWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },

});