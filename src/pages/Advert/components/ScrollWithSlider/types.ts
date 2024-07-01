import { PropsWithChildren } from "react";
import { TAdvert } from "../../../../types/Advert";

export interface IScrollWithSliderProps
  extends PropsWithChildren<
    Pick<TAdvert, "type" | "photos" | "likes" | "userId" | "id">
  > {}
