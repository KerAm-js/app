import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { mainMapStyles, mapStyle } from "./styles";
import { BLUE } from "../../../../consts/colors";
import CustomMarker from "../CustomMarker/CustomMarker";
import { FC } from "react";
import { TMainMapProps } from "./types";

const MainMap: FC<TMainMapProps> = ({ adverts }) => {

  return (
    <MapView
      style={mainMapStyles.map}
      initialRegion={{
        latitude: 55.733206261926824,
        latitudeDelta: 0.4197604031147151,
        longitude: 37.59995497763157,
        longitudeDelta: 0.34447208046913147,
      }}
      customMapStyle={mapStyle}
      provider={PROVIDER_GOOGLE}
      showsUserLocation
      followsUserLocation
      showsBuildings
      loadingEnabled
      loadingIndicatorColor={BLUE}
    >
      {adverts.map((advertisement) => (
        <CustomMarker
          key={advertisement.id}
          coordinate={advertisement.coordinates}
          type={advertisement.type}
        />
      ))}
    </MapView>
  );
};

export default MainMap;
