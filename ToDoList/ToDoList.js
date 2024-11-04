import {ScrollView, StyleSheet} from "react-native";

export default function ToDoList({toDo}) {
    return(
        <ScrollView style = {styles.toDoContainer} contentContainerStyle={{paddingBottom:50}}>
            {toDo.map((comp)=>comp)}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    toDoContainer: {
        width:"100%",
        paddingTop:15,
    },
})