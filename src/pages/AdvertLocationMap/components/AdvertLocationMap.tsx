import { FC, useEffect, useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import YaMap, { Point, Polyline } from "react-native-yamap";
import { RouteStartMarker } from "../../../modules/ChooseAddressMap/components/RouteStartMarker";
import { CloseMapButton } from "../../../UI/buttons/CloseMapButton/CloseMapButton";
import { RouteEndMarker } from "../../../modules/ChooseAddressMap/components/RouteEndMarker";
import { MapLoader } from "../../../modules/ChooseAddressMap";
import { PURPLE } from "../../../consts/colors";

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
  const [route, setRoute] = useState<Point[] | null>(null);
  const mapRef = useRef<YaMap | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 10);
  }, []);

  useEffect(() => {
    if (secondPoint && isMapLoaded && mapRef.current) {
      mapRef.current.findDrivingRoutes([point, secondPoint], (result) => {
        const points: Point[] = [];
        if (result && result.routes && result.routes.length >= 1) {
          result.routes[0].sections.forEach((section) => {
            section.points.forEach((point) => {
              points.push(point);
            });
          });
        }
        setRoute(points);
      });
    }
  }, [isMapLoaded]);

  return (
    <View style={styles.container}>
      <CloseMapButton />
      {!isMapLoaded && <MapLoader />}
      {isVisible && (
        <YaMap
          ref={mapRef}
          onMapLoaded={() => {
            setIsMapLoaded(true);
          }}
          followUser
          userLocationIcon={{
            uri: "https://www.clipartmax.com/png/middle/180-1801760_pin-png.png",
          }}
          initialRegion={{
            lat: point.lat,
            lon: point.lon,
            zoom: 10,
          }}
          style={styles.map}
        >
          <RouteStartMarker point={point} onPress={() => null} />
          {route && (
            <Polyline strokeWidth={3} strokeColor={PURPLE} points={route} />
          )}
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
