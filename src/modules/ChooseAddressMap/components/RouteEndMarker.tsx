import { FC } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Point, Marker } from "react-native-yamap";
import { SvgXml } from "react-native-svg";
import { RED } from "../../../consts/colors";
import { mapMarkerBSvg } from "../../../assets/svg/mapMarkerB";

export const RouteEndMarker: FC<{
  point: Point;
  distance?: number;
  onPress: () => void;
}> = ({ point, distance, onPress }) => {
  return (
    <Marker
      point={point}
      scale={1}
      children={
        <View style={styles.endPointMarker}>
          {Platform.OS !== "android" && (
            <SvgXml width={22} height={30} xml={mapMarkerBSvg(RED)} />
          )}
          <View style={styles.routeDistanceContainer}>
            <Text style={styles.routeDistance}>{distance} км</Text>
          </View>
        </View>
      }
      onPress={onPress}
    />
  );
};

const styles = StyleSheet.create({
  endPointMarker: {
    paddingTop: 6,
    maxWidth: 100,
    alignItems: "center",
  },
  routeDistanceContainer: {
    borderColor: RED,
    borderWidth: 2,
    backgroundColor: RED,
    marginTop: 10,
    paddingVertical: 3,
    paddingHorizontal: 5,
    borderRadius: 7,
    borderCurve: "continuous",
  },
  routeDistance: {
    fontSize: 15,
    color: '#fff',
    fontWeight: '600'
  },
});
