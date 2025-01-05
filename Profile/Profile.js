import { StyleSheet, TextInput, View } from "react-native";
import * as React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export default function Profile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");

  const saveFirstName = async (text) => {
    try {
      setFirstName(text);
      await AsyncStorage.setItem("firstName", text);
    } catch (error) {
      console.error("Failed to set firstName", error);
    }
  };

  const saveLastName = async (text) => {
    try {
      setLastName(text);
      await AsyncStorage.setItem("lastName", text);
    } catch (error) {
      console.error("Failed to set lastName", error);
    }
  };

  const saveAge = async (text) => {
    try {
      setAge(text);
      await AsyncStorage.setItem("age", text);
    } catch (error) {
      console.error("Failed to set age", error);
    }
  };

  useEffect(() => {
    const loadFirstName = async () => {
      try {
        const loadedFirstName = await AsyncStorage.getItem("firstName");
        if (loadedFirstName !== null) {
          setFirstName(loadedFirstName);
        }
      } catch (error) {
        console.error("Failed to load firstName", error);
      }
    };
    loadFirstName();
  }, []);

  useEffect(() => {
    const loadLastName = async () => {
      try {
        const loadedLastName = await AsyncStorage.getItem("lastName");
        if (loadedLastName !== null) {
          setLastName(loadedLastName);
        }
      } catch (error) {
        console.error("Failed to load lastName", error);
      }
    };
    loadLastName();
  }, []);

  useEffect(() => {
    const saveAge = async () => {
      try {
        const loadedAge = await AsyncStorage.getItem("age");
        if (loadedAge !== null) {
          setAge(loadedAge);
        }
      } catch (error) {
        console.error("Failed to load age", error);
      }
    };
    saveAge();
  }, []);

  return (
    <View style={styles.profileContainer}>
      <TextInput
        placeholder={"Enter your first name:"}
        style={styles.nameContainer}
        maxLength={15}
        value={firstName}
        onChangeText={saveFirstName}
      />
      <TextInput
        placeholder={"Enter your last name:"}
        style={styles.nameContainer}
        maxLength={15}
        value={lastName}
        onChangeText={saveLastName}
      />
      <TextInput
        placeholder={"Enter your age:"}
        style={styles.nameContainer}
        maxLength={2}
        type={"number"}
        value={age}
        onChangeText={saveAge}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 15,
    gap: 20,
  },
  nameContainer: {
    width: "90%",
    borderRadius: 10,
    backgroundColor: "white",
    padding: 15,
    fontSize: 20,

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
