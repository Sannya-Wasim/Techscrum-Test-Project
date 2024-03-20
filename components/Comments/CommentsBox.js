import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity,  } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"; // Correct import
import { faHeart, faCommentDots } from "@fortawesome/free-solid-svg-icons";

const CommentsBox = ({ comment }) => {
  const [liked, setLiked] = useState(false);
  const [likeColor, setLikeColor] = useState("gray");

  const [commented, setCommented] = useState(false);
  const [commentColor, setCommentColor] = useState("gray");

  const handleLike = () => {
    setLiked(!liked);
    setLikeColor(liked ? "gray" : "#FE6587");
  };

  const handleComment = () => {
    setCommented(!commented);
    setCommentColor(commented ? "gray" : "#FE6587");
  };
  return (
    <View style={styles.commentsBox}>
        {/* Header of Comment */}
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row" }}>
          {/* Image */}
          <Image
            source={require("../../assets/userImage.png")}
            style={{ width: 30, height: 30, marginTop : 5 }}
          />
          {/* View for Text */}
          <View style={{ marginVertical: 4 }}>
            <Text
              style={{ marginHorizontal: 8, fontWeight: "600" }}
            >
              {comment.name}
            </Text>
            <Text style={{ marginHorizontal: 8, fontSize: 10, color: "gray" }}>
              {comment.duration}
            </Text>
          </View>
        </View>
        {/* Icons */}
        <View
          style={{
            flexDirection: "row",
            marginTop: 5,
            // justifyContent: "center",
          }}
        >
          <TouchableOpacity onPress={handleLike}>
            <View style={styles.actionButton}>
              <FontAwesomeIcon
                icon={faHeart}
                size={16}
                color={likeColor}
                style={{ marginHorizontal: 2 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleComment}>
            <View style={styles.actionButton}>
              <FontAwesomeIcon
                icon={faCommentDots}
                size={16}
                color={commentColor}
                style={{ marginHorizontal: 2 }}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {/* Additional View for text below the row */}
      <View style={styles.commentContent}>
        <Text style={{fontWeight : '400', fontSize : 12}}>{comment.comment}</Text>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  commentsBox: {
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 15,
    marginVertical: 6,
    padding: 4,
  },
  commentContent : {
    marginHorizontal : 50,
    marginVertical : 10
  }
});

export default CommentsBox;
