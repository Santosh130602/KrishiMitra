

import React from "react";
import { View, StyleSheet } from "react-native";

const DecorativeCircles = () => {
    return (
        <View style={styles.container}>
            {/* Left Side - Half Orange Circle */}
            <View style={[styles.halfCircle, styles.greenCircle, styles.leftGreen]} />
            <View style={[styles.halfCircle, styles.orangeCircle, styles.leftHalf]} >
                <View style={styles.innerWhiteCircle} />
            </View>

            {/* Right Side - Half Orange Circle */}
            {/* <View style={[styles.halfCircle, styles.orangeCircle, styles.rightHalf]} /> */}

            {/* Top - Half Green Circles */}
            <View style={[styles.halfCircle, styles.greenCircle, styles.rightGreen]} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 80, // Adjust height based on your design
        position: "relative",
        // overflow: "hidden",
    },
    halfCircle: {
        position: "absolute",
        borderRadius: 100, 
        justifyContent: "center",
        alignItems: "center",
    },
    orangeCircle: {
        backgroundColor: "#F4A07C", // Orange color
    },
    greenCircle: {
        backgroundColor: "#4CAF50", // Green color
    },
    leftHalf: {
        width: 100,
        height: 100, // Half the height
        left: -60, // Moves it outside the screen
        top: -10,
        borderTopLeftRadius: 100,
        borderBottomLeftRadius: 100,
    },
    rightHalf: {
        width: 100,
        height: 100, // Half the height
        right: -50, // Moves it outside the screen
        top: 15,
        borderTopRightRadius: 100,
        borderBottomRightRadius: 100,
    },
    leftGreen: {
        width: 150,
        height: 150, // Taller than wide for half effect
        left: -20,
        top: -120,
        borderTopLeftRadius: 100,
        borderTopRightRadius: 100,
    },
    rightGreen: {
        width: 150,
        height: 150, // Taller than wide for half effect
        right: -60,
        top: -100,
        borderTopLeftRadius: 100,
        borderTopRightRadius: 100,
    },
    innerWhiteCircle: {
        width: 35,
        height: 35,
        borderRadius: 20, // Makes it circular
        backgroundColor: "white",
    },
});

export default DecorativeCircles;

