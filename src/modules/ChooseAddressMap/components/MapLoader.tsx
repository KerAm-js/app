import { ActivityIndicator, StyleSheet, View } from "react-native";
import { BLACK_LIGHT_OPACITY, WHITE } from "../../../consts/colors";

export const MapLoader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={WHITE} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: BLACK_LIGHT_OPACITY,
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 90,
  },
});
