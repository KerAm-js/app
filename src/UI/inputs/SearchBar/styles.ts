import { StyleSheet } from "react-native";
import { SCREEN_PADDING } from "../../../consts/views";
import { BLACK_DARK, WHITE } from "../../../consts/colors";
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
    paddingHorizontal: 15,
    shadowColor: BLACK_DARK,
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowRadius: 10,
  },
  input: {
    fontSize: TEXT_F_SIZE,
    fontFamily: 'Gilroy-Medium',
    flex: 1,
    paddingLeft: 10,
    paddingVertical: 15,
  },
});
