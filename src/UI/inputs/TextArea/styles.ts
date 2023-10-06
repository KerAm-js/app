import { StyleSheet } from "react-native";
import { WHITE } from "../../../consts/colors";
import { BORDER_RADIUS_SMALL } from "../../../consts/borders";
import { REGULAR_F_WEIGHT, TEXT_F_SIZE } from "../../../consts/texts";

export const textAreaStyles = StyleSheet.create({
  container: {
    height: 150,
    justifyContent: "center",
    backgroundColor: WHITE,
    borderRadius: BORDER_RADIUS_SMALL,
    paddingHorizontal: 15,
    paddingVertical: 10
  },
  input: {
    fontSize: TEXT_F_SIZE,
    fontWeight: REGULAR_F_WEIGHT,
    flex: 1,
  }
})