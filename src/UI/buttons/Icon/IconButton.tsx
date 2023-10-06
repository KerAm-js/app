import { Pressable } from "react-native";
import { TIconButtonProps } from "./types";
import { SvgXml } from "react-native-svg";
import { iconButtonStyles } from "./styles";
import { BLACK_LIGHT, WHITE } from "../../../consts/colors";
import { FC } from "react";

const IconButton: FC<TIconButtonProps> = ({
  onPress,
  iconXmlFunc,
  isBig,
  isActive,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        iconButtonStyles.container,
        isBig && {
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
        width={isBig ? 36 : 26}
        height={isBig ? 36 : 26}
      />
    </Pressable>
  );
};

export default IconButton;
