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
        latitude: 55.756197289832976,
        latitudeDelta: 0.4763096262643671,
        longitude: 37.60092557294214,
        longitudeDelta: 0.42839664010162437,
      }}
      customMapStyle={mapStyle}
      provider={PROVIDER_GOOGLE}
      showsUserLocation
      followsUserLocation
      showsMyLocationButton
      showsBuildings
      cacheEnabled
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
