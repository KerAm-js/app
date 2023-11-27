import React, { FC } from "react";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { TouchableOpacity, View } from "react-native";
import { SvgXml } from "react-native-svg";
import { animatedHeaderRightStyles } from "./styles";
import { IAnimatedHeaderRightProps } from "./types";

const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);

const AnimatedHeaderRightButton: FC<IAnimatedHeaderRightProps> = ({
  scrollY,
  iconXml,
  onPress,
  children,
}) => {
  const rStyle = useAnimatedStyle(() => {
    return {
      opacity: scrollY ? withTiming(scrollY.value > 250 ? 1 : 0) : 1,
      display: scrollY ? (scrollY.value > 200 ? "flex" : "none") : "flex",
    };
  }, [scrollY?.value]);

  if (children) {
    return <Animated.View style={scrollY && rStyle}>{children}</Animated.View>;
  }

  return (
    <AnimatedTouchableOpacity
      style={[animatedHeaderRightStyles.container, scrollY && rStyle]}
      onPress={onPress}
    >
      {!!iconXml && <SvgXml xml={iconXml} width={20} height={20} />}
    </AnimatedTouchableOpacity>
  );
};

export default AnimatedHeaderRightButton;
