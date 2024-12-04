import { TextInputProps } from "react-native";

export interface IIntervalInputProps extends Omit<TextInputProps, 'value'> {
  firstPlaceholder?: string;
  secondPlaceholder?: string;
  firstValue: string;
  secondValue: string;
  isFirstFieldInvalid: boolean;
  isSecondFieldInvalid: boolean;
  onFirstValueChange: (text: string) => void;
  onSecondValueChange: (text: string) => void;
}
