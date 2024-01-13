import { Keyboard, Text, TextInput, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { TSelectionProps } from "./types";
import { selectionStyles } from "./styles";
import SelectionItem from "./Item/Item";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import SelectionSearchBar from "./SearchBar/SearchBar";
import { RED } from "../../../consts/colors";
import withLabelAndError from "../../../components/HOC/WithLabelAndError/WithLabelAndError";
import SelectionMenu from "./Menu/SelectionMenu";
import { INPUT_HEIGHT } from "../../../consts/views";

const Selection = withLabelAndError<TSelectionProps>(
  ({
    itemsList,
    value,
    selectItem,
    unselectItem,
    unselectAll,
    placeholder,
    multySelection,
    errorShown,
    setErrorShown,
    setIsFocused,
  }) => {
    const [text, setText] = useState<string>("");
    const filteredList = useRef<Array<string>>([...itemsList]);
    const isOpened = useSharedValue(0);
    const containerHeight = useSharedValue(INPUT_HEIGHT);
    const selectedItemsObj = useRef<{ [key: string]: boolean }>({});

    const menuHeight =
      !!value.length && multySelection && itemsList.length > 10 ? 44 : 0;
    const baseHeight = itemsList.length > 8 ? 326 : INPUT_HEIGHT + 46 * itemsList.length;

    const toggleHeight = () => {
      if (isOpened.value) {
        isOpened.value = withTiming(0);
        containerHeight.value = withTiming(INPUT_HEIGHT);
        inputRef.current?.blur();
        setIsFocused && setIsFocused(false);
        setErrorShown && setErrorShown(true);
      } else {
        filteredList.current = [...itemsList];
        setText("");
        isOpened.value = withTiming(1);
        containerHeight.value = withTiming(baseHeight + menuHeight);
        setIsFocused && setIsFocused(true);
        Keyboard.dismiss();
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

    const onChangeSearchText = (text: string) => {
      filteredList.current = text
        ? itemsList.filter((item: string) =>
            item.includes(text[0].toUpperCase() + text.slice(1))
          )
        : [...itemsList];
      setText(text);

      const listLength = filteredList.current.length;
      const isTooMuchItems = listLength > 8;
      const newContainerHeight =
        listLength === 0
          ? 105 + menuHeight
          : isTooMuchItems
          ? baseHeight + menuHeight
          : listLength * 46 + INPUT_HEIGHT + menuHeight;
      containerHeight.value = withTiming(newContainerHeight);
    };

    const onSelectItem = (item: string) => {
      if (!selectedItemsObj.current[item]) {
        selectItem(item);
        if (multySelection) {
          selectedItemsObj.current[item] = true;
          if (value.length === 0 && itemsList.length > 10)
            containerHeight.value = withTiming(containerHeight.value + 44);
        } else {
          selectedItemsObj.current = { [item]: true };
          toggleHeight();
        }
      } else {
        unselectItem(item);
        if (multySelection) {
          selectedItemsObj.current[item] = false;
          if (value.length === 1 && itemsList.length > 10)
            containerHeight.value = withTiming(containerHeight.value - 44);
        } else {
          selectedItemsObj.current = {};
        }
      }
    };

    const onUnselectAll = () => {
      containerHeight.value = withTiming(containerHeight.value - 44);
      selectedItemsObj.current = {};
      unselectAll && unselectAll();
    };

    useEffect(() => {
      value.forEach((item) => {
        selectedItemsObj.current[item] = true;
      });
    }, []);

    return (
      <View style={selectionStyles.container}>
        <Animated.View
          style={[
            selectionStyles.listContainer,
            errorShown && { borderColor: RED },
            listContainerStyle,
          ]}
        >
          <SelectionSearchBar
            isOpened={isOpened}
            onPress={toggleHeight}
            inputValue={text}
            onInputChange={onChangeSearchText}
            inputRef={inputRef}
            selectedItemsArr={value}
            placeholder={placeholder}
          />
          {multySelection && itemsList.length > 10 && (
            <SelectionMenu
              selectedItemsArr={value}
              isOpened={isOpened}
              unselectItem={unselectItem}
              unselectAll={onUnselectAll}
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
                    isChecked={selectedItemsObj.current[item]}
                    onPress={() => onSelectItem(item)}
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
  }
);

export default Selection;
