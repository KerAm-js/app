import { StyleSheet } from "react-native";
import { SCREEN_PADDING } from "../../consts/views";
import { BORDER_RADIUS_SMALL } from "../../consts/borders";
import { BLACK_DARK, GREY_DARK, WHITE } from "../../consts/colors";
import { SMALL_F_SIZE, TEXT_F_SIZE } from "../../consts/texts";

export const infoCardStyles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: SCREEN_PADDING,
    marginBottom: 10,
  },
  card: {
    borderRadius: BORDER_RADIUS_SMALL,
    backgroundColor: WHITE,
    paddingHorizontal: 15,
    paddingVertical: 12,
    minHeight: 66,
  },
  title: {
    fontSize: SMALL_F_SIZE,
    color: GREY_DARK,
    fontFamily: "Gilroy-Medium",
    marginBottom: 5,
  },
  content: {
    fontSize: TEXT_F_SIZE,
    color: BLACK_DARK,
    fontFamily: "Gilroy-Medium",
    lineHeight: TEXT_F_SIZE + 6,
  },
});
