import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { BLUE, GREY_LIGHT } from "./src/consts/colors";
import React from "react";
import MainPage from "./src/pages/Main";

export default function App() {
  return (
    <View style={styles.container}>
      <MainPage />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GREY_LIGHT,
  },
});
