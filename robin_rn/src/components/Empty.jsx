import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Empty = () => {
  return (
    <View style={styles.block}>
      <Image
        style={styles.image}
        source={require("../../assets/images/young_and_happy.png")}
        resizeMode="contain"
      />
      <Text style={styles.description}>등록된 할 일이 없습니다.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  description: {
    fontSize: 24,
    color: "#9e9e9e",
  },
  image: {
    width: 240,
    height: 179,
    marginBottom: 16,
  },
});

export default Empty;
