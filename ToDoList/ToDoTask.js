import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {useState} from "react";

export default function ToDoTask({removeToDoTask, id}) {
    const [buttonColor, setButtonColor] = useState("#ccc");

    const toggleColor = () => {
        buttonColor === "#ccc" ?
            setButtonColor("#a0e7ff") : setButtonColor("#ccc");
    }

    return (
        <View style = {styles.taskContainer}>
            <TouchableOpacity style = {[styles.taskToggleBtn, {backgroundColor: buttonColor}]}
                              onPress={toggleColor}
            ><Text style = {{fontWeight:"bold"}}>✓</Text></TouchableOpacity>

            <TextInput style={styles.textInput} placeholder={"Add a new task"}></TextInput>

            <TouchableOpacity style = {styles.taskRemoveBtn} onPress={()=>removeToDoTask(id)}><Text style={{fontWeight:"bold"}}>X</Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    taskContainer: {
        height:40,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop:10
    },
    textInput: {
        width:"75%",
        height:"100%",
        borderRadius:10,
        backgroundColor:"white",
        padding:10,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    taskToggleBtn: {
        width:"10%",
        height:"100%",
        borderRadius:50,
        justifyContent:"center",
        alignItems:"center",
    },
    taskRemoveBtn: {
        backgroundColor:"#f35e5e",
        width:"10%",
        borderRadius:50,
        justifyContent:"center",
        alignItems:"center",
    }
})