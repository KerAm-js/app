import { NativeSyntheticEvent, View } from "react-native";
import YaMap, { Animation, Point, Polyline } from "react-native-yamap";
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
import { PURPLE } from "../../../consts/colors";

type TPropTypes = Pick<
  TAddressByMapState,
  "point" | "secondPoint" | "isSecondPointRequired" | "distance"
> & {
  setPoint: Dispatch<SetStateAction<Point | undefined>>;
  setSecondPoint: Dispatch<SetStateAction<Point | undefined>>;
  setDistance: Dispatch<SetStateAction<number | undefined>>;
  initialPoint: Point;
};

export const ChooseAddressMap: FC<TPropTypes> = React.memo(
  ({
    point,
    initialPoint,
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
      if (point && isSecondPointRequired) {
        setSecondPoint(newPoint);
        drawRoute(point, newPoint);
      } else {
        setPoint(newPoint);
      }
    };

    const drawRoute = (firstPoint: Point, secondPoint: Point) => {
      if (mapRef.current) {
        mapRef.current.findDrivingRoutes(
          [firstPoint, secondPoint],
          (result) => {
            const points: Point[] = [];
            if (result && result.routes && result.routes.length >= 1) {
              result.routes[0].sections.forEach((section) => {
                section.points.forEach((item: Point) => {
                  points.push(item);
                });
              });
            }
            setRoute(points);
            setDistance(
              Math.round(result.routes[0].sections[0].routeInfo.distance / 1000)
            );
          }
        );
        mapRef.current.fitMarkers([firstPoint, secondPoint]);
      }
    };

    const changePointToSecondPoint = () => {
      setPoint(secondPoint);
      setSecondPoint(undefined);
    };

    const onMapLoaded = () => {
      setIsMapLoaded(true);
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
      if (initialPoint && isMapLoaded && mapRef.current) {
        if (
          point &&
          point.lat === initialPoint.lat &&
          point.lon === initialPoint.lon
        ) {
          mapRef.current.setCenter(initialPoint, 17);
        } else if (
          point &&
          secondPoint &&
          secondPoint.lat === initialPoint.lat &&
          secondPoint.lon === initialPoint.lon
        ) {
          drawRoute(point, secondPoint);
        }
      }
    }, [initialPoint]);

    useEffect(() => {
      setTimeout(() => {
        setIsVisible(true);
      }, 10);
    }, []);

    return (
      <View style={{ flex: 1 }}>
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
              lat: initialPoint.lat,
              lon: initialPoint.lon,
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
              <Polyline strokeWidth={3} strokeColor={PURPLE} points={route} />
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
