import { IAdvert } from "../../../../types/Advert";

export interface ISliderProps
  extends Pick<IAdvert, "advertType" | "photos" | "likes" | "ownerId" | "id"> {
  scrollY: { value: number };
  onLike: (value: boolean) => void;
}
