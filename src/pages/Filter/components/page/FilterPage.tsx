import { FC } from "react";
import { ScrollView, View } from "react-native";
import { filterStyles } from "./styles";
import { Advert } from "../../../../types/Advert";
import FilterAdvertsModule from "../../../../modules/FilterAdverts";

const FilterPageComponent: FC<Pick<Advert, "advertType">> = ({ advertType }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={filterStyles.container}>
      <FilterAdvertsModule.Component type={advertType} />
      <View style={{ height: 100 }} />
    </ScrollView>
  );
};

export default FilterPageComponent;
