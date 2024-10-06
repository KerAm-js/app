import { TAdvertType } from "../../../../types/Advert";

export interface IImageFormProps {
  advertId: number;
  advertType: TAdvertType,
  isPhotosRequired: boolean;
}