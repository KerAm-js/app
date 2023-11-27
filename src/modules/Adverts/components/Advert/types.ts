import { TAdvert } from "../../../../types/Advert";

export interface IAdvertSliderProps
  extends Pick<TAdvert, "type" | "params"> {}

export interface IParamProps {
  title: string;
  content: string;
}
