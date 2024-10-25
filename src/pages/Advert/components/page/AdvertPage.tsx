import { FC } from "react";
import { IAdvert } from "../../../../types/Advert";
import ScrollWithSlider from "../ScrollWithSlider/ScrollWithSlider";
import MainInfo from "../MainInfo/MainInfo";
import InfoTables from "../InfoTables/InfoTables";
import AdvertComment from "../Comment/Comment";
import AdvertUserInfo from "../UserInfo/AdvertUserInfo";
import { useAuth } from "../../../../hooks/store/useAuth";
import { useGetUserByIdQuery } from "../../../../modules/SearchUsers/api/users.api";

const AdvertPageComponent: FC<IAdvert> = (props) => {
  
  const { user: currentUser } = useAuth();
  const { data } = useGetUserByIdQuery({
    id: props.ownerId,
  });

  const info = data || currentUser;

  return (
    <ScrollWithSlider {...props}>
      <MainInfo {...props} />
      <InfoTables {...props} />
      <AdvertComment userId={props.ownerId} comment={""} />
      {info && <AdvertUserInfo {...info} />}
    </ScrollWithSlider>
  );
};

export default AdvertPageComponent;
