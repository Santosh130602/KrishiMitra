import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import OrderScreen from '../screens/OrderScreen';
import MitraScreen from '../screens/MitraScreen';
import NotificationScreen from '../screens/NotificationScreen';
import UserProfile from '../screens/UserProfileScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const UserBottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-variant-outline';
          } else if (route.name === 'Order') {
            iconName = focused ? 'shopping' : 'shopping-outline';
          } else if (route.name === 'Mitra') {
            iconName = focused ? 'leaf' : 'leaf-circle-outline';
            size = focused ? size + 8 : size; 
          } else if (route.name === 'Notification') {
            iconName = focused ? 'bell' : 'bell-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'account' : 'account-outline';
          }

          return <Icon name={iconName} size={32} color={color} />;
        },
        tabBarActiveTintColor: '#068042',
        tabBarInactiveTintColor: '#5DC390',
        tabBarStyle: styles.tabBar,
        tabBarItemStyle: { paddingTop: 5 },
        tabBarIconStyle: { marginBottom: -4 }, 
        tabBarLabelStyle: { fontSize: 12, marginTop: 5 }, 
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Order" component={OrderScreen} />
      <Tab.Screen name="Mitra" component={MitraScreen} />
      <Tab.Screen name="Notification" component={NotificationScreen} />
      <Tab.Screen name="Profile" component={UserProfile} />
    </Tab.Navigator>
  );
};

export default UserBottomTab;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#fff',
    height: 75, 
    borderTopLeftRadius: 15, 
    borderTopRightRadius: 15,
    position: 'absolute', 
    left: 0,
    right: 0,
    bottom: 0,
    elevation: 5, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    padding: 10,
  },
});
