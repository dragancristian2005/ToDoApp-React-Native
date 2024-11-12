import ToDoTitle from "../../ToDoTitle/ToDoTitle";
import ToDoControls from "../../ToDoControls/ToDoControls";
import ToDoList from "../../ToDoList/ToDoList";
import { StyleSheet, View } from "react-native";
import React, { useContext } from "react";
import { AppContext } from "./AppContext";

const HScreenElements = ({ navigation }) => {
  const { toDo, setTodo } = useContext(AppContext);
  const { count, setCount } = useContext(AppContext);

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

      <ToDoList toDo={toDo} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HScreenElements;
