import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import DecorativeCircles from "../components/common/DecorativeCircles";

const products = [
    { id: "1", name: "Wheat Seeds", price: "₹150", category: "Seed", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ32X9aJSUlhL6JbRxswJRZhYqaMYbWp0BoCw&s" },
    { id: "2", name: "Organic Fertilizer", price: "₹300", category: "Fertilizer", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsx-Fc_L_XPldmDJrcACnyt93z89oaekwLvg&s" },
    { id: "3", name: "Tractor Equipment", price: "₹5000", category: "Equipment", image: "https://5.imimg.com/data5/SELLER/Default/2022/3/RH/HC/ON/16626018/trailed-type-disc-harrow-tractor-implements-disc-operated-agricultural-machinery-farm-tools-products.jpg" },
    { id: "4", name: "Corn Seeds", price: "₹180", category: "Seed", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSacITdoJrFplzg2zk4GDMRvsnGYLA_u_urFQ&s" },
    { id: "5", name: "Pesticide Spray", price: "₹250", category: "Fertilizer", image: "https://images.unsplash.com/photo-1581091870622-1c6a9e7ed8f3" },
   { "id": "6", "name": "Rice Seeds", "price": "₹200", "category": "Seed", "image": "https://5.imimg.com/data5/SELLER/Default/2021/12/DL/AV/KU/320977091/rice-seeds-500x500.jpg" },
    { "id": "7", "name": "Compost Fertilizer", "price": "₹350", "category": "Fertilizer", "image": "https://5.imimg.com/data5/SELLER/Default/2023/7/320977091/KJ/IF/BI/15022018/compost-fertilizer-500x500.jpg" },
    { "id": "8", "name": "Irrigation Pump", "price": "₹6000", "category": "Equipment", "image": "https://5.imimg.com/data5/SELLER/Default/2022/12/QI/NR/UF/15235209/irrigation-pump-500x500.jpg" },
    { "id": "9", "name": "Tomato Seeds", "price": "₹120", "category": "Seed", "image": "https://5.imimg.com/data5/SELLER/Default/2021/4/DZ/PD/WC/2910571/tomato-seeds-500x500.jpg" },
    { "id": "10", "name": "Bio Fertilizer", "price": "₹400", "category": "Fertilizer", "image": "https://5.imimg.com/data5/SELLER/Default/2022/5/SO/AG/BP/16953994/bio-fertilizer-500x500.jpg" },
    { "id": "11", "name": "Harvester Machine", "price": "₹150000", "category": "Equipment", "image": "https://5.imimg.com/data5/SELLER/Default/2021/6/ZZ/LU/QF/6827036/harvester-machine-500x500.jpg" },
    { "id": "12", "name": "Potato Seeds", "price": "₹160", "category": "Seed", "image": "https://5.imimg.com/data5/SELLER/Default/2021/11/FD/XB/ZJ/2550055/potato-seeds-500x500.jpg" },
    { "id": "13", "name": "Nitrogen Fertilizer", "price": "₹320", "category": "Fertilizer", "image": "https://5.imimg.com/data5/SELLER/Default/2023/1/XF/WN/DX/14967217/nitrogen-fertilizer-500x500.jpg" },
    { "id": "14", "name": "Hand Sprayer", "price": "₹700", "category": "Equipment", "image": "https://5.imimg.com/data5/SELLER/Default/2021/11/FD/XB/ZJ/2550055/hand-sprayer-500x500.jpg" },
    { "id": "15", "name": "Carrot Seeds", "price": "₹140", "category": "Seed", "image": "https://5.imimg.com/data5/SELLER/Default/2021/11/FD/XB/ZJ/2550055/carrot-seeds-500x500.jpg" },
    { "id": "16", "name": "Liquid Fertilizer", "price": "₹380", "category": "Fertilizer", "image": "https://5.imimg.com/data5/SELLER/Default/2023/7/320977091/KJ/IF/BI/15022018/liquid-fertilizer-500x500.jpg" },
    { "id": "17", "name": "Soil Testing Kit", "price": "₹1500", "category": "Equipment", "image": "https://5.imimg.com/data5/SELLER/Default/2023/5/320977091/KJ/IF/BI/15022018/soil-testing-kit-500x500.jpg" },
    { "id": "18", "name": "Cabbage Seeds", "price": "₹130", "category": "Seed", "image": "https://5.imimg.com/data5/SELLER/Default/2021/11/FD/XB/ZJ/2550055/cabbage-seeds-500x500.jpg" },
    { "id": "19", "name": "Herbal Pesticide", "price": "₹270", "category": "Fertilizer", "image": "https://5.imimg.com/data5/SELLER/Default/2022/2/QV/KU/OQ/127066683/herbal-pesticide-500x500.jpg" },
    { "id": "20", "name": "Automatic Seeder", "price": "₹4500", "category": "Equipment", "image": "https://5.imimg.com/data5/SELLER/Default/2022/8/XO/KQ/XA/2789604/automatic-seeder-500x500.jpg" },
    { "id": "21", "name": "Sunflower Seeds", "price": "₹210", "category": "Seed", "image": "https://5.imimg.com/data5/SELLER/Default/2021/8/QQ/SK/VR/20244523/sunflower-seeds-500x500.jpg" },
    { "id": "22", "name": "NPK Fertilizer", "price": "₹330", "category": "Fertilizer", "image": "https://5.imimg.com/data5/SELLER/Default/2023/1/XF/WN/DX/14967217/npk-fertilizer-500x500.jpg" },
    { "id": "23", "name": "Plowing Machine", "price": "₹12000", "category": "Equipment", "image": "https://5.imimg.com/data5/SELLER/Default/2022/8/XO/KQ/XA/2789604/plowing-machine-500x500.jpg" },
    { "id": "24", "name": "Onion Seeds", "price": "₹190", "category": "Seed", "image": "https://5.imimg.com/data5/SELLER/Default/2021/8/QQ/SK/VR/20244523/onion-seeds-500x500.jpg" },
    { "id": "25", "name": "Cow Manure", "price": "₹290", "category": "Fertilizer", "image": "https://5.imimg.com/data5/SELLER/Default/2023/7/320977091/KJ/IF/BI/15022018/cow-manure-500x500.jpg" }
]




const getCategoryIcon = (category) => {
    switch (category) {
        case "Seed": return "sprout";
        case "Fertilizer": return "leaf";
        case "Equipment": return "tractor";
        default: return "help-circle";
    }
};

const BestOfferScreen = () => {
    return (
        <View style={styles.container}>
            <DecorativeCircles />

            <Text style={styles.title}>Best Offers on Farming Products</Text>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Image source={{ uri: item.image }} style={styles.image} />
                        <View style={styles.details}>
                            <Text style={styles.productName}>{item.name}</Text>
                            <Text style={styles.price}>{item.price}</Text>
                            <View style={styles.category}>
                                <Icon name={getCategoryIcon(item.category)} size={20} color="green" />
                                <Text style={styles.categoryText}>{item.category}</Text>
                            </View>
                            <TouchableOpacity style={styles.buyButton}>
                                <Text style={styles.buyText}>Buy Now</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: "#f8f8f8",
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "left",
        padding: 10,
        marginVertical: 10,
    },
    card: {
        flexDirection: "row",
        backgroundColor: "white",
        marginVertical: 8,
        padding: 10,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
        alignItems: "center",
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 5,
        marginRight: 10,
    },
    details: {
        flex: 1,
    },
    productName: {
        fontSize: 16,
        fontWeight: "bold",
    },
    price: {
        fontSize: 14,
        color: "green",
        marginVertical: 5,
    },
    category: {
        flexDirection: "row",
        alignItems: "center",
    },
    categoryText: {
        marginLeft: 5,
        fontSize: 14,
        color: "gray",
    },
    buyButton: {
        marginTop: 8,
        backgroundColor: "#007BFF",
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 5,
        alignSelf: "flex-start",
    },
    buyText: {
        color: "white",
        fontWeight: "bold",
    },
});

export default BestOfferScreen;
