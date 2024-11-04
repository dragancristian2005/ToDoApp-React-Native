import {StyleSheet, View} from 'react-native';
import ToDoList from "./ToDoList/ToDoList";
import ToDoTitle from "./ToDoTitle/ToDoTitle";
import ToDoControls from "./ToDoControls/ToDoControls";
import {useState} from "react";
import ToDoTask from "./ToDoList/ToDoTask";

export default function App() {
  const [toDo, setTodo] = useState([]);
  const [count, setCount] = useState(0);

  const addToDo = () => {
      setTodo([...toDo,<ToDoTask key = {count} removeToDoTask = {removeToDoTask} id = {count}></ToDoTask>]);
      setCount(count + 1);
  }

  const clearToDo = () => {
      setTodo([]);
  }

  const removeToDoTask = (id) => {
      setTodo(toDo.filter((el) => el.id !== id));
  }

  return (
    <View style={styles.container}>
      <ToDoTitle/>

      <ToDoControls addToDo = {addToDo} clearToDo = {clearToDo}/>

      <ToDoList toDo = {toDo}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
