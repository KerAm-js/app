import { Pressable, Text, View } from "react-native";
import { SvgXml } from "react-native-svg";
import { checkedSvg } from "../../../../assets/svg/checked";
import {
  BLACK_LIGHT,
  BLACK_LIGHT_OPACITY,
  WHITE,
} from "../../../../consts/colors";
import { selectionItemStyles } from "./styles";
import { TSelectionItemProps } from "./types";
import React, { FC } from "react";

const SelectionItem: FC<TSelectionItemProps> = React.memo(
  ({ item, isChecked, select, unselect }: TSelectionItemProps) => {
    const onPress = () => {
      if (isChecked) {
        unselect(item);
      } else {
        select(item);
      }
    };
    return (
      <Pressable
        onPress={onPress}
        style={[
          selectionItemStyles.container,
          isChecked && { backgroundColor: BLACK_LIGHT_OPACITY },
        ]}
      >
        <View
          style={[
            selectionItemStyles.checkButton,
            isChecked && { backgroundColor: BLACK_LIGHT },
          ]}
        >
          {isChecked && (
            <SvgXml xml={checkedSvg(WHITE)} width={10} height={8} />
          )}
        </View>
        <Text style={selectionItemStyles.title}>{item.name}</Text>
      </Pressable>
    );
  }
);

export default SelectionItem;
