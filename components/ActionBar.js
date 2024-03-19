import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { BlurView } from "expo-blur";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"; // Correct import
import {
  faHeart,
  faCommentDots,
  faBookmark,
  faShare,
  faRetweet,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { LinearGradient } from "expo-linear-gradient";

const ActionBar = () => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(66);
  const [likeColor, setLikeColor] = useState('white');
  
  const [commented, setCommented] = useState(false);
  const [commentCount, setCommentCount] = useState(0);
  const [commentColor, setCommentColor] = useState('white');
  

  const [saved, setSaved] = useState(false);
  const [savedCount, setSavedCount] = useState(0);
  const [savedColor, setSavedColor] = useState('white');

  const [shared, setShared] = useState(false);
  const [sharedCount, setSharedCount] = useState(0);
  const [sharedColor, setSharedColor] = useState('white');

  const [reposted, setReposted] = useState(false);
  const [repostedCount, setRepostedCount] = useState(0);
  const [repostedColor, setRepostedColor] = useState('white');

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
    setLikeColor(liked ? 'white' : '#FE6587');
  };

  const handleComment = () => {
    setCommented(!commented);
    setCommentCount(commented ? commentCount - 1 : commentCount + 1);
    setCommentColor(commented ? 'white' : '#FE6587');
  };

  const handleSave = () => {
    setSaved(!saved);
    setSavedCount(saved ? savedCount - 1 : savedCount + 1);
    setSavedColor(saved ? 'white' : '#FE6587');
  };

  const handleShare = () => {
    setShared(!shared);
    setSharedCount(shared ? sharedCount - 1 : sharedCount + 1);
    setSharedColor(shared ? 'white' : '#FE6587');
  };

  const handleRepost = () => {
    setReposted(!reposted);
    setRepostedCount(reposted ? repostedCount - 1 : repostedCount + 1);
    setRepostedColor(reposted ? 'white' : '#FE6587');
  };
  return (
    <BlurView tint={'light'} intensity={60} style={styles.actionBar}>
      {/* Like */}
      <TouchableOpacity onPress={handleLike}>
        <View style={styles.actionButton}>
          <FontAwesomeIcon
            icon={faHeart}
            size={20}
            color = {likeColor}
            style={{ marginHorizontal: 2 }}
          />
          <Text style={styles.actionCount}>{likeCount}</Text>
        </View>
      </TouchableOpacity>
      {/* Comment */}
      <TouchableOpacity onPress={handleComment}>
        <View style={styles.actionButton}>
          <FontAwesomeIcon
            icon={faCommentDots}
            size={20}
            color = {commentColor}
            style={{ marginHorizontal: 2 }}
          />
          <Text style={styles.actionCount}>{commentCount}</Text>
        </View>
      </TouchableOpacity>
      {/* Save */}
      <TouchableOpacity onPress={handleSave}>
        <View style={styles.actionButton}>
          <FontAwesomeIcon
            icon={faBookmark}
            size={20}
            color = {savedColor}
            style={{ marginHorizontal: 2 }}
          />
          <Text style={styles.actionCount}>{savedCount}</Text>
        </View>
      </TouchableOpacity>
      {/* Share */}
      <TouchableOpacity onPress={handleShare}>
        <View style={styles.actionButton}>
          <FontAwesomeIcon
            icon={faShare}
            size={20}
            color = {sharedColor}
            style={{ marginHorizontal: 2 }}
          />
          <Text style={styles.actionCount}>{sharedCount}</Text>
        </View>
      </TouchableOpacity>
      {/* Repost */}
      <TouchableOpacity onPress={handleRepost}>
        <View style={styles.actionButton}>
          <FontAwesomeIcon
            icon={faRetweet}
            size={20}
            color = {repostedColor}
            style={{ marginHorizontal: 2 }}
          />
          <Text style={styles.actionCount}>{repostedCount}</Text>
        </View>
      </TouchableOpacity>
      {/* Follow */}
      <TouchableOpacity>
        <LinearGradient
          colors={["#F52D6A", "#FE6587"]}
          start={{ x: 1, y: 1 }}
          end={{ x: 0, y: 0 }}
          style={styles.gradient} // Adjust as needed
        >
          <Text style={styles.labels}>Follow</Text>
        </LinearGradient>
      </TouchableOpacity>
    </BlurView>
  );
};

const styles = StyleSheet.create({
  actionBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: 'rgba(36, 226, 253, 0.7)',
    overflow: "hidden",
  },
  actionButton: {
    padding: 2,
    flexDirection: "row",
  },
  actionCount: {
    margin: 2,
    marginTop: 2,
    fontSize: 12,
    color : 'white'
  },
  gradient: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    paddingHorizontal: 4,
    margin : 2
  },
  labels: {
    color: "white",
    fontWeight: "400",
    fontSize: 10,
    margin: 4,
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
  },
  commentBox: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
  },
});

export default ActionBar;
