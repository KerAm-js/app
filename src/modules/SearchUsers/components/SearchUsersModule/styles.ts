import { StyleSheet } from "react-native";
import { GREY_LIGHT } from "../../../../consts/colors";
import { SCREEN_PADDING } from "../../../../consts/views";

export const searchUsersStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBarContainer: {
    paddingVertical: 10,
  },
  flatlistContent: {
    paddingTop: 10,
    paddingHorizontal: SCREEN_PADDING,
    paddingBottom: 50,
  },
});
