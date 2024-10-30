import { ActivityIndicator, View } from "react-native";
import MenuBar from "../MenuBar/MenuBar";
import AdvertsModule from "../../../../modules/Adverts";
import { useEffect, useLayoutEffect, useState } from "react";
import { TAdvertType } from "../../../../types/Advert";
import { listStyles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../navigation/types";
import { RU_LANG } from "../../../../consts/rulang";
import * as SplashScreen from "expo-splash-screen";
import {
  useGetDumpAdvertsPageableQuery,
  useGetMaterialAdvertsPageableQuery,
  useGetTechnicAdvertsPageableQuery,
} from "../../../../modules/Adverts/api/adverts.api";

const size = 3;

const List = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [advertType, setAdvertType] = useState<TAdvertType>("TECHNIC");
  const [from, setFrom] = useState(0);

  const {
    data: technicAdverts,
    isLoading: isTechnicAdvertsLoading,
    isFetching: isTechnicAdvertsFetching,
  } = useGetTechnicAdvertsPageableQuery(
    { from, size },
    { skip: advertType !== "TECHNIC" }
  );
  const {
    data: materialAdverts,
    isLoading: isMaterialAdvertsLoading,
    isFetching: isMaterialAdvertsFetching,
  } = useGetMaterialAdvertsPageableQuery(
    { from, size },
    { skip: advertType !== "NON_MATERIAL" }
  );
  const {
    data: dumpAdverts,
    isLoading: isDumpAdvertsLoading,
    isFetching: isDumpAdvertsFetching,
  } = useGetDumpAdvertsPageableQuery(
    { from, size },
    { skip: advertType !== "DUMP" }
  );

  const data =
    (advertType === "TECHNIC" && technicAdverts) ||
    (advertType === "NON_MATERIAL" && materialAdverts) ||
    (advertType === "DUMP" && dumpAdverts) ||
    [];

  const isLoading =
    (advertType === "TECHNIC" && isTechnicAdvertsLoading) ||
    (advertType === "DUMP" && isDumpAdvertsLoading) ||
    (advertType === "NON_MATERIAL" && isMaterialAdvertsLoading);

  const isFetching =
    (advertType === "TECHNIC" && isTechnicAdvertsFetching) ||
    (advertType === "DUMP" && isDumpAdvertsFetching) ||
    (advertType === "NON_MATERIAL" && isMaterialAdvertsFetching);

  const onChangeAdvertType = (type: TAdvertType) => {
    setFrom(0);
    setAdvertType(type);
  };

  const onEndReached = () => {
    if (data && data.length === size) {
      setFrom((prev) => prev + size);
    }
  };

  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  useLayoutEffect(() => {
    if (data) {
      navigation.setOptions({
        title:
          data.length === 0
            ? "Нет объявлений"
            : data.length +
              " " +
              (RU_LANG.adverts[data.length] || RU_LANG.adverts[0]),
      });
    }
  }, [data]);

  return (
    <View style={listStyles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <AdvertsModule.Component
          data={data}
          onEndReached={onEndReached}
          ListHeaderComponent={undefined}
        />
      )}
      {!isLoading && isFetching && <ActivityIndicator />}
      <MenuBar advertType={advertType} setAdvertType={onChangeAdvertType} />
    </View>
  );
};

export default List;
