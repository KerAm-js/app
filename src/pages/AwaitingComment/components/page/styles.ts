import { StyleSheet } from "react-native";
import { SCREEN_PADDING } from "../../../../consts/views";

export const awaitingCommentPageStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingTop: 20,
    paddingHorizontal: SCREEN_PADDING,
    paddingBottom: 70,
  }
})