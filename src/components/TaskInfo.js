import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import * as React from "react";
import KContainer from "./KContainer";

const TaskInfo = ({ navigation }) => {
  return (
    <KContainer>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backBtn}
      >
        <Text style={styles.backBtnTxt}>←Back</Text>
      </TouchableOpacity>
      <View style={styles.textInputContainer}>
        <TextInput
          placeholder={"Enter task details: (optional)"}
          style={styles.textInput}
          multiline={true}
          maxLength={100}
        />
      </View>
    </KContainer>
  );
};

const styles = StyleSheet.create({
  backBtn: {
    backgroundColor: "#8181fa",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
    alignItems: "flex-start",
    width: "20%",
    marginLeft: 10,
    marginTop: 10,
  },
  backBtnTxt: {
    color: "white",
    fontSize: 16,
  },
  textInput: {
    width: "100%",
    height: "100%",
  },
  textInputContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    width: "90%",
    alignSelf: "center",
    height: 250,
    marginTop: 25,
    backgroundColor: "#fff",
    padding: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.5,

    elevation: 4,
  },
});

export default TaskInfo;
