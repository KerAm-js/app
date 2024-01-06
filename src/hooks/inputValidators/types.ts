type TInputValidatorProps = {
  initValue?: string;
  minLength?: number;
  pattern?: RegExp;
  patternErrorMessage?: string,
  required?: boolean;
  confirmedValue?: string;
  confirmingErrorMessage?: string;
  minValue?: number,
  maxValue?: number,
};

export type TInputValidator = (
  props?: TInputValidatorProps
) => [
  value: string,
  onChangeValue: (value: string) => void,
  isValid: boolean,
  error: string
];

export type TSelectionValidator = ({
  initValue,
  required,
  multySelection, 
}: {
  initValue?: Array<string>;
  required?: boolean;
  multySelection?: boolean;
}) => [
  value: Array<string>,
  selectItem: (value: string) => void,
  unselectItem: (value: string) => void,
  unselectAll: () => void,
  isValid: boolean,
  error: string
];
