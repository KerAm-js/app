import { Text, TextInput, View } from "react-native";
import { TInputProps } from "./types";
import { inputStyles } from "./styles";
import { useState } from "react";

const Input = ({ value, valueSetter, label }: TInputProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  return (
    <View style={inputStyles.container}>
      <Text
        style={inputStyles.label}
      >
        {label}
      </Text>
      <TextInput
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        value={value}
        onChangeText={valueSetter}
        style={[inputStyles.input, isFocused && { shadowOpacity: 0.1 }]}
      />
    </View>
  );
};

export default Input;
