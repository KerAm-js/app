import { StyleSheet } from "react-native";
import { GREY_LIGHT, WHITE } from "../consts/colors";
import { TEXT_F_SIZE } from "../consts/texts";
import { SCREEN_PADDING } from "../consts/views";

export const navigationStyles = StyleSheet.create({
  title: {
    fontFamily: 'Gilroy-Bold',
    fontSize: TEXT_F_SIZE
  },
  header: {
    backgroundColor: GREY_LIGHT,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingHorizontal: SCREEN_PADDING
  },
})