import { View } from "react-native";
import AdvertsModule from "../../../../modules/Adverts";
import { FC } from "react";
import { useAuth } from "../../../../hooks/store/useAuth";

const DeletedAdvertsPageComponent: FC = () => {
  const {user} = useAuth();
  return (
    <View>
      <AdvertsModule.Component data={[]} />
    </View>
  );
};

export default DeletedAdvertsPageComponent;
