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
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <Text>{route.params.responseData.email}</Text>
      <Text>{route.params.responseData.name}</Text>
      <Text>{route.params.responseData.dateofbirth}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
