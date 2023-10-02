import { StyleSheet } from "react-native";
import { REGULAR_F_WEIGHT, TEXT_F_SIZE } from "../../../consts/texts";
import { WHITE } from "../../../consts/colors";
import { BORDER_RADIUS_SMALL } from "../../../consts/borders";
import { INPUT_HEIGHT } from "../../../consts/views";

export const inputStyles = StyleSheet.create({
  container: {
    padding: 15,
    justifyContent: "center",
    backgroundColor: WHITE,
    borderRadius: BORDER_RADIUS_SMALL,
  },
  input: {
    fontSize: TEXT_F_SIZE,
    fontWeight: REGULAR_F_WEIGHT,
  },
  clearInputButton: {},
});