import { Pressable } from "react-native";
import { SvgXml } from "react-native-svg";
import { menuButtonStyles } from "./styles";
import { BLACK_LIGHT, WHITE } from "../../../../consts/colors";
import { TMenuButtonProps } from "./types";
import WihtMapShadow from "../../../../components/HOC/WithMapShadow/WithMapShadow";

const MenuButton = WihtMapShadow<TMenuButtonProps>(
  ({ onPress, iconXmlFunc, isActive }) => {
    return (
      <Pressable
        onPress={onPress}
        style={[
          menuButtonStyles.container,
          isActive && {
            backgroundColor: BLACK_LIGHT,
          },
        ]}
      >
        <SvgXml
          xml={iconXmlFunc(isActive ? WHITE : undefined)}
          width={36}
          height={36}
        />
      </Pressable>
    );
  }
);

export default MenuButton;
