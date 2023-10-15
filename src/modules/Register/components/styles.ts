import { Dimensions, StyleSheet } from "react-native";
import { SCREEN_PADDING_VERTICAL } from "../../../consts/views";

const screenHeight = Dimensions.get("screen").height;

export const registerModuleStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical:
      screenHeight < 770
        ? SCREEN_PADDING_VERTICAL
        : Dimensions.get("screen").height * 0.1,
  },
});
