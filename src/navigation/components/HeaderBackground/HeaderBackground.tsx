import React, { FC } from "react";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { getDefaultHeaderHeight } from "@react-navigation/elements";
import {
  useSafeAreaFrame,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { animatedHeaderBackgroundStyles } from "./styles";
import { IAnimatedHeaderComponentProps } from "../../types";

const AnimatedHeaderBackground: FC<IAnimatedHeaderComponentProps> = ({
  scrollY,
}) => {
  const frame = useSafeAreaFrame();
  const insets = useSafeAreaInsets();
  const height = getDefaultHeaderHeight(frame, false, insets.top);

  const rStyle = useAnimatedStyle(() => {
    return {
      opacity: scrollY ? withTiming(scrollY.value > 250 ? 1 : 0) : 1,
      height,
    };
  }, [scrollY?.value]);

  return (
    <Animated.View
      style={[animatedHeaderBackgroundStyles.container, scrollY && rStyle]}
    />
  );
};

export default AnimatedHeaderBackground;
