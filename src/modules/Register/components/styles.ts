import { Dimensions, StyleSheet } from "react-native";

export const registerModuleStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Dimensions.get("screen").height * 0.1,
  },
});
