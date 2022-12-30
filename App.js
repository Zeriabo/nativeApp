import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { StyleSheet, View, Text } from "react-native";
import { SignIn } from "./components/SignIn";
import { SignUp } from "./components/SignUp";
import { Home } from "./components/Home";
import store from "./state/store/Store";
import persistor from "./state/store/Store";
import { Loading } from "./components/Loading";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Profile } from "./components/Profile";
import { Inbox } from "./components/Inbox";
import { Message } from "./components/Message";
import { SendMessage } from "./components/SendMessage";
import { MessageSent } from "./components/MessageSent";
import { ForgetPassword } from "./components/ForgetPassword";
const Stack = createNativeStackNavigator();

const AboutUsScreen = () => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text>Details Screen</Text>
  </View>
);
export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <View style={styles.container}>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ title: "Home" }}
            />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="AboutUs" component={AboutUsScreen} />
            <Stack.Screen name="SendMessage" component={SendMessage} />
            <Stack.Screen name="Inbox" component={Inbox} />
            <Stack.Screen name="Message" component={Message} />
            <Stack.Screen name="MessageSent" component={MessageSent} />
            <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
          </Stack.Navigator>
        </View>
      </Provider>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItem: "center",
    backgroundColor: "#ecf0f1",
  },
});
