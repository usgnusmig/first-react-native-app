import { useState } from "react";
import { StyleSheet, SafeAreaView, FlatList } from "react-native";

import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import TaskModal from "./components/TaskModal";

export default function App() {
  const [todos, setTodos] = useState([
    { title: "일기쓰기", done: true },
    { title: "공부하기", done: false },
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <FlatList
        data={todos}
        renderItem={({ item }) => {
          return (
            <TodoItem
              title={item.title}
              done={item.done}
              keyExtractor={(_, index) => {
                return `${index}`;
              }}
            />
          );
        }}
      />
      <TaskModal isVisible={false} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
