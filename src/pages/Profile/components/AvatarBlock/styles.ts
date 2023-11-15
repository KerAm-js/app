import { StyleSheet } from "react-native";
import { GREY_LIGHT, WHITE } from "../../../../consts/colors";

export const avatarBlockStyles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: "center",
  },
  backgroundElement: {
    position: "absolute",
    top: 90,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: GREY_LIGHT,
    shadowOffset: {
      height: -10,
      width: 0,
    },
    shadowColor: WHITE,
    shadowOpacity: 1,
    shadowRadius: 10,
    zIndex: -1
  },
});
