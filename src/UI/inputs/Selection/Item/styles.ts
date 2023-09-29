import { StyleSheet } from "react-native";
import { BORDER_RADIUS_ULTRA_SMALL } from "../../../../consts/borders";
import { GREY_MIDDLE } from "../../../../consts/colors";
import { REGULAR_F_WEIGHT, TEXT_F_SIZE } from "../../../../consts/texts";

export const selectionItemStyles = StyleSheet.create({
  container: {
    height: 46,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  checkButton: {
    width: 20,
    height: 20,
    borderRadius: BORDER_RADIUS_ULTRA_SMALL,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: GREY_MIDDLE,
  },
  title: {
    fontSize: TEXT_F_SIZE,
    fontWeight: REGULAR_F_WEIGHT,
    marginLeft: 10,
  },
});