import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import store from "../state/store/Store";
import { useLoginQuery } from "../services/userApi";
import { logOut, signIn } from "../state/store/reducers/userReducer";

export function Profile({ route, navigation }) {
  const state = store.getState();
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logOut());
    navigation.navigate("Home");
    console.log(state);
  };

  if (!route.params.active) {
    try {
      var { data, error, isLoading } = useLoginQuery(route.params);
      if (error) {
        console.log(error);
        navigation.navigate("SignIn");
      }
    } catch (err) {
      console.log(err);
    }
  }
  if (route.params.token != null && data == undefined) {
    data = route.params;
  }
  console.log(data);
  if (data) {
    dispatch(signIn(data));
  }

  function fetchMessages(token) {
    navigation.navigate("Inbox", token);
  }

  return (
    <View style={styles.container}>
      {!isLoading && data != undefined ? (
        <View>
          <Text>Hello {data.name}</Text>
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => logout()}
            title="logout"
          >
            <Text>logout</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => fetchMessages(data.token)}
            title="Inbox"
          >
            <Text>Inbox</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => navigation.navigate("SendMessage", { route })}
            title="Send a message"
          >
            <Text>Send message</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}> Wrong Input...</Text>
        </View>
      )}
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
    paddingTop: 50,
    paddingLeft: 50,
  },
  errorContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  errorText: {
    fontSize: 50,
    color: "blue",
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
