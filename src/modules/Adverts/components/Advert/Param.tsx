import { FC } from "react";
import { Text, View } from "react-native";
import { IParamProps } from "./types";
import { advertStyles } from "./styles";
import { TECHNIC_PARAMS } from "../../../../consts/data";

const Param: FC<IParamProps> = ({ param, content }) => {
  const contentString =
    content + (TECHNIC_PARAMS[param]?.measurement
      ? " " + TECHNIC_PARAMS[param]?.measurement
      : "");

  return (
    <View style={advertStyles.param}>
      <Text style={advertStyles.paramTitle}>{TECHNIC_PARAMS[param]?.title}:</Text>
      <Text style={advertStyles.paramContent}>{contentString}</Text>
    </View>
  );
};

export default Param;
