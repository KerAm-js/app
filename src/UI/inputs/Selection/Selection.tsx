import { Keyboard, Text, TextInput, View } from "react-native";
import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
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
    placeholder,
    errorShown,
    setErrorShown,
    setIsFocused,
  }) => {
    const [search, setSearch] = useState<string>("");
    const [filteredItems, setFilteredItems] = useState<
      TSelectionProps["value"]
    >([]);
    const [isOpened, setIsOpened] = useState(false);
    const containerHeight = useSharedValue(INPUT_HEIGHT);
    const inputRef = useRef<TextInput | null>(null);
    const menuAnimatedHeight = useSharedValue(value.length ? 44 : 0);
    const baseHeight =
      itemsList.length > 7 ? 326 : INPUT_HEIGHT + 46 * itemsList.length;

    const selectedItemsObj = useMemo(() => {
      const result: { [key: string]: boolean } = {};
      value.forEach((item) => {
        result[item.id] = true;
      });
      return result;
    }, [value]);

    const toggleHeight = () => {
      if (isOpened) {
        containerHeight.value = withTiming(INPUT_HEIGHT);
        if (inputRef.current) inputRef.current.blur();
        setIsFocused && setIsFocused(false);
        setErrorShown && setErrorShown(true);
      } else {
        if (inputRef.current) inputRef.current.focus();
        setSearch("");
        containerHeight.value = withTiming(
          baseHeight + menuAnimatedHeight.value
        );
        setIsFocused && setIsFocused(true);
        Keyboard.dismiss();
      }
      setIsOpened(!isOpened);
    };

    const handleSearchTextChange = (text: string) => {
      setSearch(text);
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
      const trimmedSearch = search.trim();
      if (trimmedSearch) {
        setFilteredItems(
          itemsList.filter((item) => item.name.includes(trimmedSearch))
        );
      } else {
        setFilteredItems(itemsList);
      }
    }, [search, itemsList]);

    useEffect(() => {
      if (isOpened) {
        const newMenuAnimatedHeight = !!value.length ? 44 : 0;
        menuAnimatedHeight.value = withTiming(newMenuAnimatedHeight);
        containerHeight.value = withTiming(baseHeight + newMenuAnimatedHeight);
      }
    }, [value]);

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
            inputValue={search}
            onInputChange={handleSearchTextChange}
            inputRef={inputRef}
            selectedItemsArr={value}
            placeholder={placeholder}
          />
          <SelectionMenu
            animatedHeight={menuAnimatedHeight}
            selectedItemsArr={value}
            isOpened={isOpened}
            unselectItem={unselectItem}
          />
          <Animated.ScrollView
            style={[selectionStyles.scrollView, scrollViewStyle]}
            nestedScrollEnabled
          >
            {filteredItems.length ? (
              filteredItems.map((item) => {
                return (
                  <SelectionItem
                    key={item.id}
                    item={item}
                    isChecked={selectedItemsObj[item.id]}
                    select={selectItem}
                    unselect={unselectItem}
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
