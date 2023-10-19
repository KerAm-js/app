import { StyleSheet } from "react-native";
import { SCREEN_PADDING } from "../../../consts/views";
import { WHITE } from "../../../consts/colors";
import { BORDER_RADIUS_SMALL } from "../../../consts/borders";
import { TEXT_F_SIZE } from "../../../consts/texts";

export const searchBarStyles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: SCREEN_PADDING,
  },
  inputContainer: {
    alignItems: "center",
    backgroundColor: WHITE,
    borderRadius: BORDER_RADIUS_SMALL,
    flexDirection: "row",
    paddingHorizontal: 12,
  },
  input: {
    fontSize: TEXT_F_SIZE,
    fontFamily: 'Gilroy-Medium',
    paddingLeft: 8,
    paddingTop: 11,
    paddingBottom: 9
  },
});
