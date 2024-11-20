import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Point, Marker } from "react-native-yamap";
import { SvgXml } from "react-native-svg";
import { RED } from "../../../consts/colors";
import { mapMarkSvg } from "../../../assets/svg/mapMark";

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
          <SvgXml width={22} height={30} xml={mapMarkSvg(RED)} />

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
