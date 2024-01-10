import { Pressable, TextInput, View } from "react-native";
import { IInputProps } from "./types";
import { inputStyles } from "./styles";
import {
  BLUE,
  GREY_DARK,
  RED,
  WHITE,
} from "../../../consts/colors";
import { FC, useState } from "react";
import { TWithLabelAndErrorChildrenProps } from "../../../components/HOC/WithLabelAndError/types";
import { SvgXml } from "react-native-svg";
import { cancelSvg } from "../../../assets/svg/cancel";
import { eyeSvg } from "../../../assets/svg/eye";
import { eyeSlashSvg } from "../../../assets/svg/eyeSlash";

const InputField: FC<IInputProps & TWithLabelAndErrorChildrenProps> = ({
  value,
  onChangeText,
  setIsFocused,
  errorShown,
  setErrorShown,
  flexed,
  secureTextEntry,
  ...props
}) => {
  const clearInput = () => onChangeText("");
  const [isTextSecure, setIsTextSecure] = useState(secureTextEntry);

  const onFocus = () => setIsFocused && setIsFocused(true);

  const onBlur = () => {
    setIsFocused && setIsFocused(false);
    setErrorShown && setErrorShown(true);
  };

  const toggleTextSecurity = () => {
    setIsTextSecure(!isTextSecure);
  };

  return (
    <View
      style={[
        inputStyles.container,
        flexed && { flex: 1 },
        errorShown && { borderColor: RED },
      ]}
    >
      <TextInput
        style={[
          inputStyles.input,
          props.editable === false && { color: GREY_DARK },
        ]}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholderTextColor={GREY_DARK}
        selectionColor={BLUE}
        value={value}
        onChangeText={onChangeText}
        returnKeyType="done"
        returnKeyLabel="Готово"
        secureTextEntry={isTextSecure}
        {...props}
      />
      {value &&
        (secureTextEntry === undefined ? (
          <Pressable style={inputStyles.clearInputButton} onPress={clearInput}>
            <View style={inputStyles.clearInputCircle}>
              <SvgXml xml={cancelSvg(WHITE)} width={8} height={8} />
            </View>
          </Pressable>
        ) : (
          <Pressable
            style={inputStyles.clearInputButton}
            onPress={toggleTextSecurity}
          >
            <SvgXml
              xml={isTextSecure ? eyeSlashSvg(GREY_DARK) : eyeSvg(GREY_DARK)}
              width={16}
              height={16}
            />
          </Pressable>
        ))}
    </View>
  );
};

export default InputField;
