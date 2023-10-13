import { Pressable, Text, TextInput, View } from "react-native";
import { IInputProps } from "./types";
import { inputStyles } from "./styles";
import { BLUE, GREY_DARK, RED, WHITE } from "../../../consts/colors";
import { FC, useState } from "react";
import { TWithLabelChildrenProps } from "../../../components/hoc/WithLabel/types";
import { SvgXml } from "react-native-svg";
import { cancelSvg } from "../../../assets/svg/cancel";

const InputField: FC<
  IInputProps & Pick<TWithLabelChildrenProps, "setIsFocused">
> = ({ value, onChangeText, setIsFocused, flexed, error, ...props }) => {
  const clearInput = () => onChangeText("");
  const [errorShown, setErrorShown] = useState(false);

  const onFocus = () => setIsFocused(true);

  const onBlur = () => {
    setIsFocused(false);
    setErrorShown(true);
  };

  return (
    <View>
      <View
        style={[
          inputStyles.container,
          flexed && { flex: 1 },
          errorShown && !!error && { borderColor: RED },
        ]}
      >
        <TextInput
          style={inputStyles.input}
          onFocus={onFocus}
          onBlur={onBlur}
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
      {errorShown && !!error && <Text style={inputStyles.error}>{error}</Text>}
    </View>
  );
};

export default InputField;
