import { StyleSheet } from "react-native";
import { BORDER_RADIUS_SMALL } from "../../../../consts/borders";
import { WHITE } from "../../../../consts/colors";
import { SCREEN_PADDING } from "../../../../consts/views";
import { SMALL_F_SIZE, TEXT_F_SIZE } from "../../../../consts/texts";

export const advertCommentStyles = StyleSheet.create({
  container: {
    paddingHorizontal: SCREEN_PADDING,
  },
  commentContainer: {
    borderRadius: BORDER_RADIUS_SMALL,
    padding: 12,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: WHITE,
    marginBottom: 15,
  },
  text: {
    fontSize: SMALL_F_SIZE,
    fontFamily: "Gilroy-Medium",
    lineHeight: SMALL_F_SIZE + 4,
  },
  title: {
    fontSize: TEXT_F_SIZE,
    fontFamily: "Gilroy-Bold",
    marginBottom: 8,
  },
});
