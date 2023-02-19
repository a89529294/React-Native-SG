import React, { useState } from "react";
import { View, StyleSheet, Button, FlatList } from "react-native";

const ColorScreen = () => {
  const [colors, setColors] = useState([]);

  return (
    <View>
      <Button title="Add a Color" onPress={() => setColors((pv) => [...pv, randomRgb()])} />

      <FlatList
        keyExtractor={(item) => item}
        data={colors}
        renderItem={({ item }) => <View style={{ backgroundColor: item, height: 100, width: 100 }} />}
      />
    </View>
  );
};

const randomRgb = () => {
  const randomNumber = () => Math.floor(Math.random() * 256);
  return `rgb(${randomNumber()},${randomNumber()},${randomNumber()} )`;
};

const styles = StyleSheet.create({});

export default ColorScreen;
