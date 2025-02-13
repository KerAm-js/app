import { Pressable, TextInput, View } from "react-native";
import { SvgXml } from "react-native-svg";
import { searchSvg } from "../../../assets/svg/search";
import { GREY_DARK } from "../../../consts/colors";
import { searchBarStyles } from "./styles";
import { FC, useRef } from "react";
import { TSearchBarProps } from "./types";

const SearchBar: FC<TSearchBarProps> = ({
  value,
  onChangeText,
  placeholder,
  keyboardType,
}) => {
  const inputRef = useRef<TextInput | null>(null);
  return (
    <Pressable
      style={searchBarStyles.container}
      onPress={() => {
        inputRef.current?.focus();
      }}
    >
      <View style={searchBarStyles.inputContainer}>
        <SvgXml xml={searchSvg(GREY_DARK)} width={20} height={20} />
        <TextInput
          ref={inputRef}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={GREY_DARK}
          keyboardType={keyboardType}
          style={searchBarStyles.input}
        />
      </View>
    </Pressable>
  );
};

export default SearchBar;
