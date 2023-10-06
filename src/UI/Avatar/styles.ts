import { StyleSheet } from "react-native";
import { GREY_LIGHT, WHITE } from "../../consts/colors";

export const avatarStyles = StyleSheet.create({
  container: {
    borderRadius: 60,
    backgroundColor: GREY_LIGHT,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    borderRadius: 60,
    backgroundColor: WHITE,
    justifyContent: "center",
    alignItems: "center",
  },
});
