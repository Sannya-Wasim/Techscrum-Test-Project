import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { liked_users } from "./liked_users";
import { LinearGradient } from "expo-linear-gradient";
import { post_comments } from "./post_comments";
import CommentsBox from './CommentsBox';

const Comments = () => {
  const first_five_users = liked_users.slice(0, 4);
  const rest_users = liked_users.length - 5;

  return (
    <View style={styles.container}>
      {/* Liked Users Bubbles */}
      <View style={styles.likedUsers}>
        {first_five_users.map((user, index) => (
          <Image
            key={index}
            source={require("../../assets/userImage.png")}
            style={styles.likedUserImage}
          />
        ))}
        <View style={{ flexDirection: "row" }}>
          {/* Container showing the count of rest of users */}
          <View style={styles.restUserImage}>
            <LinearGradient
              colors={["#5CD3C6", "#478FE4"]}
              start={{ x: 1, y: 1 }}
              end={{ x: 0, y: 0 }}
              style={styles.gradient} // Adjust as needed
            >
              <Text
                style={{ fontSize: 9, color: "white", fontWeight: "semi-bold" }}
              >{`${rest_users}+`}</Text>
            </LinearGradient>
          </View>
          <Text style={{ marginVertical: 6, marginHorizontal: 4 }}>
            Like it
          </Text>
        </View>
      </View>
      {/* Post Caption */}
      <View style={{ marginBottom: 10 }}>
        <Text>
          Enjoyed the day with the family 😘😍 @Adam_Mohamed & @Haya_Mohamed
          ...More
        </Text>
      </View>
      {/* Post Comments */}
      <TouchableOpacity>
        <Text
          style={{ fontWeight: "bold" }}
        >{`View all ${post_comments.length} comments`}</Text>
      </TouchableOpacity>
      {/* Comments Box */}
      <ScrollView style={styles.scrollView}>
        {post_comments.map((comment, index) => (
          <CommentsBox key={index} comment={comment}/>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // Add any container styles here
  },
  likedUsers: {
    flexDirection: "row",
    marginLeft: 15,
    marginVertical: 10,
  },
  restUserImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginLeft: -15,
    alignItems: "center",
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  gradient: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    paddingHorizontal: 4,
    margin: 2,
    width: 30,
    height: 30,
  },
  likedUserImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginLeft: -15,
  },
  scrollView: {
    marginVertical: 6,
  },
});

export default Comments;
