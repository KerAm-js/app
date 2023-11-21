import { FC } from "react";
import { Pressable, Text, View } from "react-native";
import { TSheetButtonProps } from "./types";
import { bottomSheetStyles } from "./styles";
import { BLUE, RED } from "../../consts/colors";

const SheetButton: FC<TSheetButtonProps> = ({ type, title, onPress }) => {
  return (
    <Pressable
      style={[
        bottomSheetStyles.sheetButton,
        type === "accent" && { paddingTop: 15, paddingBottom: 15 },
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          bottomSheetStyles.sheetButtonTitle,
          {
            color: type === "destructive" ? RED : BLUE,
            fontFamily: type === "accent" ? "Gilroy-Semibold" : "Gilroy-Medium",
          },
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
};

export default SheetButton;
