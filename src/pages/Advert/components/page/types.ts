import { IAdvert } from "../../../../types/Advert";

export type TAdvertPagePropTypes = {
  isMini: true;
  advert: Pick<IAdvert, "id" | "advertType" | 'addressLat' | 'addressLon'>;
} | {
  isMini?: false;
  advert: IAdvert;
}