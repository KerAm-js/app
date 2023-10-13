import { Pressable, Text, View } from "react-native";
import { TBigButtonProps } from "./types";
import { bigButtonStyles } from "./styles";
import { SvgXml } from "react-native-svg";
import { BLACK_DARK, WHITE } from "../../../consts/colors";
import { FC } from "react";
import { DISABLED_BUTTON_OPACITY } from "../../../consts/views";

const BigButton: FC<TBigButtonProps> = ({
  backgroundColor,
  title,
  iconXmlFunc,
  onPress,
  noShadow,
  disabled,
}) => {
  return (
    <View style={bigButtonStyles.container}>
      <Pressable
        onPress={onPress}
        disabled={disabled}
        style={[
          bigButtonStyles.button,
          noShadow && { shadowOpacity: 0 },
          backgroundColor && { backgroundColor, shadowColor: backgroundColor },
          disabled && { opacity: DISABLED_BUTTON_OPACITY }
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
    </View>
  );
};

export default BigButton;
