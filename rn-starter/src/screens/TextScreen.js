import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");

  return (
    <View>
      <TextInput
        style={styles.input}
        autoCorrect={false}
        autoCapitalize="none"
        value={name}
        onChangeText={(value) => setName(value)}
      />
      <Text style={styles.text}>My name is {name}</Text>
      {name.length < 5 && <Text style={styles.text}>Must be at least 5 characters long!</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
  text: {
    marginLeft: 15,
  },
});

export default TextScreen;
