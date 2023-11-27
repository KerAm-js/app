import { StyleSheet } from "react-native";
import { BORDER_RADIUS_SMALL } from "../../../../consts/borders";
import { WHITE } from "../../../../consts/colors";
import { SMALL_F_SIZE } from "../../../../consts/texts";
import { SCREEN_PADDING } from "../../../../consts/views";

export const advertCommentStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: SCREEN_PADDING,
    paddingBottom: 15,
  },
  commentCorner: {
    marginTop: 13,
    marginLeft: 5,
  },
  commentContainer: {
    marginTop: 13,
    padding: 10,
    borderRadius: BORDER_RADIUS_SMALL,
    backgroundColor: WHITE,
    borderTopLeftRadius: 0,
    flex: 1,

  },
  text: {
    fontSize: SMALL_F_SIZE,
    fontFamily: "Gilroy-Medium",
    lineHeight: SMALL_F_SIZE + 4
  },
});
