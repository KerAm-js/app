import { StyleSheet } from "react-native";
import { REGULAR_F_WEIGHT, SMALL_F_SIZE } from "../../../consts/texts";
import { SCREEN_PADDING } from "../../../consts/views";

export const withLabelStyles = StyleSheet.create({
  label: {
    fontSize: SMALL_F_SIZE,
    fontWeight: REGULAR_F_WEIGHT,
    marginBottom: 8,
  },
  container: {
    width: '100%',
    paddingHorizontal: SCREEN_PADDING,
    marginBottom: 20,
  }
})