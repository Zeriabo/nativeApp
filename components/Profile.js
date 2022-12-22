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
      <Button>Profile</Button>
    </View>
  );
}

const styles = StyleSheet.create({});
