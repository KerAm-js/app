import { Pressable, Text, View } from "react-native";
import { SvgXml } from "react-native-svg";
import { cancelSvg } from "../../../../assets/svg/cancel";
import { TMenuItemProps } from "./types";
import { menuItemStyles } from "./styles";
import { FC } from "react";

const SelectionMenuItem: FC<TMenuItemProps> = ({ item, onPressX }) => {
  return (
    <View style={menuItemStyles.container}>
      <Text style={menuItemStyles.title}>{item?.name}</Text>
      <Pressable onPress={onPressX} style={menuItemStyles.cancelBtn}>
        <SvgXml xml={cancelSvg()} width={14} height={14} />
      </Pressable>
    </View>
  );
};

export default SelectionMenuItem;
