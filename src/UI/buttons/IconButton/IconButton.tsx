import { TouchableOpacity, ViewStyle } from "react-native";
import { TIconButtonProps } from "./types";
import { SvgXml } from "react-native-svg";
import { iconButtonStyles } from "./styles";
import { BLACK_LIGHT, WHITE } from "../../../consts/colors";

export const IconButton = ({
  onPress,
  iconXmlFunc,
  bigSize,
  isActive,
}: TIconButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        iconButtonStyles.container,
        bigSize && {
          width: 50,
          height: 50,
          backgroundColor: isActive
            ? BLACK_LIGHT
            : iconButtonStyles.container.backgroundColor,
        },
      ]}
    >
      <SvgXml
        xml={iconXmlFunc(isActive ? WHITE : undefined)}
        width={bigSize ? 36 : 26}
        height={bigSize ? 36 : 26}
      />
    </TouchableOpacity>
  );
};
