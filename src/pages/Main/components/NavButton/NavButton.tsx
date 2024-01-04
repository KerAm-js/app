import { TNavButtonProps } from "./types";
import { navButtonStyles } from "./styles";
import WihtMapShadow from "../../../../components/HOC/WithMapShadow/WithMapShadow";
import { Pressable } from "react-native";
import { SvgXml } from "react-native-svg";

const NavButton = WihtMapShadow<TNavButtonProps>(({ onPress, iconXml }) => {
  return (
    <Pressable onPress={onPress} style={navButtonStyles.container}>
      <SvgXml xml={iconXml} width={26} height={26} />
    </Pressable>
  );
});

export default NavButton;
