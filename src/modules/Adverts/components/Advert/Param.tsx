import { FC } from "react";
import { Text, View } from "react-native";
import { IParamProps } from "./types";
import { advertStyles } from "./styles";
import { DATA_OF_MEASUREMENT } from "../../../../consts/data";

const Param: FC<IParamProps> = ({ title, content }) => {
  const contentString =
    content + (DATA_OF_MEASUREMENT[title]
      ? " " + DATA_OF_MEASUREMENT[title]
      : "");

  return (
    <View style={advertStyles.param}>
      <Text style={advertStyles.paramTitle}>{title}:</Text>
      <Text style={advertStyles.paramContent}>{contentString}</Text>
    </View>
  );
};

export default Param;
