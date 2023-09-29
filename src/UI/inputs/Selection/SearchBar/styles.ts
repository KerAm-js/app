import { StyleSheet } from "react-native";
import { INPUT_HEIGHT } from "../../../../consts/views";
import { GREY_DARK, GREY_LIGHT } from "../../../../consts/colors";
import { REGULAR_F_WEIGHT, TEXT_F_SIZE } from "../../../../consts/texts";

export const selectionSearchBarStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 15,
    maxHeight: INPUT_HEIGHT,
    paddingRight: 40,
    borderBottomWidth: 1,
    borderBottomColor: GREY_LIGHT,
  },
  input: {
    paddingHorizontal: 10,
    paddingVertical: 14,
    flex: 1,
    fontSize: TEXT_F_SIZE,
    fontWeight: REGULAR_F_WEIGHT,
  },
  arrow: {
    position: "absolute",
    top: 15,
    right: 15,
    zIndex: 1,
  },
  placeholder: {
    paddingRight: 50,
    fontSize: TEXT_F_SIZE,
    fontWeight: REGULAR_F_WEIGHT,
    color: GREY_DARK,
    position: "absolute",
    top: 13,
    left: 15,
  },
});
