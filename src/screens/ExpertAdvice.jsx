import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import FastImage from "react-native-fast-image";
import DecorativeCircles from "../components/common/DecorativeCircles";

// Dummy expert data
const experts = [
  {
    id: "1",
    name: "Dr. John Doe",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRtcAdqTgmM7vV8XEkpGumjp0Mcg4TsjTBPQ&s",
    description: "Expert in mental health and counseling.",
  },
  {
    id: "2",
    name: "Dr. Jane Smith",
    image: "https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg",
    description: "Senior career guidance specialist.",
  },
  {
    id: "3",
    name: "Dr. John Doe",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRtcAdqTgmM7vV8XEkpGumjp0Mcg4TsjTBPQ&s",
    description: "Expert in mental health and counseling.",
  },
  {
    id: "4",
    name: "Dr. Jane Smith",
    image: "https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg",
    description: "Senior career guidance specialist.",
  },
  {
    id: "5",
    name: "Dr. John Doe",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRtcAdqTgmM7vV8XEkpGumjp0Mcg4TsjTBPQ&s",
    description: "Expert in mental health and counseling.",
  },
  {
    id: "6",
    name: "Dr. Jane Smith",
    image: "https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg",
    description: "Senior career guidance specialist.",
  },
];

const ExpertAdvice = () => {
  const [selectedExpert, setSelectedExpert] = useState(null);
  const [messages, setMessages] = useState([]);

  const startChat = (expert) => {
    setSelectedExpert(expert);
    setMessages([
      {
        _id: 1,
        text: `Hello! I'm ${expert.name}. How can I assist you?`,
        createdAt: new Date(),
        user: { _id: 2, name: expert.name },
      },
    ]);
  };

  const onSend = (newMessages = []) => {
    setMessages((previousMessages) => GiftedChat.append(previousMessages, newMessages));
  };

  return (

    <View style={styles.container}>
        
        <DecorativeCircles/>

        <Text style={styles.headtext}>Take Advice With {"\n"}Our Expert</Text>


      {!selectedExpert ? (
        <FlatList
          data={experts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.expertCard}>
              <FastImage source={{ uri: item.image }} style={styles.expertImage} />
              <View style={styles.expertInfo}>
                <Text style={styles.expertName}>{item.name}</Text>
                <Text style={styles.expertDesc}>{item.description}</Text>
                <TouchableOpacity style={styles.button} onPress={() => startChat(item)}>
                  <Text style={styles.buttonText}>Take Personal Advice</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      ) : (
        <View style={styles.chatContainer}>
          <TouchableOpacity style={styles.backButton} onPress={() => setSelectedExpert(null)}>
            <Text style={styles.backButtonText}>← Back</Text>
          </TouchableOpacity>
          <Text style={styles.chatHeader}>Chat with {selectedExpert.name}</Text>
          <GiftedChat
            messages={messages}
            onSend={(newMessages) => onSend(newMessages)}
            user={{ _id: 1, name: "User" }}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f9f9f9", padding: 10 },
  expertCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    elevation: 3,
    alignItems: "center",
  },
  headtext:{
    fontSize:35,
    padding:20,
    color:"green"
  },
  expertImage: { width: 120, height: 120, borderRadius: 20, marginRight: 15 },
  expertInfo: { flex: 1 },
  expertName: { fontSize: 18, fontWeight: "bold", color: "#333" },
  expertDesc: { fontSize: 14, color: "#666", marginVertical: 5 },
  button: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 5,
  },
  buttonText: { color: "#fff", fontWeight: "bold" },
  chatContainer: { flex: 1 },
  backButton: { padding: 10, backgroundColor: "#ddd", alignItems: "center" },
  backButtonText: { fontSize: 16, fontWeight: "bold" },
  chatHeader: { fontSize: 18, fontWeight: "bold", padding: 10, textAlign: "center" },
});

export default ExpertAdvice;
