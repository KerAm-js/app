import { View } from "react-native";
import { intervalInputStyles } from "./styles";
import { IIntervalInputProps } from "./types";
import withLabelAndError from "../../../components/HOC/WithLabelAndError/WithLabelAndError";
import InputField from "../Input/InputField";
import { useEffect, useState } from "react";

const IntervalInput = withLabelAndError<IIntervalInputProps>(
  ({
    firstPlaceholder,
    secondPlaceholder,
    firstValue,
    secondValue,
    onFirstValueChange,
    onSecondValueChange,
    isFirstFieldInvalid,
    isSecondFieldInvalid,
    setIsFocused,
    setErrorShown,
    errorShown,
    ...inputProps
  }) => {
    const [isFirstInputFocused, setIsFirstInputFocused] = useState(false);
    const [isSecondInputFocused, setIsSecondInputFocused] = useState(false);
    const [isFirstInputErrorShown, setIsFirstInputErrorShown] = useState(false);
    const [isSecondInputErrorShown, setIsSecondInputErrorShown] =
      useState(false);

    const setFirstInputFocused = (value: boolean) => {
      setIsFirstInputFocused(value);
      setIsFocused && setIsFocused(value);
    };

    const setSecondInputFocused = (value: boolean) => {
      setIsSecondInputFocused(value);
      setIsFocused && setIsFocused(value);
    };

    const setFirstInputErrorShown = (value: boolean) => {
      setIsFirstInputErrorShown(value);
      setErrorShown && setErrorShown(value);
    };

    const setSecondInputErrorShown = (value: boolean) => {
      setIsSecondInputErrorShown(value);
      setErrorShown && setErrorShown(value);
    };

    useEffect(() => {
      if (
        errorShown &&
        setErrorShown &&
        isSecondInputFocused &&
        !isSecondInputErrorShown
      ) {
        setErrorShown(false);
      }
    }, [isSecondInputFocused]);

    useEffect(() => {
      if (
        errorShown &&
        setErrorShown &&
        isFirstInputFocused &&
        !isFirstInputErrorShown
      ) {
        setErrorShown(false);
      }
    }, [isFirstInputFocused]);

    return (
      <View style={intervalInputStyles.container}>
        <InputField
          value={firstValue}
          placeholder={firstPlaceholder || "От"}
          onChangeText={onFirstValueChange}
          flexed
          setErrorShown={setFirstInputErrorShown}
          setIsFocused={setFirstInputFocused}
          errorShown={errorShown && isFirstFieldInvalid}
          {...inputProps}
        />
        <InputField
          value={secondValue}
          setIsFocused={setSecondInputFocused}
          setErrorShown={setSecondInputErrorShown}
          placeholder={secondPlaceholder || "до"}
          onChangeText={onSecondValueChange}
          flexed
          errorShown={errorShown && isSecondFieldInvalid}
          {...inputProps}
        />
      </View>
    );
  }
);

export default IntervalInput;
