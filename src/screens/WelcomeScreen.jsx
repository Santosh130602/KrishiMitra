// import React from 'react';
// import {
//   View,
//   Text,
//   ImageBackground,
//   TouchableOpacity,
//   StyleSheet,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';



// const WelcomeScreen = ({ navigation }) => {
//   return (
//     <ImageBackground
//       source={require('../assetes/images/splashImg.png')} 
//       style={styles.background}
//     >
//       {/* Gradient-like Overlay */}
//       <View style={styles.overlay}>

//         {/* Skip Button */}
//         <TouchableOpacity style={styles.skipButton} onPress={() => navigation.replace('home')}>
//           <Text style={styles.skipText}>Skip</Text>
//         </TouchableOpacity>

//         {/* Welcome Text */}
//         <Text style={styles.title}>Welcome to</Text>
//         <Text style={styles.brand}>AgriGrow</Text>

//         {/* Description */}
//         <Text style={styles.description}>
//           Make Easy Farming with fast delivery at your door.
//         </Text>

//         {/* Divider with text */}
//         <View style={styles.dividerContainer}>
//           <View style={styles.divider} />
//           <Text style={styles.signInText}>Sign in with</Text>
//           <View style={styles.divider} />
//         </View>

//         {/* Social Login Buttons */}
//         <View style={styles.socialButtons}>
//           <TouchableOpacity style={styles.socialButton} onPress={() => console.log('Facebook login')}>
//             <Icon name="facebook" size={20} color="#1877F2" />
//             <Text style={styles.socialText}>Facebook</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.socialButton} onPress={() => console.log('Google login')}>
//             <Icon name="google" size={20} color="#DB4437" />
//             <Text style={styles.socialText}>Google</Text>
//           </TouchableOpacity>
//         </View>

//         {/* Email & Phone Login */}
//         <TouchableOpacity style={styles.authButton} onPress={() => navigation.navigate('EmailSignUp')}>
//           <Text style={styles.authText}>Start with Email</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.authButton} onPress={() => navigation.navigate('PhoneSignUp')}>
//           <Text style={styles.authText}>Start with Phone</Text>
//         </TouchableOpacity>

//         {/* Already have an account */}
//         <Text style={styles.footerText}>
//           Already have an account?{' '}
//           <Text style={styles.signInLink} onPress={() => navigation.navigate('SignIn')}>
//             Sign In
//           </Text>
//         </Text>
//       </View>
//     </ImageBackground>
//   );
// };

