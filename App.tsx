import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigation";
import { StatusBar } from "react-native";

export default function App() {
  return (
      <NavigationContainer>
        <RootNavigator />
        <StatusBar barStyle="dark-content" />
      </NavigationContainer>
  );
}
