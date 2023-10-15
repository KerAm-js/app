import { TextInputProps } from "react-native";

export type TIntervalInputValue = {
  from: string;
  to: string;
};

export interface IIntervalInputProps extends TextInputProps {
  firstPlaceholder: string;
  secondPlaceholder: string;
  firstValue: string;
  secondValue: string;
  onFirstValueChange: (text: string) => void;
  onSecondValueChange: (text: string) => void;
}
