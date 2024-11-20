import { FC } from "react";
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
import Link from "../../../../UI/buttons/Link/Link";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../navigation/types";

const AdvertPageComponent: FC<TAdvertPagePropTypes> = ({ isMini, advert }) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { data: technicAdvert, isFetching: isTechnicAdvertFetching } =
    useGetTechnicAdvertByIdQuery(advert.id, {
      skip: advert.advertType !== "TECHNIC" || !isMini,
    });
  const { data: dumpAdvert, isFetching: isDumpAdvertFetching } =
    useGetDumpAdvertByIdQuery(advert.id, {
      skip: advert.advertType !== "DUMP" || !isMini,
    });
  const { data: materialAdvert, isFetching: isMaterialAdvertFetching } =
    useGetMaterialAdvertByIdQuery(advert.id, {
      skip: advert.advertType !== "NON_MATERIAL" || !isMini,
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

  const showLocationOnMap = () =>
    navigation.navigate("AdvertLocationMap", {
      point: {
        lat: advert.addressLat,
        lon: advert.addressLon,
      },
      secondPoint:
        data.advertType === "TECHNIC"
          ? {
              lat: data.secondAddressLat,
              lon: data.secondAddressLon,
            }
          : undefined,
      distance: data.advertType === "TECHNIC" ? data.distance : undefined,
    });

  return (
    <ScrollWithSlider {...data} photos={isMini ? photos : data.photos}>
      <MainInfo {...data} />
      <InfoTables {...data} />
      <Link title="Посмотреть на карте" onPress={showLocationOnMap} />
      <AdvertComment userId={data.ownerId} comment={data.description} />
      {info && <AdvertUserInfo {...info} />}
    </ScrollWithSlider>
  );
};

export default AdvertPageComponent;
