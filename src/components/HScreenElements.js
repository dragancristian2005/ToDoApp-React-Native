import ToDoTitle from "../../ToDoTitle/ToDoTitle";
import ToDoControls from "../../ToDoControls/ToDoControls";
import ToDoList from "../../ToDoList/ToDoList";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StyleSheet, View } from "react-native";
import React, { useState, useEffect } from "react";

const HScreenElements = ({ navigation }) => {
  const [toDo, setTodo] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const loadToDo = async () => {
      try {
        const storedToDo = await AsyncStorage.getItem("toDo");
        if (storedToDo !== null) {
          const newToDo = JSON.parse(storedToDo).map((item) => {
            return {
              ...item,
              removeToDoTask: removeToDoTask,
            };
          });
          setTodo(newToDo);
        }
      } catch (error) {
        console.error("Failed to load stored toDo", error);
      }
    };
    loadToDo();
  }, []); ///load stored toDo async

  useEffect(() => {
    const saveToDo = async () => {
      try {
        await AsyncStorage.setItem("toDo", JSON.stringify(toDo));
      } catch (error) {
        console.log("Failed to set toDo", error);
      }
    };
    saveToDo();
  }, [toDo]); ///save async toDo

  useEffect(() => {
    const loadCount = async () => {
      try {
        const storedCount = await AsyncStorage.getItem("count");
        if (storedCount !== null) {
          setCount(parseInt(storedCount, 10));
        }
      } catch (error) {
        console.error("Failed to load count from storage", error);
      }
    };
    loadCount();
  }, []); /// load stored count async

  useEffect(() => {
    const saveCount = async () => {
      try {
        await AsyncStorage.setItem("count", count.toString());
      } catch (error) {
        console.error("Failed to set count to storage", error);
      }
    };
    saveCount();
  }, [count]); ///save async count

  const clearStoredCount = async () => {
    try {
      await AsyncStorage.removeItem("count");
      setCount(0);
    } catch (error) {
      console.error("Failed to clear count from storage", error);
    }
  }; ///clear stored count

  const clearStoredToDo = async () => {
    try {
      await AsyncStorage.removeItem("toDo");
      setTodo([]);
    } catch (error) {
      console.error("Failed to clear toDo", error);
    }
  };

  const addToDo = async () => {
    setTodo([...toDo, { key: count, removeToDoTask, id: count }]);

    setCount(count + 1);
  };

  const clearAllData = async () => {
    try {
      await AsyncStorage.removeItem("toDo");
      await AsyncStorage.removeItem("count");

      const keys = await AsyncStorage.getAllKeys();
      const regex = /^taskName-\d+$/;
      const regexColor = /^buttonColor-\d+$/;
      const regexDetails = /^taskInfo-\d+$/;

      for (const key of keys) {
        if (regex.test(key) || regexDetails.test(key)) {
          await AsyncStorage.removeItem(key);
        }
      }

      for (const key of keys) {
        if (regexColor.test(key)) {
          await AsyncStorage.setItem(key, "#ccc");
        }
      }

      console.log("AsyncStorage cleared!");
    } catch (error) {
      console.error("Failed to clear AsyncStorage", error);
    }
  };

  const clearToDo = () => {
    clearStoredToDo();
    clearStoredCount();
    clearAllData();
  };

  const removeToDoTask = (id) => {
    setTodo((prevList) => prevList.filter((el) => el.id !== id));
  };

  return (
    <View style={styles.container}>
      <ToDoTitle />

      <ToDoControls addToDo={addToDo} clearToDo={clearToDo} />

      <ToDoList toDo={toDo} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HScreenElements;
