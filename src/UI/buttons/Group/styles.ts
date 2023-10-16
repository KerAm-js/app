import { StyleSheet } from "react-native";
import { BORDER_RADIUS_SMALL } from "../../../consts/borders";
import { WHITE } from "../../../consts/colors";
import { REGULAR_F_WEIGHT, TEXT_F_SIZE } from "../../../consts/texts";
import { SCREEN_PADDING } from "../../../consts/views";

export const buttonsGroupStyles = StyleSheet.create({
  buttonsGroup: {
    paddingVertical: 2,
    borderRadius: BORDER_RADIUS_SMALL,
    overflow: "hidden",
    backgroundColor: WHITE,
    marginHorizontal: SCREEN_PADDING
  },
  button: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: WHITE,
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: WHITE,
    alignItems: 'center'
  },
  buttonTitle: {
    fontSize: TEXT_F_SIZE,
    fontWeight: REGULAR_F_WEIGHT,
  },
});
