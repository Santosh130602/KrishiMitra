import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, FlatList, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ImageSwiper from '../components/special/swiperComponent';
import HeaderComponent from '../components/special/headerComponent';

const categories = [
  { name: 'Corp Care', icon: 'sprout', screen: 'Crop' },
  { name: 'Fertilizer', icon: 'flask', screen: 'Fertilizer' },
  { name: 'Videos', icon: 'video', screen: 'Videos' },
  { name: 'Address', icon: 'map-marker', screen: 'Address' },
  { name: 'Best Offers', icon: 'diamond-stone', screen: 'BestOffer' },
  { name: 'Disease', icon: 'leaf', screen: 'Disease' },
  { name: 'Expert Advice', icon: 'account-tie', screen: 'ExpertAdvice' },
  // { name: 'Rate Us', icon: 'star', screen: 'RateScreen' },
  { name: 'Rate Us', icon: 'star', screen: 'Rate' },
  
  { name: 'Support', icon: 'phone', screen: 'Support' },
];

const recommendedProducts = [
  { id: '1', image: require('../assetes/images/CropRecom.png') },
  { id: '2', image: require('../assetes/images/Fertilizer.jpeg') },
  { id: '3', image: require('../assetes/images/MarketPrice.jpeg')},

];

const HomeScreen = () => {
  const navigation = useNavigation();

  return (

    <ScrollView >
      {/* Swiper Component */}

      <HeaderComponent/>
      <View style={styles.container}>


      <ImageSwiper />

      {/* Categories Section */}
      <Text style={styles.sectionTitle}>Categories</Text>
      <View style={styles.gridContainer}>
        {categories.map((item, index) => (
          <TouchableOpacity
          key={index}
          style={styles.categoryButton}
          onPress={() => navigation.navigate(item.screen)}
          >
            <Icon name={item.icon} size={32} color="#068042" />
            <Text style={styles.categoryText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Recommended Products Section */}
      <Text style={styles.sectionTitle}>Recommended Products</Text>
      <FlatList
        data={recommendedProducts}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <Image source={item.image} style={styles.productImage} />
          </View>
        )}
        />
        </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 15,
    marginBottom:100,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryButton: {
    width: '30%',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 15,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  categoryText: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: 'bold',
  },
  productCard: {
    width: 300,
    height: 170,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
   
  },
  productImage: {
    width: 300,
    height: 170,
   
    
    borderRadius:15,
    resizeMode: 'contain',
  },
});
