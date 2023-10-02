import { TextInput, View } from "react-native";
import { TInputProps } from "./types";
import { inputStyles } from "./styles";
import { BLUE, GREY_DARK } from "../../../consts/colors";
import { FC } from "react";
import { TWithLabelChildrenProps } from "../WithLabel/types";

const InputField: FC<
  TInputProps & Pick<TWithLabelChildrenProps, "setIsFocused">
> = ({
  value,
  onChangeText,
  placeholder,
  keyboardType,
  setIsFocused,
  flexed,
}) => {
  return (
    <View style={[inputStyles.container, flexed && { flex: 1 }]}>
      <TextInput
        style={inputStyles.input}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        placeholderTextColor={GREY_DARK}
        selectionColor={BLUE}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default InputField;
