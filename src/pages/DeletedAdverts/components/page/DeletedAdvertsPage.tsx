import { View } from "react-native";
import AdvertsModule from "../../../../modules/Adverts";
import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { useAuth } from "../../../../hooks/store/useAuth";

const DeletedAdvertsPageComponent: FC = () => {
  const {user} = useAuth();
  const adverts = useSelector((state: RootState) => state.adverts);

  const filtered = adverts.filter((ad) => ad.userId === user?.id && ad.status === 'deleted');
  
  return (
    <View>
      <AdvertsModule.Component data={filtered} />
    </View>
  );
};

export default DeletedAdvertsPageComponent;
