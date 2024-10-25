import { NativeScrollEvent, NativeSyntheticEvent } from "react-native";
import { IAdvert } from "../../../../types/Advert";

export interface IAdvertSliderProps extends Pick<IAdvert, "advertType" | "photos"> {}

export interface IFlatListComponentProps extends IAdvertSliderProps {
  onScrollEnd: (evt: NativeSyntheticEvent<NativeScrollEvent>) => void;
};

export interface IParamProps {
  param: string;
  content: string;
}
