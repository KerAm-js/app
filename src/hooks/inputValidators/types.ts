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
  error: string
];

export type TSelectionValidator = ({
  initValue,
  required,
}: {
  initValue?: Array<string>;
  required: boolean;
}) => [
  value: Array<string>,
  selectItem: (value: string) => void,
  unselectItem: (value: string) => void,
  unselectAll: () => void,
  isValid: boolean,
  error: string
];
