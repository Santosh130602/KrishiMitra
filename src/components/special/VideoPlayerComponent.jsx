import React from "react";
import { View, StyleSheet } from "react-native";
import Video from "react-native-video";

const VideoPlayerScreen = ({ route }) => {
  const { video } = route.params;

  return (
    <View style={styles.container}>
      <Video
        source={{ uri: video.url }}
        style={styles.video}
        controls
        resizeMode="contain"
      />
    </View>
  );
};

export default VideoPlayerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
  },
  video: {
    width: "100%",
    height: "100%",
  },
});
