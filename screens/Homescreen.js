import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import Navbar from "../components/Navbar";
import ActionBar from "../components/ActionBar";
import Title from "../components/Title";
import PostImage from "../components/PostImage";
import Comments from "../components/Comments/Comments";

const Home = () => {
  return (
      <View style={styles.postCard}>
        {/* Title */}
        <Title />
        {/* Post content */}
        <PostImage />
        <Comments />
        {/* Add more images for other liked users */}
      </View>
  );
};

const styles = StyleSheet.create({
  postCard: {
    width: "95%",
    padding: 20,
    borderRadius: 20,
    backgroundColor: "#f0f0f0",
    marginTop: 30,
    marginBottom: 75,
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

export default Home;
