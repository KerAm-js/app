import { FC } from "react";
import { IAdvert } from "../../../../types/Advert";
import { ActivityIndicator, View } from "react-native";
import AdvertsModule from "../../../../modules/Adverts";
import { usePageableAdverts } from "../../store/usePageableAdverts";
import { useFilteredAdverts } from "../../store/useFilteredAdverts";

const AdvertsListPageComponent: FC<Pick<IAdvert, "advertType">> = ({
  advertType,
}) => {
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

  const data = isFilter ? filteredAdverts : pageableAdverts;

  if (isFilter ? isFilteredAdvertsLoading : isPageableAdvertsLoading)
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
