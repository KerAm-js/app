import { View } from "react-native";
import AdvertsModule from "../../../../modules/Adverts";
import { myAdvertsPageStyles } from "./styles";
import { TAdvert } from "../../../../types/Advert";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { USER } from "../../../../consts/devData";

const MyAdvertsPageComponent = () => {
  const adverts = useSelector((state: RootState) => state.adverts);

  const filtered = adverts.filter((ad) => ad.userId === USER.id);
  return (
    <View style={myAdvertsPageStyles.container}>
      <AdvertsModule.Component data={filtered} />
    </View>
  );
};

export default MyAdvertsPageComponent;
