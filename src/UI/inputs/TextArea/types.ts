import { KeyboardTypeOptions } from "react-native";

export type TTextAreaProps = {
  value: string;
  onChangeText: (value: string) => void;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  flexed?: boolean
};
