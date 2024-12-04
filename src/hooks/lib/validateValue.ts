import { RU_LANG } from "../../consts/rulang";
import {
  IIntervalValidationParams,
  IValidationParams,
  TIntervalValidator,
} from "../inputValidators/types";

const validateMinLength = (text: string, minLen: number) => {
  if (text.length < minLen) {
    return `Введите минимум ${minLen} ${
      RU_LANG.symbols[minLen] || RU_LANG.symbols[0]
    }`;
  }
  return null;
};

const validateRequiredValue = (text: string) => {
  if (text.length === 0) {
    return "Заполните данное поле";
  }
  return null;
};

const validatePattern = (
  text: string,
  pattern: RegExp,
  patternErrorMessage?: string
) => {
  if (text.length > 0 && pattern && !text.match(pattern)) {
    return patternErrorMessage || "Некорректные данные";
  }
  return null;
};

const validateWithValueToConfirm = (
  text: string,
  valueToConfirm: string,
  confirmationErrorMessage?: string
) => {
  if (text !== valueToConfirm) {
    return confirmationErrorMessage || "Поля не совпадают";
  }
  return null;
};

const validateMinValue = (text: string, minValue: number) => {
  const number = Number(text);
  if (!isNaN(number) && minValue && number < minValue) {
    return "Минимальное значение: " + minValue;
  }
  return null;
};

const validateMaxValue = (text: string, maxValue: number) => {
  const number = Number(text);
  if (!isNaN(number) && maxValue && number > maxValue) {
    return "Максимальное значение: " + maxValue;
  }
  return null;
};

export const validateRequiredBothOrNone = (text: string, anotherText: string) => {
  if (
    (text.length > 0 && anotherText.length === 0) ||
    (text.length === 0 && anotherText.length > 0)
  ) {
    return "Заполните оба поля";
  }
  return null;
};

type TValidateValueParams = {
  validationParams?: IValidationParams;
  text: string;
};

type TValidateIntervalParams = {
  validationParams?: IIntervalValidationParams;
  text: string;
  anotherText: string;
};

export const validateInterval = ({
  validationParams,
  text,
  anotherText,
}: TValidateIntervalParams) => {
  if (!validationParams) return null;
  let error = null;
  if (validationParams.requiredBothOrNone) {
    error = validateRequiredBothOrNone(text, anotherText);
  }
  if (!error) {
    error = validateValue({ validationParams, text });
  }
  return error;
};

export const validateValue = ({
  validationParams,
  text,
}: TValidateValueParams) => {
  if (!validationParams) return null;
  const {
    pattern,
    patternErrorMessage,
    minLength,
    valueToConfirm,
    confirmationErrorMessage,
    required,
    minValue,
    maxValue,
  } = validationParams;

  let error = null;
  if (minLength) {
    error = validateMinLength(text, minLength);
  }
  if (!error && required) {
    error = validateRequiredValue(text);
  }
  if (!error && pattern) {
    error = validatePattern(text, pattern, patternErrorMessage);
  }
  if (!error && valueToConfirm) {
    error = validateWithValueToConfirm(
      text,
      valueToConfirm,
      confirmationErrorMessage
    );
  }
  if (!error && minValue) {
    error = validateMinValue(text, minValue);
  }
  if (!error && maxValue) {
    error = validateMaxValue(text, maxValue);
  }

  return error;
};
