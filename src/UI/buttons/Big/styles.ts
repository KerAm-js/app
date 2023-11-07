import { StyleSheet } from "react-native";
import { TEXT_F_SIZE } from "../../../consts/texts";
import { BLACK_DARK, BLACK_LIGHT, WHITE } from "../../../consts/colors";
import { BORDER_RADIUS_SMALL } from "../../../consts/borders";
import { SCREEN_PADDING } from "../../../consts/views";

export const bigButtonStyles = StyleSheet.create({
  container: {
    paddingHorizontal: SCREEN_PADDING,
  },
  button: {
    height: 50,
    width: "100%",
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
    borderRadius: BORDER_RADIUS_SMALL,
    marginRight: 4,
  },
  title: {
    fontSize: TEXT_F_SIZE,
    fontFamily: 'Gilroy-Bold',
    color: WHITE,
  },
});
