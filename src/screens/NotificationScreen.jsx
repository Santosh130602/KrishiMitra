
import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import HeaderComponent from '../components/special/headerComponent';

const NotificationScreen = () => {
    // Sample appointment notifications
    const [notifications, setNotifications] = useState([
        { id: '1', message: 'Your appointment is scheduled for Feb 15, 2025, at 10:00 AM' },
        { id: '2', message: 'Reminder: Consultation on Feb 18, 2025, at 2:00 PM' },
        { id: '3', message: 'Follow-up session on Feb 20, 2025, at 11:30 AM' },
    ]);

    return (
        <View style={styles.container}>
            {/* Header */}
            <HeaderComponent />

            {/* Heading */}
            <Text style={styles.heading}>Notifications</Text>

            {/* Notification List */}
            <FlatList
                data={notifications}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.notificationCard}>
                        <Text style={styles.notificationText}>{item.message}</Text>
                    </View>
                )}
            />
        </View>
    );
};

export default NotificationScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    heading: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginVertical: 20,
    },
    notificationCard: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        marginHorizontal: 20,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 3, // Shadow for Android
    },
    notificationText: {
        fontSize: 16,
        color: '#333',
    },
});
