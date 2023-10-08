import { MapMarkerProps } from "react-native-maps";
import { TAdvertType } from "../../../../types/Advert";

export interface ICustomMarkerProps extends MapMarkerProps {
  type: TAdvertType;
}
