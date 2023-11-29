import { Pressable, Text, View } from "react-native";
import { SvgXml } from "react-native-svg";
import { arrowRightSvg } from "../../../assets/svg/arrowRight";
import { buttonsGroupStyles } from "./styles";
import { FC } from "react";
import { TGroupButtonProps } from "./types";
import { GREY_MIDDLE } from "../../../consts/colors";

const GroupButton: FC<TGroupButtonProps> = ({
  title,
  onPress,
  showBorder,
  circleNumber,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        buttonsGroupStyles.button,
        showBorder && { borderTopColor: GREY_MIDDLE },
      ]}
    >
      <Text style={buttonsGroupStyles.buttonTitle}>{title}</Text>
      <View style={buttonsGroupStyles.left}>
        {!!circleNumber && (
          <View style={buttonsGroupStyles.circle}>
            <Text style={buttonsGroupStyles.circleNumber}>{circleNumber}</Text>
          </View>
        )}
        <SvgXml xml={arrowRightSvg()} width={14} height={14} />
      </View>
    </Pressable>
  );
};

export default GroupButton;
