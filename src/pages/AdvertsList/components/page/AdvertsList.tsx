import { FC } from "react";
import { IAdvert } from "../../../../types/Advert";
import { View } from "react-native";
import AdvertsModule from "../../../../modules/Adverts";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";

const AdvertsListPageComponent: FC<Pick<IAdvert, "advertType">> = ({ advertType }) => {

  const adverts = useSelector((state: RootState) => state.adverts)

  const filtered = adverts.filter(ad => ad.advertType === advertType);

  return (
    <View>
      <AdvertsModule.Component data={filtered} />
    </View>
  );
};

export default AdvertsListPageComponent;
