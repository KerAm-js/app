import { Text, View } from "react-native";
import { titleStyles } from "./styles";
import { FC } from "react";
import { ITitleProps } from "./types";

const Title: FC<ITitleProps> = ({ text }) => {
  return (
    <View style={titleStyles.container}>
      <Text style={titleStyles.text}>{text}</Text>
    </View>
  );
};

export default Title;
