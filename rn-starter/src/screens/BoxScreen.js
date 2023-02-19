import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.textOneStyle}></View>
      <View style={styles.textTwoStyle}></View>
      <View style={styles.textThreeStyle}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    height: 200,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textOneStyle: {
    backgroundColor: "blue",
    width: 100,
    height: 100,
  },
  textTwoStyle: {
    backgroundColor: "red",
    width: 100,
    height: 100,
  },
  textThreeStyle: {
    backgroundColor: "green",
    width: 100,
    height: 100,
  },
});

export default BoxScreen;
