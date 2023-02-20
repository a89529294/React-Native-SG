import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ route }) => {
  const [result, setResult] = useState(null);

  useEffect(() => {
    getResult(route.params.id);
  }, []);

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  if (!result) return null;

  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <Image style={{ height: 200, width: 300 }} source={{ uri: item }} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ResultsShowScreen;
