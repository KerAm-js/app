import { NativeSyntheticEvent, StyleSheet, Text, View } from "react-native";
import MenuBar from "../MenuBar/MenuBar";
import NavBar from "../NavBar/NavBar";
import YaMap, {
  DrivingInfo,
  Marker,
  Point,
  Polyline,
  RoutesFoundEvent,
} from "react-native-yamap";
import { useEffect, useRef, useState } from "react";
import { TAdvertType } from "../../../../types/Advert";
import * as SplashScreen from "expo-splash-screen";
import { YA_MAP_API_KEY } from "../../../../api/yamap";

YaMap.init(YA_MAP_API_KEY);

const YaMap3 = () => {
  const [advertType, setAdvertType] = useState<TAdvertType>("TECHNIC");
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

  useEffect(() => {
    console.log(isMapLoaded);
  }, [isMapLoaded]);

  useEffect(() => {
    if (!mapRef.current) return;
    if (startPoint && !endPoint) {
      mapRef.current.setCenter(startPoint, 12, 0, 0, 1);
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
          setDistance(Math.round(result.routes[0].sections[0].routeInfo.distance / 1000));
        });
      }
      mapRef.current.fitMarkers([startPoint, endPoint]);
    }
  }, [startPoint, endPoint, isMapLoaded]);

  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <NavBar />
      <YaMap
        ref={mapRef}
        followUser
        onMapLoaded={onMapLoaded}
        onMapPress={onMapPress}
        // userLocationIcon={{
        //   uri: "https://www.clipartmax.com/png/middle/180-1801760_pin-png.png",
        // }}
        initialRegion={{
          lat: 55.753215,
          lon: 37.622504,
          zoom: 10,
          azimuth: 80,
          tilt: 100,
        }}
        style={{ flex: 1 }}
      >
        {startPoint && (
          <Marker
            point={startPoint}
            scale={3}
            children={<View style={styles.marker} />}
            onPress={() => {
              setStartPoint(endPoint || null);
              setEndPoint(null);
            }}
          />
        )}
        {route && <Polyline strokeWidth={3} strokeColor="red" points={route} />}
        {endPoint && (
          <Marker
            point={endPoint}
            scale={3}
            children={
              <View style={styles.marker}>
                <Text style={{ fontSize: 5 }}>{distance}</Text>
              </View>
            }
            onPress={() => setEndPoint(null)}
          />
        )}
      </YaMap>
      <MenuBar advertType={advertType} setAdvertType={onChangeAdvertType} />
    </View>
  );
};

const styles = StyleSheet.create({
  marker: {
    width: 10,
    height: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "red",
  },
});

export default YaMap3;
