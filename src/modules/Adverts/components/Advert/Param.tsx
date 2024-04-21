import { FC } from "react";
import { Text, View } from "react-native";
import { IParamProps } from "./types";
import { advertStyles } from "./styles";
import { propTitles } from "../../../../consts/propTitles";

const Param: FC<IParamProps> = ({ param, content }) => {
  return propTitles[param] ? (
    <View style={advertStyles.param}>
      <Text style={advertStyles.paramTitle}>{propTitles[param]}:</Text>
      <Text style={advertStyles.paramContent}>{content}</Text>
    </View>
  ) : null;
};

export default Param;
