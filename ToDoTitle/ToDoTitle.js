import {StyleSheet, TextInput, View} from "react-native";

export default function ToDoTitle() {
    return (
        <View style = {styles.appTitleContainer}>
            <TextInput style = {styles.appTitle}
                       placeholder={"Enter a name:"}
                       placeholderTextColor={"#ececec"}
                       maxLength={20}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    appTitle: {
        fontSize: 30,
        margin:20,
        fontFamily:"Verdana",
        color:'white',
    },
    appTitleContainer: {
        backgroundColor:"#8181fa",
        width:"95%",
        paddingTop: 30,
        borderRadius:10,
    }
})