import { StyleSheet } from "react-native";
import { GREY_DARK, GREY_MIDDLE, YELLOW } from "../../consts/colors";

export const ratingStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  starWrapper: {
    backgroundColor: GREY_MIDDLE
  },
  ratingIndicator: {
    position: "absolute",
    zIndex: -1,
    top: 0,
    bottom: 0,
    left: 0,
    backgroundColor: YELLOW,
  },
});
