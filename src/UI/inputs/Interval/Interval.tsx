import { View } from "react-native";
import { intervalInputStyles } from "./styles";
import { IIntervalInputProps } from "./types";
import withLabelAndError from "../../../components/HOC/WithLabelAndError/WithLabelAndError";
import InputField from "../Input/InputField";

const IntervalInput = withLabelAndError<IIntervalInputProps>(
  ({
    firstPlaceholder,
    secondPlaceholder,
    firstValue,
    secondValue,
    onFirstValueChange,
    onSecondValueChange,
    setIsFocused,
    setErrorShown,
    ...inputProps
  }) => {
    return (
      <View style={intervalInputStyles.container}>
        <InputField
          value={firstValue}
          placeholder={firstPlaceholder || "От"}
          onChangeText={onFirstValueChange}
          flexed
          setErrorShown={undefined}
          setIsFocused={setIsFocused}
          {...inputProps}
        />
        <InputField
          value={secondValue}
          setIsFocused={setIsFocused}
          setErrorShown={setErrorShown}
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
