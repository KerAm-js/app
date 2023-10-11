import { StyleSheet } from "react-native";
import { SCREEN_PADDING } from "../../../../consts/views";

export const menuBarStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    gap: 10,
    position: 'absolute',
    justifyContent: 'center',
    bottom: 0,
    zIndex: 1
  }
})