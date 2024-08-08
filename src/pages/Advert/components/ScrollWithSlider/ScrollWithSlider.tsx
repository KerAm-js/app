import { useNavigation } from "@react-navigation/native";
import Slider from "../Slider/Slider";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../navigation/types";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Animated, {
  runOnJS,
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import { FC, useEffect, useRef } from "react";
import { Dimensions, Platform, View } from "react-native";
import LikeButton from "../../../../UI/buttons/Like/LikeButton";
import AnimatedHeaderBackButton from "../HeaderBack/HeaderBack";
import AnimatedHeaderBackground from "../HeaderBackground/HeaderBackground";
import AnimatedHeaderRightButton from "../HeaderRight/HeaderRight";
import AnimatedHeaderTitle from "../HeaderTitle/HeaderTitle";
import { sliderStyles } from "../Slider/styles";
import { IScrollWithSliderProps } from "./types";
import AnimatedStatusBar from "../AnimatedStatusBar/AnimatedStatusBar";
import { scrollWithSliderStyles } from "./styles";

const ScrollWithSlider: FC<IScrollWithSliderProps> = ({
  id,
  likes,
  photos,
  userId,
  type,
  children,
}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const insets = useSafeAreaInsets();
  const dimensions = Dimensions.get("screen");
  const scrollRef = useRef<Animated.ScrollView | null>(null);

  const scrollY = useSharedValue(0);
  const context = useSharedValue({ y: 0 });

  const scrollToTop = () => {
    if (scrollRef.current)
      scrollRef.current?.scrollTo({ y: 0, animated: true });
  };
  const scrollToMainInfo = () => {
    if (scrollRef.current)
      scrollRef.current?.scrollTo({ y: 256, animated: true });
  };

  const scrollHandler = useAnimatedScrollHandler({
    onBeginDrag: (e) => {
      context.value.y = e.contentOffset.y;
    },
    onScroll: (e) => {
      scrollY.value = e.contentOffset.y;
    },
    onEndDrag: (e) => {
      const { y } = e.contentOffset;
      if (scrollRef.current && y > 0 && y < 256) {
        if (y < context.value.y) {
          runOnJS(scrollToTop)();
        } else if (y > context.value.y) {
          runOnJS(scrollToMainInfo)();
        }
      }
    },
  });

  const onLike = (value: boolean) => {
    console.log(
      `Post ${id} is ${value ? "liked by" : "disliked by"} user ${userId}`
    );
  };

  useEffect(() => {
    navigation.setOptions({
      headerBackground: () => <AnimatedHeaderBackground scrollY={scrollY} />,
      headerLeft: () => <AnimatedHeaderBackButton scrollY={scrollY} isCircle />,
      headerTitle: (props) => (
        <AnimatedHeaderTitle scrollY={scrollY} title={props.children} />
      ),
      headerRight: () => (
        <AnimatedHeaderRightButton>
          <LikeButton size={32} onPress={onLike} />
        </AnimatedHeaderRightButton>
      ),
      headerStyle: {},
      headerBackVisible: false,
    });
  }, []);
  return (
    <>
      {Platform.OS === "ios" && (
        <AnimatedStatusBar photosLength={photos.length} scrollY={scrollY} />
      )}
      <Slider
        userId={userId}
        id={id}
        likes={likes}
        scrollY={scrollY}
        photos={photos}
        type={type}
        onLike={onLike}
      />
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        ref={scrollRef}
        style={{ paddingTop: sliderStyles.image.height + insets.top }}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        contentContainerStyle={{ paddingBottom: 70 }}
      >
        <View
          style={[
            scrollWithSliderStyles.childrenContainer,
            {
              minHeight:
                dimensions.height + sliderStyles.image.height + insets.top,
            },
          ]}
        >
          {children}
        </View>
        <View style={scrollWithSliderStyles.bottomView} />
      </Animated.ScrollView>
    </>
  );
};

export default ScrollWithSlider;
