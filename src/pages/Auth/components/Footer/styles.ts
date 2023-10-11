import { StyleSheet } from "react-native";
import { BLUE } from "../../../../consts/colors";
import { REGULAR_F_WEIGHT, TEXT_F_SIZE } from "../../../../consts/texts";

export const footerStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingBottom: 50,
    marginTop: 20,
  },
  button: {
    color: BLUE,
    fontSize: TEXT_F_SIZE,
    fontWeight: REGULAR_F_WEIGHT
  }
})