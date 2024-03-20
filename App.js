import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import Navbar from './components/Navbar'
import Home from './screens/Homescreen'

const App = () => {
  return (
    <View style={styles.container}>
      <Home/>
      <Navbar/>
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
});

export default App;
