import { StyleSheet } from "react-native";
import {
  TEXT_F_SIZE,
} from "../../../consts/texts";
import {
  GREY_DARK,
  GREY_LIGHT,
  WHITE,
} from "../../../consts/colors";
import {
  BORDER_RADIUS_SMALL,
} from "../../../consts/borders";

export const selectionStyles = StyleSheet.create({
  container: {
    width: "100%",
  },
  listContainer: {
    width: "100%",
    fontSize: TEXT_F_SIZE,
    fontFamily: 'Gilroy-Medium',
    backgroundColor: WHITE,
    borderRadius: BORDER_RADIUS_SMALL,
    borderWidth: 1,
    borderColor: GREY_LIGHT,
  },
  notFoundMessage: {
    textAlign: "center",
    width: "100%",
    fontSize: TEXT_F_SIZE,
    fontFamily: 'Gilroy-Medium',
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