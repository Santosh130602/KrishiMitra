
import { StyleSheet } from 'react-native';
import React from 'react';
import SplashScreen from '../screens/SplashScreen';
import Home from '../screens/Home';
import WelcomeScreen from '../screens/WelcomeScreen';
import SignUpScreen from '../screens/SignUpScreen';
import LoginScreen from '../screens/LoginScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import UserBottomTab from './bottomTabNavigator';
import CropCareScreen from '../screens/CropCareScreen';
import AddressScreen from '../screens/AddressScreen';
import FertilizerScreen from '../screens/FertilizerScreen';
import VideoPlayerScreen from '../components/special/VideoPlayerComponent';
import VideosScreen from '../screens/videosScreen';
import UserProfile from '../screens/UserProfileScreen';
import ContactUs from '../screens/ContactUsScreen';
import DiseaseScreen from '../screens/DiseaseScreen';
import MapComponent from '../components/special/mapComponent';
import PhoneLoginScreen from '../screens/PhoneLoginScreen';
import OtpVerificationScreen from '../screens/OtpVerificationScreen';
import ExpertAdvice from '../screens/ExpertAdvice';
import RatingScreen from '../screens/Rating';
import BestOfferScreen from '../screens/BestOfferScreen';



import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Screen } from 'react-native-screens';

const Stack = createNativeStackNavigator();

const TabNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="UserBottomTab" component={UserBottomTab} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name='SignIn' component={SignUpScreen} />
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='PhoneLogin' component={PhoneLoginScreen} />
        <Stack.Screen name='Crop' component={CropCareScreen} />
        <Stack.Screen name='Address' component={AddressScreen} />
        <Stack.Screen name='Fertilizer' component={FertilizerScreen} />
         <Stack.Screen name="Videos" component={VideosScreen} />
        <Stack.Screen name="VideoPlayer" component={VideoPlayerScreen} />
        <Stack.Screen name='Profile' component={UserProfile} />
        <Stack.Screen name='Support' component={ContactUs}/>
        <Stack.Screen name='Disease' component={DiseaseScreen} />
        <Stack.Screen name='Map' component={MapComponent} />
        <Stack.Screen name='OtpScreen' component={OtpVerificationScreen} />
        <Stack.Screen name='ExpertAdvice' component={ExpertAdvice} />
        <Stack.Screen name='Rate' component={RatingScreen} />
        <Stack.Screen name='BestOffer' component={BestOfferScreen}/>
        


        <Stack.Screen name='resetpassword' component={ResetPasswordScreen} />
        <Stack.Screen name='welcom' component={WelcomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({});
