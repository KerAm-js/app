import { TAdvert } from "../../../../types/Advert";

export interface ISliderProps
  extends Pick<TAdvert, "type" | "params"> {}

export interface IParamProps {
  title: string;
  content: string;
}
