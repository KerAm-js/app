export type TSelectionMenuProps = {
  selectedItemsArr: Array<string>;
  unselectItem: (key: string) => void;
  isOpened: { value: number };
  unselectAll: () => void;
};
