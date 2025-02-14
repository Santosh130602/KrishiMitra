

import { Image, StyleSheet, Text, View, Animated, Easing } from 'react-native'
import React, { useEffect, useRef } from 'react'
import SplashImg from '../assetes/images/splashImg.png'


const SplashScreen = ({navigation}) => {
  const progressAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progressAnim, {
      toValue: 100,
      duration: 5000, // 5 seconds
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();


    const timer = setTimeout(() => {
      navigation.replace('welcom');
  }, 5000);
  return () => clearTimeout(timer);
    
  }, []);

  return (
    <View style={styles.container}>
      <Image source={SplashImg} style={styles.image} />
      <Text style={styles.text}>Farmers Friendly</Text>
      
      {/* Bottom Progress Bar */}
      <View style={styles.progressBarContainer}>
        <Animated.View
          style={[styles.progressBar, { width: progressAnim.interpolate({
            inputRange: [0, 100],
            outputRange: ['0%', '100%'],
          }) }]}
        />
      </View>
    </View>
  );
}

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7BDB01', 
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 50,
  },
  progressBarContainer: {
    position: 'absolute',
    marginBottom:100,
    bottom: 30,
    width: '70%',
    height: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#FFD700', // Golden color for progress
  },
});
