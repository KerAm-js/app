import { TAdvert } from "../../../../types/Advert";

export interface IAdvertSliderProps extends Pick<TAdvert, "type" | "photos"> {}

export interface IParamProps {
  param: string;
  content: string;
}
