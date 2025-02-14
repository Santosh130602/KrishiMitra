import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
// import HeaderComponent from '../components/HeaderComponent'; // Import your header component
import HeaderComponent from '../components/special/headerComponent';


const ContactUs = () => {
    // State for form inputs
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    // Function to handle form submission
    const handleSend = () => {
        if (!email || !phone || !message) {
            Alert.alert('Error', 'Please fill in all fields.');
            return;
        }
        Alert.alert('Success', 'Your message has been sent!');
        // Clear form after submission
        setEmail('');
        setPhone('');
        setMessage('');
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <HeaderComponent />

            <ScrollView contentContainerStyle={styles.content}>
                {/* Heading */}
                <Text style={styles.heading}>Customer Support</Text>

                {/* Email Input */}
                <TextInput
                    style={styles.input}
                    placeholder="Enter your email"
                    placeholderTextColor="#666"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                />

                {/* Phone Input */}
                <TextInput
                    style={styles.input}
                    placeholder="Enter your phone number"
                    placeholderTextColor="#666"
                    keyboardType="phone-pad"
                    value={phone}
                    onChangeText={setPhone}
                />

                {/* Message Input */}
                <TextInput
                    style={[styles.input, styles.messageInput]}
                    placeholder="Enter your message"
                    placeholderTextColor="#666"
                    multiline
                    numberOfLines={4}
                    value={message}
                    onChangeText={setMessage}
                />

                {/* Send Button */}
                <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
                    <Text style={styles.sendButtonText}>Send</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

export default ContactUs;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    content: {
        marginTop:70,
        padding: 20,
        alignItems: 'center',
    },
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 45,
    },
    input: {
        width: '100%',
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#ccc',
        fontSize: 16,
        color: '#333',
    },
    messageInput: {
        height: 100,
        textAlignVertical: 'top', // For multiline input
    },
    sendButton: {
        backgroundColor: '#007bff',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        width: '100%',
    },
    sendButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
