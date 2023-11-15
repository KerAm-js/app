import { StyleSheet } from "react-native";
import { GREY_LIGHT } from "../consts/colors";
import { TEXT_F_SIZE } from "../consts/texts";

export const navigationStyles = StyleSheet.create({
  title: {
    fontFamily: 'Gilroy-Bold',
    fontSize: TEXT_F_SIZE
  },
  header: {
    backgroundColor: GREY_LIGHT,
  }
})