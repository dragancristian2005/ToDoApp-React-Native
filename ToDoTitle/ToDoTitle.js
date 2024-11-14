import { StyleSheet, TextInput, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export default function ToDoTitle() {
  const [title, setTitle] = useState("");

  useEffect(() => {
    const loadStoredTitle = async () => {
      try {
        const storedTitle = await AsyncStorage.getItem("title");
        if (storedTitle !== null) {
          setTitle(storedTitle);
        }
      } catch (error) {
        console.error("Failed to get title", error);
      }
    };
    loadStoredTitle();
  }, []);

  const saveTitle = async (text) => {
    try {
      setTitle(text);
      await AsyncStorage.setItem("title", text);
    } catch (error) {
      console.error("Failed to store title", error);
    }
  };

  return (
    <View style={styles.appTitleContainer}>
      <TextInput
        style={styles.appTitle}
        placeholder={"Enter a name:"}
        placeholderTextColor={"#ececec"}
        maxLength={20}
        value={title}
        onChangeText={saveTitle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  appTitle: {
    fontSize: 30,
    margin: 20,
    fontFamily: "Verdana",
    color: "white",
  },
  appTitleContainer: {
    backgroundColor: "#8181fa",
    width: "95%",
    paddingTop: 30,
    borderRadius: 10,
  },
});
