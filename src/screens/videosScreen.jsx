import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
// import HeaderComponent from "../components/HeaderComponent"; // Import your custom header component
import HeaderComponent from "../components/special/headerComponent";


const videos = [
    {
      id: "1",
      title: "Farming Tips",
      thumbnail: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTo-mz-SNDc_jXiX65FPRI4iTVaxTT3A8d-FWbRRFlGQC8YNa1l4I9RRFVPw88w5ujfJCT81s6QOga_lNvv3oGgcOBP4Enm2bhRFkI997oW_VR9z_KiSaCc",
      url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    },
    {
      id: "2",
      title: "Soil Preparation",
      thumbnail: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTO9a-oJf02w7Ollsp4TwayDLKJv5OdwPL15-nb_5dHbC4C-F7c2nf5UR2bO2aAIJntHfFqLSfGBm4H1gkjZUUr_P8wnqs15MSW4g6dPJwVy_Gsz2jOvGFXMcg",
      url: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
    },
    {
      id: "3",
      title: "Crop Rotation Techniques",
      thumbnail: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSgTvj5Lg1dXHRzRJrvok4tksoPOxklbi05-zAmOiBUkIvf9wKOOFMBpjWHlyGslq6bPzGS-VDuXM39WAfIBP-CKkAZFNKOUZecVUpPlpRJ-5q9XqeX_Iub",
      url: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
        id: "4",
        title: "Crop Rotation Techniques",
        thumbnail: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQibrZxtqNXzEm7HQkysI6CmIly8E7Jod9wzTvPLzhkhdO5KoqUx09IEd7j9VX4HEKp2ykFhunQTnMeVSJXqj-QXNXYiBXahiEUS2zsSxuhaOrCn7c20xEHCA",
        url: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      },
      {
        id: "5",
        title: "Crop Rotation Techniques",
        thumbnail: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQV3KR3T9JUNmMfYZEY6np6a7iZQ0IqofGbBvv8y-V6vrDMrYI9cStb-MaagsjHBZ02klJgUnaENr-O7LOMHA4UPuADJ490TUdvkJG1pbSjpOfsfCkeLPY4_Q",
        url: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      },
      {
        id: "6",
        title: "Crop Rotation Techniques",
        thumbnail: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRxmdXrfGDXgpRRqhQi8Mq1O0SIjIlTbWWigld_Y_m80X-u5ch11mhX2yo7ZYiy_5aYYI87C7Md5FMZGb-tYzstcFF_h3MnTfyX2gOM9jL7k7dA1VSmwt29",
        url: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      },
      {
        id: "7",
        title: "Crop Rotation Techniques",
        thumbnail: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQCxrP7zmDopMa0WO65kE-tf7Js5Bz_jDycdT-HT3K26SzjZuuzxZ88cnpJVdSjRFmHnE8yaK6H-eBUa_W-OHKoNxW_1JC8dA-wgxYEiqU",
        url: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      },
  ];
  

const VideosScreen = () => {
  const navigation = useNavigation();

  const handleVideoPress = (video) => {
    navigation.navigate("VideoPlayer", { video });
  };

  return (
    <View style={styles.container}>
      <HeaderComponent title="Videos" />
      <FlatList
        data={videos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.videoItem} onPress={() => handleVideoPress(item)}>
            <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
            <Text style={styles.videoTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default VideosScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  videoItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  thumbnail: {
    width: 100,
    height: 60,
    borderRadius: 5,
    marginRight: 10,
  },
  videoTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
});
