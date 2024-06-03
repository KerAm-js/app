import { TAdvertType } from "../../../../types/Advert";

export interface IMenuBarProps {
  advertType: TAdvertType
  setAdvertType: (t: TAdvertType) => void;
}