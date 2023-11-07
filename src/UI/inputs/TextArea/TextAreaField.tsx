import { TextInput, View } from "react-native";
import { BLUE, GREY_DARK, RED } from "../../../consts/colors";
import { FC } from "react";
import { TWithLabelAndErrorChildrenProps } from "../../../components/HOC/WithLabelAndError/types";
import { TTextAreaProps } from "./types";
import { textAreaStyles } from "./styles";

const TextAreaField: FC<TTextAreaProps & TWithLabelAndErrorChildrenProps> = ({
  value,
  onChangeText,
  placeholder,
  keyboardType,
  setIsFocused,
  setErrorShown,
  errorShown,
}) => {
  const onFocus = () => setIsFocused && setIsFocused(true);

  const onBlur = () => {
    setIsFocused &&setIsFocused(false);
    setErrorShown && setErrorShown(true);
  };
  return (
    <View
      style={[textAreaStyles.container, errorShown && { borderColor: RED }]}
    >
      <TextInput
        style={textAreaStyles.input}
        onFocus={onFocus}
        onBlur={onBlur}
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
