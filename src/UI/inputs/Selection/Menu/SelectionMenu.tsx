import Animated, {
  interpolate,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import SelectionMenuItem from "../MenuItem/MenuItem";
import { selectionMenuStyles } from "./styles";
import { TSelectionMenuProps } from "./types";
import { GREY_LIGHT } from "../../../../consts/colors";
import { ScrollView } from "react-native";

const SelectionMenu = ({
  unselectItem,
  selectedItemsArr,
  isOpened,
}: TSelectionMenuProps) => {
  const isShown = !!selectedItemsArr.length;

  const selectedItemsContainerStyle = useAnimatedStyle(() => {
    return {
      height: withTiming(isShown ? 44 : 0),
      opacity: isOpened.value,
      borderBottomWidth: withTiming(isShown ? 1 : 0),
      borderBottomColor: GREY_LIGHT,
    };
  }, [isOpened.value, selectedItemsArr.length]);

  return (
    <Animated.View style={selectedItemsContainerStyle}>
      <ScrollView
        horizontal
        contentContainerStyle={selectionMenuStyles.container}
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
