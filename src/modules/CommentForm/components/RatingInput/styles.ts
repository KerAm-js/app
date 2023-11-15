import { StyleSheet } from "react-native";
import { SCREEN_PADDING } from "../../../../consts/views";
import { GREY_DARK, WHITE } from "../../../../consts/colors";
import { BORDER_RADIUS_SMALL } from "../../../../consts/borders";
import { SMALL_F_SIZE, TEXT_F_SIZE } from "../../../../consts/texts";

export const ratingInputStyles = StyleSheet.create({
  container: {
    marginHorizontal: SCREEN_PADDING,
    padding: 15,
    backgroundColor: WHITE,
    borderRadius: BORDER_RADIUS_SMALL,
    flexDirection: 'row',
    marginBottom: 20,
  },
  inputContainer: {
    marginLeft: 10
  },
  username: {
    marginBottom: 4,
    fontSize: TEXT_F_SIZE,
    fontFamily: 'Gilroy-Semibold',
  },
  hint: {
    marginTop: 4,
    fontSize: SMALL_F_SIZE,
    fontFamily: 'Gilroy-Medium',
    color: GREY_DARK
  }
})