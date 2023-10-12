import { StyleSheet } from "react-native";
import { BLACK_DARK, WHITE } from "../../../consts/colors";
import { BORDER_RADIUS_SMALL } from "../../../consts/borders";

export const withMapShadowStyles = StyleSheet.create({
  container: {
    backgroundColor: WHITE,
    borderRadius: BORDER_RADIUS_SMALL,
    shadowColor: BLACK_DARK,
    shadowOpacity: 0.3,
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowRadius: 10,
    elevation: 10
  }
})