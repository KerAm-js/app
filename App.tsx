import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigation";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
// import YaMap from 'react-native-yamap';
// import { YA_MAP_API_KEY } from "./src/api/yamap";

SplashScreen.preventAutoHideAsync();

// YaMap.init(YA_MAP_API_KEY);

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
    </NavigationContainer>
  );
}
