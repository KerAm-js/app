import { FC } from "react";
import { Pressable, Text } from "react-native";
import { SvgXml } from "react-native-svg";
import { TCardButtonProps } from "./types";
import { cardButtonStyles, cardButtonWidth } from "./styles";
import { getAdvertTypeIconFunc } from "../../../helpers/advertTypeGetters";

const CardButton: FC<TCardButtonProps> = ({ title, type, onPress }) => {
  return (
    <Pressable style={cardButtonStyles.container} onPress={onPress}>
      <SvgXml
        xml={getAdvertTypeIconFunc(type)()}
        width={cardButtonWidth / 2.4}
        height={cardButtonWidth / 2.4}
      />
      <Text style={cardButtonStyles.title}>{title}</Text>
    </Pressable>
  );
};

export default CardButton;
