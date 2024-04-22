import React, { FC } from "react";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { IAnimatedHeaderTitle } from "./types";
import { animatedHeaderTitleStyles } from "./styles";

const AnimatedHeaderTitle: FC<IAnimatedHeaderTitle> = ({ scrollY, title }) => {
  const rStyle = useAnimatedStyle(() => {
    return {
      opacity: scrollY ? withTiming(scrollY.value > 250 ? 1 : 0) : 1,
    };
  }, [scrollY?.value]);

  return (
    <Animated.Text style={[animatedHeaderTitleStyles.title, scrollY && rStyle]}>
      {title}
    </Animated.Text>
  );
};

export default AnimatedHeaderTitle;
