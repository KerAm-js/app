import { StyleSheet } from "react-native";
import {
  REGULAR_F_WEIGHT,
  SMALL_F_SIZE,
  TEXT_F_SIZE,
} from "../../../consts/texts";
import {
  BLACK_DARK,
  BLACK_LIGHT_OPACITY,
  GREY_DARK,
  GREY_LIGHT,
  GREY_MIDDLE,
  WHITE,
} from "../../../consts/colors";
import {
  BORDER_RADIUS_SMALL,
  BORDER_RADIUS_ULTRA_SMALL,
} from "../../../consts/borders";
import { INPUT_HEIGHT } from "../../../consts/views";

export const selectionStyles = StyleSheet.create({
  container: {
    width: "100%",
  },
  label: {
    fontSize: SMALL_F_SIZE,
    fontWeight: REGULAR_F_WEIGHT,
    marginBottom: 8,
  },
  listContainer: {
    width: "100%",
    fontSize: TEXT_F_SIZE,
    fontWeight: REGULAR_F_WEIGHT,
    backgroundColor: WHITE,
    borderRadius: BORDER_RADIUS_SMALL,
    shadowColor: BLACK_DARK,
    shadowOpacity: 0,
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowRadius: 15,
  },
  notFoundMessage: {
    textAlign: "center",
    width: "100%",
    fontSize: TEXT_F_SIZE,
    fontWeight: REGULAR_F_WEIGHT,
    color: GREY_DARK,
    marginTop: 15,
  },
  scrollView: {
    borderBottomLeftRadius: BORDER_RADIUS_SMALL,
    borderBottomRightRadius: BORDER_RADIUS_SMALL,
    borderBottomColor: WHITE,
  },
  line: {
    backgroundColor: GREY_LIGHT,
    width: "100%",
    height: 1,
    marginLeft: 15,
  },
});