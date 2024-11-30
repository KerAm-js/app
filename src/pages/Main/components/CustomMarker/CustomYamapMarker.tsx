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
import { WHITE, GREEN, RED, BLUE, YELLOW } from "../../../../consts/colors";
import { IAdvert } from "../../../../types/Advert";

const data = {
  TECHNIC: {
    xmlGetter: excavatorSvg,
  },
  DUMP: {
    xmlGetter: dumpSvg,
  },
  NON_MATERIAL: {
    xmlGetter: shovelSvg,
  },
};

export const CustomYamapMarker: FC<ICustomYamapMarkerProps> = ({
  id,
  addressLat,
  addressLon,
  advertType,
  transactionType,
}) => {
  const { xmlGetter } = data[advertType];
  let color = "";
  switch (transactionType) {
    case "SELL":
      color = RED;
      break;
    case "GIVE_A_RENT":
      color = RED;
      break;
    case "NEED_SOIL_DUMP":
      color = BLUE;
      break;
    case "NEED_SOIL_REMOVAL":
      color = RED;
      break;
    case "SOIL_REMOVAL":
      color = YELLOW;
      break;
    default:
      color = GREEN;
  }

  if (advertType === "NON_MATERIAL") {
    console.log(addressLat, addressLon, transactionType);
  }

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
        <SvgXml xml={xmlGetter(WHITE)} width={32} height={32} />
      </View>
    </Marker>
  );
};
