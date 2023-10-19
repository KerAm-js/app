import { StyleSheet } from "react-native";
import { BLUE } from "../../../../consts/colors";
import { SMALL_F_SIZE } from "../../../../consts/texts";

export const commentsStyles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTitle: {
    textAlign: "center",
    fontSize: SMALL_F_SIZE,
    fontFamily: "Gilroy-Semibold",
    color: BLUE,
  },
});
