import { Dimensions, StyleSheet } from "react-native";
import { WHITE } from "../../../../consts/colors";
import { BORDER_RADIUS_SMALL } from "../../../../consts/borders";
import { TEXT_F_SIZE } from "../../../../consts/texts";
import { SCREEN_PADDING } from "../../../../consts/views";

const width = Dimensions.get("screen").width - 150 - SCREEN_PADDING * 2;

export const navTextStyles = StyleSheet.create({
  container: {
    flex: 1,
    height: 40,
    minWidth: 140,
    maxWidth: width,
    backgroundColor: WHITE,
    borderRadius: BORDER_RADIUS_SMALL,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  text: {
    fontSize: TEXT_F_SIZE,
    fontFamily: "Gilroy-Semibold",
  },
});
