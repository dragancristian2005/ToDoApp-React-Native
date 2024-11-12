import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export default function ToDoTask({ navigation, removeToDoTask, id }) {
  const [buttonColor, setButtonColor] = useState("#ccc");
  const [taskName, setTaskName] = useState("");

  useEffect(() => {
    const loadColor = async () => {
      try {
        const storedColor = await AsyncStorage.getItem(`buttonColor-${id}`);
        if (storedColor !== null) {
          setButtonColor(storedColor);
        }
      } catch (error) {
        console.error("Failed to store buttonColor", error);
      }
    };
    loadColor();
  }, [id]); /// get button color

  useEffect(() => {
    const saveColor = async () => {
      try {
        await AsyncStorage.setItem(`buttonColor-${id}`, buttonColor);
      } catch (error) {
        console.log("Failed to set buttonColor", error);
      }
    };

    const timeout = setTimeout(() => {
      saveColor();
    }, 500);

    return () => clearTimeout(timeout);
  }, [buttonColor, id]); ///set button color

  useEffect(() => {
    const loadTaskName = async () => {
      try {
        const storedTaskName = await AsyncStorage.getItem(`taskName-${id}`);
        if (storedTaskName !== null) {
          setTaskName(storedTaskName);
        }
      } catch (error) {
        console.error("Failed to load taskName", error);
      }
    };
    loadTaskName();
  }, [id]); /// get task name

  const saveTaskName = async (text) => {
    try {
      setTaskName(text);
      await AsyncStorage.setItem(`taskName-${id}`, text);
    } catch (error) {
      console.error("Failed to set taskName", error);
    }
  };

  const toggleColor = () => {
    setButtonColor((prevColor) => (prevColor === "#ccc" ? "#a0e7ff" : "#ccc"));
  };

  // console.log(id);

  return (
    <View style={styles.taskContainer} id={id}>
      <TouchableOpacity
        style={[styles.taskToggleBtn, { backgroundColor: buttonColor }]}
        onPress={toggleColor}
      >
        <Text style={{ fontWeight: "bold" }}>✓</Text>
      </TouchableOpacity>

      <TextInput
        style={styles.textInput}
        placeholder={"Add a new task"}
        value={taskName}
        onChangeText={saveTaskName}
      ></TextInput>

      <TouchableOpacity
        style={styles.taskDetailsBtn}
        onPress={() => navigation.navigate("TaskDetails", { id: id })}
      >
        <Text style={styles.infoText}>ⓘ</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.taskRemoveBtn}
        onPress={() => removeToDoTask(id)}
      >
        <Text style={{ fontWeight: "bold" }}>X</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    height: 40,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10,
  },
  textInput: {
    width: "65%",
    height: "100%",
    borderRadius: 10,
    backgroundColor: "white",
    padding: 10,

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
    width: "10%",
    height: "100%",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  taskRemoveBtn: {
    backgroundColor: "#f35e5e",
    width: "10%",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  taskDetailsBtn: {
    backgroundColor: "#ccc",
    width: "10%",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  infoText: {
    fontSize: 30,
    textAlign: "center",
  },
});
