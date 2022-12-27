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
import { connect, useDispatch } from "react-redux";
import { Inbox } from "./Inbox";
import store from "../state/store/Store";
import { useReadMessagesQuery } from "../services/readMessageApi";
import { useLoginQuery } from "../services/userApi";

export function Profile({ route, navigation }) {
  const state = store.getState();

  const { data, error, isLoading } = useLoginQuery(route.params);
  console.log(state);

  function fetchMessages(token) {
    navigation.navigate("Inbox", token);
  }

  return (
    <View style={styles.container}>
      {isLoading == false ? (
        <View>
          <Text>Hello {data.name}</Text>
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => fetchMessages(data.token)}
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
      ) : isLoading == true ? (
        <Text>Loading ...</Text>
      ) : error ? (
        <Text>Error: {error}</Text>
      ) : null}
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
