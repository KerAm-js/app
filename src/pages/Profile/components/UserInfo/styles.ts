import { StyleSheet } from "react-native";
import {
  SMALL_F_SIZE,
  TEXT_F_SIZE,
  TITLE_F_SIZE,
} from "../../../../consts/texts";
import { GREY_DARK, GREY_LIGHT } from "../../../../consts/colors";

export const userInfoStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: GREY_LIGHT
  },
  username: {
    fontSize: TITLE_F_SIZE,
    fontFamily: 'Gilroy-Bold',
    marginBottom: 5,
  },
  userInfoText: {
    fontSize: TEXT_F_SIZE,
    fontFamily: 'Gilroy-Medium',
    marginBottom: 8,
  },
  ratingContainer: {
    marginTop: 7,
    alignItems: 'center',
    marginBottom: 10,
  },
  ratingText: {
    color: GREY_DARK,
    fontSize: SMALL_F_SIZE,
    fontFamily: 'Gilroy-Medium',
    marginTop: 8
  },
});
