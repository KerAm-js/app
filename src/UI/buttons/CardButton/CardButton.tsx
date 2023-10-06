import { FC } from "react";
import { Pressable, Text } from "react-native";
import { SvgXml } from "react-native-svg";
import { TCardButtonProps } from "./types";
import { cardButtonStyles, cardButtonWidth } from "./styles";

const CardButton: FC<TCardButtonProps> = ({ title, iconXml, onPress }) => {
  return (
    <Pressable style={cardButtonStyles.container} onPress={onPress}>
      <SvgXml
        xml={iconXml}
        width={cardButtonWidth / 2.4}
        height={cardButtonWidth / 2.4}
      />
      <Text style={cardButtonStyles.title}>{title}</Text>
    </Pressable>
  );
};

export default CardButton;
