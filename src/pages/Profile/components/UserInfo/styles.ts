import { StyleSheet } from "react-native";
import { SCREEN_PADDING } from "../../../../consts/views";
import {
  REGULAR_F_WEIGHT,
  SMALL_F_SIZE,
  TEXT_F_SIZE,
  TITLE_F_SIZE,
  TITLE_F_WEIGHT,
} from "../../../../consts/texts";
import { GREY_DARK } from "../../../../consts/colors";

export const userInfoStyles = StyleSheet.create({
  container: {
    paddingHorizontal: SCREEN_PADDING,
    alignItems: "center",
  },
  username: {
    fontSize: TITLE_F_SIZE,
    fontWeight: TITLE_F_WEIGHT,
    marginBottom: 15,
  },
  userInfoText: {
    fontSize: TEXT_F_SIZE,
    fontWeight: REGULAR_F_WEIGHT,
    marginBottom: 8,
  },
  ratingContainer: {
    marginTop: 7,
    alignItems: 'center'
  },
  ratingText: {
    color: GREY_DARK,
    fontSize: SMALL_F_SIZE,
    fontWeight: REGULAR_F_WEIGHT,
    marginTop: 8
  }
});
