import 'react-native-gesture-handler';
import {StyleSheet, View, TextInput, Text, TouchableOpacity} from 'react-native';
import ToDoList from "./ToDoList/ToDoList";
import ToDoTitle from "./ToDoTitle/ToDoTitle";
import ToDoControls from "./ToDoControls/ToDoControls";
import {useState} from "react";
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Profile from "./Profile/Profile";

function HomeScreen() {
    const [toDo, setTodo] = useState([]);
    const [count, setCount] = useState(0);

    const addToDo = () => {
        setTodo([...toDo,{key : count, removeToDoTask : removeToDoTask, id : count }]);
        setCount(count + 1);
    }

    const clearToDo = () => {
        setTodo([]);
    }

    const removeToDoTask = (id) =>{
        setTodo(prevList=> prevList.filter(el => el.id !== id));
    }

    return (
        <View style={styles.container}>
            <ToDoTitle/>

            <ToDoControls addToDo = {addToDo} clearToDo = {clearToDo}/>

            <ToDoList toDo={toDo}/>
        </View>
    );
}

function ProfileScreen() {
    return (
        <Profile/>
    );
}


const Drawer = createDrawerNavigator();

export default function App() {
  return (
      <NavigationContainer>
          <Drawer.Navigator initialRouteName="Home" screenOptions={styles.drawerContainer}>
              <Drawer.Screen name="Home" component={HomeScreen} />
              <Drawer.Screen name="Profile" component={ProfileScreen} />
          </Drawer.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

    drawerContainer: {
      drawerActiveBackgroundColor: "#8181fa",
      drawerActiveTintColor: "white",
      headerTintColor:"#8181fa",
      headerTitleStyle: {
          color: "black",
          fontSize:20,
      },
      headerStyle: {
          borderBottomWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
      }
    },

});
