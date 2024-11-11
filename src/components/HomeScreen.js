import { useState } from "react";
import * as React from "react";
import HScreenElements from "./HScreenElements";
import { createStackNavigator } from "@react-navigation/native/src/__stubs__/createStackNavigator";
import TaskInfo from "./TaskInfo";

const Stack = createStackNavigator();

export default function HomeScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={"TaskList"} component={HScreenElements} />
      <Stack.Screen name={"TaskDetails"} component={TaskInfo} />
    </Stack.Navigator>
  );
}
