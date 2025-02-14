

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import HeaderComponent from '../components/special/headerComponent';

const CropCareScreen = () => {
    const [form, setForm] = useState({
        N: '',
        P: '',
        K: '',
        temperature: '',
        humidity: '',
        ph: '',
        rainfall: '',
    });
    const [recommendation, setRecommendation] = useState(null);

    const handleChange = (field, value) => {
        setForm({ ...form, [field]: value });
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://10.0.2.2:4000/predict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });

            const data = await response.json();

            if (response.ok) {
                setRecommendation(data.predicted_crop);
            } else {
                setRecommendation('Error: Failed to get recommendation');
            }
        } catch (error) {
            setRecommendation('Error: Something went wrong. Please try again.');
            console.error('Error:', error);
        }
    };

    return (
        <View style={styles.container}>
            {/* Header Component */}
            <HeaderComponent title="Crop Care" />

            {/* Content */}
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <Text style={styles.heading}>Predict the best crop to plant</Text>
                <Text style={styles.subheading}>Please select a Language, default language is English</Text>
                <View style={styles.languageContainer}>
                    <TouchableOpacity style={styles.languageButton}>
                        <Text style={styles.languageText}>ENGLISH</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.languageButton}>
                        <Text style={styles.languageText}>HINDI</Text>
                    </TouchableOpacity>
                </View>

                {/* Input Fields */}
                {['N', 'P', 'K', 'temperature', 'humidity', 'ph', 'rainfall'].map((field, index) => (
                    <TextInput
                        key={index}
                        style={styles.input}
                        placeholder={`Enter ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                        placeholderTextColor="#999"
                        keyboardType="numeric"
                        value={form[field]}
                        onChangeText={(text) => handleChange(field, text)}
                    />
                ))}

                {/* Submit Button */}
                <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                    <Text style={styles.submitButtonText}>GET CROP RECOMMENDATION</Text>
                </TouchableOpacity>

                {/* Output Section */}
                {recommendation && (
                    <View style={styles.outputContainer}>
                        <Text style={styles.outputText}>Recommended Crop:</Text>
                        <Text style={styles.outputTextRecomanded}> " {recommendation} "</Text>
                    </View>
                )}
            </ScrollView>
        </View>
    );
};

export default CropCareScreen;

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    contentContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'green',
        marginBottom: 10,
        marginTop: 10,
        textAlign: 'center',
    },
    subheading: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
        marginBottom: 10,
    },
    languageContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
    },
    languageButton: {
        backgroundColor: '#162D5C',
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    languageText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 5,
        paddingHorizontal: 15,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    submitButton: {
        backgroundColor: '#162D5C',
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 5,
        marginTop: 10,
    },
    submitButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    outputContainer: {
        marginTop: 20,
        padding: 15,
        backgroundColor: '#ffff',
        borderRadius: 5,
        width: '70%',
        alignItems: 'center',
    },
    outputText: {
        fontSize: 20,
        
        color: 'gray',
    },
    outputTextRecomanded:{
        fontSize:18,
        color:"green",
        fontWeight: 'bold',
    }
});
