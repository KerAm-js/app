import { KeyboardTypeOptions } from "react-native";

export type TSearchBarProps = {
  value: string;
  onChangeText: (value: string) => void;
  placeholder: string;
  keyboardType?: KeyboardTypeOptions;
  flexed?: boolean
};
