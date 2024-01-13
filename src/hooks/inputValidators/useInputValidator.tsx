import { useState } from "react";
import { TInputValidator } from "./types";
import { RU_LANG } from "../../consts/rulang";

export const useInputValidator: TInputValidator = (props) => {
  const {
    initValue,
    pattern,
    patternErrorMessage,
    minLength = 0,
    confirmedValue,
    confirmingErrorMessage,
    required,
    minValue,
    maxValue,
  } = props || {};

  const [value, setValue] = useState(initValue || "");
  const [isValid, setIsValid] = useState(!!initValue);
  const [error, setError] = useState(
    !initValue?.length && required ? "Заполните данное поле" : ""
  );

  const onChangeValue = (text: string) => {
    setValue(text);
    const number = Number(text);
    if (text.length < minLength) {
      setError(
        `Введите минимум ${minLength} ${
          RU_LANG.symbols[minLength] || RU_LANG.symbols[0]
        }`
      );
      setIsValid(false);
    } else if (text.length === 0 && required) {
      setIsValid(false);
      setError("Заполните данное поле");
    } else if (text.length > 0 && pattern && !pattern.test(text)) {
      setError(patternErrorMessage || "Некорректные данные");
      setIsValid(false);
    } else if (confirmedValue && text === confirmedValue) {
      setIsValid(true);
      setError("");
    } else if (confirmingErrorMessage) {
      setIsValid(false);
      setError(confirmingErrorMessage);
    } else if (!isNaN(number) && minValue && number < minValue) {
      setIsValid(false);
      setError("Минимальное значение " + minValue);
    } else if (!isNaN(number) && maxValue && number > maxValue) {
      setIsValid(false);
      setError("Максимальное значение " + maxValue);
    } else {
      setIsValid(true);
      setError("");
    }
  };

  return [value, onChangeValue, isValid, error];
};
