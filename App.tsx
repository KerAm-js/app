import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigation";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Provider } from "react-redux";
import { store } from "./src/store/store";
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

  if (!fontsLoaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
}