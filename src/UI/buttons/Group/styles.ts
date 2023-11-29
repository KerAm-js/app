import { StyleSheet } from "react-native";
import { BORDER_RADIUS_SMALL } from "../../../consts/borders";
import { RED, WHITE } from "../../../consts/colors";
import { TEXT_F_SIZE, ULTRA_SMALL_F_SIZE } from "../../../consts/texts";
import { SCREEN_PADDING } from "../../../consts/views";

export const buttonsGroupStyles = StyleSheet.create({
  buttonsGroup: {
    paddingVertical: 2,
    borderRadius: BORDER_RADIUS_SMALL,
    overflow: "hidden",
    backgroundColor: WHITE,
    marginHorizontal: SCREEN_PADDING,
  },
  button: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: WHITE,
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: WHITE,
    alignItems: "center",
  },
  buttonTitle: {
    fontSize: TEXT_F_SIZE,
    fontFamily: "Gilroy-Medium",
  },
  left: {
    flexDirection: "row",
    alignItems: 'center',
    gap: 10,
  },
  circle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: RED,
    alignItems: "center",
  },
  circleNumber: {
    fontSize: ULTRA_SMALL_F_SIZE,
    lineHeight: ULTRA_SMALL_F_SIZE + 4,
    marginTop: 1,
    color: WHITE,
    fontFamily: "Gilroy-Medium",
  },
});
