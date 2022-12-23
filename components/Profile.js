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
import { connect } from "react-redux";
import { SignIn } from "./SignIn";

export function Profile({ route, navigation }) {
  console.log(route.params.responseData);
  function fetchMessages(token) {
    fetch("http://localhost:8080/readmessages", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: token,
      }),
    })
      .then((responseData) => {
        if (responseData.status) {
          Alert.alert("No messages");
        }
      })
      .catch((error) => {
        console.error(error);
        Alert.alert("Error");
      });
  }
  return (
    <View style={styles.container}>
      <Text>Hello {route.params.responseData.name}</Text>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => fetchMessages(route.params.responseData.token)}
        title="Inbox"
      >
        <Text>Inbox</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => navigation.navigate("SendMessage", { route })}
        title="Send a message"
      >
        <Text>Send message</Text>
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
    paddingTop: 30,
    paddingLeft: 20,
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
});
