import { FC, useLayoutEffect } from "react";
import { IAdvert } from "../../../../types/Advert";
import { ActivityIndicator, View } from "react-native";
import AdvertsModule from "../../../../modules/Adverts";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RU_LANG } from "../../../../consts/rulang";
import { RootStackParamList } from "../../../../navigation/types";
import { usePageableAdverts } from "../../store/usePageableAdverts";
import { useFilteredAdverts } from "../../store/useFilteredAdverts";

const AdvertsListPageComponent: FC<Pick<IAdvert, "advertType">> = ({
  advertType,
}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const {
    data: filteredAdverts,
    isLoading: isFilteredAdvertsLoading,
    isFilter,
  } = useFilteredAdverts({ advertType });
  const {
    data: pageableAdverts,
    isLoading: isPageableAdvertsLoading,
    isFetching: isPageableAdvertsFetching,
    incrementPage,
  } = usePageableAdverts({ advertType, skip: isFilter });

  const data = (isFilter && filteredAdverts) || pageableAdverts;

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
  }, []);

  if ((isFilter && isFilteredAdvertsLoading) || isPageableAdvertsLoading)
    return <ActivityIndicator />;

  return (
    <View>
      <AdvertsModule.Component
        data={data}
        onEndReached={incrementPage}
        initialNumToRender={3}
        maxToRenderPerBatch={3}
        ListHeaderComponent={undefined}
      />
      {!isFilter && isPageableAdvertsFetching && <ActivityIndicator />}
    </View>
  );
};

export default AdvertsListPageComponent;
