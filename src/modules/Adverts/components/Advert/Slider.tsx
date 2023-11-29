import {
  Dimensions,
  FlatList,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
  View,
} from "react-native";
import { advertStyles } from "./styles";
import { IAdvertSliderProps } from "./types";
import React, { FC, useCallback, useMemo, useState } from "react";
import { SvgXml } from "react-native-svg";
import { GREY_DARK } from "../../../../consts/colors";
import { getAdvertTypeIconFunc } from "../../../../helpers/advertTypeGetters";

const Slider: FC<IAdvertSliderProps> = ({ params, type }) => {
  const [currentSlide, setCurrentSlider] = useState(1);

  const windowWidth = Dimensions.get("window").width;

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
    setCurrentSlider(x / width + 1);
  };

  const FlatListComponent = useMemo(() => {
    return (
      <FlatList
        style={advertStyles.slider}
        horizontal
        data={params.photos}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={onScrollEnd}
        bounces={false}
        renderItem={({ item }) => {
          return (
            <Image
              loadingIndicatorSource={{
                uri: "https://static.wixstatic.com/media/83c6c9_3137595c76c84dc5bb7a65884cb67432~mv2.gif",
              }}
              style={advertStyles.image}
              source={{ uri: item }}
              resizeMode="cover"
            />
          );
        }}
        ListEmptyComponent={
          <View style={advertStyles.sliderEmptyContainer}>
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
    <React.Fragment>
      {!!params.photos.length && (
        <View style={advertStyles.currentIndexContainer}>
          <Text style={advertStyles.currentIndex}>
            {currentSlide}/{params.photos.length}
          </Text>
        </View>
      )}
      {FlatListComponent}
    </React.Fragment>
  );
};

export default Slider;
