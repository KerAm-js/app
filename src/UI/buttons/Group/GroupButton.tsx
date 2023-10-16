import { Pressable, Text } from "react-native";
import { SvgXml } from "react-native-svg";
import { arrowRightSvg } from "../../../assets/svg/arrowRight";
import { buttonsGroupStyles } from "./styles";
import { FC } from "react";
import { TGroupButtonProps } from "./types";
import { GREY_MIDDLE } from "../../../consts/colors";

const GroupButton: FC<TGroupButtonProps> = ({ title, onPress, showBorder }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        buttonsGroupStyles.button,
        showBorder && { borderTopColor: GREY_MIDDLE },
      ]}
    >
      <Text style={buttonsGroupStyles.buttonTitle}>{title}</Text>
      <SvgXml xml={arrowRightSvg()} width={14} height={14} />
    </Pressable>
  );
};

export default GroupButton;
