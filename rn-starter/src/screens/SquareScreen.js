import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
  const getNewValue = (color) => {
    if (state[color] + action.payload > 255) return 255;
    if (state[color] + action.payload < 0) return 0;
    return state[color] + action.payload;
  };
  switch (action.type) {
    case "change_red":
      return { ...state, red: getNewValue("red") };
    case "change_green":
      return { ...state, green: getNewValue("green") };
    case "change_blue":
      return { ...state, blue: getNewValue("blue") };
    default:
      throw new Error("Missing a case!");
  }
};

const SquareScreen = () => {
  const [colors, dispatch] = useReducer(reducer, {
    red: 0,
    green: 0,
    blue: 0,
  });

  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() => dispatch({ type: "change_red", payload: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ type: "change_red", payload: -1 * COLOR_INCREMENT })}
      />
      <ColorCounter
        color="Green"
        onIncrease={() => dispatch({ type: "change_green", payload: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ type: "change_green", payload: -1 * COLOR_INCREMENT })}
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => dispatch({ type: "change_blue", payload: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ type: "change_blue", payload: -1 * COLOR_INCREMENT })}
      />
      <View
        style={{ width: 100, height: 100, backgroundColor: `rgb(${colors.red}, ${colors.green}, ${colors.blue})` }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
