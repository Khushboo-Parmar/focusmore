// import {
//     View,
//     Text,
//     TouchableOpacity,
//     Image,
//     TextInput,
//     FlatList,
//   } from 'react-native';
//   import React, {useRef, useState} from 'react';
//   const countries = [
//     {country: 'Afghanistan', code: '93', iso: 'AF'},
//     {country: 'Albania', code: '355', iso: 'AL'},
//     {country: 'Algeria', code: '213', iso: 'DZ'},
//     {country: 'American Samoa', code: '1-684', iso: 'AS'},
//     {country: 'Andorra', code: '376', iso: 'AD'},
//     {country: 'Angola', code: '244', iso: 'AO'},
//     {country: 'Anguilla', code: '1-264', iso: 'AI'},
//     {country: 'Antarctica', code: '672', iso: 'AQ'},
//     {country: 'Antigua and Barbuda', code: '1-268', iso: 'AG'},
//     {country: 'Argentina', code: '54', iso: 'AR'},
//     {country: 'Armenia', code: '374', iso: 'AM'},
//     {country: 'Aruba', code: '297', iso: 'AW'},
//     {country: 'Australia', code: '61', iso: 'AU'},
//     {country: 'Austria', code: '43', iso: 'AT'},
//     {country: 'Azerbaijan', code: '994', iso: 'AZ'},
//     {country: 'Bahamas', code: '1-242', iso: 'BS'},
//     {country: 'Bahrain', code: '973', iso: 'BH'},
//     {country: 'Bangladesh', code: '880', iso: 'BD'},
//     {country: 'Barbados', code: '1-246', iso: 'BB'},
//     {country: 'Belarus', code: '375', iso: 'BY'},
//     {country: 'Belgium', code: '32', iso: 'BE'},
//     {country: 'Belize', code: '501', iso: 'BZ'},
//     {country: 'Benin', code: '229', iso: 'BJ'},
//     {country: 'Bermuda', code: '1-441', iso: 'BM'},
//     {country: 'Bhutan', code: '975', iso: 'BT'},
//     {country: 'Bolivia', code: '591', iso: 'BO'},
//     {country: 'Bosnia and Herzegovina', code: '387', iso: 'BA'},
//     {country: 'Botswana', code: '267', iso: 'BW'},
//     {country: 'Brazil', code: '55', iso: 'BR'},
//     {country: 'British Indian Ocean Territory', code: '246', iso: 'IO'},
//     {country: 'British Virgin Islands', code: '1-284', iso: 'VG'},
//     {country: 'Brunei', code: '673', iso: 'BN'},
//     {country: 'Bulgaria', code: '359', iso: 'BG'},
//     {country: 'Burkina Faso', code: '226', iso: 'BF'},
//     {country: 'Burundi', code: '257', iso: 'BI'},
//     {country: 'Cambodia', code: '855', iso: 'KH'},
//     {country: 'Cameroon', code: '237', iso: 'CM'},
//     {country: 'Canada', code: '1', iso: 'CA'},
//     {country: 'Cape Verde', code: '238', iso: 'CV'},
//     {country: 'Cayman Islands', code: '1-345', iso: 'KY'},
//     {country: 'Central African Republic', code: '236', iso: 'CF'},
//     {country: 'Chad', code: '235', iso: 'TD'},
//     {country: 'Chile', code: '56', iso: 'CL'},
//     {country: 'China', code: '86', iso: 'CN'},
//     {country: 'Christmas Island', code: '61', iso: 'CX'},
//     {country: 'Cocos Islands', code: '61', iso: 'CC'},
//     {country: 'Colombia', code: '57', iso: 'CO'},
//     {country: 'Comoros', code: '269', iso: 'KM'},
//     {country: 'Cook Islands', code: '682', iso: 'CK'},
//     {country: 'Costa Rica', code: '506', iso: 'CR'},
//     {country: 'Croatia', code: '385', iso: 'HR'},
//     {country: 'Cuba', code: '53', iso: 'CU'},
//     {country: 'Curacao', code: '599', iso: 'CW'},
//     {country: 'Cyprus', code: '357', iso: 'CY'},
//     {country: 'Czech Republic', code: '420', iso: 'CZ'},
//     {country: 'Democratic Republic of the Congo', code: '243', iso: 'CD'},
//     {country: 'Denmark', code: '45', iso: 'DK'},
//     {country: 'Djibouti', code: '253', iso: 'DJ'},
//     {country: 'Dominica', code: '1-767', iso: 'DM'},
//     {country: 'Dominican Republic', code: '1-809, 1-829, 1-849', iso: 'DO'},
//     {country: 'East Timor', code: '670', iso: 'TL'},
//     {country: 'Ecuador', code: '593', iso: 'EC'},
//     {country: 'Egypt', code: '20', iso: 'EG'},
//     {country: 'El Salvador', code: '503', iso: 'SV'},
//     {country: 'Equatorial Guinea', code: '240', iso: 'GQ'},
//     {country: 'Eritrea', code: '291', iso: 'ER'},
//     {country: 'Estonia', code: '372', iso: 'EE'},
//     {country: 'Ethiopia', code: '251', iso: 'ET'},
//     {country: 'Falkland Islands', code: '500', iso: 'FK'},
//     {country: 'Faroe Islands', code: '298', iso: 'FO'},
//     {country: 'Fiji', code: '679', iso: 'FJ'},
//     {country: 'Finland', code: '358', iso: 'FI'},
//     {country: 'France', code: '33', iso: 'FR'},
//     {country: 'French Polynesia', code: '689', iso: 'PF'},
//     {country: 'Gabon', code: '241', iso: 'GA'},
//     {country: 'Gambia', code: '220', iso: 'GM'},
//     {country: 'Georgia', code: '995', iso: 'GE'},
//     {country: 'Germany', code: '49', iso: 'DE'},
//     {country: 'Ghana', code: '233', iso: 'GH'},
//     {country: 'Gibraltar', code: '350', iso: 'GI'},
//     {country: 'Greece', code: '30', iso: 'GR'},
//     {country: 'Greenland', code: '299', iso: 'GL'},
//     {country: 'Grenada', code: '1-473', iso: 'GD'},
//     {country: 'Guam', code: '1-671', iso: 'GU'},
//     {country: 'Guatemala', code: '502', iso: 'GT'},
//     {country: 'Guernsey', code: '44-1481', iso: 'GG'},
//     {country: 'Guinea', code: '224', iso: 'GN'},
//     {country: 'Guinea-Bissau', code: '245', iso: 'GW'},
//     {country: 'Guyana', code: '592', iso: 'GY'},
//     {country: 'Haiti', code: '509', iso: 'HT'},
//     {country: 'Honduras', code: '504', iso: 'HN'},
//     {country: 'Hong Kong', code: '852', iso: 'HK'},
//     {country: 'Hungary', code: '36', iso: 'HU'},
//     {country: 'Iceland', code: '354', iso: 'IS'},
//     {country: 'India', code: '91', iso: 'IN'},
//     {country: 'Indonesia', code: '62', iso: 'ID'},
//     {country: 'Iran', code: '98', iso: 'IR'},
//     {country: 'Iraq', code: '964', iso: 'IQ'},
//     {country: 'Ireland', code: '353', iso: 'IE'},
//     {country: 'Isle of Man', code: '44-1624', iso: 'IM'},
//     {country: 'Israel', code: '972', iso: 'IL'},
//     {country: 'Italy', code: '39', iso: 'IT'},
//     {country: 'Ivory Coast', code: '225', iso: 'CI'},
//     {country: 'Jamaica', code: '1-876', iso: 'JM'},
//     {country: 'Japan', code: '81', iso: 'JP'},
//     {country: 'Jersey', code: '44-1534', iso: 'JE'},
//     {country: 'Jordan', code: '962', iso: 'JO'},
//     {country: 'Kazakhstan', code: '7', iso: 'KZ'},
//     {country: 'Kenya', code: '254', iso: 'KE'},
//     {country: 'Kiribati', code: '686', iso: 'KI'},
//     {country: 'Kosovo', code: '383', iso: 'XK'},
//     {country: 'Kuwait', code: '965', iso: 'KW'},
//     {country: 'Kyrgyzstan', code: '996', iso: 'KG'},
//     {country: 'Laos', code: '856', iso: 'LA'},
//     {country: 'Latvia', code: '371', iso: 'LV'},
//     {country: 'Lebanon', code: '961', iso: 'LB'},
//     {country: 'Lesotho', code: '266', iso: 'LS'},
//     {country: 'Liberia', code: '231', iso: 'LR'},
//     {country: 'Libya', code: '218', iso: 'LY'},
//     {country: 'Liechtenstein', code: '423', iso: 'LI'},
//     {country: 'Lithuania', code: '370', iso: 'LT'},
//     {country: 'Luxembourg', code: '352', iso: 'LU'},
//     {country: 'Macao', code: '853', iso: 'MO'},
//     {country: 'Macedonia', code: '389', iso: 'MK'},
//     {country: 'Madagascar', code: '261', iso: 'MG'},
//     {country: 'Malawi', code: '265', iso: 'MW'},
//     {country: 'Malaysia', code: '60', iso: 'MY'},
//     {country: 'Maldives', code: '960', iso: 'MV'},
//     {country: 'Mali', code: '223', iso: 'ML'},
//     {country: 'Malta', code: '356', iso: 'MT'},
//     {country: 'Marshall Islands', code: '692', iso: 'MH'},
//     {country: 'Mauritania', code: '222', iso: 'MR'},
//     {country: 'Mauritius', code: '230', iso: 'MU'},
//     {country: 'Mayotte', code: '262', iso: 'YT'},
//     {country: 'Mexico', code: '52', iso: 'MX'},
//     {country: 'Micronesia', code: '691', iso: 'FM'},
//     {country: 'Moldova', code: '373', iso: 'MD'},
//     {country: 'Monaco', code: '377', iso: 'MC'},
//     {country: 'Mongolia', code: '976', iso: 'MN'},
//     {country: 'Montenegro', code: '382', iso: 'ME'},
//     {country: 'Montserrat', code: '1-664', iso: 'MS'},
//     {country: 'Morocco', code: '212', iso: 'MA'},
//     {country: 'Mozambique', code: '258', iso: 'MZ'},
//     {country: 'Myanmar', code: '95', iso: 'MM'},
//     {country: 'Namibia', code: '264', iso: 'NA'},
//     {country: 'Nauru', code: '674', iso: 'NR'},
//     {country: 'Nepal', code: '977', iso: 'NP'},
//     {country: 'Netherlands', code: '31', iso: 'NL'},
//     {country: 'Netherlands Antilles', code: '599', iso: 'AN'},
//     {country: 'New Caledonia', code: '687', iso: 'NC'},
//     {country: 'New Zealand', code: '64', iso: 'NZ'},
//     {country: 'Nicaragua', code: '505', iso: 'NI'},
//     {country: 'Niger', code: '227', iso: 'NE'},
//     {country: 'Nigeria', code: '234', iso: 'NG'},
//     {country: 'Niue', code: '683', iso: 'NU'},
//     {country: 'North Korea', code: '850', iso: 'KP'},
//     {country: 'Northern Mariana Islands', code: '1-670', iso: 'MP'},
//     {country: 'Norway', code: '47', iso: 'NO'},
//     {country: 'Oman', code: '968', iso: 'OM'},
//     {country: 'Pakistan', code: '92', iso: 'PK'},
//     {country: 'Palau', code: '680', iso: 'PW'},
//     {country: 'Palestine', code: '970', iso: 'PS'},
//     {country: 'Panama', code: '507', iso: 'PA'},
//     {country: 'Papua New Guinea', code: '675', iso: 'PG'},
//     {country: 'Paraguay', code: '595', iso: 'PY'},
//     {country: 'Peru', code: '51', iso: 'PE'},
//     {country: 'Philippines', code: '63', iso: 'PH'},
//     {country: 'Pitcairn', code: '64', iso: 'PN'},
//     {country: 'Poland', code: '48', iso: 'PL'},
//     {country: 'Portugal', code: '351', iso: 'PT'},
//     {country: 'Puerto Rico', code: '1-787, 1-939', iso: 'PR'},
//     {country: 'Qatar', code: '974', iso: 'QA'},
//     {country: 'Republic of the Congo', code: '242', iso: 'CG'},
//     {country: 'Reunion', code: '262', iso: 'RE'},
//     {country: 'Romania', code: '40', iso: 'RO'},
//     {country: 'Russia', code: '7', iso: 'RU'},
//     {country: 'Rwanda', code: '250', iso: 'RW'},
//     {country: 'Saint Barthelemy', code: '590', iso: 'BL'},
//     {country: 'Saint Helena', code: '290', iso: 'SH'},
//     {country: 'Saint Kitts and Nevis', code: '1-869', iso: 'KN'},
//     {country: 'Saint Lucia', code: '1-758', iso: 'LC'},
//     {country: 'Saint Martin', code: '590', iso: 'MF'},
//     {country: 'Saint Pierre and Miquelon', code: '508', iso: 'PM'},
//     {country: 'Saint Vincent and the Grenadines', code: '1-784', iso: 'VC'},
//     {country: 'Samoa', code: '685', iso: 'WS'},
//     {country: 'San Marino', code: '378', iso: 'SM'},
//     {country: 'Sao Tome and Principe', code: '239', iso: 'ST'},
//     {country: 'Saudi Arabia', code: '966', iso: 'SA'},
//     {country: 'Senegal', code: '221', iso: 'SN'},
//     {country: 'Serbia', code: '381', iso: 'RS'},
//     {country: 'Seychelles', code: '248', iso: 'SC'},

