import { Dimensions, StyleSheet } from "react-native";
import { GREY_DARK, GREY_LIGHT, WHITE } from "../../../../consts/colors";
import {
  BORDER_RADIUS_BIG,
  BORDER_RADIUS_ULTRA_SMALL,
} from "../../../../consts/borders";
import {
  LABEL_F_SIZE,
  SMALL_F_SIZE,
  TEXT_F_SIZE,
  ULTRA_SMALL_F_SIZE,
} from "../../../../consts/texts";

const { width } = Dimensions.get("screen");

export const advertStyles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: WHITE,
    borderRadius: BORDER_RADIUS_BIG,
    paddingVertical: 15,
  },
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  userInfo: {
    marginLeft: 10,
    flex: 1,
  },
  username: {
    fontSize: SMALL_F_SIZE,
    fontFamily: "Gilroy-Semibold",
    marginBottom: 4,
  },
  sliderContainer: {
    backgroundColor: GREY_LIGHT,
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
  titleBackdrop: {
    height: 110,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 15,
    paddingVertical: 10,
    justifyContent: "flex-end",
  },
  title: {
    fontSize: TEXT_F_SIZE,
    fontFamily: "Gilroy-Bold",
    color: WHITE,
    lineHeight: TEXT_F_SIZE + 4,
  },
  editButton: {
    width: 26,
    height: 26,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  addressContainer: {
    top: 10,
    left: 15,
    position: "absolute",
    zIndex: 1,
    paddingVertical: 3,
    paddingHorizontal: 8,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 20,
    flexDirection: "row",
  },
  address: {
    fontSize: SMALL_F_SIZE,
    fontFamily: "Gilroy-Semibold",
    marginLeft: 4,
    color: WHITE,
    paddingTop: 1,
  },
  currentIndexContainer: {
    top: 10,
    right: 15,
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
  paramsContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: GREY_LIGHT,
    flexDirection: "row",
  },
  price: {
    fontSize: TEXT_F_SIZE,
    fontFamily: "Gilroy-Bold",
  },
  paymentFor: {
    fontSize: LABEL_F_SIZE,
    fontFamily: "Gilroy-Semibold",
  },
  param: {
    backgroundColor: GREY_LIGHT,
    paddingHorizontal: 7,
    paddingVertical: 4,
    borderRadius: BORDER_RADIUS_ULTRA_SMALL,
    flexDirection: "row",
    marginRight: 7,
    flexWrap: "wrap",
  },
  paramTitle: {
    fontSize: SMALL_F_SIZE,
    fontFamily: "Gilroy-Medium",
  },
  paramContent: {
    fontSize: SMALL_F_SIZE,
    fontFamily: "Gilroy-Bold",
    marginLeft: 5,
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingTop: 7,
  },
  advertInfo: {
    flexDirection: "row",
    alignItems: 'center',
  },
  advertInfoText: {
    marginLeft: 4,
    marginRight: 7,
    fontSize: ULTRA_SMALL_F_SIZE,
    fontFamily: "Gilroy-Medium",
    color: GREY_DARK,
    marginTop: 1,
  },
});
