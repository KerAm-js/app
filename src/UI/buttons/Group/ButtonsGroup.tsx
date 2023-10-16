import { FC } from "react";
import { View } from "react-native";
import { TButtonsGroupProps } from "./types";
import GroupButton from "./GroupButton";
import { buttonsGroupStyles } from "./styles";

const ButtonsGroup: FC<TButtonsGroupProps> = ({ data }) => {
  return (
    <View style={buttonsGroupStyles.buttonsGroup}>
      {data.map((buttonData, index) => (
        <GroupButton key={index} showBorder={index !== 0} {...buttonData} />
      ))}
    </View>
  );
};

export default ButtonsGroup;
