import { FC, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import YaMap, { Point } from "react-native-yamap";
import { RouteStartMarker } from "../../../modules/ChooseAddressMap/components/RouteStartMarker";
import { CloseMapButton } from "../../../UI/buttons/CloseMapButton/CloseMapButton";
import { RouteEndMarker } from "../../../modules/ChooseAddressMap/components/RouteEndMarker";
import { MapLoader } from "../../../modules/ChooseAddressMap";

export type TAdvertLocationMapProps = {
  point: Point;
  secondPoint?: Point;
  distance?: number;
};

export const AdvertLocationMap: FC<TAdvertLocationMapProps> = ({
  point,
  secondPoint,
  distance,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 10);
  }, []);

  return (
    <View style={styles.container}>
      <CloseMapButton />
      {!isMapLoaded && (
        <MapLoader />
      )}
      {isVisible && (
        <YaMap
          onMapLoaded={() => setIsMapLoaded(true)}
          followUser
          userLocationIcon={{
            uri: "https://www.clipartmax.com/png/middle/180-1801760_pin-png.png",
          }}
          initialRegion={{
            lat: point.lat,
            lon: point.lon,
            zoom: 10,
            azimuth: 80,
            tilt: 100,
          }}
          style={styles.map}
        >
          <RouteStartMarker point={point} onPress={() => null} />
          {secondPoint && (
            <RouteEndMarker
              point={secondPoint}
              onPress={() => null}
              distance={distance}
            />
          )}
        </YaMap>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
    zIndex: -1,
  },
});
