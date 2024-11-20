import { FC } from "react";
import { Marker } from "react-native-yamap";
import { ICustomYamapMarkerProps } from "./types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../navigation/types";
import { View } from "react-native";
import { customMarkerStyles } from "./styles";
import { excavatorSvg } from "../../../../assets/svg/excavator";
import { dumpSvg } from "../../../../assets/svg/dump";
import { shovelSvg } from "../../../../assets/svg/shovel";
import { SvgXml } from "react-native-svg";
import { WHITE, GREEN } from "../../../../consts/colors";

const data = {
  TECHNIC: {
    iconXml: excavatorSvg(WHITE),
    color: GREEN,
  },
  DUMP: {
    iconXml: dumpSvg(WHITE),
    color: GREEN,
  },
  NON_MATERIAL: {
    iconXml: shovelSvg(WHITE),
    color: GREEN,
  },
};

export const CustomYamapMarker: FC<ICustomYamapMarkerProps> = ({
  id,
  addressLat,
  addressLon,
  advertType,
}) => {
  const { iconXml, color } = data[advertType];
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const onPress = () => {
    navigation.navigate("Advert", {
      isMini: true,
      advert: { id, advertType, addressLat, addressLon },
    });
  };

  return (
    <Marker
      point={{ lat: addressLat, lon: addressLon }}
      scale={1}
      onPress={onPress}
    >
      <View
        style={[
          customMarkerStyles.circle,
          { backgroundColor: color, shadowColor: color },
        ]}
      >
        <SvgXml xml={iconXml} width={32} height={32} />
      </View>
    </Marker>
  );
};
