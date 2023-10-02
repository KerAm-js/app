import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import SelectionMenuItem from "../MenuItem/MenuItem";
import { selectionMenuStyles } from "./styles";
import { TSelectionMenuProps } from "./types";
import { ScrollView } from "react-native";
import { FC } from "react";

const SelectionMenu: FC<TSelectionMenuProps> = ({
  unselectItem,
  selectedItemsArr,
  isOpened,
  unselectAll,
}) => {
  const isShown = !!selectedItemsArr.length;

  const selectedItemsContainerStyle = useAnimatedStyle(() => {
    return {
      height: withTiming(isShown ? 44 : 0),
      opacity: isOpened.value,
      borderBottomWidth: withTiming(isShown ? 1 : 0),
    };
  }, [isOpened.value, selectedItemsArr.length]);

  return (
    <Animated.View
      style={[selectionMenuStyles.container, selectedItemsContainerStyle]}
    >
      <ScrollView
        horizontal
        contentContainerStyle={selectionMenuStyles.scrollViewContent}
        showsHorizontalScrollIndicator={false}
      >
        {selectedItemsArr.map((key, index) => (
          <SelectionMenuItem
            onPressX={() => unselectItem(key)}
            key={index + Date.now()}
            title={key}
          />
        ))}
      </ScrollView>
    </Animated.View>
  );
};

export default SelectionMenu;
