import { StyleSheet } from "react-native";
import { SCREEN_PADDING } from "../../../../consts/views";
import { WHITE } from "../../../../consts/colors";

export const navBarStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    width: '100%',
    paddingHorizontal: SCREEN_PADDING,
    flexDirection: "row",
    justifyContent: "space-between",
    zIndex: 1,
  },
  rightButtonsContainer: {
    flexDirection: "row",
    gap: 10,
  },
  adsCountContainer: {
    backgroundColor: WHITE,
  },
  adsCountText: {

  }
});
