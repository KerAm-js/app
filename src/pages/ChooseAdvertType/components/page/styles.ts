import { StyleSheet } from "react-native";
import { SCREEN_PADDING } from "../../../../consts/views";

export const chooseAdvertTypePageStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: SCREEN_PADDING,
    gap: 14,
    paddingTop: 20,
  }
})