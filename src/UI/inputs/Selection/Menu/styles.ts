import { StyleSheet } from "react-native";
import { GREY_LIGHT, RED } from "../../../../consts/colors";

export const selectionMenuStyles = StyleSheet.create({
  container: {
    borderBottomColor: GREY_LIGHT,
    flexDirection: "row",
  },
  scrollViewContent: {
    alignItems: "center",
    paddingRight: 10,
  },
  clearInputButton: {
    paddingVertical: 14,
    paddingRight: 15,
    paddingLeft: 5,
  },
  clearInputCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: RED,
    alignItems: "center",
    justifyContent: "center",
  },
});
