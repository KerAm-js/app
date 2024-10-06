import { PropsWithChildren } from "react";
import { IAdvert } from "../../../../types/Advert";

export interface IScrollWithSliderProps
  extends PropsWithChildren<
    Pick<IAdvert, "advertType" | "photos" | "likes" | "ownerId" | "id">
  > {}
