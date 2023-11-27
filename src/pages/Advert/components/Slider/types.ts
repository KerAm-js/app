import { Animated } from "react-native";
import { TAdvert } from "../../../../types/Advert";

export interface ISliderProps
  extends Pick<TAdvert, "type" | "params" | "likes" |"userId" | "id"> {
    scrollY: {value: number},
    onLike: (value: boolean) => void;
  }