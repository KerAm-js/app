import { StyleSheet } from "react-native";
import { BLUE } from "../../../../consts/colors";
import { TEXT_F_SIZE } from "../../../../consts/texts";

export const footerStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingBottom: 50,
    marginTop: 20,
  },
  button: {
    color: BLUE,
    fontSize: TEXT_F_SIZE,
    fontFamily: 'Gilroy-Medium',
  }
})