import { StyleSheet, Text, View } from "react-native";
import { useAddressByMap } from "../../../modules/ChooseAddressMap";
import { SCREEN_PADDING } from "../../../consts/views";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BLACK_DARK, GREY_DARK, WHITE } from "../../../consts/colors";
import { BORDER_RADIUS_SMALL } from "../../../consts/borders";
import { LABEL_F_SIZE } from "../../../consts/texts";
import { useEffect, useState } from "react";
import { Geocoder, ObjectKind } from "react-native-yamap";
import { YA_MAP_JS_API_KEY } from "../../../api/yamap";
import { useActions } from "../../../hooks/store/useActions";

Geocoder.init(YA_MAP_JS_API_KEY);

type T = ObjectKind;

export const AddressInfo = () => {
  const { bottom } = useSafeAreaInsets();
  const {
    point,
    pointAddress,
    secondPoint,
    secondPointAddress,
    isSecondPointRequired,
  } = useAddressByMap();
  const { setPointAddress, setSecondPointAddress } = useActions();

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
    <View style={[styles.container, { bottom: bottom < 15 ? 15 : bottom }]}>
      <View style={styles.row}>
        <Text style={[styles.address, !point && styles.addressPlaceholder]}>
          {pointAddress || "Точка А"}
        </Text>
      </View>
      {isSecondPointRequired && (
        <View style={styles.row}>
          <Text
            style={[styles.address, !secondPoint && styles.addressPlaceholder]}
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
    position: "absolute",
    right: SCREEN_PADDING,
    left: SCREEN_PADDING,
    backgroundColor: WHITE,
    borderRadius: BORDER_RADIUS_SMALL,
    shadowColor: BLACK_DARK,
    shadowOpacity: 0.3,
    minHeight: 40,
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
