import {
  Dimensions,
  FlatList,
  Image,
  ListRenderItemInfo,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
  View,
} from "react-native";
import { advertStyles } from "./styles";
import { IAdvertSliderProps, IFlatListComponentProps } from "./types";
import React, { FC, useCallback, useState } from "react";
import { SvgXml } from "react-native-svg";
import { GREY_DARK } from "../../../../consts/colors";
import { getAdvertTypeIconFunc } from "../../../../helpers/advertTypeGetters";
import { useAuth } from "../../../../hooks/store/useAuth";
import { API_URL } from "../../../../api/api";

const windowWidth = Dimensions.get("window").width;

const flatListOptimizationProps = {
  initialNumToRender: 1,
  maxToRenderPerBatch: 1,
  windowSize: 3,
  scrollEventThrottle: 16,
  keyExtractor: (item: string) => item,
  getItemLayout: (_: any, index: number) => ({
    index,
    length: windowWidth,
    offset: index * windowWidth,
  }),
};

const FlatListComponent: FC<IFlatListComponentProps> = React.memo(
  ({ onScrollEnd, photos, advertType }) => {
    const { token } = useAuth();
    const renderItem = useCallback(({ item }: ListRenderItemInfo<string>) => {
      return (
        <Image
          style={advertStyles.image}
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
    }, []);

    return (
      <FlatList
        style={advertStyles.slider}
        horizontal
        data={photos}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={onScrollEnd}
        bounces={false}
        renderItem={renderItem}
        ListEmptyComponent={
          <View style={advertStyles.sliderEmptyContainer}>
            <SvgXml
              xml={getAdvertTypeIconFunc(advertType)(GREY_DARK)}
              width={60}
              height={60}
            />
          </View>
        }
        {...flatListOptimizationProps}
      />
    );
  },
  (prev, curr) => {
    return prev.photos?.length === curr.photos?.length;
  }
);

const Slider: FC<IAdvertSliderProps> = ({ photos, advertType }) => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const onScrollEnd = useCallback(
    (evt: NativeSyntheticEvent<NativeScrollEvent>) => {
      const {
        contentOffset: { x },
        layoutMeasurement: { width },
      } = evt.nativeEvent;
      setCurrentSlide(x / width + 1);
    },
    []
  );

  return (
    <View>
      {!!photos?.length && photos.length > 1 && (
        <View style={advertStyles.currentIndexContainer}>
          <Text style={advertStyles.currentIndex}>
            {currentSlide}/{photos?.length}
          </Text>
        </View>
      )}
      <FlatListComponent
        photos={photos}
        advertType={advertType}
        onScrollEnd={onScrollEnd}
      />
    </View>
  );
};

export default Slider;
