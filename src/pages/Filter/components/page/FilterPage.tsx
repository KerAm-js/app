import { FC } from "react";
import { ScrollView, View } from "react-native";
import { filterStyles } from "./styles";
import { IAdvert } from "../../../../types/Advert";
import { FilterAdvertsModule } from "../../../../modules/FilterAdverts";

const FilterPageComponent: FC<Pick<IAdvert, "advertType">> = ({ advertType }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={filterStyles.container}>
      <FilterAdvertsModule advertType={advertType} />
      <View style={{ height: 100 }} />
    </ScrollView>
  );
};

export default FilterPageComponent;
