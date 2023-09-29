import { Pressable, Text, View } from "react-native";
import { SvgXml } from "react-native-svg";
import { cancelSvg } from "../../../../assets/svg/cancel";
import { TMenuItemProps } from "./types";
import { menuItemStyles } from "./styles";

const SelectionMenuItem = ({ title, onPressX }: TMenuItemProps) => {
  return (
    <View style={menuItemStyles.container}>
      <Text style={menuItemStyles.title}>{title}</Text>
      <Pressable onPress={onPressX} style={menuItemStyles.cancelBtn}>
        <SvgXml xml={cancelSvg()} width={14} height={14} />
      </Pressable>
    </View>
  );
};

export default SelectionMenuItem;
