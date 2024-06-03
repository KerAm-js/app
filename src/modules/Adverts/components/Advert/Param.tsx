import { FC } from "react";
import { Text, View } from "react-native";
import { IParamProps } from "./types";
import { advertStyles } from "./styles";
import { propTitles } from "../../../../consts/propTitles";

const Param: FC<IParamProps> = ({ param, content }) => {
  const measurement = propTitles[param]?.measurement
  ? " " + propTitles[param].measurement
  : ''

  return propTitles[param] ? (
    <View style={advertStyles.param}>
      <Text style={advertStyles.paramTitle}>{propTitles[param].title}:</Text>
      <Text style={advertStyles.paramContent}>
        {content + measurement}
      </Text>
    </View>
  ) : null;
};

export default Param;
