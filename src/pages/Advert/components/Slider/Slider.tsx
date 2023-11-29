import {
  Dimensions,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
  View,
} from "react-native";
import React, { FC, useCallback, useMemo, useState } from "react";
import { SvgXml } from "react-native-svg";
import { GREY_DARK } from "../../../../consts/colors";
import { getAdvertTypeIconFunc } from "../../../../helpers/advertTypeGetters";
import { ISliderProps } from "./types";
import { sliderStyles } from "./styles";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import LikeButton from "../../../../UI/buttons/Like/LikeButton";
import { USER } from "../../../../consts/devData";

const Slider: FC<ISliderProps> = ({
  id,
  userId,
  likes,
  params,
  type,
  scrollY,
  onLike
}) => {
  const [currentSlide, setCurrentSlider] = useState(1);
  const insets = useSafeAreaInsets();
  const isLiked = useMemo(() => !!likes.find((item) => item === USER.id), []);

  const { width: windowWidth } = Dimensions.get("window");

  const flatListOptimizationProps = {
    initialNumToRender: 3,
    maxToRenderPerBatch: 1,
    removeClippedSubviews: true,
    scrollEventThrottle: 16,
    windowSize: 2,
    keyExtractor: useCallback((item: string) => item, []),
    getItemLayout: useCallback(
      (_: any, index: number) => ({
        index,
        length: windowWidth,
        offset: index * windowWidth,
      }),
      []
    ),
  };

  const onScrollEnd = (evt: NativeSyntheticEvent<NativeScrollEvent>) => {
    const {
      contentOffset: { x },
      layoutMeasurement: { width },
    } = evt.nativeEvent;
    setCurrentSlider(Math.floor(x / width + 1));
  };

  const rStyle = useAnimatedStyle(() => {
    const defaultHeight = sliderStyles.image.height + insets.top;
    const height = interpolate(
      scrollY.value,
      [-100, 0],
      [defaultHeight + 60, defaultHeight],
      {
        extrapolateRight: Extrapolation.CLAMP,
      }
    );
    const translateY = interpolate(
      scrollY.value,
      [-100, 0, defaultHeight],
      [0, 0, -defaultHeight / 4],
      {
        extrapolateRight: Extrapolation.CLAMP,
      }
    );
    return {
      height,
      transform: [{ translateY }],
    };
  }, [scrollY.value]);

  const rContainerStyle = useAnimatedStyle(() => {
    return {
      zIndex: scrollY.value === 0 ? 1 : 0,
    };
  }, [scrollY.value]);

  const FlatListComponent = useMemo(() => {
    return (
      <FlatList
        style={sliderStyles.slider}
        horizontal
        data={params.photos}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={onScrollEnd}
        bounces={false}
        renderItem={({ item }) => {
          return (
            <Animated.Image
              loadingIndicatorSource={{
                uri: "https://static.wixstatic.com/media/83c6c9_3137595c76c84dc5bb7a65884cb67432~mv2.gif",
              }}
              style={[sliderStyles.image, rStyle]}
              source={{ uri: item }}
              resizeMode="cover"
            />
          );
        }}
        ListEmptyComponent={
          <View style={sliderStyles.sliderEmptyContainer}>
            <SvgXml
              xml={getAdvertTypeIconFunc(type)(GREY_DARK)}
              width={60}
              height={60}
            />
          </View>
        }
        {...flatListOptimizationProps}
      />
    );
  }, []);

  return (
    <Animated.View style={[sliderStyles.container, rContainerStyle]}>
      {!!params.photos.length && (
        <View style={sliderStyles.currentIndexContainer}>
          <Text style={sliderStyles.currentIndex}>
            {currentSlide}/{params.photos.length}
          </Text>
        </View>
      )}
      {/* <View style={sliderStyles.likeButtonContainer}>
        <LikeButton
          isLiked={isLiked}
          size={32}
          onPress={onLike}
        />
      </View> */}
      <LinearGradient
        colors={["rgba(0, 0, 0, 0.65)", "rgba(0, 0, 0, 0)"]}
        style={[sliderStyles.shadow, { height: insets.top + 20 }]}
      />
      {FlatListComponent}
    </Animated.View>
  );
};

export default Slider;
