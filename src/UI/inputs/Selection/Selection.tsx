import {
  ActivityIndicator,
  Keyboard,
  Text,
  TextInput,
  View,
} from "react-native";
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
    itemsList = [],
    value,
    selectItem,
    unselectItem,
    placeholder,
    usesDataFromApi,
    errorShown,
    setErrorShown,
    setIsFocused,
    isLoading,
    setSearch,
    search,
  }) => {
    const [text, setText] = useState<string>("");
    const [isOpened, setIsOpened] = useState(false);
    const containerHeight = useSharedValue(INPUT_HEIGHT);
    const selectedItemsObj = useRef<{ [key: string]: boolean }>({});
    const inputRef = useRef<TextInput | null>(null);
    const menuHeight = !!value.length && usesDataFromApi ? 44 : 0;
    const baseHeight =
      itemsList.length > 7 ? 326 : INPUT_HEIGHT + 46 * itemsList.length;

    const toggleHeight = () => {
      if (isOpened) {
        containerHeight.value = withTiming(INPUT_HEIGHT);
        if (inputRef.current) inputRef.current.blur();
        setIsFocused && setIsFocused(false);
        setErrorShown && setErrorShown(true);
      } else {
        if (inputRef.current && usesDataFromApi) inputRef.current.focus();
        setText("");
        containerHeight.value = withTiming(baseHeight + menuHeight);
        setIsFocused && setIsFocused(true);
        Keyboard.dismiss();
      }
      setIsOpened(!isOpened);
    };

    const handleValueChange = () => {
      selectedItemsObj.current = {};
      value.forEach((item) => {
        selectedItemsObj.current[item.id] = true;
      });
      if (isOpened) containerHeight.value = withTiming(baseHeight + menuHeight);
    };

    const handleItemsChange = () => {
      const listLength = itemsList.length;

      const isTooMuchItems = listLength > 7;
      const newContainerHeight =
        listLength === 0
          ? 105 + menuHeight
          : isTooMuchItems
          ? baseHeight + menuHeight
          : listLength * 46 + INPUT_HEIGHT + menuHeight;
      if (isOpened) containerHeight.value = withTiming(newContainerHeight);
    };

    const handleSearchTextChange = (text: string) => {
      if (usesDataFromApi) {
        setSearch(text);
      } else {
        setText(text);
      }
    };

    const listContainerStyle = useAnimatedStyle(() => {
      return {
        height: containerHeight.value,
      };
    }, [isOpened]);

    const scrollViewStyle = useAnimatedStyle(() => {
      return {
        opacity: withTiming(isOpened ? 1 : 0),
      };
    }, [isOpened]);

    useEffect(() => {
      if (usesDataFromApi) handleItemsChange();
    }, [itemsList]);

    handleValueChange();

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
            inputValue={usesDataFromApi ? search : text}
            onInputChange={handleSearchTextChange}
            inputRef={inputRef}
            selectedItemsArr={value}
            placeholder={placeholder}
            isApi={usesDataFromApi}
          />
          {!!menuHeight && (
            <SelectionMenu
              selectedItemsArr={value}
              isOpened={isOpened}
              unselectItem={unselectItem}
            />
          )}
          <Animated.ScrollView
            style={[selectionStyles.scrollView, scrollViewStyle]}
            nestedScrollEnabled
          >
            {isLoading ? (
              <ActivityIndicator />
            ) : itemsList.length ? (
              itemsList.map((item, index) => {
                return (
                  <SelectionItem
                    key={index + Date.now()}
                    item={item}
                    isChecked={selectedItemsObj.current[item.id]}
                    select={selectItem}
                    unselect={unselectItem}
                  />
                );
              })
            ) : (
              (
                <Text style={selectionStyles.notFoundMessage}>
                  Совпадений не найдено
                </Text>
              )
            )}
          </Animated.ScrollView>
        </Animated.View>
      </View>
    );
  }
);

export default Selection;
