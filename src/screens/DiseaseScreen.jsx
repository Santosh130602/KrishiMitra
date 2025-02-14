import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, Alert, ScrollView } from "react-native";
import * as ImagePicker from "react-native-image-picker";
import HeaderComponent from "../components/special/headerComponent";

const DiseaseScreen = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    // Function to pick an image
    const pickImage = () => {
        ImagePicker.launchImageLibrary(
            { mediaType: "photo", quality: 1 },
            (response) => {
                if (response.didCancel) {
                    Alert.alert("Cancelled", "Image selection cancelled.");
                } else if (response.errorMessage) {
                    Alert.alert("Error", response.errorMessage);
                } else if (response.assets && response.assets.length > 0) {
                    setSelectedImage(response.assets[0].uri);
                }
            }
        );
    };

    return (
        <View style={styles.screen}>
            <HeaderComponent />

            <ScrollView contentContainerStyle={styles.container}>
                {/* Header */}
                <Text style={styles.header}>
                    Upload your image to get the <Text style={styles.highlight}>disease</Text> prediction
                </Text>
                

                {/* Language Selection */}
                {/* <Text style={styles.subHeader}>Please select a language, default language is English</Text> */}
                {/* <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>ENGLISH</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>HINDI</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>SPANISH</Text></TouchableOpacity>
                </View> */}

                {/* File Upload Section */}
                <Text style={styles.label}>Select Image:</Text>
                <TouchableOpacity style={styles.fileButton} onPress={pickImage}>
                    <Text style={styles.fileButtonText}>Choose File</Text>
                </TouchableOpacity>

                {/* Upload Button */}
                <TouchableOpacity style={styles.uploadButton}>
                    <Text style={styles.uploadButtonText}>GET UPLOAD</Text>
                </TouchableOpacity>

                {/* Uploaded Image Preview */}
                {selectedImage && (
                    <View style={styles.imageContainer}>
                        <Text style={styles.label}>Uploaded Image:</Text>
                        <Image source={{ uri: selectedImage }} style={styles.uploadedImage} />
                    </View>
                )}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#F5F5F5",
    },
    container: {
        alignItems: "center",
        padding: 20,
    },
    header: {
        fontSize: 25,
        fontWeight: "600",
        color: "#555",
        textAlign: "center",
        marginVertical: 30,
    },
    highlight: {
        color: "#2E5BFF",
    },
    subHeader: {
        color: "#777",
        fontSize: 14,
        textAlign: "center",
        marginBottom: 10,
    },
    buttonRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        paddingHorizontal: 10,
        marginBottom: 15,
    },
    button: {
        backgroundColor: "#2E5BFF",
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 8,
        flex: 1,
        alignItems: "center",
        marginHorizontal: 5,
    },
    buttonText: {
        color: "white",
        fontSize: 14,
        fontWeight: "bold",
    },
    label: {
        fontSize: 16,
        color: "#333",
        marginBottom: 5,
    },
    fileButton: {
        borderWidth: 1,
        borderColor: "#777",
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 8,
        marginBottom: 10,
    },
    fileButtonText: {
        color: "#555",
    },
    uploadButton: {
        backgroundColor: "#2E5BFF",
        paddingVertical: 12,
        paddingHorizontal: 40,
        borderRadius: 8,
        marginTop: 10,
    },
    uploadButtonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
    imageContainer: {
        marginTop: 15,
        alignItems: "center",
    },
    uploadedImage: {
        width: 150,
        height: 150,
        borderRadius: 10,
        marginTop: 5,
    },
});

export default DiseaseScreen;



