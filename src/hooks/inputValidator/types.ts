type TInputValidatorProps = {
  initValue: string;
  minLength?: number;
  pattern?: RegExp;
  required?: boolean;
  confirmedValue?: string;
  confirmingErrorMessage?: string;
};

export type TInputValidator = (
  props: TInputValidatorProps
) => [
  value: string,
  onChangeValue: (value: string) => void,
  isValid: boolean,
  error: string,
];
