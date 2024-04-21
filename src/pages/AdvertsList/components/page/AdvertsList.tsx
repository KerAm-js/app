import { FC } from "react";
import { TAdvert } from "../../../../types/Advert";
import { View } from "react-native";
import AdvertsModule from "../../../../modules/Adverts";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";

const AdvertsListPageComponent: FC<Pick<TAdvert, "type">> = ({ type }) => {

  const adverts = useSelector((state: RootState) => state.adverts)

  const filtered = adverts.filter(ad => ad.type === type);

  return (
    <View>
      <AdvertsModule.Component data={filtered} />
    </View>
  );
};

export default AdvertsListPageComponent;
