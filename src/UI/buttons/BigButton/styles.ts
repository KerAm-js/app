import { StyleSheet } from "react-native";
import { TITLE_F_SIZE, TITLE_F_WEIGHT } from "../../../consts/texts";
import { BLACK_DARK, BLACK_LIGHT, WHITE } from "../../../consts/colors";
import { BORDER_RADIUS_SMALL } from "../../../consts/borders";

export const bigButtonStyles = StyleSheet.create({
  container: {
    height: 50,
    width: "90%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: BLACK_LIGHT,
    shadowColor: BLACK_DARK,
    shadowOpacity: 0.7,
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowRadius: 5,
    borderRadius: BORDER_RADIUS_SMALL
  },
  title: {
    fontSize: TITLE_F_SIZE,
    fontWeight: TITLE_F_WEIGHT,
    color: WHITE
  },
});
