export type TSelectionProps = {
  itemsList: Array<string>;
  value: Array<string>;
  selectItem: (value: string) => void;
  unselectItem: (value: string) => void;
  unselectAll?: () => void;
  placeholder?: string;
  multySelection?: boolean;
};
