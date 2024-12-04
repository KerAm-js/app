export interface IValidationParams {
  minLength?: number;
  pattern?: RegExp;
  patternErrorMessage?: string;
  required?: boolean;
  valueToConfirm?: string;
  confirmationErrorMessage?: string;
  minValue?: number;
  maxValue?: number;
};

export interface IIntervalValidationParams extends IValidationParams {
  requiredBothOrNone?: boolean;
}

type TInputValidatorProps = IValidationParams & {
  initValue?: string;
};

export type IIntervalValidatorProps = IIntervalValidationParams & {
  firstInitValue?: string;
  secondInitValue?: string;
};

export type TIntervalValidator = (
  props?: IIntervalValidatorProps
) => [
  firstValue: string,
  secondValue: string,
  onChangeFirstValue: (value: string) => void,
  onChangeSecondValue: (value: string) => void,
  isFirstValueChange: boolean,
  isSecondValueChange: boolean,
  firstError: string,
  secondError: string,
];

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
  setInitial: () => void
];
