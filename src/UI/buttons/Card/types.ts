import { TAdvertType } from "../../../types/Advert";

export type TCardButtonProps = {
  title: string;
  onPress: () => void;
  type: TAdvertType
};
