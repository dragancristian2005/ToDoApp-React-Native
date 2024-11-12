import "react-native-gesture-handler";
import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Profile from "./Profile/Profile";
import HomeScreen from "./src/components/HomeScreen";
import { AppProvider } from "./src/components/AppContext";
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            headerStyle: {
              borderBottomWidth: 0,
              shadowOpacity: 0,
              elevation: 0,
              borderBottomColor: "transparent",
            },
            headerTintColor: "#8181fa",
            drawerActiveTintColor: "#8181fa",
            headerTitleStyle: {
              fontSize: 20,
              color: "black",
            },
            drawerLabelStyle: {
              fontSize: 18,
            },
          }}
        >
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Profile" component={Profile} />
        </Drawer.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}
