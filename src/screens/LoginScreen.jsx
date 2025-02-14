import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import DecorativeCircles from "../components/common/DecorativeCircles";
import Icon from "react-native-vector-icons/FontAwesome";
import FeatherIcon from "react-native-vector-icons/Feather";

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View style={styles.container}>
            <DecorativeCircles />
            <Text style={styles.title}>Login</Text>

         
            <Text style={styles.label}>E-mail</Text>
            <TextInput
                style={styles.input}
                placeholder="Your email or phone"
                placeholderTextColor="#aaa"
                onChangeText={setEmail}
                value={email}
            />

            <Text style={styles.label}>Password</Text>
            <View style={styles.passwordContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#aaa"
                    secureTextEntry={!showPassword}
                    onChangeText={setPassword}
                    value={password}
                />
                <TouchableOpacity
                    style={styles.eyeIcon}
                    onPress={() => setShowPassword(!showPassword)}
                >
                    <FeatherIcon
                        name={showPassword ? "eye-off" : "eye"}
                        size={20}
                        color="gray"
                    />
                </TouchableOpacity>
            </View>

            {/* Forgot Password */}
            <TouchableOpacity onPress={() => navigation.navigate("resetpassword")}>
                <Text style={styles.forgotPassword}>Forgot password?</Text>
            </TouchableOpacity>

            {/* Login Button */}
            <TouchableOpacity
                style={styles.loginButton}
                onPress={() => alert("Login Pressed")} // Replace with actual login logic
            >
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>

            {/* Sign Up Link */}
            <Text style={styles.signUpText}>
                Don’t have an account?{" "}
                <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
                    <Text style={styles.signUpLink}>Sign Up</Text>
                </TouchableOpacity>
            </Text>

            {/* Social Login */}
            {/* <Text style={styles.socialText}>Sign in with</Text> */}

            <View style={styles.socialContainer}>
                <View style={styles.divider} />
                <Text style={styles.socialText}>Sign up with</Text>
                <View style={styles.divider} />
            </View>

            <View style={styles.socialButtons}>
                {/* Facebook Button */}
                <TouchableOpacity style={[styles.socialButton, styles.facebookButton]}>
                    <Icon name="facebook" size={24} color="#3b5998" />
                    <Text style={styles.socialButtonText}>Facebook</Text>
                </TouchableOpacity>

                {/* Google Button */}
                <TouchableOpacity style={[styles.socialButton, styles.googleButton]}>
                    <Icon name="google" size={24} color="#db4a39" />
                    <Text style={styles.socialButtonText}>Google</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 20,
        paddingTop: 80,
    },
    title: {
        fontSize: 36,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
    },
    label: {
        fontSize: 14,
        color: "gray",
        marginBottom: 5,
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        paddingHorizontal: 15,
        fontSize: 16,
        backgroundColor: "#F9F9F9",
        marginBottom: 30,
    },
    passwordContainer: {
        position: "relative",
    },
    eyeIcon: {
        position: "absolute",
        right: 15,
        top: 15,
    },
    forgotPassword: {
        color: "#4CAF50",
        textAlign: "center",
        marginBottom: 20,
        fontSize: 14,
    },
    loginButton: {
        backgroundColor: "#4CAF50",
        height: 50,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
    },
    loginText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
    signUpText: {
        textAlign: "center",
        fontSize: 14,
        color: "gray",
    },
    signUpLink: {
        color: "#4CAF50",
        fontWeight: "bold",

    },
    socialContainer: {
        marginTop: '20%',
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },
    divider: {
        flex: 1,
        height: 1,
        backgroundColor: "#ddd",
    },
    socialText: {
        marginHorizontal: 10,
        color: "#888",
        fontSize: 16,
        marginVertical: 15,
    },

    socialButtons: {
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    socialButton: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 16,
        width: "45%",
        justifyContent: "center",
    },
    facebookButton: {
        borderColor: "#3b5998",
    },
    googleButton: {
        borderColor: "#db4a39",
    },
    socialButtonText: {
        marginLeft: 10,
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default LoginScreen;
