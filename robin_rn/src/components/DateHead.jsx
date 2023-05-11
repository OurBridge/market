import React from "react";
import { StyleSheet, Text, View } from "react-native";

const DateHead = ({ date }) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const formatted = `${year}년 ${month}월 ${day}일`;

  return (
    <View style={styles.block}>
      <Text style={styles.dateText}>{formatted}</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  block: {
    padding: 16,
    backgroundColor: "#757575",
  },
  dateText: {
    fontSize: 24,
    color: "white",
  },
});

export default DateHead;