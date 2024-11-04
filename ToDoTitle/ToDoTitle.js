import {StyleSheet, Text, View} from "react-native";

export default function ToDoTitle() {
    return (
        <View style = {styles.appTitleContainer}>
            <Text style = {styles.appTitle}>To do App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    appTitle: {
        fontSize: 36,
        margin:20,
        fontFamily:"Verdana",
    },
    appTitleContainer: {
        backgroundColor:"antiquewhite",
        width:"100%",
        paddingTop: 30,
        borderRadius:10,
    }
})