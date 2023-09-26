import { Text, TouchableOpacity } from "react-native";
import { TBigButtonProps } from "./types";
import { bigButtonStyles } from "./styles";
import { SvgXml } from "react-native-svg";
import { BLACK_DARK, WHITE } from "../../../consts/colors";

export const BigButton = ({
  backgroundColor,
  title,
  iconXmlFunc,
  onPress,
  noShadow,
}: TBigButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        bigButtonStyles.container,
        noShadow && { shadowOpacity: 0 },
        backgroundColor && { backgroundColor, shadowColor: backgroundColor },
      ]}
    >
      {iconXmlFunc && <SvgXml xml={iconXmlFunc()} width={20} height={20} />}
      <Text
        style={[
          bigButtonStyles.title,
          backgroundColor === WHITE && { color: BLACK_DARK },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};
