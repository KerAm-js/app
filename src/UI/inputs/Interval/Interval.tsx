import { Text, View } from "react-native";
import { intervalInputStyles } from "./styles";
import { IIntervalInputProps } from "./types";
import withLabelAndError from "../../../components/hoc/WithLabelAndError/WithLabelAndError";
import InputField from "../Input/InputField";
import { useState } from "react";

const IntervalInput = withLabelAndError<IIntervalInputProps>(
  ({
    firstPlaceholder,
    secondPlaceholder,
    firstValue,
    secondValue,
    onFirstValueChange,
    onSecondValueChange,
    setIsFocused,
    ...inputProps
  }) => {
    return (
      <View style={intervalInputStyles.container}>
        <InputField
          value={firstValue}
          setIsFocused={setIsFocused}
          placeholder={firstPlaceholder || "от"}
          onChangeText={onFirstValueChange}
          flexed
          {...inputProps}
        />
        <InputField
          value={secondValue}
          setIsFocused={setIsFocused}
          placeholder={secondPlaceholder || "до"}
          onChangeText={onSecondValueChange}
          flexed
          {...inputProps}
        />
      </View>
    );
  }
);

export default IntervalInput;
