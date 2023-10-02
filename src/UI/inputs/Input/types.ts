import { KeyboardTypeOptions } from "react-native";

export type TInputProps = {
  value: string;
  onChangeText: (value: string) => void;
  placeholder: string;
  keyboardType?: KeyboardTypeOptions;
  flexed?: boolean
};
