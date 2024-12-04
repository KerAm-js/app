import { useEffect, useState } from "react";
import { TIntervalValidator } from "./types";
import { validateValue } from "../lib/validateValue";

export const useIntervalValidator: TIntervalValidator = (props) => {
  const {
    firstInitValue,
    secondInitValue,
    requiredBothOrNone,
    ...validationParams
  } = props || {};

  const [firstValue, setFirstValue] = useState("");
  const [isFirstValueValid, setIsFirstValueValid] = useState(true);
  const [secondValue, setSecondValue] = useState("");
  const [isSecondValueValid, setIsSecondValueValid] = useState(true);
  const [firstError, setFirstError] = useState("");
  const [secondError, setSecondError] = useState("");

  const validateRequiredBothOrNone = (firstText: string, secondText: string) => {
    if (!requiredBothOrNone) return;
    if (!!firstText && !secondText) {
      setIsSecondValueValid(false);
      setSecondError("Заполните оба поля");
    } else if (!firstText && !!secondText) {
      setIsFirstValueValid(false);
      setFirstError("Заполните оба поля");
    }
  };

  const onChangeFirstValue = (text: string) => {
    setFirstValue(text);
    let validationError = validateValue({
      validationParams,
      text,
    });
    if (validationError) {
      setFirstError(validationError);
      setIsFirstValueValid(false);
    } else {
      setFirstError("");
      setIsFirstValueValid(true);
      validateRequiredBothOrNone(text, secondValue);
    }
  };

  const onChangeSecondValue = (text: string) => {
    setSecondValue(text);
    let validationError = validateValue({
      validationParams,
      text,
    });
    if (validationError) {
      setSecondError(validationError);
      setIsSecondValueValid(false);
    } else {
      setSecondError("");
      setIsSecondValueValid(true);
      validateRequiredBothOrNone(firstValue, text);
    }
  };

  useEffect(() => {
    if (firstInitValue) onChangeFirstValue(firstInitValue);
    if (secondInitValue) onChangeSecondValue(secondInitValue);
  }, []);

  return [
    firstValue,
    secondValue,
    onChangeFirstValue,
    onChangeSecondValue,
    isFirstValueValid,
    isSecondValueValid,
    firstError,
    secondError
  ];
};
