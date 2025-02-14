
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import HeaderComponent from '../components/special/headerComponent';
import MapView, { Marker } from 'react-native-maps';
import {Picker} from '@react-native-picker/picker';

import MapComponent from '../components/special/mapComponent';


// Sample Data for Dropdowns
const countryList = [
    { label: 'India', value: 'india' },
    
];

const stateList = {
    india: [
        { label: 'Andhra Pradesh', value: 'andhra_pradesh' },
        { label: 'Arunachal Pradesh', value: 'arunachal_pradesh' },
        { label: 'Assam', value: 'assam' },
        { label: 'Bihar', value: 'bihar' },
        { label: 'Chhattisgarh', value: 'chhattisgarh' },
        { label: 'Goa', value: 'goa' },
        { label: 'Gujarat', value: 'gujarat' },
        { label: 'Haryana', value: 'haryana' },
        { label: 'Himachal Pradesh', value: 'himachal_pradesh' },
        { label: 'Jharkhand', value: 'jharkhand' },
        { label: 'Karnataka', value: 'karnataka' },
        { label: 'Kerala', value: 'kerala' },
        { label: 'Madhya Pradesh', value: 'madhya_pradesh' },
        { label: 'Maharashtra', value: 'maharashtra' },
        { label: 'Manipur', value: 'manipur' },
        { label: 'Meghalaya', value: 'meghalaya' },
        { label: 'Mizoram', value: 'mizoram' },
        { label: 'Nagaland', value: 'nagaland' },
        { label: 'Odisha', value: 'odisha' },
        { label: 'Punjab', value: 'punjab' },
        { label: 'Rajasthan', value: 'rajasthan' },
        { label: 'Sikkim', value: 'sikkim' },
        { label: 'Tamil Nadu', value: 'tamil_nadu' },
        { label: 'Telangana', value: 'telangana' },
        { label: 'Tripura', value: 'tripura' },
        { label: 'Uttar Pradesh', value: 'uttar_pradesh' },
        { label: 'Uttarakhand', value: 'uttarakhand' },
        { label: 'West Bengal', value: 'west_bengal' },
        { label: 'Delhi', value: 'delhi' },
        { label: 'Jammu & Kashmir', value: 'jammu_kashmir' },
        { label: 'Ladakh', value: 'ladakh' },
        { label: 'Andaman & Nicobar Islands', value: 'andaman_nicobar' },
        { label: 'Chandigarh', value: 'chandigarh' },
        { label: 'Dadra & Nagar Haveli and Daman & Diu', value: 'dadra_nagar_haveli_daman_diu' },
        { label: 'Lakshadweep', value: 'lakshadweep' },
        { label: 'Puducherry', value: 'puducherry' },
    ]
};

const districtList = {
    andhra_pradesh: [
        { label: 'Visakhapatnam', value: 'visakhapatnam' },
        { label: 'Vijayawada', value: 'vijayawada' },
    ],
    arunachal_pradesh: [
        { label: 'Itanagar', value: 'itanagar' },
        { label: 'Tawang', value: 'tawang' },
    ],
    assam: [
        { label: 'Guwahati', value: 'guwahati' },
        { label: 'Dibrugarh', value: 'dibrugarh' },
    ],
    bihar: [
        { label: 'Patna', value: 'patna' },
        { label: 'Gaya', value: 'gaya' },
    ],
    chhattisgarh: [
        { label: 'Raipur', value: 'raipur' },
        { label: 'Bilaspur', value: 'bilaspur' },
    ],
    goa: [
        { label: 'Panaji', value: 'panaji' },
        { label: 'Margao', value: 'margao' },
    ],
    gujarat: [
        { label: 'Ahmedabad', value: 'ahmedabad' },
        { label: 'Surat', value: 'surat' },
    ],
    haryana: [
        { label: 'Gurgaon', value: 'gurgaon' },
        { label: 'Faridabad', value: 'faridabad' },
    ],
    himachal_pradesh: [
        { label: 'Shimla', value: 'shimla' },
        { label: 'Manali', value: 'manali' },
    ],
    jharkhand: [
        { label: 'Ranchi', value: 'ranchi' },
        { label: 'Jamshedpur', value: 'jamshedpur' },
    ],
    karnataka: [
        { label: 'Bangalore', value: 'bangalore' },
        { label: 'Mysore', value: 'mysore' },
    ],
    kerala: [
        { label: 'Thiruvananthapuram', value: 'thiruvananthapuram' },
        { label: 'Kochi', value: 'kochi' },
    ],
    madhya_pradesh: [
        { label: 'Bhopal', value: 'bhopal' },
        { label: 'Indore', value: 'indore' },
    ],
    maharashtra: [
        { label: 'Mumbai', value: 'mumbai' },
        { label: 'Pune', value: 'pune' },
    ],
    manipur: [
        { label: 'Imphal', value: 'imphal' },
    ],
    meghalaya: [
        { label: 'Shillong', value: 'shillong' },
    ],
    mizoram: [
        { label: 'Aizawl', value: 'aizawl' },
    ],
    nagaland: [
        { label: 'Kohima', value: 'kohima' },
    ],
    odisha: [
        { label: 'Bhubaneswar', value: 'bhubaneswar' },
        { label: 'Cuttack', value: 'cuttack' },
    ],
    punjab: [
        { label: 'Amritsar', value: 'amritsar' },
        { label: 'Ludhiana', value: 'ludhiana' },
    ],
    rajasthan: [
        { label: 'Jaipur', value: 'jaipur' },
        { label: 'Udaipur', value: 'udaipur' },
    ],
    sikkim: [
        { label: 'Gangtok', value: 'gangtok' },
    ],
    tamil_nadu: [
        { label: 'Chennai', value: 'chennai' },
        { label: 'Coimbatore', value: 'coimbatore' },
    ],
    telangana: [
        { label: 'Hyderabad', value: 'hyderabad' },
    ],
    tripura: [
        { label: 'Agartala', value: 'agartala' },
    ],
    uttar_pradesh: [
        { label: 'Lucknow', value: 'lucknow' },
        { label: 'Varanasi', value: 'varanasi' },
    ],
    uttarakhand: [
        { label: 'Dehradun', value: 'dehradun' },
        { label: 'Haridwar', value: 'haridwar' },
    ],
    west_bengal: [
        { label: 'Kolkata', value: 'kolkata' },
        { label: 'Darjeeling', value: 'darjeeling' },
    ],
    delhi: [
        { label: 'New Delhi', value: 'new_delhi' },
        { label: 'South Delhi', value: 'south_delhi' },
    ],
    jammu_kashmir: [
        { label: 'Srinagar', value: 'srinagar' },
        { label: 'Jammu', value: 'jammu' },
    ],
    ladakh: [
        { label: 'Leh', value: 'leh' },
    ],
    andaman_nicobar: [
        { label: 'Port Blair', value: 'port_blair' },
    ],
    chandigarh: [
        { label: 'Chandigarh', value: 'chandigarh' },
    ],
    lakshadweep: [
        { label: 'Kavaratti', value: 'kavaratti' },
    ],
    puducherry: [
        { label: 'Puducherry', value: 'puducherry' },
    ],
};


