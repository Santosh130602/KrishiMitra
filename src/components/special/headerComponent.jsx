
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DecorativeCircles from '../common/DecorativeCircles';

const HeaderComponent = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.headercs}>
            {/* Background DecorativeCircles */}
            <DecorativeCircles />

            {/* Transparent Header with Overlapping Effect */}
            <View style={styles.container}>
                <Text style={styles.title}>Agri Grow</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <Image
                        source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
                        style={styles.profileImage}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default HeaderComponent;

// Styles
const styles = StyleSheet.create({
    headercs:{
        marginBottom:20,
        backgroundColor:'#ffff',
        height:110,
        borderEndEndRadius:10,
        borderBottomLeftRadius:10,
        // borderWidth:1,
        

    },
    container: {
        position: 'absolute', // Floating over DecorativeCircles
        top: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 20,
        backgroundColor: 'transparent', // Transparent background
        marginBottom: 10, // Space below the header

        // Border only at the bottom
        // borderBottomWidth: 1,
        shadowColor:'black',
        shadowRadius:15,
        
        borderBottomColor: '#ccc',

        // Shadow only at the bottom
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 6 }, // Moves shadow to bottom
                shadowOpacity: 0.2,
                shadowRadius: 4,
            },
            android: {
                elevation: 0, // Adds shadow on Android
            },
        }),
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333', // Ensures visibility over DecorativeCircles
    },
    profileImage: {
        width: 60,
        height: 60,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#007bff',
    },
});





// import React, { useRef } from 'react';
// import { View, Text, Image, TouchableOpacity, StyleSheet, Animated, Platform } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// import DecorativeCircles from '../common/DecorativeCircles';
// import { useEffect } from 'react';

// const HeaderComponent = ({ scrollY }) => {
//     const navigation = useNavigation();

//     // Animated value for header position
//     const headerTranslateY = useRef(new Animated.Value(0)).current;

//     useEffect(() => {
//         scrollY.addListener(({ value }) => {
//             Animated.timing(headerTranslateY, {
//                 toValue: value > 50 ? -110 : 0, // Move header up when scrolling down
//                 duration: 300, // Smooth transition
//                 useNativeDriver: true,
//             }).start();
//         });

//         return () => {
//             scrollY.removeAllListeners();
//         };
//     }, [scrollY]);

//     return (
//         <Animated.View style={[styles.headercs, { transform: [{ translateY: headerTranslateY }] }]}>
//             {/* Background DecorativeCircles */}
//             <DecorativeCircles />

//             {/* Transparent Header with Overlapping Effect */}
//             <View style={styles.container}>
//                 <Text style={styles.title}>Agri Grow</Text>
//                 <TouchableOpacity onPress={() => navigation.navigate('UserProfile')}>
//                     <Image
//                         source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
//                         style={styles.profileImage}
//                     />
//                 </TouchableOpacity>
//             </View>
//         </Animated.View>
//     );
// };

// export default HeaderComponent;

// // Styles
// const styles = StyleSheet.create({
//     headercs: {
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         right: 0,
//         zIndex: 1000,
//         backgroundColor: '#ffff',
//         height: 110,
//         borderBottomEndRadius: 10,
//         borderBottomLeftRadius: 10,
//         shadowColor: 'black',
//         shadowRadius: 15,
//         elevation: 5,
//     },
//     container: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         paddingHorizontal: 15,
//         paddingVertical: 20,
//         backgroundColor: 'transparent',
//         shadowColor: '#000',
//         borderBottomColor: '#ccc',
//         ...Platform.select({
//             ios: {
//                 shadowOffset: { width: 0, height: 6 },
//                 shadowOpacity: 0.2,
//                 shadowRadius: 4,
//             },
//             android: {
//                 elevation: 3,
//             },
//         }),
//     },
//     title: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         color: '#333',
//     },
//     profileImage: {
//         width: 60,
//         height: 60,
//         borderRadius: 15,
//         borderWidth: 2,
//         borderColor: '#007bff',
//     },
// });


// import React from 'react';
// import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import Animated, { useAnimatedStyle, useSharedValue, useAnimatedScrollHandler, withTiming } from 'react-native-reanimated';
// import DecorativeCircles from '../common/DecorativeCircles';

// const HeaderComponent = ({ scrollY }) => {
//     const navigation = useNavigation();

//     // Animated Style for hiding/showing the header
//     const animatedHeaderStyle = useAnimatedStyle(() => {
//         return {
//             transform: [{ translateY: withTiming(scrollY.value > 50 ? -110 : 0, { duration: 300 }) }],
//         };
//     });

//     return (
//         <Animated.View style={[styles.headercs, animatedHeaderStyle]}>
//             <DecorativeCircles />
//             <View style={styles.container}>
//                 <Text style={styles.title}>Agri Grow</Text>
//                 <TouchableOpacity onPress={() => navigation.navigate('UserProfile')}>
//                     <Image
//                         source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
//                         style={styles.profileImage}
//                     />
//                 </TouchableOpacity>
//             </View>
//         </Animated.View>
//     );
// };

// export default HeaderComponent;

// // Styles
// const styles = StyleSheet.create({
//     headercs: {
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         right: 0,
//         zIndex: 1000,
//         backgroundColor: '#ffff',
//         height: 110,
//         borderBottomEndRadius: 10,
//         borderBottomLeftRadius: 10,
//         elevation: 5,
//     },
//     container: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         paddingHorizontal: 15,
//         paddingVertical: 20,
//     },
//     title: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         color: '#333',
//     },
//     profileImage: {
//         width: 60,
//         height: 60,
//         borderRadius: 15,
//         borderWidth: 2,
//         borderColor: '#007bff',
//     },
// });
