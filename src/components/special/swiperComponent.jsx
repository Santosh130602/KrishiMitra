import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

const images = [
  require('../../assetes/images/CropRecom.png'),
  require('../../assetes/images/Fertilizer.jpeg'),
  require('../../assetes/images/MarketPrice.jpeg'),
];

const ImageSwiper = () => {
  return (
    <View style={styles.container}>
      <Swiper
        autoplay
        autoplayTimeout={4}
        showsPagination
        dotColor="white"
        activeDotColor="#007bff"
        loop
      >
        {images.map((image, index) => (
          <Image key={index} source={image} style={styles.image} />
        ))}
      </Swiper>
    </View>
  );
};

export default ImageSwiper;

const styles = StyleSheet.create({
    container: {
      height: 300,
      width:"100%",
      padding: 20,
      borderRadius: 15,
      backgroundColor: 'white', // Ensure background is white to show shadow
      elevation: 5, // Shadow for Android
      shadowColor: '#000', // Shadow for iOS
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 5,
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      borderRadius: 15,
    },
  });
  