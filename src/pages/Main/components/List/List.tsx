import { View } from "react-native";
import MenuBar from "../MenuBar/MenuBar";
import AdvertsModule from "../../../../modules/Adverts";
import { useAdverts } from "../../../../hooks/store/useAdverts";
import { useLayoutEffect, useState } from "react";
import { TAdvertType } from "../../../../types/Advert";
import { listStyles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../navigation/types";
import { RU_LANG } from "../../../../consts/rulang";

const List = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [advertType, setAdvertType] = useState<TAdvertType>("technic");
  const data = useAdverts(advertType);

  useLayoutEffect(() => {
    navigation.setOptions({
      title:
        data.length === 0
          ? "Нет объявлений"
          : data.length +
            " " +
            (RU_LANG.adverts[data.length] || RU_LANG.adverts[0]),
    });
  }, [data]);

  return (
    <View style={listStyles.container}>
      <AdvertsModule.Component data={data} ListHeaderComponent={undefined} />
      <MenuBar advertType={advertType} setAdvertType={setAdvertType} />
    </View>
  );
};

export default List;
