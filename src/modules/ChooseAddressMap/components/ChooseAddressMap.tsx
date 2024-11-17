import { NativeSyntheticEvent } from "react-native";
import YaMap, { Point, Polyline } from "react-native-yamap";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { YA_MAP_API_KEY } from "../../../api/yamap";
import { RouteEndMarker } from "./RouteEndMarker";
import {
  useAddressByMap,
  useAddressByMapDistance,
  useAddressByMapIsSecondPointRequired,
  useAddressByMapPoints,
} from "../store/hooks";
import { useActions } from "../../../hooks/store/useActions";
import { RouteStartMarker } from "./RouteStartMarker";

YaMap.init(YA_MAP_API_KEY);

export const ChooseAddressMap = () => {
  const mapRef = useRef<YaMap | null>(null);
  const { point, secondPoint } = useAddressByMapPoints();
  const isSecondPointRequired = useAddressByMapIsSecondPointRequired();
  const distance = useAddressByMapDistance();
  const { setPoint, setSecondPoint, changePointToSecondPoint } = useActions();
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
          setSecondPoint({
            secondPoint: newPoint,
            distance: Math.round(
              result.routes[0].sections[0].routeInfo.distance / 1000
            ),
          });
        });
      }
    }
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
    setSecondPoint({ secondPoint: undefined, distance: undefined });
    setRoute(null);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 10);
  }, []);

  if (!isVisible) return null;

  return (
    <YaMap
      ref={mapRef}
      followUser
      onMapLoaded={onMapLoaded}
      onMapPress={onMapPress}
      userLocationIcon={{
        uri: "https://www.clipartmax.com/png/middle/180-1801760_pin-png.png",
      }}
      initialRegion={{
        lat: 55.753215,
        lon: 37.622504,
        zoom: 8,
        azimuth: 80,
        tilt: 100,
      }}
      style={{ flex: 1, zIndex: -1 }}
    >
      {point && (
        <RouteStartMarker
          routeStart
          point={point}
          distance={distance}
          onPress={onStartMarkPress}
        />
      )}
      {route && <Polyline strokeWidth={3} strokeColor="red" points={route} />}
      {secondPoint && (
        <RouteEndMarker
          point={secondPoint}
          distance={distance}
          onPress={onEndMarkPress}
        />
      )}
    </YaMap>
  );
};
