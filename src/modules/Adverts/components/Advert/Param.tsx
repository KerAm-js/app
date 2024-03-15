import { FC } from "react";
import { Text, View } from "react-native";
import { IParamProps } from "./types";
import { advertStyles } from "./styles";

const Param: FC<IParamProps> = ({ param, content }) => {
  return (
    <View style={advertStyles.param}>
      <Text style={advertStyles.paramTitle}>{param}:</Text>
      <Text style={advertStyles.paramContent}>{content}</Text>
    </View>
  );
};

export default Param;
