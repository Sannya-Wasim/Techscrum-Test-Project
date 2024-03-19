import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { liked_users } from "./liked_users";

const Comments = () => {
  const first_five_users = liked_users.slice(0, 4);

  return (
    <View style={styles.container}>
      <View style={styles.likedUsers}>
        {first_five_users.map((user, index) => (
          <Image
            key={index}
            source={require("../../assets/userImage.png")}
            style={styles.likedUserImage}
          />
        ))}

      </View>
      <View style={styles.commentBox}>
        <Text>Add your comment...</Text>
        {/* Add comment submission button */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // Add any container styles here
  },
  likedUsers: {
    flexDirection: "row",
    marginLeft : 15,
    marginVertical : 8
  },
  likedUserImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginLeft : -15
  },
  commentBox: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginTop: 10, // Add margin between images and comment box if needed
  },
});

export default Comments;
