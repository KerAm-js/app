import { FC } from "react";
import { View } from "react-native";
import { TAdvert } from "../../../../types/Advert";
import ScrollWithSlider from "../ScrollWithSlider/ScrollWithSlider";
import MainInfo from "../MainInfo/MainInfo";
import InfoTables from "../InfoTables/InfoTables";
import AdvertComment from "../Comment/Comment";
import AdvertUserInfo from "../UserInfo/AdvertUserInfo";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { useAuth } from "../../../../hooks/store/useAuth";

const AdvertPageComponent: FC<TAdvert> = (props) => {
  const users = useSelector((state: RootState) => state.users);
  const { user } = useAuth();
  const info = users.find((user) => user.id === props.userId) || user;
  return (
    <View>
      <ScrollWithSlider {...props}>
        <MainInfo {...props} />
        <InfoTables {...props} />
        <AdvertComment userId={props.userId} comment={props.general.comment} />
        {info && <AdvertUserInfo {...info} />}
      </ScrollWithSlider>
    </View>
  );
};

export default AdvertPageComponent;
