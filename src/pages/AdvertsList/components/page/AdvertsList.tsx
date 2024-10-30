import { FC, useLayoutEffect, useState } from "react";
import { IAdvert } from "../../../../types/Advert";
import { ActivityIndicator, View } from "react-native";
import AdvertsModule from "../../../../modules/Adverts";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RU_LANG } from "../../../../consts/rulang";
import { useGetTechnicAdvertsPageableQuery, useGetMaterialAdvertsPageableQuery, useGetDumpAdvertsPageableQuery } from "../../../../modules/Adverts/api/adverts.api";
import { RootStackParamList } from "../../../../navigation/types";

const size = 3;

const AdvertsListPageComponent: FC<Pick<IAdvert, "advertType">> = ({ advertType }) => {

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
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

  const onEndReached = () => {
    if (data && data.length === size) {
      setFrom((prev) => prev + size);
    }
  };

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
    <View>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <AdvertsModule.Component
          data={data}
          onEndReached={onEndReached}
          ListHeaderComponent={undefined}
        />
      )}
    </View>
  );
};

export default AdvertsListPageComponent;
