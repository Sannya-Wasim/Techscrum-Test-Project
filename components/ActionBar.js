import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

const ActionBar = () => {
    const [liked, setLiked] = useState(false);
  const [commented, setCommented] = useState(false);
  const [saved, setSaved] = useState(false);
  const [shared, setShared] = useState(false);
  const [reposted, setReposted] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [commentCount, setCommentCount] = useState(0);
  const [savedCount, setSavedCount] = useState(0);
  const [sharedCount, setSharedCount] = useState(0);
  const [repostedCount, setRepostedCount] = useState(0);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  const handleComment = () => {
    setCommented(!commented);
    setCommentCount(commented ? commentCount - 1 : commentCount + 1);
  };

  const handleSave = () => {
    setSaved(!saved);
    setSavedCount(saved ? savedCount - 1 : savedCount + 1);
  };

  const handleShare = () => {
    setShared(!shared);
    setSharedCount(shared ? sharedCount - 1 : sharedCount + 1);
  };

  const handleRepost = () => {
    setReposted(!reposted);
    setRepostedCount(reposted ? repostedCount - 1 : repostedCount + 1);
  };
  return (
      <View style={styles.actionBar}>
          <TouchableOpacity onPress={handleLike}>
            <Text style={[styles.actionButton, liked && styles.liked]}>
              Like {likeCount}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleComment}>
            <Text style={[styles.actionButton, commented && styles.commented]}>
              Comment {commentCount}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSave}>
            <Text style={[styles.actionButton, saved && styles.saved]}>
              Save {savedCount}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleShare}>
            <Text style={[styles.actionButton, shared && styles.shared]}>
              Share {sharedCount}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleRepost}>
            <Text style={[styles.actionButton, reposted && styles.reposted]}>
              Repost {repostedCount}
            </Text>
          </TouchableOpacity>
        </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    postCard: {
      width: "80%",
      padding: 20,
      borderRadius: 10,
      backgroundColor: "#f0f0f0",
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
    },
    commentBox: {
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 5,
      padding: 10,
    },
  });

export default ActionBar
