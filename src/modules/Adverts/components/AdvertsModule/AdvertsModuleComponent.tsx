import { FC } from "react";
import { FlatList } from "react-native";
import { IAdvertsModuleProps } from "./types";
import Advert from "../Advert/Advert";
import { advertsModuleStyles } from "./styles";

const AdvertsModuleComponent: FC<IAdvertsModuleProps> = (props) => {
  return (
    <FlatList
      {...props}
      renderItem={({ item }) => <Advert {...item} />}
      keyExtractor={(item) => item.id}
      contentContainerStyle={advertsModuleStyles.contentContainer}
    />
  );
};

export default AdvertsModuleComponent;
