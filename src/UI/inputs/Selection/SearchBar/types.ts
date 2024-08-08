import { TextInput } from "react-native";
import { TValue } from "../types";

export type TSelectionSearchBarProps = {
  onPress: () => void;
  isOpened: boolean;
  selectedItemsArr: Array<TValue>;
  placeholder?: string;
  isApi?: boolean;
  inputRef: {current: TextInput | null};
  inputValue: string;
  onInputChange: (text: string) => void;
};
