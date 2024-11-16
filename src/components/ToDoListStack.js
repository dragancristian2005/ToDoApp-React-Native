import ToDoTask from "../../ToDoList/ToDoTask";
import { ScrollView, StyleSheet } from "react-native";

const ToDoListStack = ({ navigation, toDo }) => {
  return (
    <ScrollView
      style={styles.toDoContainer}
      contentContainerStyle={{ paddingBottom: 50 }}
    >
      {toDo.map((comp) => (
        <ToDoTask
          key={`${comp.key}`}
          removeToDoTask={comp.removeToDoTask}
          id={comp.id}
          navigation={navigation}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  toDoContainer: {
    width: "100%",
    paddingTop: 15,
  },
});

export default ToDoListStack;
