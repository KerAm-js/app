import { Text, View } from "react-native";
import { infoCardStyles } from "./styles";
import { FC } from "react";
import { IInfoCardProps } from "./types";

const InfoCard: FC<IInfoCardProps> = ({ title, content }) => {
  return (
    <View style={infoCardStyles.container}>
      <View style={infoCardStyles.card}>
        <Text style={infoCardStyles.title}>{title}</Text>
        <Text style={infoCardStyles.content}>{content}</Text>
      </View>
    </View>
  );
};

export default InfoCard;
