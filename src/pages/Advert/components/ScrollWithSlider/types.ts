import { TAdvert } from "../../../../types/Advert";

export interface IScrollWithSliderProps
  extends Pick<TAdvert, "type" | "params" | "likes" | "userId" | "id"> {
  children?: JSX.Element | Array<JSX.Element> | null;
}
