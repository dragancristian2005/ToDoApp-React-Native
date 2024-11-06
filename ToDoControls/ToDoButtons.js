import {StyleSheet, Text, TouchableOpacity} from "react-native";

export default function ToDoButtons({text, addToDo, clearToDo}) {
    return (
        <TouchableOpacity style = {styles.btn} onPress={text === "Add Task" ? addToDo : clearToDo}>
            <Text style={styles.btnText}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btnText: {
        fontSize: 15,
        fontFamily:"Verdana",
        color:'white',
        fontWeight:"bold",
    },
    btn: {
        backgroundColor:"#8181fa",
        padding:12,
        borderRadius:10,
    }
})