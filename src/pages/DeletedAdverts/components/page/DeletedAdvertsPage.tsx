import { View } from "react-native";
import AdvertsModule from "../../../../modules/Adverts";
import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { USER } from "../../../../consts/devData";

const DeletedAdvertsPageComponent: FC = () => {
  const adverts = useSelector((state: RootState) => state.adverts);

  const filtered = adverts.filter((ad) => ad.userId === USER.id && ad.status === 'deleted');
  
  return (
    <View>
      <AdvertsModule.Component data={filtered} />
    </View>
  );
};

export default DeletedAdvertsPageComponent;
