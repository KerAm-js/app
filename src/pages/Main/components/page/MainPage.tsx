import MainMap from "../MainMap/MainMap";
import { IAdvert } from "../../../../types/Advert";
import MenuBar from "../MenuBar/MenuBar";
import NavBar from "../NavBar/NavBar";
import { View } from "react-native";

const adverts: Array<IAdvert> = [];

const MainPageComponent = () => {
  return (
    <View>
      <NavBar />
      <MainMap adverts={adverts} />
      <MenuBar />
    </View>
  );
};

export default MainPageComponent;
