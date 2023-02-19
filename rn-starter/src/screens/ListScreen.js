import { View, Text, StyleSheet, FlatList } from "react-native";

function ListScreen() {
  const friends = [
    { name: "Friend #1", age: 10 },
    { name: "Friend #2", age: 10 },
    { name: "Friend #3", age: 10 },
    { name: "Friend #4", age: 10 },
    { name: "Friend #5", age: 10 },
    { name: "Friend #6", age: 10 },
    { name: "Friend #7", age: 10 },
    { name: "Friend #8", age: 10 },
    { name: "Friend #9", age: 10 },
    { name: "Friend #10", age: 10 },
  ];

  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => (
        <Text style={styles.textStyle} key={item.key}>
          {item.name} - Age {item.age}
        </Text>
      )}
    />
  );
}

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
