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

export function Inbox({ route }) {
  const messages = route.params;
  return (
    <View style={styles.container}>
      {messages.map((elem) => {
        return (
          <View
            style={{
              width: 200,
              height: 50,

              flexDirection: "row",
            }}
          >
            <Text>
              {elem.datetime}:{elem.sender}
            </Text>
            <Text>{elem.title}</Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    backgroundColor: "powderblue",
    width: "auto",
  },
  bigBlue: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 30,
  },
  red: {
    color: "red",
  },
});
