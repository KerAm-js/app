import { StyleSheet } from "react-native";
import { SCREEN_PADDING } from "../../consts/views";
import { TITLE_F_SIZE } from "../../consts/texts";

export const titleStyles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: SCREEN_PADDING,
    marginBottom: 20,
    marginTop: 10,
  },
  text: {
    fontSize: TITLE_F_SIZE,
    fontFamily: 'Gilroy-Bold',
  }
})