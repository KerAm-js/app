import { FC } from "react";
import { IAdvert } from "../../../../types/Advert";
import ScrollWithSlider from "../ScrollWithSlider/ScrollWithSlider";
import MainInfo from "../MainInfo/MainInfo";
import InfoTables from "../InfoTables/InfoTables";
import AdvertComment from "../Comment/Comment";
import AdvertUserInfo from "../UserInfo/AdvertUserInfo";
import { useAuth } from "../../../../hooks/store/useAuth";
import { useGetUserByIdQuery } from "../../../../modules/SearchUsers/api/users.api";
import {
  useGetDumpAdvertByIdQuery,
  useGetImageNamesByOrderIdQuery,
  useGetMaterialAdvertByIdQuery,
  useGetTechnicAdvertByIdQuery,
} from "../../../../modules/Adverts/api/adverts.api";
import { TAdvertPagePropTypes } from "./types";
import { ActivityIndicator } from "react-native";

const AdvertPageComponent: FC<TAdvertPagePropTypes> = ({ isMini, advert }) => {
  const { data: technicAdvert, isFetching: isTechnicAdvertFetching } =
    useGetTechnicAdvertByIdQuery(advert.id, {
      skip: advert.advertType !== "TECHNIC" || !isMini,
    });
  const { data: dumpAdvert, isFetching: isMaterialAdvertFetching } =
    useGetDumpAdvertByIdQuery(advert.id, {
      skip: advert.advertType !== "NON_MATERIAL" || !isMini,
    });
  const { data: materialAdvert, isFetching: isDumpAdvertFetching } =
    useGetMaterialAdvertByIdQuery(advert.id, {
      skip: advert.advertType !== "DUMP" || !isMini,
    });

  const { data: photos } = useGetImageNamesByOrderIdQuery(
    {
      order_id: advert.id.toString(),
      advert_type: advert.advertType,
    },
    { skip: !isMini }
  );

  const isFetching =
    (advert.advertType === "TECHNIC" && isTechnicAdvertFetching) ||
    (advert.advertType === "DUMP" && isDumpAdvertFetching) ||
    (advert.advertType === "NON_MATERIAL" && isMaterialAdvertFetching);

  const data = !isMini
    ? advert
    : isFetching
    ? undefined
    : (advert.advertType === "TECHNIC" && technicAdvert) ||
      (advert.advertType === "NON_MATERIAL" && materialAdvert) ||
      (advert.advertType === "DUMP" && dumpAdvert);

  const { user: currentUser } = useAuth();

  const { data: user } = useGetUserByIdQuery(
    {
      id: !isMini ? advert.ownerId : data ? data.ownerId : 0, //0 - заглушка, но здесь будет skip
    },
    { skip: isMini && !data }
  );

  const info = user || currentUser;

  if ((isMini && isFetching) || !data) {
    return <ActivityIndicator />;
  }

  return (
    <ScrollWithSlider {...data} photos={isMini ? photos : data.photos}>
      <MainInfo {...data} />
      <InfoTables {...data} />
      <AdvertComment userId={data.ownerId} comment={""} />
      {info && <AdvertUserInfo {...info} />}
    </ScrollWithSlider>
  );
};

export default AdvertPageComponent;
