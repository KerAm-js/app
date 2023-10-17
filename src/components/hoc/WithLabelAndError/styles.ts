import { StyleSheet } from "react-native";
import { SMALL_F_SIZE } from "../../../consts/texts";
import { SCREEN_PADDING } from "../../../consts/views";
import { RED } from "../../../consts/colors";

export const withLabelAndErrorStyles = StyleSheet.create({
  label: {
    fontSize: SMALL_F_SIZE,
    fontFamily: 'Gilroy-Medium',
    marginBottom: 8,
  },
  container: {
    width: '100%',
    paddingHorizontal: SCREEN_PADDING,
    marginBottom: 20,
  },
  error: {
    fontSize: SMALL_F_SIZE,
    fontFamily: 'Gilroy-Medium',
    color: RED,
    marginTop: 5,
  }
})