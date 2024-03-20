import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Title = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "left",
          alignItems: "center",
        }}
      >
        <Image source={require("../assets/userImage.png")} style={{}} />
        <View
          style={{
            marginLeft: 8,
          }}
        >
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Text style={{ marginHorizontal: 8, fontWeight: "bold" }}>
              Mohammad Mostafa
            </Text>
            {/* <Image source={require("./assets/dotsIcon.png")} /> */}
          </View>
          {/* Buttons */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "start",
              alignItems: "center",
              marginLeft: 6,
            }}
          >
            <LinearGradient
              colors={["#5CD3C6", "#478FE4"]}
              start={{ x: 1, y: 1 }}
              end={{ x: 0, y: 0 }}
              style={styles.gradient} // Adjust as needed
            >
              <Text style={styles.labels}>1h Ago</Text>
            </LinearGradient>

            <LinearGradient
              colors={["#5CD3C6", "#478FE4"]}
              start={{ x: 1, y: 1 }}
              end={{ x: 0, y: 0 }}
              style={styles.gradient} // Adjust as needed
            >
              <Text style={styles.labels}>Dubai</Text>
            </LinearGradient>
          </View>
        </View>
      </View>
      <Image
        source={require("../assets/dotsIcon.png")}
        style={{ marginTop: -25, marginHorizontal: 4 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },
  gradient: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    paddingHorizontal: 4,
    margin: 2,
  },
  labels: {
    color: "white",
    fontWeight: "400",
    fontSize: 10,
    margin: 4,
  },
});

export default Title;
