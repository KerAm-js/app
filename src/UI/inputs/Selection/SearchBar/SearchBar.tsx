import { Pressable, TextInput } from "react-native";
import { TSelectionSearchBarProps } from "./types";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { SvgXml } from "react-native-svg";
import { arrowDownSvg } from "../../../../assets/svg/arrowDown";
import { selectionSearchBarStyles } from "./styles";
import { BLACK_DARK, BLUE, GREY_DARK } from "../../../../consts/colors";
import { searchSvg } from "../../../../assets/svg/search";
import { FC } from "react";

const SelectionSearchBar: FC<TSelectionSearchBarProps> = ({
  onPress,
  isOpened,
  selectedItemsArr,
  placeholder,
  inputRef,
  inputValue,
  onInputChange,
}) => {
  const searchBarContainerStyle = useAnimatedStyle(() => {
    const translation = interpolate(isOpened.value, [0, 1], [-15, 0]);
    const width = interpolate(isOpened.value, [0, 1], [0, 100]);
    return {
      transform: [{ translateX: translation }],
      width: `${width}%`,
      opacity: isOpened.value,
    };
  }, [isOpened.value]);

  const arrowStyle = useAnimatedStyle(() => {
    const rotation = interpolate(isOpened.value, [0, 1], [-90, 0]);
    return {
      transform: [
        {
          rotate: `${rotation}deg`,
        },
      ],
    };
  }, [isOpened.value]);

  const placeholderStyle = useAnimatedStyle(() => {
    const translation = interpolate(isOpened.value, [0, 1], [0, 20]);
    const opacity = interpolate(isOpened.value, [0, 0.8], [1, 0]);
    return {
      transform: [{ translateX: translation }],
      opacity,
    };
  }, [isOpened.value]);

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
        {selectedItemsArr.length ? selectedItemsArr.join(", ") : placeholder}
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
        />
      </Animated.View>
    </Pressable>
  );
};

export default SelectionSearchBar;
