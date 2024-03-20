import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import ActionBar from "./components/ActionBar";
import Title from "./components/Title";
import PostImage from "./components/PostImage";
import Comments from "./components/Comments/Comments";

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.postCard}>
        {/* Title */}
        <Title />
        {/* Post content */}
        <PostImage />

        {/* Liked users */}
        {/* <View style={styles.likedUsers}>
          <Image
            source={require("./assets/userImage.png")}
            style={styles.likedUserImage}
          /> */}
          <Comments/>
          {/* Add more images for other liked users */}
        </View>
        
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "start",
    backgroundColor: "#ccc",
  },
  postCard: {
    width: "90%",
    padding: 20,
    borderRadius: 20,
    backgroundColor: "#f0f0f0",
    marginVertical : 20
  },
  caption: {
    marginBottom: 10,
  },
  actionBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  actionButton: {
    padding: 2,
    borderRadius: 5,
    backgroundColor: "#ccc",
  },
  liked: {
    backgroundColor: "blue",
    color: "#fff",
  },
  commented: {
    backgroundColor: "green",
    color: "#fff",
  },
  saved: {
    backgroundColor: "orange",
    color: "#fff",
  },
  shared: {
    backgroundColor: "purple",
    color: "#fff",
  },
  reposted: {
    backgroundColor: "red",
    color: "#fff",
  },
  likedUsers: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  likedUserImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 5,
    marginVertical: 5,
  },
  commentBox: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
  },
});

export default App;
