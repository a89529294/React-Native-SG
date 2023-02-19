import { View, Text, Image, StyleSheet } from "react-native";

function ImageDetail({ title, imageSource, score }) {
  return (
    <View>
      <Image source={imageSource} />
      <Text>show image of {title}</Text>
      <Text>Score: {score}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default ImageDetail;
