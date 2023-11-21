import { Dimensions, StyleSheet } from "react-native";
import { BLACK_LIGHT_OPACITY, GREY_DARK, GREY_LIGHT, GREY_MIDDLE, WHITE } from "../../consts/colors";
import { BORDER_RADIUS_BIG, BORDER_RADIUS_MIDDLE, BORDER_RADIUS_SMALL } from "../../consts/borders";
import { SCREEN_PADDING } from "../../consts/views";
import { LABEL_F_SIZE, TEXT_F_SIZE } from "../../consts/texts";

const { height: SCREEN_HEIGHT } = Dimensions.get("screen");

export const bottomSheetStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: BLACK_LIGHT_OPACITY,
    zIndex: 1,
  },
  sheet: {
    borderTopRightRadius: BORDER_RADIUS_BIG,
    borderTopLeftRadius: BORDER_RADIUS_BIG,
    zIndex: 1,
    position: "absolute",
    top: SCREEN_HEIGHT,
    width: "100%",
    backgroundColor: GREY_LIGHT,
  },
  titleContainer: {
    backgroundColor: WHITE,
    paddingBottom: 12,
    paddingTop: 15,
    borderTopLeftRadius: BORDER_RADIUS_MIDDLE,
    borderTopRightRadius: BORDER_RADIUS_MIDDLE,
    alignItems: 'center'
  },
  title: {
    color: GREY_DARK,
    fontSize: LABEL_F_SIZE,
    fontFamily: "Gilroy-Medium",
    paddingHorizontal: SCREEN_PADDING,
  },
  sheetButton: {
    paddingVertical: 10,
    paddingHorizontal: SCREEN_PADDING,
    borderTopColor: GREY_MIDDLE,
    borderTopWidth: 1,
  },
  sheetButtonTitle: {
    fontSize: TEXT_F_SIZE,
    textAlign: 'center'
  },
});
