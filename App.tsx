import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigation";
import { StatusBar, View } from "react-native";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Gilroy-Bold": require("./src/assets/fonts/Gilroy-Bold.ttf"),
    "Gilroy-Medium": require("./src/assets/fonts/Gilroy-Medium.ttf"),
    "Gilroy-Semibold": require("./src/assets/fonts/Gilroy-Semibold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <RootNavigator />
      <StatusBar barStyle="dark-content" />
    </NavigationContainer>
  );
}
