import { StyleSheet } from "react-native";
import { WHITE } from "../../../../consts/colors";
import { BORDER_RADIUS_SMALL } from "../../../../consts/borders";

export const navButtonStyles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    backgroundColor: WHITE,
    borderRadius: BORDER_RADIUS_SMALL,
    justifyContent: 'center',
    alignItems: 'center'
  }
})