import { StyleSheet } from "react-native";
import { WHITE } from "../../../../consts/colors";

export const customMarkerStyles = StyleSheet.create({
  circle: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 22,
    borderWidth: 3,
    borderColor: WHITE
  }
})