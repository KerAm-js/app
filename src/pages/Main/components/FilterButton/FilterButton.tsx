import { FC } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../navigation/types";
import HeaderButton from "../../../../navigation/components/HeaderButton/HeaderButton";
import { filterSvg } from "../../../../assets/svg/filter";

const FilterButton: FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const onPress = () => {
    navigation.navigate("ChooseAdvertType", {
      title: "Фильтр",
      navigateTo: "filter",
    });
  };

  return <HeaderButton side="right" onPress={onPress} svgXml={filterSvg()} />;
};

export default FilterButton;
