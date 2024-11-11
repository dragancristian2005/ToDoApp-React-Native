import { useState } from "react";
import { View, StyleSheet } from "react-native";
import ToDoTitle from "../../ToDoTitle/ToDoTitle";
import ToDoControls from "../../ToDoControls/ToDoControls";
import ToDoList from "../../ToDoList/ToDoList";
import * as React from "react";

export default function HomeScreen() {
  const [toDo, setTodo] = useState([]);
  const [count, setCount] = useState(0);

  const addToDo = () => {
    setTodo([
      ...toDo,
      { key: count, removeToDoTask: removeToDoTask, id: count },
    ]);
    setCount(count + 1);
  };

  const clearToDo = () => {
    setTodo([]);
  };

  const removeToDoTask = (id) => {
    setTodo((prevList) => prevList.filter((el) => el.id !== id));
  };

  return (
    <View style={styles.container}>
      <ToDoTitle />

      <ToDoControls addToDo={addToDo} clearToDo={clearToDo} />

      <ToDoList toDo={toDo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
