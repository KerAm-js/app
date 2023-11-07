import { StyleSheet } from "react-native";
import { SCREEN_PADDING } from "../../../../consts/views";
import { BLUE, GREY_DARK, WHITE } from "../../../../consts/colors";
import { BORDER_RADIUS_SMALL } from "../../../../consts/borders";
import {
  LABEL_F_SIZE,
  SMALL_F_SIZE,
  ULTRA_SMALL_F_SIZE,
} from "../../../../consts/texts";

export const commentStyles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: SCREEN_PADDING,
    marginBottom: 10,
  },
  card: {
    backgroundColor: WHITE,
    borderRadius: BORDER_RADIUS_SMALL,
    padding: 15,
  },
  topContainer: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 12
  },
  infoContainer: {
    flex: 1,
    marginLeft: 9,
    alignSelf: 'center'
  },
  usernameContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  rateContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rateInfo: {
    fontSize: ULTRA_SMALL_F_SIZE,
    fontFamily: "Gilroy-Medium",
    color: GREY_DARK,
    marginRight: 7
  },
  username: {
    fontSize: LABEL_F_SIZE,
    fontFamily: "Gilroy-Semibold",
    marginRight: 7
  },
  text: {
    fontSize: SMALL_F_SIZE,
    fontFamily: "Gilroy-Medium",
    lineHeight: SMALL_F_SIZE + 4,
  },
  moreButton: {
    fontSize: SMALL_F_SIZE,
    fontFamily: "Gilroy-Semibold",
    marginTop: 4,
    lineHeight: SMALL_F_SIZE + 4,
    color: BLUE,
  },
});