const AddressScreen = () => {
    const [country, setCountry] = useState(null);
    const [state, setState] = useState(null);
    const [district, setDistrict] = useState(null);
    const [location, setLocation] = useState({
        latitude: 28.6139, // Default (Delhi, India)
        longitude: 77.2090,
    });

    const handleSearch = () => {
        alert(`Selected Location:\nCountry: ${country}\nState: ${state}\nDistrict: ${district}`);
    };

    return (
        <View style={styles.container}>
            <HeaderComponent />

            {/* Google Map */}
            <MapComponent/>
            {/* <MapView
                style={styles.map}
                initialRegion={{
                    latitude: location.latitude,
                    longitude: location.longitude,
                    latitudeDelta: 0.1,
                    longitudeDelta: 0.1,
                }}
            >
                <Marker coordinate={location} title="Selected Location" />
            </MapView> */}

            {/* Dropdowns */}
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Select Country</Text>
                <Picker
                    selectedValue={country}
                    onValueChange={(value) => {
                        setCountry(value);
                        setState(null);
                        setDistrict(null);
                    }}
                    style={styles.picker}
                >
                    <Picker.Item label="Select Country" value={null} />
                    {countryList.map((item) => (
                        <Picker.Item key={item.value} label={item.label} value={item.value} />
                    ))}
                </Picker>

                {country && (
                    <>
                        <Text style={styles.label}>Select State</Text>
                        <Picker
                            selectedValue={state}
                            onValueChange={(value) => {
                                setState(value);
                                setDistrict(null);
                            }}
                            style={styles.picker}
                        >
                            <Picker.Item label="Select State" value={null} />
                            {(stateList[country] || []).map((item) => (
                                <Picker.Item key={item.value} label={item.label} value={item.value} />
                            ))}
                        </Picker>
                    </>
                )}

                {state && (
                    <>
                        <Text style={styles.label}>Select District</Text>
                        <Picker
                            selectedValue={district}
                            onValueChange={(value) => setDistrict(value)}
                            style={styles.picker}
                        >
                            <Picker.Item label="Select District" value={null} />
                            {(districtList[state] || []).map((item) => (
                                <Picker.Item key={item.value} label={item.label} value={item.value} />
                            ))}
                        </Picker>
                    </>
                )}

                {/* Search Button */}
                <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
                    <Text style={styles.searchButtonText}>Search</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
   

};

export default AddressScreen;

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    map: {
        width: '100%',
        height: 250,
    },
    inputContainer: {
        padding: 20,
        backgroundColor: '#fff',
        margin: 20,
        borderRadius: 10,
        elevation: 3,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#162D5C',
        marginBottom: 5,
    },
    picker: {
        height: 50,
        width: '100%',
        backgroundColor: '#f5f5f5',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 10,
    },
    searchButton: {
        marginTop: 20,
        backgroundColor: '#162D5C',
        paddingVertical: 12,
        borderRadius: 5,
        alignItems: 'center',
    },
    searchButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
