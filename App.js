import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import TaskModal from "./components/TaskModal";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <TodoItem title="리액트 네이티브 앱 만들기" done={true} />
      <TodoItem title="리액트 네이트브 마스터하기" done={false} />
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
