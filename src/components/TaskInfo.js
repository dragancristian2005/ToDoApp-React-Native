import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import * as React from "react";
import KContainer from "./KContainer";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TaskInfo = ({ navigation, route }) => {
  const { id } = route.params;
  const [taskInfo, setTaskInfo] = useState("");

  useEffect(() => {
    const loadTaskInfo = async () => {
      try {
        const storedTaskInfo = await AsyncStorage.getItem(`taskInfo-${id}`);
        if (storedTaskInfo !== null) {
          setTaskInfo(storedTaskInfo);
        }
      } catch (error) {
        console.error("Failed to store taskInfo", error);
      }
    };
    loadTaskInfo();
  }, [id]);

  const saveTaskInfo = async (text) => {
    try {
      setTaskInfo(text);
      await AsyncStorage.setItem(`taskInfo-${id}`, text);
    } catch (error) {
      console.error("Failed to store taskInfo", error);
    }
  };

  return (
    <KContainer>
      <TouchableOpacity
        onPress={() => navigation.navigate("TaskList")}
        style={styles.backBtn}
      >
        <Text style={styles.backBtnTxt}>←Back</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        maxLength={100}
        multiline={true}
        placeholder={"Enter Task Details: (optional)"}
        value={taskInfo}
        onChangeText={saveTaskInfo}
      />
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
  input: {
    backgroundColor: "white",
    width: "90%",
    height: 275,
    alignSelf: "center",
    marginTop: 25,
    borderRadius: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
});

export default TaskInfo;
