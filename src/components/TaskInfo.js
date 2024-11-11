import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as React from "react";

const TaskInfo = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("List")}
        style={styles.backBtn}
      >
        <Text style={styles.backBtnTxt}>←Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "",
    width: "100%",
  },
  backBtn: {
    backgroundColor: "#8181fa",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
    alignItems: "flex-start",
  },
  backBtnTxt: {
    color: "white",
    fontSize: 16,
  },
});

export default TaskInfo;
