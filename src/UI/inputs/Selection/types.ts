export type TSelectionProps = {
  label: string;
  multySelection?: boolean;
  values: Array<string>;
  valuesSetter: (value: string) => void;
  valuesList?: Array<string>;
  placeholder: string;
};