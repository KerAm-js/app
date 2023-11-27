import { StyleSheet } from "react-native";
import { SMALL_F_SIZE, TEXT_F_SIZE, ULTRA_SMALL_F_SIZE } from "../../../../consts/texts";
import { GREY_DARK, GREY_MIDDLE } from "../../../../consts/colors";
import { SCREEN_PADDING } from "../../../../consts/views";

export const advertUserInfoStyles = StyleSheet.create({
  container: {
    borderTopColor: GREY_MIDDLE,
    borderTopWidth: 1,
    paddingTop: 15,
    paddingBottom: 20,
    alignItems: 'center',
  },
  username: {
    fontSize: TEXT_F_SIZE,
    fontFamily: 'Gilroy-Semibold',
    marginBottom: 5,
    marginTop: 10,
  },
  ratingContainer: {
    marginTop: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  ratingText: {
    color: GREY_DARK,
    fontSize: ULTRA_SMALL_F_SIZE,
    fontFamily: 'Gilroy-Medium',
    marginTop: 8
  },
  phone: {
    fontSize: SMALL_F_SIZE,
    fontFamily: 'Gilroy-Medium',
    marginBottom: 10,
  }
})