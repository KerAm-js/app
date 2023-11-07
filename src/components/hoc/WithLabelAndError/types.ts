export type TWithLabelAndErrorChildrenProps = {
  setIsFocused?: (value: boolean) => void;
  setErrorShown?: (value: boolean) => void;
  errorShown?: boolean;
};

export type TWithLabelAndErrorProps = {
  label: string;
  error?: string;
};
