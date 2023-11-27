import { TAdvert } from "../../../../types/Advert";

export interface IMainInfoProps
  extends Pick<TAdvert, "title" | "price" | "views" | "updatedAt" | "likes"> {}
