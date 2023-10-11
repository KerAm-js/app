import { KeyboardTypeOptions, TextInputProps } from "react-native";

export interface IInputProps extends TextInputProps {
  value: string;
  onChangeText: (value: string) => void;
  placeholder: string;
  keyboardType?: KeyboardTypeOptions;
  flexed?: boolean
};
