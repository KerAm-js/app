import { TouchableOpacity } from "react-native";
import { SvgXml } from "react-native-svg";
import { FC } from "react";
import { headerButtonStyles } from "./styles";
import { IHeaderButtonProps } from "./types";

const HeaderButton: FC<IHeaderButtonProps> = ({ svgXml, onPress, side }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        headerButtonStyles.container,
        { alignItems: side === "right" ? "flex-end" : "flex-start" },
      ]}
    >
      <SvgXml xml={svgXml} width={20} height={20} />
    </TouchableOpacity>
  );
};

export default HeaderButton;
