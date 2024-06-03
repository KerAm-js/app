import { Linking, TouchableOpacity } from "react-native";
import { telephoneSvg } from "../../../../assets/svg/telephone";
import { FC } from "react";
import { TCallButtonProps } from "./types";
import HeaderButton from "../../../../navigation/components/HeaderButton/HeaderButton";

const CallButton: FC<TCallButtonProps> = ({ phoneNumber }) => {
  const onPress = () => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  return <HeaderButton side="right" onPress={onPress} svgXml={telephoneSvg()} />;
};

export default CallButton;
