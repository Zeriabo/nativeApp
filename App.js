import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {
  StyleSheet,
  View,
} from "react-native";
import { SignIn } from "./components/SignIn";

export default function App() {



  return (
<Provider>
<PersistGate>
<View style={styles.container}>
<SignIn/>
   </View>
</PersistGate>
</Provider>
   
      

  );
}
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'

  }
}
);


