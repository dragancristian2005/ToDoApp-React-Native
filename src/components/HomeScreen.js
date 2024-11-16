import * as React from "react";
import HScreenElements from "./HScreenElements";
import TaskInfo from "./TaskInfo";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function HomeScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={"TaskList"} component={HScreenElements} />
      <Stack.Screen name={"TaskDetails"} component={TaskInfo} />
    </Stack.Navigator>
  );
}
