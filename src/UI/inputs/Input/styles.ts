import { StyleSheet } from "react-native";
import { REGULAR_F_WEIGHT, SMALL_F_SIZE, TEXT_F_SIZE } from "../../../consts/texts";
import { BLACK_DARK, BLACK_LIGHT, BLUE, WHITE } from "../../../consts/colors";
import { BORDER_RADIUS_SMALL } from "../../../consts/borders";
import { INPUT_HEIGHT } from "../../../consts/views";

export const inputStyles = StyleSheet.create({
  container: {
    width: '100%',
  },
  input: {
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 14,
    fontSize: TEXT_F_SIZE,
    fontWeight: REGULAR_F_WEIGHT,
    maxHeight: INPUT_HEIGHT,
    marginBottom: 8,
    backgroundColor: WHITE,
    borderRadius: BORDER_RADIUS_SMALL,
    // shadowColor: BLACK_DARK,
    // shadowOpacity: 0,
    // shadowOffset: {
    //   height: 2,
    //   width: 0,
    // },
    // shadowRadius: 10,
  },
  label: {
    fontSize: SMALL_F_SIZE,
    fontWeight: REGULAR_F_WEIGHT,
    marginBottom: 8,
  },
})