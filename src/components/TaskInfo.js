import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as React from "react";
import KContainer from "./KContainer";

const TaskInfo = ({ navigation }) => {
  return (
    <KContainer>
      <TouchableOpacity
        onPress={() => navigation.navigate("TaskList")}
        style={styles.backBtn}
      >
        <Text style={styles.backBtnTxt}>←Back</Text>
      </TouchableOpacity>
    </KContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
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
});

export default TaskInfo;
