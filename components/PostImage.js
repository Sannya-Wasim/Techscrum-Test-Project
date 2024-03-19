import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import ActionBar from "../components/ActionBar";


const PostImage = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/postImage.png")}
        style={styles.image}
      >
        <View style={styles.overlay}>
          <ActionBar />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "flex-end", // Align items at the bottom
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 10,
    marginBottom: 5, // Add margin bottom to prevent overlaying ActionBar on the bottom
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius : 10
  },
});

export default PostImage;
