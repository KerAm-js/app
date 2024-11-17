import { StyleSheet } from "react-native";
import { WHITE } from "../../../consts/colors";
import { BORDER_RADIUS_SMALL } from "../../../consts/borders";
import { TEXT_F_SIZE } from "../../../consts/texts";
import { INPUT_HEIGHT } from "../../../consts/views";

export const addressInputStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: WHITE,
    borderRadius: BORDER_RADIUS_SMALL,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: WHITE,
    height: INPUT_HEIGHT,
  },
  title: {
    fontSize: TEXT_F_SIZE,
    fontFamily: 'Gilroy-Medium',
    paddingLeft: 15,
  },
})