import { StyleSheet, TextInput, View} from "react-native";
import * as React from "react";

export default function Profile() {
    return(
        <View style = {styles.profileContainer}>
            <TextInput placeholder={"Enter your first name:"}
                       style = {styles.nameContainer}
                       maxLength={15}
            />
            <TextInput placeholder={"Enter your last name:"}
                       style = {styles.nameContainer}
                       maxLength={15}
            />
            <TextInput placeholder={"Enter your age:"}
                       style = {styles.nameContainer}
                       maxLength={2}
                       type={"number"}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    profileContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop:15,
        gap:20
    },
    nameContainer: {
        width:"90%",
        borderRadius:10,
        backgroundColor:"white",
        padding:15,
        fontSize:20,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
})

