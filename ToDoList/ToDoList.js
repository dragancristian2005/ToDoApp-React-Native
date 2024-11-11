import { createStackNavigator } from "@react-navigation/native/src/__stubs__/createStackNavigator";
import ToDoListStack from "../src/components/ToDoListStack";
import TaskInfo from "../src/components/TaskInfo";
import * as React from "react";

const Stack = createStackNavigator();

export default function ToDoList({ toDo, navigation }) {
  return (
    // <Stack.Navigator>
    //   <Stack.Screen name={"List"}>
    //     {(props) => <ToDoListStack {...props} toDo={toDo} />}
    //   </Stack.Screen>
    //   <Stack.Screen name={"TaskInfo"} component={TaskInfo} />
    // </Stack.Navigator>
    <ToDoListStack toDo={toDo} navigation={navigation} />
  );
}
