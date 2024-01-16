import { TextInput } from "react-native";

export type TSelectionSearchBarProps = {
  onPress: () => void;
  isOpened: { value: number };
  selectedItemsArr: Array<string>;
  placeholder?: string;
  inputRef: {current: TextInput | null},
  inputValue: string;
  onInputChange: (text: string) => void
};
