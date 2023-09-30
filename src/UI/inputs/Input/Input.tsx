import { Text, TextInput, View } from "react-native";
import { TInputProps } from "./types";
import { inputStyles } from "./styles";
import { useState } from "react";
import { BLUE, GREY_DARK } from "../../../consts/colors";

const Input = ({ value, valueSetter, label, placeholder }: TInputProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  return (
    <View style={inputStyles.container}>
      <Text
        style={[inputStyles.label, isFocused && { color: BLUE }]}
      >
        {label}
      </Text>
      <TextInput
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        placeholderTextColor={GREY_DARK}
        selectionColor={BLUE}
        value={value}
        onChangeText={valueSetter}
        style={[inputStyles.input]}
      />
    </View>
  );
};

export default Input;
