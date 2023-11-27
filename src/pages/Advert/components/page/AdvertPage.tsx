import { FC } from "react";
import { View } from "react-native";
import { TAdvert } from "../../../../types/Advert";
import ScrollWithSlider from "../ScrollWithSlider/ScrollWithSlider";
import MainInfo from "../MainInfo/MainInfo";
import InfoTables from "../InfoTables/InfoTables";
import AdvertComment from "../Comment/Comment";
import AdvertUserInfo from "../UserInfo/AdvertUserInfo";
import { USER, USERS_LIST } from "../../../../consts/devData";

const AdvertPageComponent: FC<TAdvert> = (props) => {
  return (
    <View>
      <ScrollWithSlider {...props}>
        <MainInfo {...props} />
        <InfoTables {...props} />
        <AdvertComment comment={props.general.comment} />
        <AdvertUserInfo
          {...USERS_LIST.find((user) => user.id === props.userId) || USER}
        />
      </ScrollWithSlider>
    </View>
  );
};

export default AdvertPageComponent;
