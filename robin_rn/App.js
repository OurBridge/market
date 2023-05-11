import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import DateHead from "./src/components/DateHead";
import AddTodo from "./src/components/AddTodo";
import Empty from "./src/components/Empty";
import { useState } from "react";
import TodoList from "./src/components/TodoList";

export default function App() {
  const today = new Date();
  const [todos, setTodos] = useState([
    { id: 1, text: "할 일 1", done: true },
    { id: 2, text: "할 일 2", done: false },
    { id: 3, text: "할 일 3", done: true },
  ]);

  return (
    <SafeAreaView style={styles.block}>
      <KeyboardAvoidingView
        behavior={Platform.select({ ios: "padding", android: undefined })}
        style={styles.avoid}
      >
        <DateHead date={today} />
        {todos.length === 0 ? <Empty /> : <TodoList todos={todos} />}
        <AddTodo />
        <StatusBar style="auto" backgroundColor="#757575" />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: "white",
  },
  avoid: {
    flex: 1,
  },
});
