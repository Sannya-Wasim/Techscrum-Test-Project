import React from "react";
import { View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faHome,
  faSearch,
  faPlusSquare,
  faHeart,
  faUser,
  faMicrophone,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { pink, white } from "../constants/string_constants";
import { LinearGradient } from "expo-linear-gradient";

const Navbar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navContent}>
        <Image
          source={require("../assets/userImage02.png")}
          alt="Image not found"
        />
        {/* Recording */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: white,
            margin: 8,
            borderRadius: 30,
            alignItems : 'center',
            padding : 8
          }}
        >
          <FontAwesomeIcon
            icon={faTrash}
            size={18}
            color={pink}
            style={{ marginHorizontal: 6 }}
          />
          <Image
            source={require("../assets/recording.png")}
            alt="Image not found"
            style={{ marginHorizontal: 8, padding: 4 }}
          />
          <FontAwesomeIcon icon={faMicrophone} size={20} color={pink} />
        </View>
        <Image source={require("../assets/send.png")} alt="Image not found" style={{width : 26, height : 26}} />
      </View>
      {/* <TouchableOpacity style={styles.iconContainer}>
        <FontAwesomeIcon icon={faHome} size={24} color={"black"} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <FontAwesomeIcon icon={faSearch} size={24} color={"black"} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <FontAwesomeIcon icon={faPlusSquare} size={24} color={"black"} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <FontAwesomeIcon icon={faHeart} size={24} color={"black"} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <FontAwesomeIcon icon={faUser} size={24} color={"black"} />
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#ECECEC",
  },
  iconContainer: {
    alignItems: "center",
  },
  navContent: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});

export default Navbar;
