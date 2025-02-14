import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// import HeaderComponent from '../components/special/headerComponent';
import DecorativeCircles from '../components/common/DecorativeCircles';
const UserProfile = () => {
    const navigation = useNavigation();

    // Sample user data (replace with API data)
    const userData = {
        name: 'John Doe',
        profileImage: 'https://randomuser.me/api/portraits/men/1.jpg',
        bookings: [
            { id: '001', title: 'Agri Tour - Farm Visit', date: '12 Feb 2025' },
            { id: '002', title: 'Organic Farming Workshop', date: '18 Feb 2025' },
        ],
    };

    // Logout function
    const handleLogout = () => {
        Alert.alert('Logout', 'Are you sure you want to logout?', [
            { text: 'Cancel', style: 'cancel' },
            { text: 'Logout', onPress: () => navigation.replace('Login') },
        ]);
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <DecorativeCircles />

            {/* User Profile Section */}
            <View style={styles.profileSection}>
                <Image source={{ uri: userData.profileImage }} style={styles.profileImage} />
                <Text style={styles.userName}>{userData.name}</Text>
            </View>

            {/* User Booking History */}
            <ScrollView style={styles.content}>
                <Text style={styles.sectionTitle}>📌 Booking History</Text>
                {userData.bookings.map((booking) => (
                    <View key={booking.id} style={styles.bookingCard}>
                        <Text style={styles.bookingTitle}>{booking.title}</Text>
                        <Text style={styles.bookingDate}>📅 {booking.date}</Text>
                    </View>
                ))}

                {/* Support Section */}
                <Text style={styles.sectionTitle}>💬 Support</Text>
                <TouchableOpacity style={styles.supportButton} onPress={() => navigation.navigate('Support')}>
                    <Text style={styles.supportButtonText}>Contact Support</Text>
                </TouchableOpacity>

                {/* Logout Button */}
                <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                    <Text style={styles.logoutButtonText}>🚪 Logout</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

export default UserProfile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    profileSection: {
        alignItems: 'center',
        paddingVertical: 20,
        // backgroundColor: '#fff',
        marginBottom: 10,
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
        // shadowColor: '#000',
        // shadowOpacity: 0.1,
        // shadowOffset: { width: 0, height: 3 },
        // shadowRadius: 4,
        // elevation: 5,
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: '#007bff',
    },
    userName: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 10,
    },
    content: {
        paddingHorizontal: 15,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#555',
        marginVertical: 10,
    },
    bookingCard: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 3,
        elevation: 3,
    },
    bookingTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    bookingDate: {
        fontSize: 14,
        color: '#777',
        marginTop: 5,
    },
    supportButton: {
        backgroundColor: '#007bff',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
    },
    supportButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    logoutButton: {
        backgroundColor: '#ff4d4d',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    logoutButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
