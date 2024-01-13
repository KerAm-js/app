import { StyleSheet } from "react-native";
import { INPUT_HEIGHT } from "../../../../consts/views";
import { GREY_DARK, GREY_LIGHT } from "../../../../consts/colors";
import { TEXT_F_SIZE } from "../../../../consts/texts";

export const selectionSearchBarStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 15,
    height: INPUT_HEIGHT,
    paddingRight: 40,
    borderBottomWidth: 1,
    borderBottomColor: GREY_LIGHT,
  },
  input: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    flex: 1,
    fontSize: TEXT_F_SIZE,
    fontFamily: 'Gilroy-Medium',
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
    fontFamily: 'Gilroy-Medium',
    color: GREY_DARK,
    position: "absolute",
    top: 15,
    left: 15,
  },
});
