export type TWithLabelAndErrorChildrenProps = {
  setIsFocused?: (value: boolean) => void;
  setErrorShown?: (value: boolean) => void;
  isFocused: boolean;
  errorShown?: boolean;
};

export type TWithLabelAndErrorProps = {
  label: string;
  error?: string;
  errorShown?: boolean;
};
