import { IAdvert } from "../../../../types/Advert";

export interface IMainInfoProps
  extends Pick<
  IAdvert,
    "title" | "price" | "views" | "updatedAt" | "likes" | 'transactionType'
  > {}
