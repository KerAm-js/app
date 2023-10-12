import { TextInput, View } from "react-native";
import { BLUE, GREY_DARK, WHITE } from "../../../consts/colors";
import { FC } from "react";
import { TWithLabelChildrenProps } from "../../../components/hoc/WithLabel/types";
import { TTextAreaProps } from "./types";
import { textAreaStyles } from "./styles";

const TextAreaField: FC<
TTextAreaProps & Pick<TWithLabelChildrenProps, "setIsFocused">
> = ({
  value,
  onChangeText,
  placeholder,
  keyboardType,
  setIsFocused,
}) => {
  return (
    <View style={[textAreaStyles.container]}>
      <TextInput
        style={textAreaStyles.input}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        placeholderTextColor={GREY_DARK}
        selectionColor={BLUE}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        multiline
        returnKeyType="done"
        returnKeyLabel="Готово"
      />
    </View>
  );
};

export default TextAreaField;
