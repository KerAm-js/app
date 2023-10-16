import { View } from "react-native"
import MainMap from "../../components/MainMap/MainMap";
import { IAdvert } from "../../../../types/Advert";
import MenuBar from "../../components/MenuBar/MenuBar";
import NavBar from "../../components/NavBar/NavBar";

const adverts: Array<IAdvert> = [
  {
    id: "1",
    type: "excavator",
    coordinates: {
      latitude: 55.766197289832976,
      longitude: 37.61092557294214,
    },
  },
  {
    id: "2",
    type: "excavator",
    coordinates: {
      latitude: 55.776197289832976,
      longitude: 37.62092557294214,
    },
  },
  {
    id: "3",
    type: "shovel",
    coordinates: {
      latitude: 55.806197289832976,
      longitude: 37.55092557294214,
    },
  },
  {
    id: "4",
    type: "dump",
    coordinates: {
      latitude: 55.796197289832976,
      longitude: 37.61092557294214,
    },
  },
];

const MainPageComponent = () => {
  return <View>
    <NavBar />
    <MainMap adverts={adverts} />
    <MenuBar />
  </View>
}

export default MainPageComponent;