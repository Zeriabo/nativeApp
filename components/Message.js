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
  FlatList,
} from "react-native";
import { connect } from "react-redux";

export function Message({ route, navigation }) {
  console.log(route);

  const messages = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Message:</Text>
      </View>
      <View style={styles.message}>
        <Text>{route.params.item.messagebody}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    marginBottom: 50,
    backgroundColor: "#55B8CB",
  },
  header: {
    alignItems: "center",
    fontWeight: "bold",
  },
  message: {
    marginLeft: 20,
    marginRight: 10,
  },
});
