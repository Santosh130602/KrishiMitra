import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import DecorativeCircles from '../components/common/DecorativeCircles';

const ResetPasswordScreen = () => {
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    if (!email.includes('@') || !email.includes('.')) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }
    Alert.alert('Password Reset', 'A reset link has been sent to your email.');
    // TODO: Call backend API to send reset email
  };

  return (
    <View style={styles.container}>
      <DecorativeCircles/>
      <Text style={styles.header}>Reset Password</Text>
      <Text style={styles.subText}>
        Please enter your email address to request a password reset
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        placeholderTextColor="#888"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <TouchableOpacity onPress={handleResetPassword} style={styles.buttonContainer}>
        <LinearGradient colors={['#60c36d', '#4caf50']} style={styles.button}>
          <Text style={styles.buttonText}>RESET PASSWORD</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:'100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  subText: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    color: '#000',
    marginBottom: 20,
  },
  buttonContainer: {
    width: '100%', // Ensures the button stretches across the screen
    marginTop: 20, // Adds spacing between the input and the button
    borderRadius: 8,
    overflow: 'hidden',
  },
  button: {
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch', // Ensures the button stretches to fill its container
  },
  buttonText: {
    color: '#fff',
    fontSize: 18, // Adjusted size to fit better
    fontWeight: 'bold',
  },
});

export default ResetPasswordScreen;
