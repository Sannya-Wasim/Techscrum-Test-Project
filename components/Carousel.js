import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  gold,
  yellow,
  lightgray,
  darkgray,
  pink,
  black,
  white,
  red
} from "../constants/string_constants";
import { SliderBox } from "react-native-image-slider-box";

const Carousel = () => {
  const sliderImages = [
    require("../assets/postImage.png"),
    require("../assets/postImage.png"),
    require("../assets/postImage.png"),
    require("../assets/postImage.png")
  ];
  return (
    <View>
      <SliderBox
        images={sliderImages}
        dotColor={white}
        inactiveDotColor={lightgray}
        ImageComponentStyle={{
            width: "85%",
            height: 340,
            borderRadius: 10,
            marginBottom: 5,
            marginLeft : -64
        }}
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({});