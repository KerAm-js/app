import { FC } from "react";
import { SvgXml } from "react-native-svg";
import { excavatorSvg } from "../../../../assets/svg/excavator";
import { BLUE, GREEN, RED, WHITE } from "../../../../consts/colors";
import { dumpSvg } from "../../../../assets/svg/dump";
import { shovelSvg } from "../../../../assets/svg/shovel";
import { customMarkerStyles } from "./styles";
import { Marker } from "react-native-maps";
import { ICustomMarkerProps } from "./types";
import { View } from "react-native";

const data = {
  excavator: {
    iconXml: excavatorSvg(WHITE),
    color: BLUE,
  },
  dump: {
    iconXml: dumpSvg(WHITE),
    color: GREEN,
  },
  shovel: {
    iconXml: shovelSvg(WHITE),
    color: RED,
  },
};

const CustomMarker: FC<ICustomMarkerProps> = ({ type, ...props }) => {
  const { iconXml, color } = data[type];
  return (
    <Marker
      {...props}
    >
      <View style={customMarkerStyles.container}>
        <View
          style={[
            customMarkerStyles.circle,
            { backgroundColor: color, shadowColor: color },
          ]}
        >
          <SvgXml xml={iconXml} width={24} height={24} />
        </View>
      </View>
    </Marker>
  );
};

export default CustomMarker;
