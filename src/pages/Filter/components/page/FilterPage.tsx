import { FC } from "react";
import { ScrollView, View } from "react-native";
import { filterStyles } from "./styles";
import { TAdvert } from "../../../../types/Advert";
import FilterAdvertsModule from "../../../../modules/FilterAdverts";

const FilterPageComponent: FC<Pick<TAdvert, "type">> = ({ type }) => {
  return (
    <ScrollView style={filterStyles.container}>
      <FilterAdvertsModule.Component type={type} />
      <View style={{ height: 100 }} />
    </ScrollView>
  );
};

export default FilterPageComponent;
