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
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
  loaderContainer: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: "absolute",
    zIndex: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
});
