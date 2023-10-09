import { Pressable, Text } from "react-native";
import { TBigButtonProps } from "./types";
import { bigButtonStyles } from "./styles";
import { SvgXml } from "react-native-svg";
import { BLACK_DARK, WHITE } from "../../../consts/colors";
import { FC } from "react";

const BigButton: FC<TBigButtonProps> = ({
  backgroundColor,
  title,
  iconXmlFunc,
  onPress,
  noShadow,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        bigButtonStyles.container,
        noShadow && { shadowOpacity: 0 },
        backgroundColor && { backgroundColor, shadowColor: backgroundColor },
      ]}
    >
      {iconXmlFunc && (
        <SvgXml
          xml={iconXmlFunc(backgroundColor !== WHITE ? WHITE : undefined)}
          width={20}
          height={20}
        />
      )}
      <Text
        style={[
          bigButtonStyles.title,
          backgroundColor === WHITE && { color: BLACK_DARK },
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
};

export default BigButton;