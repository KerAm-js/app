import { IAdvert } from "../../../../types/Advert";

export interface IAdvertSliderProps extends Pick<IAdvert, "advertType" | "photos"> {}

export interface IParamProps {
  param: string;
  content: string;
}
