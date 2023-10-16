import { StyleSheet } from "react-native";
import { GREY_DARK, GREY_MIDDLE, YELLOW } from "../../consts/colors";

export const ratingStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: 140,
    height: 20,
    justifyContent: "space-between",
  },
  starWrapper: {
    width: 20,
    height: 20,
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
