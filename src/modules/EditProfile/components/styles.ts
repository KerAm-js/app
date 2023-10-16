import { Dimensions, StyleSheet } from "react-native";
import { SCREEN_PADDING_TOP } from "../../../consts/views";

const screenHeight = Dimensions.get("screen").height;

export const editProfileModuleStyles = StyleSheet.create({
  container: {
    paddingTop:
      screenHeight < 770
        ? SCREEN_PADDING_TOP
        : Dimensions.get("screen").height * 0.1,
  },
});
