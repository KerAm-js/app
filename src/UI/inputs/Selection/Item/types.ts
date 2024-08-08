import { TValue } from "../types";

export type TSelectionItemProps = {
  item: TValue;
  isChecked: boolean;
  select: (item: TValue) => void;
  unselect: (item: TValue) => void;
};