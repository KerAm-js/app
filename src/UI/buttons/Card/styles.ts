import { Dimensions, StyleSheet } from "react-native";
import { WHITE } from "../../../consts/colors";
import { BORDER_RADIUS_SMALL } from "../../../consts/borders";
import { SCREEN_PADDING } from "../../../consts/views";
import { TEXT_F_SIZE } from "../../../consts/texts";

export const cardButtonWidth =
  (Dimensions.get("screen").width - SCREEN_PADDING * 2 - 14) / 2;

export const cardButtonStyles = StyleSheet.create({
  container: {
    backgroundColor: WHITE,
    borderRadius: BORDER_RADIUS_SMALL,
    height: cardButtonWidth / 1.12,
    width: cardButtonWidth,
    justifyContent: 'space-between',
    padding: 15,
  },
  title: {
    fontSize: TEXT_F_SIZE,
    fontFamily: 'Gilroy-Semibold'
  },
});
