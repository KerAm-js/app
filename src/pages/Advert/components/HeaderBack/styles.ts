import { StyleSheet } from "react-native";

export const animatedHeaderLeftStyles = StyleSheet.create({
  container: {
    width: 50,
    height: 40,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  circleContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    // alignItems: "center",
    // justifyContent: "center",
  },
  arrows: {
    top: 8,
    left: 10,
    position: "absolute",
  }
});