//   ];
//   const Dropdown = () => {
//     const [search, setSearch] = useState('');
//     const [clicked, setClicked] = useState(false);
//     const [data, setData] = useState(countries);
//     const [selectedCountry, setSelectedCountry] = useState('');
//     const searchRef = useRef();
//     const onSearch = search => {
//       if (search !== '') {
//         let tempData = data.filter(item => {
//           return item.country.toLowerCase().indexOf(search.toLowerCase()) > -1;
//         });
//         setData(tempData);
//       } else {
//         setData(countries);
//       }
//     };
//     return (
//       <View >
//         <TouchableOpacity
//           style={{
//             width: '80%',
//             height: 40,
//             borderRadius: 10,
//             borderWidth: 0.5,
//             alignSelf: 'center',
//             flexDirection: 'row',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//             paddingLeft: 15,
//             paddingRight: 15,
//           }}
//           onPress={() => {
//             setClicked(!clicked);
//           }}>
//           <Text style={{fontWeight:'600'}}>
//             {selectedCountry == '' ? 'Select Country' : selectedCountry}
//           </Text>
//           {clicked ? (
//             <Image
//               source={require('../images/upload.png')}
//               style={{width: 20, height: 20}}
//             />
//           ) : (
//             <Image
//               source={require('../images/dropdown.png')}
//               style={{width: 20, height: 20}}
//             />
//           )}
//         </TouchableOpacity>
//         {clicked ? (
//           <View
//             style={{
//               elevation: 5,
//               marginTop: 20,
//               height: 300,
//               alignSelf: 'center',
//               width: '80%',
//               backgroundColor: '#fff',
//               borderRadius: 10,
//             }}>
//             <TextInput
//               placeholder="Search.."
//               value={search}
//               ref={searchRef}
//               onChangeText={txt => {
//                 onSearch(txt);
//                 setSearch(txt);
//               }}
//               style={{
//                 width: '90%',
//                 height: 50,
//                 alignSelf: 'center',
//                 borderWidth: 0.2,
//                 borderColor: '#8e8e8e',
//                 borderRadius: 7,
//                 marginTop: 20,
//                 paddingLeft: 20,
//               }}
//             />
  
