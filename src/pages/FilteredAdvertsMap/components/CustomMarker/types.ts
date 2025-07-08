import { MapMarkerProps } from "react-native-maps";
import { IMiniAdvert, TAdvertType } from "../../../../types/Advert";

export interface ICustomMarkerProps extends MapMarkerProps {
  type: TAdvertType;
}

export interface ICustomYamapMarkerProps extends IMiniAdvert {
  
}
