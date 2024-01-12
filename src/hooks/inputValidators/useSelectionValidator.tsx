import { useEffect, useState } from "react";
import { TSelectionValidator } from "./types";

export const useSelectionValidator: TSelectionValidator = ({
  initValue,
  required,
  multySelection,
}) => {
  const [value, setValue] = useState<Array<string>>(initValue || []);
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState(
    !initValue && required ? "Заполните данное поле" : ""
  );

  const selectItem = (selectedItem: string) => {
    if (multySelection) {
      setValue((value) => [...value, selectedItem]);
    } else {
      setValue([selectedItem]);
    }
  };

  const unselectItem = (unselectedItem: string) => {
    if (multySelection) {
      setValue((value) => value.filter((item) => unselectedItem !== item));
    } else {
      setValue([]);
    }
  };

  const unselectAll = () => setValue([]);

  useEffect(() => {
    if (required && value.length === 0) {
      setIsValid(false);
      setError("Заполните данное поле");
    } else {
      setIsValid(true);
      setError("");
    }
  }, [value]);

  return [value, selectItem, unselectItem, unselectAll, isValid, error];
};
