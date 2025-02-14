import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import DecorativeCircles from "../components/common/DecorativeCircles";

const RatingScreen = ({ onSubmit }) => {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");

    const handleSubmit = () => {
        if (!rating) {
            alert("Please select a rating");
            return;
        }
        const reviewData = { rating, comment };
        console.log("Submitted Review:", reviewData);
        if (onSubmit) {
            onSubmit(reviewData);
        }
        setRating(0);
        setComment("");
    };

    return (
            <View>
            <DecorativeCircles />
                <View style={styles.container}>
                    <Text style={styles.title}>Rate Us</Text>
                    <View style={styles.stars}>
                        {[1, 2, 3, 4, 5].map((num) => (
                            <TouchableOpacity key={num} onPress={() => setRating(num)}>
                                <Icon name="star" size={40} color={num <= rating ? "#FFD700" : "#C0C0C0"} />
                            </TouchableOpacity>
                        ))}
                    </View>
                    <TextInput
                        style={styles.input}
                        placeholder="Write a comment..."
                        value={comment}
                        onChangeText={setComment}
                        multiline
                    />
                    <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                        <Icon name="send" size={24} color="white" />
                        <Text style={styles.submitText}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
    );
};

const styles = StyleSheet.create({
   
    container: {
        padding: 20,
        marginTop:200,
        backgroundColor: "#fff",
        borderRadius: 10,
        alignItems: "center",
        elevation: 5,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
        margin: 10,
    },
    title: {
        fontSize: 40,
        // fontWeight: "bold",
        textAlign:'left',
        marginBottom: 10,
    },
    stars: {
        flexDirection: "row",
        marginBottom: 15,
    },
    input: {
        width: "100%",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 10,
        fontSize: 16,
        minHeight: 80,
        textAlignVertical: "top",
    },
    submitButton: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#007BFF",
        padding: 12,
        borderRadius: 5,
        marginTop: 10,
    },
    submitText: {
        color: "white",
        fontSize: 16,
        marginLeft: 5,
    },
});

export default RatingScreen;
