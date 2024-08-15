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
import { Message } from "./Message";
import { useReadMessagesQuery } from "../services/messageApi";

export function Inbox({ route, navigation }) {
  const [selectedId, setSelectedId] = useState(null);
  const obj = {
    token: route.params,
  };
  var { data, error, isLoading } = useReadMessagesQuery(obj);
  if (error) {
    return (
      <View style={styles.container}>
        <Text>ERROR </Text>
      </View>
    );
  }

  const navigateToMessage = (item) => {
    navigation.navigate("Message", { item });
  };
  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === selectedId ? "white" : "black";

    return (
      <Item
        item={item}
        onPress={() => {
          setSelectedId(item.id);
          navigateToMessage(item);
        }}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
      <Text style={styles.sender}>
        {item.datetime} {item.sender} {item.title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {data != null ? (
        <FlatList
          data={isLoading == false && data != null ? data.messages : null}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      ) : error != undefined ? (
        <Text>{error}</Text>
      ) : (
        <Text style={styles.empty}>Empty</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  empty: {
    marginTop: 200,
    paddingLeft: 150,
    fontSize: 20,
    fontFamily: "Arial",
    fontWeight: "bold",
  },
});