//             <FlatList
//               data={data}
//               renderItem={({item, index}) => {
//                 return (
//                   <TouchableOpacity
//                     style={{
//                       width: '85%',
//                       alignSelf: 'center',
//                       height: 50,
//                       justifyContent: 'center',
//                       borderBottomWidth: 0.5,
//                       borderColor: '#8e8e8e',
//                     }}
//                     onPress={() => {
//                       setSelectedCountry(item.country);
//                       setClicked(!clicked);
//                       onSearch('');
//                       setSearch('');
//                     }}>
//                     <Text style={{fontWeight: '600'}}>{item.country}</Text>
//                   </TouchableOpacity>
//                 );
//               }}
//             />
//           </View>
//         ) : null}
//       </View>
//     );
//   };
  
//   export default Dropdown;



import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import axios from 'axios';

const Dropdown = ({ onSelect }) => {
  const [clicked, setClicked] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://focusmore.codelive.info/api/category/list');
        setCategories(response.data.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

//   const handleCategorySelect = (category) => {
//     console.log('Selected category:', category);
//     setSelectedCategory(category);
//     onSelect && onSelect(category); // Ensure onSelect is a function before calling it
//   };

  return (
    <View>
      <TouchableOpacity
        style={{
          width: '79%',
          height: 40,
          borderRadius: 10,
          borderWidth: 0.5,
          alignSelf: 'center',

          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingLeft: 15,
          paddingRight: 15,
        }}
        onPress={() => {
          setClicked(!clicked);
        }}>
        <Text style={{ fontWeight: '600' }}>
          {selectedCategory === '' ? 'Select Category' : selectedCategory}
        </Text>
        {clicked ? (
          <Image
            source={require('../images/upload.png')}
            style={{ width: 20, height: 20 }}
          />
        ) : (
          <Image
            source={require('../images/dropdown.png')}
            style={{ width: 20, height: 20 }}
          />
        )}
      </TouchableOpacity>
      {clicked ? (
        <View
          style={{
            elevation: 5,
            marginTop: 20,
            height: 300,
            alignSelf: 'center',
            width: '80%',
            backgroundColor: '#fff',
            borderRadius: 10,
          }}>
          <FlatList
            data={categories}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  style={{
                    width: '85%',
                    alignSelf: 'center',
                    height: 50,
                    justifyContent: 'center',
                    borderBottomWidth: 0.5,
                    borderColor: '#8e8e8e',
                  }}
                  onPress={() => {
                    setSelectedCategory(item.type);
                    setClicked(false);
                    onSelect(item.type);
                    // handleCategorySelect(item.type);
                  }}>
                  <Text style={{ fontWeight: '600' }}>{item.type}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      ) : null}
    </View>
  );
};

export default Dropdown;
