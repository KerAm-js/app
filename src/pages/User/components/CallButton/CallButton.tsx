import { Linking, TouchableOpacity } from "react-native";
import { SvgXml } from "react-native-svg";
import { telephoneSvg } from "../../../../assets/svg/telephone";
import { callButtonStyles } from "./styles";
import { FC } from "react";
import { TCallButtonProps } from "./types";

const CallButton: FC<TCallButtonProps> = ({ phoneNumber }) => {
  const onPress = () => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  return (
    <TouchableOpacity onPress={onPress} style={callButtonStyles.container}>
      <SvgXml xml={telephoneSvg()} width={18} height={18} />
    </TouchableOpacity>
  );
};

export default CallButton;
