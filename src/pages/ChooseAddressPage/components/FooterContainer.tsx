import { FC, PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const FooterContainer: FC<PropsWithChildren> = ({ children }) => {
  const { bottom } = useSafeAreaInsets();

  return (
    <View style={[styles.container, { bottom: bottom < 15 ? 15 : bottom }]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    right: 0,
    left: 0,
    zIndex: 100,
  },
});
