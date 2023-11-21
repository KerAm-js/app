import { FC, useMemo } from "react";
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
  withTiming,
} from "react-native-reanimated";
import { RootStackParamList } from "../../navigation/types";
import SheetButton from "./Button";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const BottomSheet: FC<IBottomSheetProps> = ({ actions, title }) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const translateY = useSharedValue(0);
  const { bottom } = useSafeAreaInsets();

  const rSheetStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
      paddingBottom: bottom,
    };
  });

  const rBackdropStyle = useAnimatedStyle(() => {
    const opacity = interpolate(translateY.value, [0, -220], [0, 1]);
    return {
      opacity,
    };
  });

  const closeModal = () => {
    translateY.value = withTiming(
      0,
      undefined,
      (isFinished: boolean | undefined) => {
        if (isFinished) {
          runOnJS(navigation.goBack)();
        }
      }
    );
  };

  const onLayout = (evt: LayoutChangeEvent) => {
    translateY.value = withTiming(-evt.nativeEvent.layout.height);
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
    <View style={bottomSheetStyles.container}>
      <AnimatedPressable
        onPress={closeModal}
        style={[bottomSheetStyles.backdrop, rBackdropStyle]}
      />
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
    </View>
  );
};

export default BottomSheet;
