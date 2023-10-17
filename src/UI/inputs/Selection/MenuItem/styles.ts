import { StyleSheet } from "react-native";
import { GREY_MIDDLE } from "../../../../consts/colors";
import { BORDER_RADIUS_ULTRA_SMALL } from "../../../../consts/borders";
import { TEXT_F_SIZE } from "../../../../consts/texts";

export const menuItemStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 8,
    height: 24,
    backgroundColor: GREY_MIDDLE,
    borderRadius: BORDER_RADIUS_ULTRA_SMALL,
    marginLeft: 10,
  },
  cancelBtn: {
    width: 25,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: TEXT_F_SIZE,
    fontFamily: 'Gilroy-Medium',
  },
});