// export default WelcomeScreen;

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     resizeMode: 'cover',
//   },
//   overlay: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingHorizontal: 20,
//     backgroundColor: 'rgba(0, 0, 0, 0.6)', // Simulating a gradient overlay
//   },
//   skipButton: {
//     position: 'absolute',
//     top: 50,
//     right: 20,
//     backgroundColor: 'white',
//     paddingHorizontal: 15,
//     paddingVertical: 5,
//     borderRadius: 20,
//   },
//   skipText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#00A300',
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: 'white',
//   },
//   brand: {
//     fontSize: 40,
//     fontWeight: 'bold',
//     color: '#00FF00', // Neon Green
//   },
//   description: {
//     fontSize: 16,
//     color: 'white',
//     textAlign: 'center',
//     marginVertical: 20,
//   },
//   dividerContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 10,
//   },
//   divider: {
//     flex: 1,
//     height: 1,
//     backgroundColor: 'white',
//   },
//   signInText: {
//     color: 'white',
//     fontSize: 14,
//     marginHorizontal: 10,
//   },
//   socialButtons: {
//     flexDirection: 'row',
//     marginVertical: 10,
//   },
//   socialButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: 'white',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 25,
//     marginHorizontal: 10,
//   },
//   socialText: {
//     marginLeft: 8,
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   authButton: {
//     width: '80%',
//     paddingVertical: 12,
//     borderWidth: 1,
//     borderColor: 'white',
//     borderRadius: 25,
//     alignItems: 'center',
//     marginVertical: 10,
//   },
//   authText: {
//     color: 'white',
//     fontSize: 16,
//   },
//   footerText: {
//     marginTop: 20,
//     color: 'white',
//     fontSize: 14,
//   },
//   signInLink: {
//     color: 'white',
//     fontWeight: 'bold',
//     textDecorationLine: 'underline',
//   },
// });




import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

const WelcomeScreen = ({ navigation }) => {
    return (
        <ImageBackground
            source={require('../assetes/images/skipImg.jpeg')}
            style={styles.background}
        >
            {/* Gradient Overlay */}
            <LinearGradient colors={['rgba(107, 40, 34, 0.5)', 'rgba(39, 48, 42, 0.6)', 'rgba(34, 112, 55, 0.7)']} style={styles.overlay}>

                {/* Skip Button */}
                <TouchableOpacity style={styles.skipButton} onPress={() => navigation.replace('UserBottomTab')}>
                    <Text style={styles.skipText}>Skip</Text>
                </TouchableOpacity>

                {/* Welcome Text */}
                <View style={styles.welcomText}>
                    <Text style={styles.title}>Welcome to</Text>
                    <Text style={styles.brand}>AgriGrow</Text>
                </View>

                {/* Description */}
                <Text style={styles.description}>
                    Make Easy Farming with fast {'\n'} delivery at your door.
                </Text>

                {/* Divider with text */}
                <View style={styles.dividerContainer}>
                    <View style={styles.divider} />
                    <Text style={styles.signInText}>Sign in with</Text>
                    <View style={styles.divider} />
                </View>

                {/* Social Login Buttons */}
                <View style={styles.socialButtons}>
                    <TouchableOpacity style={styles.socialButton} onPress={() => console.log('Facebook login')}>
                        <Icon name="facebook" size={20} color="#1877F2" />
                        <Text style={styles.socialText}>Facebook</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialButton} onPress={() => console.log('Google login')}>
                        <Icon name="google" size={20} color="#DB4437" />
                        <Text style={styles.socialText}>Google</Text>
                    </TouchableOpacity>
                </View>

                {/* Email & Phone Login */}
                <TouchableOpacity style={styles.authButton} onPress={() => navigation.navigate('SignIn')}>
                    <Text style={styles.authText}>Start with Email</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.authButton} onPress={() => navigation.navigate('PhoneLogin')}>
                    <Text style={styles.authText}>Start with Phone</Text>
                </TouchableOpacity>

                {/* Already have an account */}
                <Text style={styles.footerText}>
                    Already have an account?{' '}
                    <Text style={styles.signInLink} onPress={() => navigation.navigate('Login')}>
                        Login
                    </Text>
                </Text>
            </LinearGradient>
        </ImageBackground>
    );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover', 
    },

    overlay: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // paddingHorizontal: 20,
    },
    skipButton: {
        position: 'absolute',
        top: 50,
        right: 20,
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 20,
    },
    skipText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#00A300',
    },
    // welcomText: {
    //     textAlign: 'left',
    //     marginBottom: 180,

    // },
    welcomText: {
        textAlign: 'left',
        marginBottom: 150, 
        alignSelf: 'flex-start', 
        padding:35,
        marginLeft: 20, 
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'white',
    },
    brand: {
        fontSize: 55,
        fontWeight: 'bold',
        color: '#0DFF4D',
    },
    // description: {
    //     fontSize: 18,
    //     color: 'white',
    //     textAlign: 'left',
    //     marginVertical: 20,
    // },
    description: {
        fontSize: 18,
        color: 'white',
        textAlign: 'left', 
        padding:35,
        alignSelf: 'flex-start', 
        marginLeft: 20, 
    },
    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom:20,
        // marginVertical: 20,
    },
    divider: {
        flex: 1,
        height: 1,
        backgroundColor: 'rgba(255,255,255,0.5)',
    },
    signInText: {
        color: 'white',
        fontSize: 14,
        marginHorizontal: 10,
    },
    socialButtons: {
        flexDirection: 'row',
        marginVertical: 10,
    },
    socialButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 25,
        marginHorizontal: 10,
    },
    socialText: {
        marginLeft: 8,
        fontSize: 16,
        fontWeight: 'bold',
    },
    authButton: {
        width: '80%',
        paddingVertical: 12,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 25,
        alignItems: 'center',
        marginVertical: 10,
    },
    authText: {
        color: 'white',
        fontSize: 16,
    },
    footerText: {
        marginTop: 20,
        color: 'white',
        fontSize: 14,
    },
    signInLink: {
        color: 'white',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
});









