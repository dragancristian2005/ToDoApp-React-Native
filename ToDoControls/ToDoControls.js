import {StyleSheet, View} from "react-native";
import ToDoButtons from "./ToDoButtons";

export default function ToDoControls({addToDo, clearToDo}) {
    return (
        <View style={styles.btnContainer}>
            <ToDoButtons text = {"Add Task"} addToDo={addToDo}/>
            <ToDoButtons text = {"Clear all tasks"} clearToDo = {clearToDo}/>
        </View>
    )
}

const styles = StyleSheet.create({
    btnContainer: {
        height:100,
        width:"100%",
        justifyContent:"space-evenly",
        alignItems:"center",
        flexDirection:"row",
    },
})