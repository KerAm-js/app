import { Text, TextInput, View } from "react-native";
import { intervalInputStyles } from "./styles";
import { FC, useState } from "react";
import { BLUE, GREY_DARK } from "../../../consts/colors";
import { TIntervalInputProps } from "./types";
import withLabel from "../../../hoc/WithLabel/WithLabel";
import InputField from "../Input/InputField";

const IntervalInput = withLabel<TIntervalInputProps>(
  ({ placeholders, values, onChangeTextHandlers, keyboardType, setIsFocused }) => {
    return (
      <View style={intervalInputStyles.container}>
        <View style={intervalInputStyles.inputsContainer}>
          <InputField
            value={values.from}
            setIsFocused={setIsFocused}
            placeholder={placeholders?.from || "от"}
            onChangeText={onChangeTextHandlers.from}
            keyboardType={keyboardType}
            flexed
          />
          <InputField
            value={values.to}
            setIsFocused={setIsFocused}
            placeholder={placeholders?.to || "до"}
            onChangeText={onChangeTextHandlers.to}
            keyboardType={keyboardType}
            flexed
          />
        </View>
      </View>
    );
  }
);

export default IntervalInput;
