import { FC, useState } from "react";
import { StatusBar, StatusBarStyle } from "react-native";
import { runOnJS, useAnimatedReaction } from "react-native-reanimated";
import { IAnimatedStatusBarProps } from "./types";

const AnimatedStatusBar: FC<IAnimatedStatusBarProps> = ({
  scrollY,
  photosLength,
}) => {
  const [barStyle, setBarStyle] = useState<StatusBarStyle>(
    photosLength !== 0 ? "light-content" : "dark-content"
  );

  useAnimatedReaction(
    () => scrollY.value,
    (curr, _) => {
      if (curr >= 250 && barStyle !== "dark-content") {
        runOnJS(setBarStyle)("dark-content");
      } else if (
        curr < 250 &&
        photosLength !== 0 &&
        barStyle !== "light-content"
      ) {
        runOnJS(setBarStyle)("light-content");
      }
    }
  );

  return <StatusBar barStyle={barStyle} animated />;
};

export default AnimatedStatusBar;
