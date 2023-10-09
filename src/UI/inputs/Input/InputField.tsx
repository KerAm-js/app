import { Pressable, TextInput, View } from "react-native";
import { TInputProps } from "./types";
import { inputStyles } from "./styles";
import { BLUE, GREY_DARK, WHITE } from "../../../consts/colors";
import { FC } from "react";
import { TWithLabelChildrenProps } from "../../../hoc/WithLabel/types";
import { SvgXml } from "react-native-svg";
import { cancelSvg } from "../../../assets/svg/cancel";

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
  const clearInput = () => onChangeText("");
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
      <Pressable style={inputStyles.clearInputButton} onPress={clearInput}>
        <View style={inputStyles.clearInputCircle}>
          <SvgXml xml={cancelSvg(WHITE)} width={8} height={8} />
        </View>
      </Pressable>
    </View>
  );
};

export default InputField;
