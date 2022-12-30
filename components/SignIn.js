import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Alert,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import store from "../state/store/Store";
import axios from "axios";
import { logOut, signIn } from "../state/store/reducers/userReducer";
import { useDispatch } from "react-redux";

export function SignIn({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const state = store.getState();
  const dispatch = useDispatch();

  useEffect(() => {
    if (state.userReducer.active == true) {
      navigation.navigate("Profile", state.userReducer);
    }
  }, []);

  function login() {
    const credentials = {
      email: email,
      password: password,
    };

    if (email != "" && password != "") {
      axios
        .post("http://localhost:8080/user/signin", credentials)
        .then((response) => dispatch(signIn(response.data)))
        .then(() => navigation.navigate("Profile", state.userReducer))
        .catch((err) => {
          if (err.response.status == 500) {
            Alert.alert("Server error, check input!");
          } else {
            Alert.alert(err.message);
          }
        });
    }
  }
  const forgetPassword = () => {};

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => login()}
        title="Log in"
      >
        <Text>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.registerBtn}
        onPress={() => {
          navigation.navigate("SignUp");
        }}
      >
        <Text>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.forgot_button}
        onPress={() => {
          navigation.navigate("ForgetPassword");
        }}
      >
        <Text>Forgot Password?</Text>
      </TouchableOpacity>
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
    alignItems: "center",
    justifyContent: "center",
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
