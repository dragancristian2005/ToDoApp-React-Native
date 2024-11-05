import {ScrollView, StyleSheet} from "react-native";
import ToDoTask from "./ToDoTask";

export default function ToDoList({toDo}) {
    return(
        <ScrollView style = {styles.toDoContainer} contentContainerStyle={{paddingBottom:50}}>
            {toDo.map(comp=>(
                <ToDoTask key = {comp.key} removeToDoTask={comp.removeToDoTask} id={comp.id}/>
            ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    toDoContainer: {
        width:"100%",
        paddingTop:15,
    },
})