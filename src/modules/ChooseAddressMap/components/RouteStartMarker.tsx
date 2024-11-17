import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Point, Marker } from "react-native-yamap";
import { SvgXml } from "react-native-svg";
import { RED } from "../../../consts/colors";
import { mapMarkSvg } from "../../../assets/svg/mapMark";

export const RouteStartMarker: FC<{
  routeStart?: boolean;
  point: Point;
  distance?: number;
  onPress: () => void;
}> = ({ routeStart, point, distance, onPress }) => {
  return (
    <Marker
      point={point}
      scale={1}
      anchor={{ y: 1, x: 0.5 }}
      children={
        <View
          style={routeStart ? styles.startPointMarker : styles.endPointMarker}
        >
          <SvgXml width={22} height={30} xml={mapMarkSvg(RED)} />
          {!routeStart && (
            <View style={styles.routeDistanceContainer}>
              <Text style={styles.routeDistance}>{distance} км</Text>
            </View>
          )}
        </View>
      }
      onPress={onPress}
    />
  );
};

const styles = StyleSheet.create({
  startPointMarker: {
    maxWidth: 24,
    maxHeight: 30,
    alignItems: "center",
    paddingBottom: 34,
  },
  endPointMarker: {
    paddingTop: 6,
    maxWidth: 100,
    alignItems: "center",
  },
  routeDistanceContainer: {
    borderColor: "red",
    borderWidth: 2,
    backgroundColor: "#fff",
    marginTop: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 7,
    borderCurve: "continuous",
  },
  routeDistance: {
    fontSize: 15,
  },
});
