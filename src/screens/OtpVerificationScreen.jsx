import React, { useState, useRef } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import DecorativeCircles from "../components/common/DecorativeCircles";

const OtpVerificationScreen = ({ navigation }) => {
    const [otp, setOtp] = useState(["", "", "", ""]);
    const inputRefs = [useRef(), useRef(), useRef(), useRef()];

    const handleOtpChange = (value, index) => {
        if (isNaN(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Move to the next input field
        if (value && index < 3) {
            inputRefs[index + 1].current.focus();
        }
    };

    const handleBackspace = (index) => {
        if (index > 0 && otp[index] === "") {
            inputRefs[index - 1].current.focus();
        }
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
                <Text style={styles.heading}>Verification Code</Text>
                <Text style={styles.subtext}>Please type the verification code sent {'\n'} to trytempll@gmail.com</Text>

                {/* OTP Input Fields */}
                <View style={styles.otpContainer}>
                    {otp.map((digit, index) => (
                        <TextInput
                            key={index}
                            ref={inputRefs[index]}
                            style={[styles.otpInput, digit ? styles.otpFilled : null]}
                            keyboardType="number-pad"
                            maxLength={1}
                            value={digit}
                            onChangeText={(value) => handleOtpChange(value, index)}
                            onKeyPress={({ nativeEvent }) => {
                                if (nativeEvent.key === "Backspace") {
                                    handleBackspace(index);
                                }
                            }}
                        />
                    ))}
                </View>

                {/* Resend Link */}
                {/* <Text style={styles.resendText}>
          I don’t receive a code!{" "}
          <TouchableOpacity>
          <Text style={styles.resendLink} onPress={() => console.log("Resend OTP")}>
            Please resend
          </Text>
          </TouchableOpacity>
        </Text> */}
                <View style={styles.resendContainer}>
                    <Text style={styles.resendText}>I don’t receive a code! 

                    <TouchableOpacity onPress={() => console.log("Resend OTP")}>
                        <Text style={styles.resendLink}> Please resend</Text>
                    </TouchableOpacity>
                    </Text>
                </View>

            </View>
        </SafeAreaView>
    );
};

export default OtpVerificationScreen;

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: "#F9F9F9",
    },
    container: {
        flex: 1,
        // justifyContent: "center",
        alignItems: "center",
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
        fontSize: 24,
        color: "#333",
    },
    heading: {
        fontSize: 40,
        // fontWeight: 'bold',
        color: '#222',
        marginTop: 120,
        marginBottom: 20,

        textAlign: 'left',
    },
    subtext: {
        fontSize: 16,
        color: "#666",
        marginBottom: 60,
        marginLeft: -30,
        textAlign: "left",
    },
    otpContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "80%",
        marginBottom: 20,
    },
    otpInput: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        fontSize: 24,
        textAlign: "center",
        backgroundColor: "#fff",
    },
    otpFilled: {
        borderColor: "#3EB489",
    },
    resendText: {
        fontSize: 14,
        color: "#666",
    },
    resendLink: {
        color: "#3EB489",
        fontWeight: "bold",
    },
});
