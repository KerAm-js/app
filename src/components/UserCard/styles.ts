import { StyleSheet } from "react-native";
import { WHITE } from "../../consts/colors";
import { BORDER_RADIUS_SMALL } from "../../consts/borders";
import { SMALL_F_SIZE, TEXT_F_SIZE } from "../../consts/texts";

export const userCardStyles = StyleSheet.create({
  container: {
    backgroundColor: WHITE,
    borderRadius: BORDER_RADIUS_SMALL,
    paddingVertical: 12,
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  userData: {
    flexDirection: "row",
    alignItems: "center",
  },
  username: {
    fontSize: TEXT_F_SIZE,
    fontFamily: "Gilroy-Semibold",
    marginLeft: 10,
  },
  phone: {
    fontSize: SMALL_F_SIZE,
    fontFamily: "Gilroy-Medium",
    marginTop: 5,
    marginLeft: 10,
  },
});
