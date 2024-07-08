import { useEffect, useState } from "react";
import { TPhoneInputValidator } from "./types";
import { toPhoneFormat } from "../../helpers/toPhoneFormat";

export const usePhoneValidator: TPhoneInputValidator = (props) => {
  const { initValue, required } = props || {};
  const [value, setValue] = useState(toPhoneFormat(initValue || ""));
  const [number, setNumber] = useState(initValue || "");
  const [isValid, setIsValid] = useState(initValue?.length === 11 || false);

  const [error, setError] = useState(
    !initValue?.length && required ? "Заполните данное поле" : ""
  );

  const validateNumber = (number: string) => {
    if (number.length === 11) {
      setIsValid(true);
      setError("");
    } else if (number.length === 0 && required) {
      setIsValid(false);
      setError("Заполните данное поле");
    } else {
      setIsValid(false);
      setError("Телефон должен содержать 11 цифр");
    }
  };

  const onChangeValue = (text: string) => {
    let newNumber = number + text[text.length - 1];
    if (text.length < value.length) {
      newNumber = number.slice(0, -1);
      setNumber(newNumber);
    } else {
      setNumber(text.length === 1 ? "7" : newNumber);
    }
    setValue(toPhoneFormat(newNumber));
    validateNumber(newNumber);
  };

  const setInitial = () => {
    setValue(initValue || "");
    setIsValid(required ? !!initValue?.length : false);
    setError(!initValue?.length && required ? "Заполните данное поле" : "");
  };

  return [value, onChangeValue, isValid, error, setInitial, number];
};
