import { Pressable, TextInput, View } from "react-native";
import { IInputProps } from "./types";
import { inputStyles } from "./styles";
import { BLUE, GREY_DARK, WHITE } from "../../../consts/colors";
import { FC } from "react";
import { TWithLabelChildrenProps } from "../../../components/hoc/WithLabel/types";
import { SvgXml } from "react-native-svg";
import { cancelSvg } from "../../../assets/svg/cancel";

const InputField: FC<
  IInputProps & Pick<TWithLabelChildrenProps, "setIsFocused">
> = ({
  value,
  onChangeText,
  setIsFocused,
  flexed,
  ...props
}) => {
  const clearInput = () => onChangeText("");
  return (
    <View style={[inputStyles.container, flexed && { flex: 1 }]}>
      <TextInput
        style={inputStyles.input}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholderTextColor={GREY_DARK}
        selectionColor={BLUE}
        value={value}
        onChangeText={onChangeText}
        returnKeyType="done"
        returnKeyLabel="Готово"
        {...props}
      />
      {value && (
        <Pressable style={inputStyles.clearInputButton} onPress={clearInput}>
          <View style={inputStyles.clearInputCircle}>
            <SvgXml xml={cancelSvg(WHITE)} width={8} height={8} />
          </View>
        </Pressable>
      )}
    </View>
  );
};

export default InputField;
