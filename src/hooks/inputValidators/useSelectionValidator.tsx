import { useCallback, useEffect, useState } from "react";
import { TSelectionValidatorProps, TSelectionValidatorReturn } from "./types";

export function useSelectionValidator<T>({
  initValue,
  required,
  multySelection,
}: TSelectionValidatorProps<T>): TSelectionValidatorReturn<T> {
  const [value, setValue] = useState<T[]>(initValue || []);
  const [isValid, setIsValid] = useState(!(!initValue?.length && required));
  const [error, setError] = useState(
    !initValue?.length && required ? "Заполните данное поле" : ""
  );

  const selectItem = useCallback((selectedItem: T) => {
    if (multySelection) {
      setValue((value) => [...value, selectedItem]);
    } else {
      setValue([selectedItem]);
    }
  }, []);

  const unselectItem = useCallback((unselectedItem: T) => {
    if (multySelection) {
      setValue((value) => value.filter((item) => unselectedItem !== item));
    } else {
      setValue([]);
    }
  }, []);

  const unselectAll = useCallback(() => setValue([]), []);

  const setInitial = useCallback(() => {
    setValue(initValue || []);
    setIsValid(!(!initValue?.length && required));
    setError(!initValue?.length && required ? "Заполните данное поле" : "");
  }, [initValue, required]);

  useEffect(() => {
    if (required && value.length === 0) {
      setIsValid(false);
      setError("Заполните данное поле");
    } else {
      setIsValid(true);
      setError("");
    }
  }, [value]);

  return [
    value,
    selectItem,
    unselectItem,
    unselectAll,
    isValid,
    error,
    setInitial,
  ];
}
