import { StyleSheet } from "react-native";
import { REGULAR_F_WEIGHT, TEXT_F_SIZE } from "../../../consts/texts";
import { GREY_DARK, WHITE } from "../../../consts/colors";
import { BORDER_RADIUS_SMALL } from "../../../consts/borders";

export const inputStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: WHITE,
    borderRadius: BORDER_RADIUS_SMALL,
    flexDirection: "row",
  },
  input: {
    fontSize: TEXT_F_SIZE,
    fontWeight: REGULAR_F_WEIGHT,
    flex: 1,
    paddingLeft: 15,
    paddingVertical: 15,
  },
  clearInputButton: {
    paddingVertical: 17,
    paddingRight: 15,
    paddingLeft: 5,
    justifyContent: "center",
  },
  clearInputCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: GREY_DARK,
    alignItems: "center",
    justifyContent: "center",
  },
});
