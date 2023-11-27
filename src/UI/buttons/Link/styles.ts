import { StyleSheet } from "react-native";
import { SMALL_F_SIZE } from "../../../consts/texts";
import { BLUE } from "../../../consts/colors";

export const linkStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    textAlign: "center",
    fontSize: SMALL_F_SIZE,
    lineHeight: SMALL_F_SIZE + 4,
    fontFamily: "Gilroy-Semibold",
    color: BLUE,
  },
});
