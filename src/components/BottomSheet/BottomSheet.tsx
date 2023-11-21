import { FC, useMemo, useRef } from "react";
import { Alert, LayoutChangeEvent, Pressable, Text, View } from "react-native";
import { IBottomSheetProps } from "./types";
import { bottomSheetStyles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Animated, {
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { RootStackParamList } from "../../navigation/types";
import SheetButton from "./Button";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";

const OVERDRAG = 40;

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const BottomSheet: FC<IBottomSheetProps> = ({ actions, title }) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const translateY = useSharedValue(0);
  const { bottom } = useSafeAreaInsets();
  const paddingBottom = OVERDRAG + (bottom < 15 ? 15 : bottom);
  const context = useSharedValue({ y: 0, height: 204 + paddingBottom });

  const closeModal = () => {
    translateY.value = withTiming(
      0,
      { duration: 350 },
      (isFinished: boolean | undefined) => {
        if (isFinished) {
          runOnJS(navigation.goBack)();
        }
      }
    );
  };

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value.y = translateY.value;
    })
    .onUpdate((evt) => {
      const newY = context.value.y + evt.translationY;
      if (newY >= -context.value.height) {
        translateY.value = newY;
      }
    })
    .onFinalize(() => {
      if (
        translateY.value <= -context.value.height + OVERDRAG ||
        translateY.value + context.value.height < OVERDRAG * 3
      ) {
        translateY.value = withSpring(-context.value.height + OVERDRAG);
      } else {
        runOnJS(closeModal)();
      }
    });

  const rSheetStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
      paddingBottom,
    };
  });

  const rBackdropStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      translateY.value,
      [0, -context.value.height],
      [0, 1]
    );
    return {
      opacity,
    };
  });

  const onLayout = (evt: LayoutChangeEvent) => {
    const height = evt.nativeEvent.layout.height;
    translateY.value = withTiming(-height + OVERDRAG, {
      duration: 350,
    });
    context.value.height = height;
  };

  const buttonHandlers = useMemo(() => {
    return actions.map((button) => {
      return () => {
        if (button.type === "destructive") {
          Alert.alert(button.title, button.confirmMessage, [
            {
              text: "Да",
              style: "destructive",
              onPress: () => {
                button.onPress();
                closeModal();
              },
            },
            {
              text: "Отмена",
              style: "cancel",
              onPress: () => {
                closeModal();
              },
            },
          ]);
        } else {
          button.onPress();
          closeModal();
        }
      };
    });
  }, []);

  return (
    <GestureHandlerRootView style={bottomSheetStyles.container}>
      <AnimatedPressable
        onPress={closeModal}
        style={[bottomSheetStyles.backdrop, rBackdropStyle]}
      />
      <GestureDetector gesture={gesture}>
        <Animated.View
          onLayout={onLayout}
          style={[bottomSheetStyles.sheet, rSheetStyle]}
        >
          <View style={bottomSheetStyles.titleContainer}>
            <Text style={bottomSheetStyles.title}>{title}</Text>
          </View>
          {actions.map((button, index) => (
            <SheetButton
              key={button.id}
              {...button}
              onPress={buttonHandlers[index]}
            />
          ))}
          <SheetButton type="accent" title="Отмена" onPress={closeModal} />
        </Animated.View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
};

export default BottomSheet;
