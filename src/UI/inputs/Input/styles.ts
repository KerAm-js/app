import { StyleSheet } from "react-native";
import { TEXT_F_SIZE } from "../../../consts/texts";
import { GREY_DARK, RED, WHITE } from "../../../consts/colors";
import { BORDER_RADIUS_SMALL } from "../../../consts/borders";
import { INPUT_HEIGHT } from "../../../consts/views";

export const inputStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: WHITE,
    borderRadius: BORDER_RADIUS_SMALL,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: WHITE
  },
  input: {
    fontSize: TEXT_F_SIZE,
    fontFamily: 'Gilroy-Medium',
    flex: 1,
    paddingLeft: 15,
    height: INPUT_HEIGHT,
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
