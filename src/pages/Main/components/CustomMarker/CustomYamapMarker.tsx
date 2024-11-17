import { FC } from "react";
import { Marker } from "react-native-yamap";
import { ICustomYamapMarkerProps } from "./types";
import { IAdvert } from "../../../../types/Advert";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../navigation/types";
import { ImageSourcePropType } from "react-native";

const images: {
  [key in IAdvert["advertType"]]: {
    image: ImageSourcePropType;
  };
} = {
  TECHNIC: {
    image: require("../../../../assets/images/TechnicMarkerGreen.png"),
  },
  NON_MATERIAL: {
    image: require("../../../../assets/images/MaterialMarkerGreen.png"),
  },
  DUMP: {
    image: require("../../../../assets/images/DumpMarkerGreen.png"),
  },
};

export const CustomYamapMarker: FC<ICustomYamapMarkerProps> = ({
  id,
  addressLat,
  addressLon,
  advertType,
}) => {
  const { image } = images[advertType];
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const onPress = () => {
    navigation.navigate("Advert", { isMini: true, advert: { id, advertType } });
  };

  return (
    <Marker
      point={{ lat: addressLat, lon: addressLon }}
      scale={1}
      source={image}
      onPress={onPress}
    />
  );
};
