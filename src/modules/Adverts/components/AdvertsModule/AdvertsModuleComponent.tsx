import { FC } from "react";
import { FlatList } from "react-native";
import { IAdvertsModuleProps } from "./types";
import Advert from "../Advert/Advert";
import { advertsModuleStyles } from "./styles";
import AdvertsListHeader from "../AdvertsListHeader/AdvertsListHeader";

const AdvertsModuleComponent: FC<IAdvertsModuleProps> = (props) => {
  return (
    <FlatList
      renderItem={({ item }) => <Advert {...item} />}
      keyExtractor={(item) => item.id}
      contentContainerStyle={advertsModuleStyles.contentContainer}
      ListHeaderComponent={() => (
        <AdvertsListHeader dataLength={props.data?.length || 0} />
      )}
      {...props}
    />
  );
};

export default AdvertsModuleComponent;
