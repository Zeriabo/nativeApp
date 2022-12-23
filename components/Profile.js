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

export function Profile() {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => login()}
        title="Log in"
      >
        <Text>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
