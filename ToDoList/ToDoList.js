import ToDoListStack from "../src/components/ToDoListStack";
import * as React from "react";

export default function ToDoList({ toDo, navigation }) {
  return <ToDoListStack toDo={toDo} navigation={navigation} />;
}
