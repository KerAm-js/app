import { Text, View } from "react-native";
import { TWithLabelProps, TWithLabelChildrenProps } from "./types";
import { withLabelStyles } from "./styles";
import React, { ComponentType, FC, useState } from "react";
import { BLUE } from "../../consts/colors";

function withLabel<T>(
  Component: ComponentType<
    T & TWithLabelChildrenProps
  >
) {
  return (hocProps: T & TWithLabelProps) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    return (
      <View style={withLabelStyles.container}>
        <Text style={[withLabelStyles.label, isFocused && { color: BLUE }]}>
          {hocProps.label}
        </Text>
        <Component
          {...hocProps}
          isFocused={isFocused}
          setIsFocused={setIsFocused}
        />
      </View>
    );
  };
}

export default withLabel;
