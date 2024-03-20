import React from "react";
import { View, StyleSheet } from "react-native";
import ActionBar from "../components/ActionBar";
import Carousel from "../components/Carousel";

const PostImage = () => {
  return (
    <View style={styles.container}>
      <Carousel />
      <View style={styles.overlay}>
        <ActionBar />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "center",
   
  },
  overlay: {
    position: "absolute",
    bottom: 4,
    left: 0,
    right: 0,
    borderRadius: 10,
  },
});

export default PostImage;
