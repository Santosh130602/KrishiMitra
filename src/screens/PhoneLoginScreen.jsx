// import React from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// import DecorativeCircles from '../components/common/DecorativeCircles';

// const PhoneLoginScreen = () => {
//     return (

//         <View>
//             <DecorativeCircles/>

//             <View style={styles.container}>


//                 {/* Back Button */}
//                 <TouchableOpacity style={styles.backButton}>
//                     <Text style={styles.backButtonText}>←</Text>
//                 </TouchableOpacity>

//                 {/* Heading */}
//                 <Text style={styles.heading}>Enter your Phone Number</Text>
//                 <Text style={styles.subtext}>
//                     Please enter your mobile number to continue
//                 </Text>

//                 {/* Phone Number Input */}
//                 <TextInput
//                     style={styles.input}
//                     placeholder="+91 1234567890"
//                     keyboardType="phone-pad"
//                     placeholderTextColor="#888"
//                 />

//                 {/* Submit Button */}
//                 <TouchableOpacity style={styles.button}>
//                     <Text style={styles.buttonText}>CONTINUE</Text>
//                 </TouchableOpacity>
//             </View>
//         </View>
//     );
// };

// export default PhoneLoginScreen;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#F9F9F9',
//         justifyContent: 'center',
//         alignItems: 'center',
//         paddingHorizontal: 20,
//     },
//     circleTopLeft: {
//         position: 'absolute',
//         top: -50,
//         left: -50,
//         width: 120,
//         height: 120,
//         backgroundColor: '#FF9A8B',
//         borderRadius: 60,
//     },
//     circleTopRight: {
//         position: 'absolute',
//         top: -40,
//         right: -40,
//         width: 100,
//         height: 100,
//         backgroundColor: '#66D17F',
//         borderRadius: 50,
//     },
//     backButton: {
//         position: 'absolute',
//         top: 60,
//         left: 20,
//         padding: 10,
//     },
//     backButtonText: {
//         fontSize: 24,
//         color: '#333',
//     },
//     heading: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         color: '#222',
//         marginBottom: 10,
//         textAlign: 'center',
//     },
//     subtext: {
//         fontSize: 14,
//         color: '#666',
//         marginBottom: 20,
//         textAlign: 'center',
//     },
//     input: {
//         width: '90%',
//         height: 50,
//         borderWidth: 1,
//         borderColor: '#ccc',
//         borderRadius: 8,
//         paddingHorizontal: 15,
//         fontSize: 18,
//         backgroundColor: '#fff',
//         marginBottom: 20,
//     },
//     button: {
//         width: '90%',
//         height: 50,
//         backgroundColor: '#3EB489',
//         borderRadius: 25,
//         justifyContent: 'center',
//         alignItems: 'center',
//         shadowColor: '#3EB489',
//         shadowOffset: { width: 0, height: 3 },
//         shadowOpacity: 0.3,
//         shadowRadius: 5,
//         elevation: 5, // Android shadow
//     },
//     buttonText: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         color: '#fff',
//     },
// });


import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import DecorativeCircles from '../components/common/DecorativeCircles';

const PhoneLoginScreen = ({ navigation }) => {
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleContinue = () => {
        console.log('Phone Number:', phoneNumber);
        // Navigate to OTP verification screen if needed
        navigation.navigate('OtpScreen', { phoneNumber });
    };

    return (
        <SafeAreaView style={styles.safeContainer}>
            <DecorativeCircles />
            
            <View style={styles.container}>
                {/* Back Button */}
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Text style={styles.backButtonText}> 👈 </Text>
                </TouchableOpacity>

                {/* Heading */}
                <Text style={styles.heading}>Registration</Text>
                <Text style={styles.subtext}>Enter your phone number to verify {'\n'} your account</Text>

                {/* Phone Number Input */}
                <TextInput
                    style={styles.input}
                    placeholder="(+91) 972-585-3396"
                    keyboardType="phone-pad"
                    placeholderTextColor="#222"
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                />

                {/* Submit Button */}
                <TouchableOpacity style={styles.button} onPress={handleContinue}>
                    <Text style={styles.buttonText}>SEND</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default PhoneLoginScreen;

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: '#f7f2f2',
    },
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    backButton: {
        position: 'absolute',
        top: 1,
        left: 40,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 15,
    },
    backButtonText: {
        fontSize: 25,
        color: '#333',
    },
   heading: {
        fontSize: 40,
        // fontWeight: 'bold',
        color: '#222',
        marginTop: 120,
        marginBottom: 20,
        marginLeft: -60,
        textAlign: 'left',
    },
    subtext: {
        fontSize: 16,
        color: "#666",
        marginBottom: 60,
        marginLeft: -30,
        textAlign: "left",
    },
    input: {
        width: '80%',
        height: 50,
        borderWidth: 1,
        borderColor: '#3EB489',
        borderRadius: 8,
        paddingHorizontal: 15,
        fontSize: 18,
        backgroundColor: '#fff',
        marginBottom: 40,
        textAlign: 'center',
    },
    button: {
        width: '60%',
        height: 50,
        backgroundColor: '#4CAF50',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#4CAF50',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5, // Android shadow
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
});
