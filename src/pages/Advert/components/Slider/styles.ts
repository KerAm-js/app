import { Dimensions, StyleSheet } from "react-native";
import { GREY_LIGHT, WHITE } from "../../../../consts/colors";
import {} from "../../../../consts/borders";
import { SMALL_F_SIZE } from "../../../../consts/texts";

const { width } = Dimensions.get("screen");

export const sliderStyles = StyleSheet.create({
  container: {
    width: "100%",
    position: "absolute",
    zIndex: -1,
  },
  shadow: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  slider: {},
  image: {
    width,
    height: 300,
  },
  sliderEmptyContainer: {
    height: 200,
    width,
    flex: 1,
    backgroundColor: GREY_LIGHT,
    justifyContent: "center",
    alignItems: "center",
  },
  currentIndexContainer: {
    bottom: 15,
    left: 15,
    position: "absolute",
    zIndex: 1,
    paddingVertical: 3,
    paddingHorizontal: 8,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 20,
  },
  currentIndex: {
    fontSize: SMALL_F_SIZE,
    fontFamily: "Gilroy-Semibold",
    color: WHITE,
    paddingTop: 1,
  },
  likeButtonContainer: {
    position: "absolute",
    zIndex: 1,
    bottom: 15,
    right: 15,
  },
});
