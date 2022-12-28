import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import { connect } from "react-redux";

export function Loading() {
  return (
    <View>
      <Text>Loading ...</Text>
      <Text>Loading ...</Text>
      <Text>Loading ...</Text>
      <Text>Loading ...</Text>
      <Text>Loading ...</Text>
      <Text>Loading ...</Text>
      <Text>Loading ...</Text>
      <Text>Loading ...</Text>
    </View>
  );
}
