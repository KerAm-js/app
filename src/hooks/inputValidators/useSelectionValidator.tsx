import { useEffect, useState } from "react";
import { TSelectionValidator } from "./types";

export const useSelectionValidator: TSelectionValidator = ({
  initValue,
  required,
}) => {
  const [value, setValue] = useState<Array<string>>([]);
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState(
    !initValue && required ? "Заполните данное поле" : ""
  );

  const selectItem = (selectedItem: string) => {
    setValue((value) => [...value, selectedItem]);
  };

  const unselectItem = (unselectedItem: string) => {
    setValue((value) => value.filter((item) => unselectedItem !== item));
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
