import MainMap from "../MainMap/MainMap";
import { IAdvert, TAdvertType } from "../../../../types/Advert";
import MenuBar from "../MenuBar/MenuBar";
import NavBar from "../NavBar/NavBar";
import { View } from "react-native";
import { useEffect, useState } from "react";
import {
  useGetTechnicAdvertsPageableQuery,
  useGetMaterialAdvertsPageableQuery,
  useGetDumpAdvertsPageableQuery,
} from "../../../../modules/Adverts/api/adverts.api";
import * as SplashScreen from "expo-splash-screen";

const adverts: Array<IAdvert> = [];

const size = 3;

const MainPageComponent = () => {
  const [advertType, setAdvertType] = useState<TAdvertType>("TECHNIC");
  const onChangeAdvertType = (type: TAdvertType) => {
    setAdvertType(type);
  };
  const [from, setFrom] = useState(0);

  const {
    data: technicAdverts,
    isLoading: isTechnicAdvertsLoading,
    isFetching: isTechnicAdvertsFetching,
  } = useGetTechnicAdvertsPageableQuery(
    { from, size },
    { skip: advertType !== "TECHNIC" }
  );
  const {
    data: materialAdverts,
    isLoading: isMaterialAdvertsLoading,
    isFetching: isMaterialAdvertsFetching,
  } = useGetMaterialAdvertsPageableQuery(
    { from, size },
    { skip: advertType !== "NON_MATERIAL" }
  );
  const {
    data: dumpAdverts,
    isLoading: isDumpAdvertsLoading,
    isFetching: isDumpAdvertsFetching,
  } = useGetDumpAdvertsPageableQuery(
    { from, size },
    { skip: advertType !== "DUMP" }
  );

  const data =
    (advertType === "TECHNIC" && technicAdverts) ||
    (advertType === "NON_MATERIAL" && materialAdverts) ||
    (advertType === "DUMP" && dumpAdverts) ||
    [];

  const isLoading =
    (advertType === "TECHNIC" && isTechnicAdvertsLoading) ||
    (advertType === "DUMP" && isDumpAdvertsLoading) ||
    (advertType === "NON_MATERIAL" && isMaterialAdvertsLoading);

  const isFetching =
    (advertType === "TECHNIC" && isTechnicAdvertsFetching) ||
    (advertType === "DUMP" && isDumpAdvertsFetching) ||
    (advertType === "NON_MATERIAL" && isMaterialAdvertsFetching);

  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return (
    <View>
      <NavBar />
      <MainMap adverts={adverts} />
      <MenuBar advertType={advertType} setAdvertType={onChangeAdvertType} />
    </View>
  );
};

export default MainPageComponent;
