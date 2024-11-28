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
  animatedHeight,
  selectedItemsArr,
  isOpened,
}) => {
  const isShown = !!selectedItemsArr.length;

  const selectedItemsContainerStyle = useAnimatedStyle(() => {
    return {
      height: animatedHeight.value,
      opacity: withTiming(!isOpened || !isShown ? 0 : 1),
    };
  }, [isOpened, animatedHeight.value, isShown]);

  return (
    <Animated.View
      style={[selectionMenuStyles.container, selectedItemsContainerStyle]}
    >
      <ScrollView
        horizontal
        contentContainerStyle={selectionMenuStyles.scrollViewContent}
        showsHorizontalScrollIndicator={false}
      >
        {selectedItemsArr.map((item) => (
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
