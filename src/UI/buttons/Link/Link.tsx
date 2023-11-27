import { Pressable, Text } from "react-native";
import { SvgXml } from "react-native-svg";
import { arrowRightSvg } from "../../../assets/svg/arrowRight";
import { BLUE } from "../../../consts/colors";
import { linkStyles } from "./styles";
import { FC } from "react";
import { ILinkProps } from "./types";

const Link: FC<ILinkProps> = ({ title, onPress }) => {
  return (
    <Pressable
      style={linkStyles.container}
      onPress={onPress}
    >
      <Text style={linkStyles.title}>
        {title}
      </Text>
      <SvgXml xml={arrowRightSvg(BLUE)} width={10} height={10} />
    </Pressable>
  );
};

export default Link;
