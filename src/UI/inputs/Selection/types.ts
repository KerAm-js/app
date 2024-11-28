import { TSelectionMenuProps } from "./Menu/types";

export type TValue = { id: number; name: string };

export type TSelectionProps = {
  itemsList: Array<TValue>;
  value: Array<TValue>;
  selectItem: (value: any) => void;
  unselectItem: TSelectionMenuProps['unselectItem'];
  placeholder?: string;
};
