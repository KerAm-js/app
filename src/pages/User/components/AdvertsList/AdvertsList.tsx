import { FC } from "react";
import { Text, View } from "react-native";
import { TAdvertsListProps } from "./types";
import { advertsListStyles } from "./styles";
import { RU_LANG } from "../../../../consts/rulang";

const AdvertsList: FC<TAdvertsListProps> = ({ data }) => {
  return (
    <View style={advertsListStyles.container}>
      <Text style={advertsListStyles.title}>
        {data.length === 0
          ? "Нет объявлений"
          : data.length + " " + (RU_LANG.adverts[data.length] ||
            RU_LANG.adverts[0])}
      </Text>
    </View>
  );
};

export default AdvertsList;
