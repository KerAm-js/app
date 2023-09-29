import { Text, TextInput, View } from "react-native";
import React, { useRef, useState } from "react";
import { TSelectionProps } from "./types";
import { selectionStyles } from "./styles";
import SelectionItem from "./Item/Item";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import SelectionSearchBar from "./SearchBar/SearchBar";
import SelectionMenu from "./Menu/SelectionMenu";

const Selection = ({
  label,
  values,
  valuesList,
  valuesSetter,
  placeholder,
}: TSelectionProps) => {
  const list = [
    "Автовышка",
    "Автовоз",
    "Автобус пассажирский",
    "Автобетононасос",
    "Автогрейдер",
    "Автогудронатор",
    "Автокран",
    "Бетоновоз",
    "Бензовоз",
    "Бульдозер",
    "Буровая",
    "Водовоз",
    "Газель",
    "Грохот",
    "Дробильно-сортировочный комплекс",
    "Дробилка мобильная",
    "Земснаряд",
    "Зерновоз",
    "Каток грунтовой",
    "Каток дорожный",
    "Контейнеровоз",
    "Кран башенный",
    "Кран гусеничный",
    "Лесовоз",
    "Ломовоз",
    "Мусоровоз (ПУХТО)",
    "Мультилифт",
    "Манипулятор",
    "Мини погрузчик",
    "Поливомоечная машина",
    "Погрузчик вилочны",
    "Погрузчик телескопический",
    "Погрузчик Фронтальный",
    "Рефрежиратор",
    "Ресайклер-стабилизатор грунта",
    "Самосвал",
    "Самосвал вездеход",
    "Сочлененный Самосвал",
    "Снегоуборочная машина",
    "Тонар",
    "Трактор",
    "Трал",
    "Тромель",
    "Трубоукладчик",
    "Фура",
    "Фреза дорожная",
    "Фреза Мини",
    "Фургон",
    "Шаланда (длинномер)",
    "Эвакуатор легковой",
    "Эвакуатор грузовой",
    "Экскаватор гусеничный",
    "Экскаватор разрушитель",
    "Экскаватор амфибия",
    "Экскаватор колёсный",
    "Экскаватор погрузчик",
    "Экскаватор-Мини",
    "Ямобур ",
  ];
  const [text, setText] = useState<string>("");
  const filteredList = useRef<Array<string>>([...list]);
  const [selectedItems, setSelectedItems] = useState<{
    [key: string]: boolean;
  }>({});
  const selectedItemsArr = Object.keys(selectedItems).filter(
    (key) => selectedItems[key]
  );
  const isOpened = useSharedValue(0);
  const menuHeight = !!selectedItemsArr.length ? 44 : 0;
  const containerHeight = useSharedValue(48);

  const toggleHeight = () => {
    if (isOpened.value) {
      isOpened.value = withTiming(0);
      containerHeight.value = withTiming(48);
      inputRef.current?.blur();
    } else {
      filteredList.current = [...list];
      setText("");
      isOpened.value = withTiming(1);
      containerHeight.value = withTiming(324 + menuHeight);
    }
  };

  const inputRef = useRef<TextInput | null>(null);

  const listContainerStyle = useAnimatedStyle(() => {
    const shadowOpacity = interpolate(isOpened.value, [0, 1], [0, 0.15]);
    return {
      height: containerHeight.value,
      shadowOpacity,
    };
  }, [isOpened.value]);

  const scrollViewStyle = useAnimatedStyle(() => {
    return {
      opacity: isOpened.value,
    };
  }, [isOpened.value]);

  const onChangeSearchText = (text: string) => {
    filteredList.current = text
      ? list.filter((item: string) =>
          item.includes(text[0].toUpperCase() + text.slice(1))
        )
      : [...list];
    setText(text);
    const listLength = filteredList.current.length;
    const newContainerHeight =
      listLength === 0
        ? 105 + menuHeight
        : listLength < 6
        ? listLength * 46 + 48 + menuHeight
        : 324 + menuHeight;
    containerHeight.value = withTiming(newContainerHeight, { duration: 200 });
  };

  const selectItem = (item: string) => {
    if (!selectedItemsArr.length) {
      containerHeight.value = withTiming(containerHeight.value + 44);
    }
    setSelectedItems({
      ...selectedItems,
      [item]: true,
    });
  };

  const unselectItem = (item: string) => {
    if (selectedItemsArr.length === 1) {
      containerHeight.value = withTiming(containerHeight.value - 44);
    }
    setSelectedItems({
      ...selectedItems,
      [item]: false,
    });
  };

  return (
    <View style={selectionStyles.container}>
      <Text style={selectionStyles.label}>{label}</Text>
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
        <SelectionMenu
          selectedItemsArr={selectedItemsArr}
          isOpened={isOpened}
          unselectItem={unselectItem}
        />
        <Animated.ScrollView
          style={[selectionStyles.scrollView, scrollViewStyle]}
        >
          {filteredList.current.length ? (
            filteredList.current.map((item, index) => {
              return (
                <SelectionItem
                  key={index + Date.now()}
                  title={item}
                  isChecked={selectedItems[item]}
                  onPress={() =>
                    selectedItems[item] ? unselectItem(item) : selectItem(item)
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
