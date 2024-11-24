import { NativeSyntheticEvent, View } from "react-native";
import YaMap, { Point, Polyline } from "react-native-yamap";
import React, {
  Dispatch,
  FC,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { RouteEndMarker } from "./RouteEndMarker";
import { RouteStartMarker } from "./RouteStartMarker";
import { TAddressByMapState } from "../store/types";
import { MapLoader } from "./MapLoader";

type TPropTypes = Pick<
  TAddressByMapState,
  "point" | "secondPoint" | "isSecondPointRequired" | "distance"
> & {
  setPoint: Dispatch<SetStateAction<Point | undefined>>;
  setSecondPoint: Dispatch<SetStateAction<Point | undefined>>;
  setDistance: Dispatch<SetStateAction<number | undefined>>;
};

export const ChooseAddressMap: FC<TPropTypes> = React.memo(
  ({
    point,
    secondPoint,
    isSecondPointRequired,
    distance,
    setPoint,
    setSecondPoint,
    setDistance,
  }) => {
    const mapRef = useRef<YaMap | null>(null);
    const [isMapLoaded, setIsMapLoaded] = useState(false);
    const [route, setRoute] = useState<Point[] | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    const onMapPress = (evt: NativeSyntheticEvent<Point>) => {
      const newPoint = evt.nativeEvent;
      if (!point || !isSecondPointRequired) {
        setPoint(newPoint);
      } else {
        if (isMapLoaded && mapRef.current) {
          mapRef.current.findDrivingRoutes([point, newPoint], (result) => {
            const points: Point[] = [];
            if (result && result.routes && result.routes.length >= 1) {
              result.routes[0].sections.forEach((section) => {
                section.points.forEach((point) => {
                  points.push(point);
                });
              });
            }
            setRoute(points);
            setSecondPoint(newPoint);
            setDistance(
              Math.round(result.routes[0].sections[0].routeInfo.distance / 1000)
            );
          });
        }
      }
    };

    const changePointToSecondPoint = () => {
      setPoint(secondPoint);
      setSecondPoint(undefined);
    };

    const onMapLoaded = () => {
      setIsMapLoaded(true);
      if (mapRef.current && point)
        mapRef.current?.setCenter(point, 8, undefined, undefined, 0.5);
    };

    const onStartMarkPress = useCallback(() => {
      if (secondPoint) {
        changePointToSecondPoint();
      } else {
        setPoint(undefined);
      }
      setRoute(null);
    }, []);

    const onEndMarkPress = useCallback(() => {
      setSecondPoint(undefined);
      setDistance(undefined);
      setRoute(null);
    }, []);

    useEffect(() => {
      setTimeout(() => {
        setIsVisible(true);
      }, 10);
    }, []);
console.log(point)
    return (
      <View style={{flex: 1}}>
        {!isMapLoaded && <MapLoader />}
        {isVisible && (
          <YaMap
            ref={mapRef}
            followUser
            onMapLoaded={onMapLoaded}
            onMapPress={onMapPress}
            userLocationIcon={{
              uri: "https://www.clipartmax.com/png/middle/180-1801760_pin-png.png",
            }}
            initialRegion={{
              lat: point?.lat || 55.753215,
              lon: point?.lon || 37.622504,
              zoom: 8,
              azimuth: 80,
              tilt: 100,
            }}
            style={{ flex: 1, zIndex: -1 }}
          >
            {point && (
              <RouteStartMarker point={point} onPress={onStartMarkPress} />
            )}
            {route && (
              <Polyline strokeWidth={3} strokeColor="red" points={route} />
            )}
            {secondPoint && (
              <RouteEndMarker
                point={secondPoint}
                distance={distance}
                onPress={onEndMarkPress}
              />
            )}
          </YaMap>
        )}
      </View>
    );
  }
);
