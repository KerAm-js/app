import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Point, Marker } from "react-native-yamap";
import { mapMarkSvg } from "../../../../assets/svg/mapMark";
import { RED } from "../../../../consts/colors";
import { SvgXml } from "react-native-svg";

export const RouteMarker: FC<{
  routeStart?: boolean;
  point: Point;
  distance?: number;
  onPress: () => void;
}> = ({ routeStart, point, distance, onPress }) => {
  if (routeStart) {
    return (
      <Marker
        point={point}
        scale={3}
        children={
          <View style={styles.startPointMarker}>
            <SvgXml width={8.8} height={12} xml={mapMarkSvg(RED)} />
          </View>
        }
        onPress={onPress}
      />
    );
  } else {
    return (
      <Marker
        point={point}
        scale={3}
        children={
          <View style={styles.endPointMarker}>
            <SvgXml width={8.8} height={12} xml={mapMarkSvg(RED)} />
            <View style={styles.routeDistanceContainer}>
              <Text style={styles.routeDistance}>{distance} км</Text>
            </View>
          </View>
        }
        onPress={onPress}
      />
    );
  }
};

const styles = StyleSheet.create({
  startPointMarker: {
    maxWidth: 40,
    alignItems: "center",
    paddingBottom: 12,
  },
  endPointMarker: {
    maxWidth: 40,
    alignItems: "center",
  },
  routeDistanceContainer: {
    borderColor: "red",
    borderWidth: 1,
    backgroundColor: "#fff",
    marginTop: 2,
    paddingVertical: 1,
    paddingHorizontal: 4,
    borderRadius: 2,
    borderCurve: "continuous",
  },
  routeDistance: {
    fontSize: 5,
  },
});
