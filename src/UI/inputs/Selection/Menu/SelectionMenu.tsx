import Animated, {
  interpolate,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import SelectionMenuItem from "../MenuItem/MenuItem";
import { selectionMenuStyles } from "./styles";
import { TSelectionMenuProps } from "./types";
import { RED } from "../../../../consts/colors";
import { Pressable, ScrollView } from "react-native";
import { SvgXml } from "react-native-svg";
import { cancelSvg } from "../../../../assets/svg/cancel";

const SelectionMenu = ({
  unselectItem,
  selectedItemsArr,
  isOpened,
  unselectAll,
}: TSelectionMenuProps) => {
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
      {/* {!!selectedItemsArr.length && (
        <Pressable
          onPress={unselectAll}
          style={selectionMenuStyles.clearButton}
        >
          <SvgXml xml={cancelSvg(RED)} width={16} height={16} />
        </Pressable>
      )} */}
    </Animated.View>
  );
};

export default SelectionMenu;
