import { NativeSyntheticEvent, View } from "react-native";
import MenuBar from "../MenuBar/MenuBar";
import NavBar from "../NavBar/NavBar";
import YaMap, { Circle, Marker, Point, Polyline } from "react-native-yamap";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { TAdvertType } from "../../../../types/Advert";
import * as SplashScreen from "expo-splash-screen";
import { YA_MAP_API_KEY } from "../../../../api/yamap";
import { RouteMarker } from "./RouteMarker";
import {
  useGetDumpAdvertsMiniFilteredQuery,
  useGetMaterialAdvertsMiniFilteredQuery,
  useGetTechnicAdvertsMiniFilteredQuery,
} from "../../../../modules/Adverts/api/adverts.api";
import { CustomYamapMarker } from "../CustomMarker/CustomYamapMarker";

YaMap.init(YA_MAP_API_KEY);

const YaMap3 = () => {
  const [advertType, setAdvertType] = useState<TAdvertType>("TECHNIC");

  const { data: technicAdverts } = useGetTechnicAdvertsMiniFilteredQuery(
    {},
    { skip: advertType !== "TECHNIC" }
  );
  const { data: materialAdverts } = useGetMaterialAdvertsMiniFilteredQuery(
    {},
    { skip: advertType !== "NON_MATERIAL" }
  );
  const { data: dumpAdverts } = useGetDumpAdvertsMiniFilteredQuery(
    {},
    { skip: advertType !== "DUMP" }
  );

  const data =
    (advertType === "TECHNIC" && technicAdverts) ||
    (advertType === "NON_MATERIAL" && materialAdverts) ||
    (advertType === "DUMP" && dumpAdverts) ||
    [];

  const onChangeAdvertType = (type: TAdvertType) => {
    setAdvertType(type);
  };

  const mapRef = useRef<YaMap | null>(null);

  const [startPoint, setStartPoint] = useState<Point | null>(null);
  const [endPoint, setEndPoint] = useState<Point | null>(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [route, setRoute] = useState<Point[] | null>(null);
  const [distance, setDistance] = useState(0);

  const onMapPress = (evt: NativeSyntheticEvent<Point>) => {
    if (!startPoint) {
      setStartPoint(evt.nativeEvent);
    } else {
      setEndPoint(evt.nativeEvent);
    }
  };

  const onMapLoaded = () => setIsMapLoaded(true);

  const onStartMarkPress = useCallback(() => {
    setStartPoint(endPoint || null);
    setEndPoint(null);
    setRoute(null);
  }, []);

  const onEndMarkPress = useCallback(() => {
    setEndPoint(endPoint || null);
    setRoute(null);
  }, []);

  useEffect(() => {
    console.log(isMapLoaded);
  }, [isMapLoaded]);

  useEffect(() => {
    if (!mapRef.current) return;
    if (startPoint && !endPoint) {
      //mapRef.current.setCenter(startPoint, undefined, 0, 0, 1);
    } else if (startPoint && endPoint) {
      if (isMapLoaded) {
        mapRef.current.findDrivingRoutes([startPoint, endPoint], (result) => {
          const points: Point[] = [];
          if (result && result.routes && result.routes.length >= 1) {
            result.routes[0].sections.forEach((section) => {
              section.points.forEach((point) => {
                points.push(point);
              });
            });
          }
          setRoute(points);
          setDistance(
            Math.round(result.routes[0].sections[0].routeInfo.distance / 1000)
          );
        });
      }
      // mapRef.current.fitMarkers([startPoint, endPoint]);
    }
  }, [startPoint, endPoint, isMapLoaded]);

  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  // useEffect(() => {
  //   if (mapRef.current) {
  //     mapRef.current.fitMarkers();
  //   }
  // }, [data])

  return (
    <View style={{ flex: 1 }}>
      <NavBar />
      <YaMap
        ref={mapRef}
        followUser
        onMapLoaded={onMapLoaded}
        onMapLongPress={onMapPress}
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
        style={{ flex: 1 }}
      >
        {startPoint && (
          <RouteMarker
            routeStart
            point={startPoint}
            distance={distance}
            onPress={onStartMarkPress}
          />
        )}
        {route && <Polyline strokeWidth={3} strokeColor="red" points={route} />}
        {endPoint && (
          <RouteMarker
            point={endPoint}
            distance={distance}
            onPress={onEndMarkPress}
          />
        )}
        {data?.map((advertMini) => {
          return <CustomYamapMarker key={advertMini.id} {...advertMini} />;
        })}
      </YaMap>
      <MenuBar advertType={advertType} setAdvertType={onChangeAdvertType} />
    </View>
  );
};

export default YaMap3;
