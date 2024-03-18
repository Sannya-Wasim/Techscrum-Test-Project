import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

const PostImage = () => {
  return (
    <View >
      <Image source={require('../assets/postImage.png')} style={styles.container}/>
    </View>
  )
}
const styles = StyleSheet.create({
    container : {
        width : '100%',
        height : 300,
        borderRadius : 10,
        marginVertical : 5
    }
})

export default PostImage
