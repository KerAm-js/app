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
}) => {
  const isShown = !!selectedItemsArr.length;

  const selectedItemsContainerStyle = useAnimatedStyle(() => {
    return {
      height: withTiming(isShown ? 44 : 0, { duration: 150 }),
      opacity: withTiming(isOpened ? 1 : 0),
      borderBottomWidth: withTiming(isShown ? 1 : 0),
    };
  }, [isOpened, selectedItemsArr.length]);

  return (
    <Animated.View
      style={[selectionMenuStyles.container, selectedItemsContainerStyle]}
    >
      <ScrollView
        horizontal
        contentContainerStyle={selectionMenuStyles.scrollViewContent}
        showsHorizontalScrollIndicator={false}
      >
        {selectedItemsArr.map((item, index) => (
          <SelectionMenuItem
            onPressX={() => unselectItem(item)}
            key={item.id}
            item={item}
          />
        ))}
      </ScrollView>
    </Animated.View>
  );
};

export default SelectionMenu;
