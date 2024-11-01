import { IAdvert } from "../../../../types/Advert";

export type TAdvertPagePropTypes = {
  isMini: true;
  advert: Pick<IAdvert, "id" | "advertType">;
} | {
  isMini?: false;
  advert: IAdvert;
}