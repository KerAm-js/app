export type TSelectionProps = {
  itemsList: Array<string>;
  selectedItems: Array<string>;
  selectItem: (value: string) => void;
  unselectItem: (value: string) => void;
  unselectAll: () => void;
  placeholder: string;
  multySelection: boolean;
};
