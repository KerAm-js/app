import { FC, useState } from "react";
import { runOnJS, useAnimatedReaction } from "react-native-reanimated";
import { IAnimatedStatusBarProps } from "./types";
import { StatusBar } from "expo-status-bar";

const AnimatedStatusBar: FC<IAnimatedStatusBarProps> = ({
  scrollY,
  photosLength,
}) => {
  const [barStyle, setBarStyle] = useState<"light" | "dark">(
    photosLength !== 0 ? "light" : "dark"
  );

  useAnimatedReaction(
    () => scrollY.value,
    (curr, _) => {
      if (curr >= 250 && barStyle !== "dark") {
        runOnJS(setBarStyle)("dark");
      } else if (
        curr < 250 &&
        photosLength !== 0 &&
        barStyle !== "light"
      ) {
        runOnJS(setBarStyle)("light");
      }
    }
  );

  return <StatusBar style={barStyle} animated />;
};

export default AnimatedStatusBar;
