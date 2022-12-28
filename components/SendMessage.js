import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Alert,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import store from "../state/store/Store";

export function SendMessage({ route, navigation }) {
  const [receivers, setReceivers] = useState([""]);
  const [title, setTitle] = useState("");
  const [messageBody, setMessageBody] = useState("");

  function sendMessage() {
    const message = {
      token: store.getState().userReducer.token,
      title: title,
      receivers: receivers,
      messagebody: messageBody,
    };
    navigation.navigate("MessageSent", message);
    clear();
  }
  function clear() {
    setMessageBody("");
    setReceivers("");
    setTitle("");
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          value={title}
          style={styles.TextInput}
          placeholder="title"
          placeholderTextColor="#003f5c"
          onChangeText={(title) => setTitle(title)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          value={receivers}
          style={styles.TextInput}
          placeholder="receivers"
          placeholderTextColor="#003f5c"
          onChangeText={(receiver) => {
            setReceivers(receiver.split(","));
          }}
        />
      </View>

      <View style={styles.textAreaContainer}>
        <TextInput
          value={messageBody}
          style={styles.textArea}
          underlineColorAndroid="transparent"
          placeholder="Type something"
          placeholderTextColor="grey"
          numberOfLines={10}
          multiline={true}
          onChangeText={(message) => setMessageBody(message)}
        />
      </View>

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => {
          sendMessage();
        }}
      >
        <Text style={styles.loginText}>Send Message</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.forgot_button}
        onPress={() => {
          clear();
        }}
      >
        <Text>Clear</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  TextInput: {
    width: 200,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  registerBtn: {
    width: 200,
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#F4B910",
  },
  loginBtn: {
    width: 200,
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#3575ED",
  },
  forgot_button: {
    width: 200,
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#DCF410",
  },
  textAreaContainer: {
    borderColor: "grey",
    borderWidth: 1,
    padding: 5,
  },
  textArea: {
    height: 150,
    justifyContent: "flex-start",
    width: 350,
  },
});
