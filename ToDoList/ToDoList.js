import { createStackNavigator } from "@react-navigation/native/src/__stubs__/createStackNavigator";
import ToDoListStack from "../src/components/ToDoListStack";
import * as React from "react";

const Stack = createStackNavigator();

export default function ToDoList({ toDo, navigation }) {
  return <ToDoListStack toDo={toDo} navigation={navigation} />;
}
