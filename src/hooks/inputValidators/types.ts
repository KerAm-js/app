type TInputValidatorProps = {
  initValue?: string;
  minLength?: number;
  pattern?: RegExp;
  patternErrorMessage?: string;
  required?: boolean;
  confirmedValue?: string;
  confirmingErrorMessage?: string;
  minValue?: number;
  maxValue?: number;
};

export type TInputValidator = (
  props?: TInputValidatorProps
) => [
  value: string,
  onChangeValue: (value: string) => void,
  isValid: boolean,
  error: string,
  setInitial: () => void
];

export type TPhoneInputValidator = (
  props?: TInputValidatorProps
) => [
  value: string,
  onChangeValue: (value: string) => void,
  isValid: boolean,
  error: string,
  setInitial: () => void,
  number: string
];

export type TSelectionValidatorProps<T> = {
  initValue?: Array<T>;
  required?: boolean;
  multySelection?: boolean;
};

export type TSelectionValidatorReturn<T> = [
  value: Array<T>,
  selectItem: (value: T) => void,
  unselectItem: (value: T) => void,
  unselectAll: () => void,
  isValid: boolean,
  error: string,
  setInitial: () => void,
  search: string,
  setSearch: (value: string) => void
];
