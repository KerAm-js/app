import { FC } from "react";
import { Text } from "react-native";
import { TAdvertsListProps } from "./types";
import { advertsListHeaderStyles } from "./styles";
import { RU_LANG } from "../../../../consts/rulang";

const AdvertsListHeader: FC<TAdvertsListProps> = ({ dataLength }) => {
  return (
    <Text style={advertsListHeaderStyles.title}>
      {dataLength === 0
        ? "Нет объявлений"
        : dataLength +
          " " +
          (RU_LANG.adverts[dataLength] || RU_LANG.adverts[0])}
    </Text>
  );
};

export default AdvertsListHeader;
