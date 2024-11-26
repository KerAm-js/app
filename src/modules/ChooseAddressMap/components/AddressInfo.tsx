import { StyleSheet, Text, View } from "react-native";
import { BLACK_DARK, GREY_DARK, WHITE } from "../../../consts/colors";
import { BORDER_RADIUS_SMALL } from "../../../consts/borders";
import { LABEL_F_SIZE } from "../../../consts/texts";
import { Dispatch, FC, SetStateAction, useEffect } from "react";
import { Geocoder, Point } from "react-native-yamap";
import { YA_MAP_JS_API_KEY } from "../../../api/yamap";
import { TAddressByMapState } from "../store/types";
import { SCREEN_PADDING } from "../../../consts/views";

Geocoder.init(YA_MAP_JS_API_KEY);

type TPropTypes = Pick<
  TAddressByMapState,
  | "point"
  | "pointAddress"
  | "secondPoint"
  | "secondPointAddress"
  | "isSecondPointRequired"
> & {
  setPointAddress: Dispatch<SetStateAction<string>>;
  setSecondPointAddress: Dispatch<SetStateAction<string>>;
};

export const AddressInfo: FC<TPropTypes> = ({
  point,
  pointAddress,
  secondPoint,
  secondPointAddress,
  isSecondPointRequired,
  setPointAddress,
  setSecondPointAddress,
}) => {
  useEffect(() => {
    if (point) {
      Geocoder.geocode(point)
        .then((res) =>
          setPointAddress(
            res.response?.GeoObjectCollection?.featureMember[0]?.GeoObject?.name
          )
        )
        .catch((err) => console.log(err));
    }
  }, [point]);

  useEffect(() => {
    if (secondPoint) {
      Geocoder.geocode(secondPoint)
        .then((res) =>
          setSecondPointAddress(
            res.response?.GeoObjectCollection?.featureMember[0]?.GeoObject?.name
          )
        )
        .catch((err) => console.log(err));
    }
  }, [secondPoint]);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text
          style={[styles.address, !pointAddress && styles.addressPlaceholder]}
        >
          {pointAddress || "Точка А"}
        </Text>
      </View>
      {isSecondPointRequired && (
        <View style={styles.row}>
          <Text
            style={[
              styles.address,
              !secondPointAddress && styles.addressPlaceholder,
            ]}
          >
            {secondPointAddress || "Точка Б"}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: WHITE,
    borderRadius: BORDER_RADIUS_SMALL,
    shadowColor: BLACK_DARK,
    shadowOpacity: 0.3,
    minHeight: 40,
    marginHorizontal: SCREEN_PADDING,
    marginBottom: 15,
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowRadius: 10,
    elevation: 10,
    zIndex: 100,
    paddingVertical: 8,
  },
  row: {
    paddingHorizontal: 15,
    paddingVertical: 7,
  },
  addressPlaceholder: {
    color: GREY_DARK,
  },
  address: {
    fontSize: LABEL_F_SIZE,
    fontFamily: "Gilroy-Medium",
  },
});