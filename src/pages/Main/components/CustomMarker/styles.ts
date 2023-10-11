import { StyleSheet } from "react-native";

export const customMarkerStyles = StyleSheet.create({
  container: {
    width: 52,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    shadowRadius: 5,
    shadowOpacity: 50,
    elevation: 5
  }
})