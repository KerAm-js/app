import { Text, TextInput, View } from "react-native";
import React, { useRef, useState } from "react";
import { TSelectionProps } from "./types";
import { selectionStyles } from "./styles";
import SelectionItem from "./Item/Item";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import SelectionSearchBar from "./SearchBar/SearchBar";
import SelectionMenu from "./Menu/SelectionMenu";
import { BLACK_DARK, BLUE } from "../../../consts/colors";

const Selection = ({
  label,
  itemsList,
  selectedItemsSet,
  placeholder,
  multySelection,
}: TSelectionProps) => {
  const [text, setText] = useState<string>("");
  const [_, arr] = useState([]);
  const rerender = () => arr([]);
  const filteredList = useRef<Array<string>>([...itemsList]);
  const isOpened = useSharedValue(0);
  const containerHeight = useSharedValue(48);

  const menuHeight = !!selectedItemsSet.size ? 44 : 0;
  const selectedItemsArr = Array.from(selectedItemsSet);
  const baseHeight = itemsList.length > 8 ? 324 : 48 + 46 * itemsList.length;

  const toggleHeight = () => {
    if (isOpened.value) {
      isOpened.value = withTiming(0);
      containerHeight.value = withTiming(48);
      inputRef.current?.blur();
    } else {
      filteredList.current = [...itemsList];
      setText("");
      isOpened.value = withTiming(1);
      containerHeight.value = withTiming(baseHeight + menuHeight);
    }
  };

  const inputRef = useRef<TextInput | null>(null);

  const listContainerStyle = useAnimatedStyle(() => {
    return {
      height: containerHeight.value,
    };
  }, [isOpened.value]);

  const scrollViewStyle = useAnimatedStyle(() => {
    return {
      opacity: isOpened.value,
    };
  }, [isOpened.value]);

  const labelStyle = useAnimatedStyle(() => {
    const color = interpolateColor(isOpened.value, [0, 1], [BLACK_DARK, BLUE]);
    return {
      color,
    };
  });

  const onChangeSearchText = (text: string) => {
    filteredList.current = text
      ? itemsList.filter((item: string) =>
          item.includes(text[0].toUpperCase() + text.slice(1))
        )
      : [...itemsList];
    setText(text);
    if (multySelection) {
      const listLength = filteredList.current.length;
      const isTooMuchItems = listLength > 8;
      const newContainerHeight =
        listLength === 0
          ? 105 + menuHeight
          : isTooMuchItems
          ? baseHeight + menuHeight
          : listLength * 46 + 48 + menuHeight;
      containerHeight.value = withTiming(newContainerHeight, { duration: 200 });
    }
  };

  const selectItem = (item: string) => {
    if (!multySelection) {
      selectedItemsSet.clear();
    } else if (!selectedItemsSet.size) {
      containerHeight.value = withTiming(containerHeight.value + 44);
    }
    selectedItemsSet.add(item);
    rerender();
  };

  const unselectItem = (item: string) => {
    if (selectedItemsSet.size === 1 && multySelection) {
      containerHeight.value = withTiming(containerHeight.value - 44);
    }
    selectedItemsSet.delete(item);
    rerender();
  };

  const unselectAll = () => {
    selectedItemsSet.clear();
    rerender();
  };

  return (
    <View style={selectionStyles.container}>
      <Animated.Text style={[selectionStyles.label, labelStyle]}>
        {label}
      </Animated.Text>
      <Animated.View
        style={[selectionStyles.listContainer, listContainerStyle]}
      >
        <SelectionSearchBar
          isOpened={isOpened}
          onPress={toggleHeight}
          inputValue={text}
          onInputChange={onChangeSearchText}
          inputRef={inputRef}
          selectedItemsArr={selectedItemsArr}
          placeholder={placeholder}
        />
        {multySelection && (
          <SelectionMenu
            selectedItemsArr={selectedItemsArr}
            isOpened={isOpened}
            unselectItem={unselectItem}
            unselectAll={unselectAll}
          />
        )}
        <Animated.ScrollView
          style={[selectionStyles.scrollView, scrollViewStyle]}
        >
          {filteredList.current.length ? (
            filteredList.current.map((item, index) => {
              return (
                <SelectionItem
                  key={index + Date.now()}
                  title={item}
                  isChecked={selectedItemsSet.has(item)}
                  onPress={() =>
                    selectedItemsSet.has(item)
                      ? unselectItem(item)
                      : selectItem(item)
                  }
                />
              );
            })
          ) : (
            <Text style={selectionStyles.notFoundMessage}>
              Совпадений не найдено
            </Text>
          )}
        </Animated.ScrollView>
      </Animated.View>
    </View>
  );
};

export default Selection;
