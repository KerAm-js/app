import { TNavButtonProps } from "./types";
import { navButtonStyles } from "./styles";
import WihtMapShadow from "../../../../components/HOC/WithMapShadow/WithMapShadow";
import { Pressable } from "react-native";
import { SvgXml } from "react-native-svg";

const NavButton = WihtMapShadow<TNavButtonProps>(
  ({ onPress, iconXml, isBackButton }) => {
    const size = isBackButton ? 18 : 26;

    return (
      <Pressable onPress={onPress} style={navButtonStyles.container}>
        <SvgXml xml={iconXml} width={size} height={size} />
      </Pressable>
    );
  }
);

export default NavButton;
