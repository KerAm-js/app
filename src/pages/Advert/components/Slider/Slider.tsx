import {
  Dimensions,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Platform,
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
import { API_URL } from "../../../../api/api";
import { useAuth } from "../../../../hooks/store/useAuth";
// import { USER } from "../../../../consts/devData";
// import LikeButton from "../../../../UI/buttons/Like/LikeButton";

const Slider: FC<ISliderProps> = ({
  // id,
  // userId,
  likes,
  photos,
  advertType,
  scrollY,
  onLike,
}) => {
  const [currentSlide, setCurrentSlider] = useState(1);
  const { token } = useAuth();
  const insets = useSafeAreaInsets();
  // const isLiked = useMemo(() => !!likes.find((item) => item === USER.id), []);

  const { width: windowWidth } = Dimensions.get("window");

  const flatListOptimizationProps = {
    initialNumToRender: 3,
    maxToRenderPerBatch: 1,
    scrollEventThrottle: 16,
    windowSize: 5,
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
        data={photos}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={onScrollEnd}
        bounces={false}
        renderItem={({ item }) => {
          return (
            <Animated.Image
              style={[sliderStyles.image, rStyle]}
              source={{
                uri: `${API_URL}/fileSystem/${item}`,
                cache: "force-cache",
                headers: {
                  Authorization: token || "",
                },
              }}
              resizeMode="cover"
            />
          );
        }}
        ListEmptyComponent={
          <View style={sliderStyles.sliderEmptyContainer}>
            <SvgXml
              xml={getAdvertTypeIconFunc(advertType)(GREY_DARK)}
              width={60}
              height={60}
            />
            <Text style={sliderStyles.sliderEmptyText}>
              Пользователь не добавил фото
            </Text>
          </View>
        }
        {...flatListOptimizationProps}
      />
    );
  }, []);

  return (
    <Animated.View style={[sliderStyles.container, rContainerStyle]}>
      {!!photos?.length && (
        <View style={sliderStyles.currentIndexContainer}>
          <Text style={sliderStyles.currentIndex}>
            {currentSlide}/{photos.length}
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
      {!!photos?.length && Platform.OS === 'ios' && (
        <LinearGradient
          colors={["rgba(0, 0, 0, 0.65)", "rgba(0, 0, 0, 0)"]}
          style={[sliderStyles.shadow, { height: insets.top + 20 }]}
        />
      )}
      {FlatListComponent}
    </Animated.View>
  );
};

export default Slider;
