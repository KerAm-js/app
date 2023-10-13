import { useEffect, useState } from "react";
import { TInputValidator } from "./types";

export const useInputValidator: TInputValidator = ({
  initValue,
  pattern,
  minLength = 0,
  confirmedValue,
  confirmingErrorMessage,
  required
}) => {
  const [value, setValue] = useState(initValue);
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState(
    !initValue.length && required ? "Заполните данное поле" : ""
  );

  const onChangeValue = (text: string) => {
    setValue(text);
    if (text.length < minLength) {
      setError(`Введите минимум ${minLength} символов`);
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
    if (confirmedValue && value !== confirmedValue && confirmingErrorMessage) {
      setIsValid(false);
      setError(confirmingErrorMessage);
    }
  };

  // useEffect(() => {
  //   if (confirmedValue && value !== confirmedValue && confirmingErrorMessage) {
  //     setIsValid(false);
  //     setError(confirmingErrorMessage);
  //   }
  // }, [value]);

  return [value, onChangeValue, isValid, error];
};
