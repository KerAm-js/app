import { StyleSheet } from "react-native";
import { WHITE } from "../../../../consts/colors";
import { BORDER_RADIUS_SMALL } from "../../../../consts/borders";
import { TEXT_F_SIZE } from "../../../../consts/texts";

export const navTextStyles = StyleSheet.create({
  container: {
    flex: 1,
    height: 40,
    backgroundColor: WHITE,
    borderRadius: BORDER_RADIUS_SMALL,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20
  },
  text: {
    fontSize: TEXT_F_SIZE,
    fontFamily: "Gilroy-Semibold",
  },
});
