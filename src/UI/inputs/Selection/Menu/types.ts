import { SharedValue } from "react-native-reanimated";
import { TValue } from "../types";

export type TSelectionMenuProps = {
  animatedHeight: SharedValue<number>;
  selectedItemsArr: Array<TValue>;
  unselectItem: (value: any) => void;
  isOpened: boolean;
};
