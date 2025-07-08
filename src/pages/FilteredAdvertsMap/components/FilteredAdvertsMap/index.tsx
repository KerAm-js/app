import { NativeSyntheticEvent, Platform, View } from "react-native";
import NavBar from "../NavBar/NavBar";
import YaMap, { Point, Polyline } from "react-native-yamap";
import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import { IAdvert } from "../../../../types/Advert";
import {
  useGetDumpAdvertsMiniFilteredQuery,
  useGetMaterialAdvertsMiniFilteredQuery,
  useGetTechnicAdvertsMiniFilteredQuery,
} from "../../../../modules/FilterAdverts";
import { CustomYamapMarker } from "../CustomMarker/CustomYamapMarker";
import { RouteStartMarker } from "../../../../modules/ChooseAddressMap/components/RouteStartMarker";
import { RouteEndMarker } from "../../../../modules/ChooseAddressMap/components/RouteEndMarker";
import { useAdvertFilters } from "../../../../modules/FilterAdverts/store/hooks";
import { BLACK_LIGHT, PURPLE, RED } from "../../../../consts/colors";
import { MapLoader } from "../../../../modules/ChooseAddressMap";

const FilteredAdvertsMap: FC<Pick<IAdvert, "advertType">> = ({
  advertType,
}) => {
  const {
    dump: dumpAdvertFilter,
    material: materialAdvertFilter,
    technic: technicAdvertFilter,
  } = useAdvertFilters();
  const { data: technicAdverts } = useGetTechnicAdvertsMiniFilteredQuery(
    technicAdvertFilter || {},
    {
      skip: advertType !== "TECHNIC",
    }
  );
  const { data: materialAdverts } = useGetMaterialAdvertsMiniFilteredQuery(
    materialAdvertFilter || {},
    {
      skip: advertType !== "NON_MATERIAL",
    }
  );
  const { data: dumpAdverts } = useGetDumpAdvertsMiniFilteredQuery(
    dumpAdvertFilter || {},
    {
      skip: advertType !== "DUMP",
    }
  );

  const data =
    (advertType === "TECHNIC" && technicAdverts) ||
    (advertType === "NON_MATERIAL" && materialAdverts) ||
    (advertType === "DUMP" && dumpAdverts) ||
    [];

  const mapRef = useRef<YaMap | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [startPoint, setStartPoint] = useState<Point | null>(null);
  const [endPoint, setEndPoint] = useState<Point | null>(null);
  const isMapLoaded = useRef(false);
  const [route, setRoute] = useState<Point[] | null>(null);
  const [distance, setDistance] = useState(0);

  const onMapPress = (evt: NativeSyntheticEvent<Point>) => {
    const newPoint = evt.nativeEvent;
    if (!startPoint) {
      setStartPoint(newPoint);
    } else {
      setEndPoint(newPoint);
      setDistance(0);
      if (isMapLoaded && mapRef.current) {
        mapRef.current.findDrivingRoutes([startPoint, newPoint], (result) => {
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
        mapRef.current.fitMarkers([startPoint, newPoint]);
      }
    }
  };

  const onMapLoaded = () => (isMapLoaded.current = true);

  const onStartMarkPress = useCallback(() => {
    setStartPoint(endPoint || null);
    setEndPoint(null);
    setRoute(null);
  }, []);

  const onEndMarkPress = useCallback(() => {
    setEndPoint(null);
    setRoute(null);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 10);
  }, []);

  console.log(technicAdvertFilter);

  return (
    <View style={{ flex: 1 }}>
      <NavBar advertType={advertType} />
      {isVisible ? (
        <YaMap
          ref={mapRef}
          onMapLoaded={onMapLoaded}
          onMapLongPress={onMapPress}
          userLocationIcon={{
            uri: "https://www.clipartmax.com/png/middle/180-1801760_pin-png.png",
          }}
          initialRegion={{
            lat: 55.753215,
            lon: 37.622504,
            zoom: 10,
          }}
          style={{ flex: 1 }}
        >
          {startPoint && (
            <RouteStartMarker point={startPoint} onPress={onStartMarkPress} />
          )}
          {!!endPoint && !!distance && (
            <RouteEndMarker
              point={endPoint}
              distance={distance}
              onPress={onEndMarkPress}
            />
          )}
          {data?.map((advertMini) => {
            return <CustomYamapMarker key={advertMini.id} {...advertMini} />;
          })}
          {route && (
            <Polyline strokeWidth={3} strokeColor={Platform.OS === 'android' ? RED : BLACK_LIGHT} points={route} />
          )}
        </YaMap>
      ) : (
        <MapLoader />
      )}
    </View>
  );
};

export default FilteredAdvertsMap;
