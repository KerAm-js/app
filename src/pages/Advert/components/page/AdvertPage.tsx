import { FC } from "react";
import { View } from "react-native";
import { TAdvert } from "../../../../types/Advert";
import ScrollWithSlider from "../ScrollWithSlider/ScrollWithSlider";
import MainInfo from "../MainInfo/MainInfo";
import InfoTables from "../InfoTables/InfoTables";
import AdvertComment from "../Comment/Comment";
import AdvertUserInfo from "../UserInfo/AdvertUserInfo";
import { USER } from "../../../../consts/devData";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";

const AdvertPageComponent: FC<TAdvert> = (props) => {
  const users = useSelector((state: RootState) => state.users);
  return (
    <View>
      <ScrollWithSlider {...props}>
        <MainInfo {...props} />
        <InfoTables {...props} />
        <AdvertComment comment={props.general.comment} />
        <AdvertUserInfo
          {...users.find((user) => user.id === props.userId) || USER}
        />
      </ScrollWithSlider>
    </View>
  );
};

export default AdvertPageComponent;
