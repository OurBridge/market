import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import TodoItem from "./TodoItem";

const TodoList = ({ todos }) => {
  return (
    <FlatList
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      style={styles.list}
      data={todos}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TodoItem id={item.id} text={item.text} done={item.done} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  separator: {
    backgroundColor: "#e0e0e0",
    height: 1,
  },
});

export default TodoList;
