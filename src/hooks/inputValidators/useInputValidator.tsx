import { useState } from "react";
import { TInputValidator } from "./types";

const arr = ["символ", "символа", "символа", "символа"];

export const useInputValidator: TInputValidator = ({
  initValue,
  pattern,
  minLength = 0,
  confirmedValue,
  confirmingErrorMessage,
  required,
}) => {
  const [value, setValue] = useState(initValue);
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState(
    !initValue.length && required ? "Заполните данное поле" : ""
  );

  const onChangeValue = (text: string) => {
    setValue(text);
    if (text.length < minLength) {
      setError(
        `Введите минимум ${minLength} ${arr[minLength - 1] || "символов"}`
      );
      setIsValid(false);
    } else if (text.length === 0 && required) {
      setIsValid(false);
      setError("Заполните данное поле");
    } else if (pattern && !pattern.test(text)) {
      setError("Некорректные данные");
      setIsValid(false);
    } else {
      setError("");
      setIsValid(true);
    }
    if (confirmedValue && text === confirmedValue) {
      setIsValid(true);
      setError("");
    } else if (confirmingErrorMessage) {
      setIsValid(false);
      setError(confirmingErrorMessage);
    }
  };

  return [value, onChangeValue, isValid, error];
};
