import { StyleSheet } from "react-native";
import { ULTRA_SMALL_F_SIZE } from "../../../consts/texts";
import { GREY_DARK, RED, WHITE } from "../../../consts/colors";
import { BORDER_RADIUS_SMALL } from "../../../consts/borders";
import { SCREEN_PADDING } from "../../../consts/views";

export const photoInputStyles = StyleSheet.create({
  container: {
    paddingHorizontal: SCREEN_PADDING,
    paddingTop: 5,
    gap: 10,
    marginBottom: 20,
  },
  input: {
    width: 100,
    height: 100,
    borderStyle: "dashed",
    borderWidth: 1,
    borderColor: GREY_DARK,
    borderRadius: BORDER_RADIUS_SMALL,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: WHITE,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: ULTRA_SMALL_F_SIZE,
    color: GREY_DARK,
    fontFamily: "Gilroy-Medium",
    textAlign: "center",
    marginTop: 5,
  },
  cancelButton: {
    position: "absolute",
    zIndex: 1,
    top: -5,
    right: -5,
    width: 16,
    height: 16,
    backgroundColor: RED,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    width: 100,
    height: 100,

  },
  image: {
    borderRadius: BORDER_RADIUS_SMALL
  }
});
