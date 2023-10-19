import { FC } from "react";
import { Text, View } from "react-native";
import { TAdvertsListProps } from "./types";
import { advertsListStyles } from "./styles";

const arr = ["объявление", "объявления", "объявления", "объявления"];

const AdvertsList: FC<TAdvertsListProps> = ({ data }) => {
  return (
    <View style={advertsListStyles.container}>
      <Text style={advertsListStyles.title}>
        {data.length === 0
          ? "Нет объявлений"
          : data.length + " " + arr[data.length] || "объявлений"}
      </Text>
    </View>
  );
};

export default AdvertsList;
