import { Pressable, TextInput } from "react-native";
import { TSelectionSearchBarProps } from "./types";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { SvgXml } from "react-native-svg";
import { arrowDownSvg } from "../../../../assets/svg/arrowDown";
import { selectionSearchBarStyles } from "./styles";
import { BLACK_DARK, BLUE, GREY_DARK } from "../../../../consts/colors";
import { searchSvg } from "../../../../assets/svg/search";
import { FC, useEffect } from "react";

const SelectionSearchBar: FC<TSelectionSearchBarProps> = ({
  onPress,
  isOpened,
  selectedItemsArr,
  placeholder,
  inputRef,
  inputValue,
  onInputChange,
  isApi,
}) => {
  const rotation = useSharedValue(0);
  const opacity = useSharedValue(0);

  const searchBarContainerStyle = useAnimatedStyle(() => {
    const width = interpolate(opacity.value, [0, 1], [0, 100]);
    return {
      transform: [{ translateX: withTiming(isOpened ? 0 : -15) }],
      opacity: isApi ? opacity.value : 0,
      width: `${isApi ? width : 0}%`,
    };
  }, [isOpened]);

  const lineStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  }, [isOpened]);

  const arrowStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: `${rotation.value}deg`,
        },
      ],
    };
  }, [isOpened]);

  const placeholderStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: withTiming(isOpened ? 20 : 0) }],
      opacity: withTiming(isOpened ? 0 : 1),
    };
  }, [isOpened]);

  useEffect(() => {
    if (isOpened && isApi && inputRef.current) inputRef.current.focus();
    rotation.value = withTiming(isOpened ? 0 : -90);
    opacity.value = withTiming(isOpened ? 1 : 0);
  }, [isOpened]);

  return (
    <Pressable onPress={onPress}>
      <Animated.View style={[selectionSearchBarStyles.arrow, arrowStyle]}>
        <SvgXml xml={arrowDownSvg()} width={16} height={16} />
      </Animated.View>
      <Animated.Text
        numberOfLines={1}
        style={[
          selectionSearchBarStyles.placeholder,
          placeholderStyle,
          !!selectedItemsArr.length && { color: BLACK_DARK },
        ]}
      >
        {selectedItemsArr.length
          ? selectedItemsArr.reduce(
              (prev, curr) => prev + (!!prev ? ", " : "") + curr.name,
              ""
            )
          : placeholder}
      </Animated.Text>
      <Animated.View
        style={[selectionSearchBarStyles.container, searchBarContainerStyle]}
      >
        <SvgXml xml={searchSvg(GREY_DARK)} width={20} height={20} />
        <TextInput
          ref={inputRef}
          style={selectionSearchBarStyles.input}
          placeholderTextColor={GREY_DARK}
          placeholder="Поиск"
          value={inputValue}
          onChangeText={onInputChange}
          selectionColor={BLUE}
          returnKeyType="done"
          returnKeyLabel="Готово"
          editable={isApi}
        />
      </Animated.View>
      <Animated.View style={[selectionSearchBarStyles.line, lineStyle]} />
    </Pressable>
  );
};

export default SelectionSearchBar;
