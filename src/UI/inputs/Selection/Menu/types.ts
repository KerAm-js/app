import { TValue } from "../types";

export type TSelectionMenuProps = {
  selectedItemsArr: Array<TValue>;
  unselectItem: (key: string) => void;
  isOpened: boolean;
};
