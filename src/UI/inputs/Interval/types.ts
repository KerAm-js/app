import { KeyboardTypeOptions } from "react-native";

export type TIntervalInputValue = {
  from: string;
  to: string;
};

export type TIntervalInputProps = {
  placeholders?: { from: string; to: string };
  values: TIntervalInputValue;
  onChangeTextHandlers: {
    from: (value: string) => void;
    to: (value: string) => void;
  };
  keyboardType?: KeyboardTypeOptions;
};
