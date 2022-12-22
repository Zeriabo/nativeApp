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

export function Home() {
  return (
    <View
      style={{
        width: "100%",
        height: "90%",
        backgroundColor: "skyblue",
      }}
    >
      <Image
        source={require("../assets/images/zmessaging.png")}
        style={{ width: 400, height: 400 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
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
