import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { StyleSheet, View } from "react-native";
import { SignIn } from "./components/SignIn";
import store from "./state/store/Store";
import persistor from "./state/store/Store";
import { Loading } from "./components/Loading";
export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <SignIn />
      </View>
    </Provider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
