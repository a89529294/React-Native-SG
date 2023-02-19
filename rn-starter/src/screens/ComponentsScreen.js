import { Text, StyleSheet, View } from "react-native";

function ComponentsScreen() {
  const name = "Albert";
  return (
    <View>
      <Text style={styles.title}>Getting started with React Native!</Text>
      <Text style={styles.intro}>My name is {name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 45,
  },
  intro: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
