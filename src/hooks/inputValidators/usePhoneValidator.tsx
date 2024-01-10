import { useState } from "react";
import { TInputValidator } from "./types";

export const usePhoneValidator: TInputValidator = (props) => {
  const {initValue, required} = props || {}; 
  const [value, setValue] = useState(initValue || '');
  const [isValid, setIsValid] = useState(!!initValue);
  const [error, setError] = useState(
    !initValue && required ? "Заполните данное поле" : ""
  );

  const onChangeValue = (text: string) => {
    const phone = text.replaceAll(/[^\d]/g, "");
    if (text.length < value.length) {
      setValue(text);
    } else if (phone.length === 1) {
      setValue("+7 ");
    } else if (phone.length <= 4) {
      setValue(`+7 ${phone.slice(1, 4)}`);
    } else if (phone.length <= 7) {
      setValue(`+7 ${phone.slice(1, 4)} ${phone.slice(4)}`);
    } else if (phone.length <= 9) {
      setValue(
        `+7 ${phone.slice(1, 4)} ${phone.slice(4, 7)}-${phone.slice(7)}`
      );
    } else if (phone.length <= 11) {
      setValue(
        `+7 ${phone.slice(1, 4)} ${phone.slice(4, 7)}-${phone.slice(
          7,
          9
        )}-${phone.slice(9)}`
      );
    }
    if (phone.length === 11) {
      setIsValid(true);
      setError("");
    } else if (text.length === 0 && required) {
      setIsValid(false);
      setError("Заполните данное поле");
    } else {
      setIsValid(false);
      setError("Телефон должен содержать 11 цифр");
    }
  };

  return [value, onChangeValue, isValid, error];
};
