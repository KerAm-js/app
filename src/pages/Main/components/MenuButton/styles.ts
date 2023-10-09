import { StyleSheet } from "react-native";
import { BLACK_DARK, WHITE } from "../../../../consts/colors";
import { BORDER_RADIUS_SMALL } from "../../../../consts/borders";

export const menuButtonStyles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    backgroundColor: WHITE,
    borderRadius: BORDER_RADIUS_SMALL,
    justifyContent: 'center',
    alignItems: 'center'
  }
})