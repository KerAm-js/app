import { TextInputProps } from "react-native";

export interface IIntervalInputProps extends Omit<TextInputProps, 'value'> {
  firstPlaceholder: string;
  secondPlaceholder: string;
  value: {
    first: string;
    second: string;
  };
  onFirstValueChange: (text: string) => void;
  onSecondValueChange: (text: string) => void;
}
