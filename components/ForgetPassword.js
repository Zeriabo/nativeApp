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
import { Header } from "react-native/Libraries/NewAppScreen";
import axios from "axios";

export function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [secretQuestion, setSecretQuestion] = useState("");
  const [secretAnswer, setSecretAnswer] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const [submittedAnswer, setSubmittedAnswer] = useState("");

  function clear() {
    setEmail("");
    setSecretAnswer("");
    setSecretQuestion("");
    setNewPassword("");
    setSubmittedAnswer("");
  }
  function checkAnswer(password) {
    if (secretAnswer == submittedAnswer) {
      axios({
        method: "post",
        url: "http://localhost:8080/user/change_password",
        headers: {},
        data: {
          email: email,
          password: newpassword,
        },
      }).then((responseData) => {
        if (responseData.status == 200) {
          Alert.alert("Password changed!");
          clear();
        } else {
          Alert.alert("Error");
        }
      });
    } else {
      Alert.alert("Your answer is incorrect!");
    }
  }
  async function GetQuestion() {
    await axios
      .post("http://localhost:8080/user/getsecrets", {
        email,
      })
      .then((responseData) => {
        console.log(responseData);
        setSecretQuestion(responseData.data.secretquestion);
        setSecretAnswer(responseData.data.secretanswer);
        console.log(responseData);
      })
      .catch((error) => {
        console.error(error);
        Alert.alert("invalid data");
      });
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          value={email}
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
          id="email"
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          value={secretQuestion}
          style={styles.TextInput}
          placeholder="Question"
          backgroundColor="#ADDFE4"
          placeholderTextColor="#003f5c"
          onChangeText={(question) => setSecretQuestion(question)}
          id="question"
          editable={false}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          value={submittedAnswer}
          style={styles.TextInput}
          placeholder="Answer"
          placeholderTextColor="#003f5c"
          onChangeText={(answer) => setSubmittedAnswer(answer)}
          id="Answer"
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          value={newpassword}
          style={styles.TextInput}
          placeholder="New password"
          placeholderTextColor="#003f5c"
          onChangeText={(password) => setNewPassword(password)}
          id="password"
        />
      </View>

      <TouchableOpacity
        style={styles.registerBtn}
        onPress={() => {
          GetQuestion();
        }}
      >
        <Text style={styles.loginText}>Get Question</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => {
          checkAnswer();
        }}
      >
        <Text style={styles.loginText}>Change password</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.forgot_button}
        onPress={() => {
          clear();
        }}
      >
        <Text>Clear</Text>
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
