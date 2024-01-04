import { View } from "react-native";
import MenuBar from "../MenuBar/MenuBar";
import NavBar from "../NavBar/NavBar";
import YaMap from "react-native-yamap";

const YaMap3 = () => {
  return (
    <View style={{ flex: 1 }}>
      <NavBar />
      <YaMap
        userLocationIcon={{
          uri: "https://www.clipartmax.com/png/middle/180-1801760_pin-png.png",
        }}
        initialRegion={{
          lat: 50,
          lon: 50,
          zoom: 10,
          azimuth: 80,
          tilt: 100,
        }}
        style={{ flex: 1 }}
      />
      <MenuBar />
    </View>
  );
};

export default YaMap3;
