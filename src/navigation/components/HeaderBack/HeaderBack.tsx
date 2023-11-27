import React, { FC } from "react";
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from "react-native-reanimated";
import { TouchableOpacity, View } from "react-native";
import { SvgXml } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";
import { arrowLeftSvg } from "../../../assets/svg/arrowLeft";
import { animatedHeaderLeftStyles } from "./styles";
import { IAnimatedHeaderBackButtonProps } from "./types";
import { GREY_DARK, WHITE } from "../../../consts/colors";

const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);

const AnimatedHeaderBackButton: FC<IAnimatedHeaderBackButtonProps> = ({
  scrollY,
  isCircle,
}) => {
  const navigation = useNavigation();
  const interpolating = useDerivedValue(() => {
    if (scrollY && scrollY.value > 250) {
      return withTiming(1);
    } else {
      return withTiming(0);
    }
  }, [scrollY?.value]);

  const rStyle = useAnimatedStyle(() => {
    return {
      opacity: scrollY ? withTiming(scrollY.value > 250 ? 1 : 0) : 1,
      display: scrollY ? (scrollY.value > 200 ? "flex" : "none") : "flex",
    };
  }, [scrollY?.value]);

  const rCircleStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        interpolating.value,
        [0, 1],
        [GREY_DARK, "rgba(243, 243, 245, 0)"]
      ),
    };
  }, [scrollY?.value]);

  const rWhiteArrowStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(interpolating.value, [0, 1], [1, 0]),
      transform: [
        {
          translateX: interpolate(interpolating.value, [0, 1], [0, -10]),
        },
        {
          scale: interpolate(interpolating.value, [0, 1], [1, 1.25]),
        },
      ],
    };
  }, [scrollY?.value]);

  const rBlackArrowStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(interpolating.value, [0, 1], [0, 1]),
      transform: [
        {
          translateX: interpolate(interpolating.value, [0, 1], [0, -10]),
        },
        {
          scale: interpolate(interpolating.value, [0, 1], [1, 1.25]),
        },
      ],
    };
  }, [scrollY?.value]);

  if (isCircle) {
    return (
      <TouchableOpacity
        style={animatedHeaderLeftStyles.container}
        onPress={navigation.goBack}
      >
        <Animated.View
          style={[animatedHeaderLeftStyles.circleContainer, rCircleStyle]}
        >
          <Animated.View
            style={[animatedHeaderLeftStyles.arrows, rWhiteArrowStyle]}
          >
            <SvgXml xml={arrowLeftSvg(WHITE)} width={8} height={16} />
          </Animated.View>
          <Animated.View
            style={[animatedHeaderLeftStyles.arrows, rBlackArrowStyle]}
          >
            <SvgXml xml={arrowLeftSvg()} width={8} height={16} />
          </Animated.View>
        </Animated.View>
      </TouchableOpacity>
    );
  }

  return (
    <AnimatedTouchableOpacity
      style={[animatedHeaderLeftStyles.container, scrollY && rStyle]}
      onPress={navigation.goBack}
    >
      <SvgXml xml={arrowLeftSvg()} width={10} height={20} />
    </AnimatedTouchableOpacity>
  );
};

export default AnimatedHeaderBackButton;
