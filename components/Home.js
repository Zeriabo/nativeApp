import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  SafeAreaView,
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

export function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "skyblue",
        }}
      >
        <Image
          source={require("../assets/images/zmessaging.png")}
          style={{ width: 360, height: 400 }}
        />

        <TouchableOpacity
          onPress={() => navigation.navigate("SignIn")}
          style={styles.SignInButton}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 25,
              color: "#3b88c3",
              backgroundColor: "rgba(21,44,249,0,65)",
            }}
          >
            Sign In
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("SignUp")}
          style={styles.SignInButton}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 25,
              color: "#3b88c3",
              backgroundColor: "rgba(21,44,249,0,65)",
            }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
        <View style={styles.bottomView}>
          <Button
            title="About us"
            onPress={() => navigation.navigate("AboutUs")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
    alignContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  SignInButton: {
    borderWidth: 1,
    overflow: "hidden",
    marginTop: "3%",
    marginLeft: "40%",
    backgroundColor: "#F4AB10",
    width: 100,
    height: "6%",
    borderRadius: 20,
    borderColor: "blue",
    marginBottom: 10,
  },
  bottomView: {
    width: "50%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 100,
    bottom: 0,
  },
});
